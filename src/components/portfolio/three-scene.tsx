"use client";

import { useEffect, useRef } from "react";
import type * as Three from "three";

/**
 * A lightweight Three.js particle field rendered on a canvas behind the hero.
 *
 * Design decisions:
 *  - Pure Three.js (no R3F) to keep the bundle small and the API surface minimal.
 *  - Particles are tiny low-density points in a 3D volume, slowly drifting.
 *  - The scene reacts subtly to pointer position (parallax).
 *  - Paused when offscreen (IntersectionObserver) and on reduced-motion.
 *  - Color is derived from the --accent CSS variable so it adapts to the theme.
 */
export function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    let THREE: typeof Three;
    let scene: Three.Scene;
    let camera: Three.PerspectiveCamera;
    let renderer: Three.WebGLRenderer;
    let points: Three.Points;
    let raf = 0;
    let pointerX = 0;
    let pointerY = 0;
    let visible = true;

    const cleanup = async () => {
      cancelAnimationFrame(raf);
      if (points) {
        points.geometry.dispose();
        (points.material as Three.Material).dispose();
      }
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
      }
    };

    const init = async () => {
      THREE = await import("three");
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
      camera.position.z = 8;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Read theme accent color
      const accent = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      const accent2 = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent-2")
        .trim();

      const count = 600;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const sizes = new Float32Array(count);

      const c1 = new THREE.Color(accent || "#ffb86c");
      const c2 = new THREE.Color(accent2 || "#8be9fd");

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        // Spherical distribution
        const r = 4 + Math.random() * 4;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = r * Math.cos(phi) - 2;

        const mix = Math.random();
        const c = c1.clone().lerp(c2, mix);
        colors[i3] = c.r;
        colors[i3 + 1] = c.g;
        colors[i3 + 2] = c.b;

        sizes[i] = Math.random() * 0.05 + 0.01;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);

      const animate = () => {
        raf = requestAnimationFrame(animate);
        if (!visible) return;

        points.rotation.y += 0.0006;
        points.rotation.x += 0.0003;

        // Parallax based on pointer
        camera.position.x += (pointerX * 0.5 - camera.position.x) * 0.04;
        camera.position.y += (-pointerY * 0.5 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(animate);
    };

    void init();

    const onResize = () => {
      if (!renderer || !camera) return;
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const onPointer = (e: PointerEvent) => {
      pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      pointerY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible = entry.isIntersecting;
        }
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      void cleanup();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-60"
        style={{ display: "block" }}
      />
      {/* Subtle radial gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, var(--bg) 95%)",
        }}
      />
    </div>
  );
}
