'use client';

import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';

export default function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const phiRef = useRef(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── FIX: Wait for layout to paint before reading size ───────
    const init = () => {
      const parent = canvas.parentElement;
      const w = parent?.offsetWidth || 600;
      const h = parent?.offsetHeight || 600;
      
      const isMobile = window.innerWidth < 768;
      const sizeMult = isMobile ? 0.65 : 1.3; // 1.3 * 0.5 = 0.65 (50% reduction)
      const size = Math.min(w, h, 700) * sizeMult;

      // Guard: if size is still 0 somehow, retry
      if (size < 10) {
        setTimeout(init, 100);
        return;
      }

      try {
        globeRef.current = createGlobe(canvas, {
          devicePixelRatio: Math.min(window.devicePixelRatio, 2),
          width: size * 2,
          height: size * 2,
          phi: 0,
          theta: 0.25,
          dark: 1,
          diffuse: 1.8,
          mapSamples: 16000,
          mapBrightness: 7,
          mapBaseBrightness: 0.02,
          baseColor: [0.12, 0.12, 0.12],
          glowColor: [0.71, 1, 0.24],
          markerColor: [0.71, 1, 0.24],
          markers: [
            { location: [28.61, 77.21], size: 0.07 },  // New Delhi
            { location: [19.07, 72.88], size: 0.05 },  // Mumbai
            { location: [51.51, -0.13], size: 0.04 },  // London
            { location: [40.71, -74.01], size: 0.04 }, // New York
            { location: [25.20, 55.27], size: 0.05 },  // Dubai
            { location: [1.35, 103.82], size: 0.04 },  // Singapore
          ],
          opacity: 0.92,
          scale: 1,
          offset: [0, 0],
          onRender: (state: Record<string, unknown>) => {
            state.phi = phiRef.current;
            phiRef.current += 0.003;
          },
        });
      } catch (e) {
        console.warn('COBE globe failed:', e);
        setTimeout(() => setFailed(true), 0);
      }
    };

    // requestAnimationFrame guarantees layout has painted
    const rafId = requestAnimationFrame(init);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      phiRef.current += (e.movementX / window.innerWidth) * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      globeRef.current?.destroy();
    };
  }, []);

  if (failed) {
    return (
      <div className="absolute right-0 top-0 w-full h-full lg:w-[45%] md:w-[40%] z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(181,255,62,0.08) 0%, transparent 70%)',
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute right-0 top-0 w-full h-full lg:w-[45%] md:w-[40%] z-0 pointer-events-none flex items-center justify-center opacity-40 md:opacity-100 overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{
          width: '130%',
          height: '130%',
          maxWidth: '910px',
          maxHeight: '910px',
          aspectRatio: '1 / 1',
        }}
      />
    </div>
  );
}
