'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import * as THREE from 'three';
import { HeroProps } from '@/types';

const defaultProps: HeroProps = {
  badge: "Website · AI Chatbot · Image Generation · Automation",
  headline: "We Build Websites & AI Tools That Grow Your Business",
  highlightWord: "Grow",
  subheadline: "Custom websites, platform migrations, AI chatbots, and image generation — built for Indian B2B brands that want a professional online presence without paying agency prices.",
  ctaPrimary: { label: "See Our Work →", href: "#case-studies" },
  ctaSecondary: { label: "Get a Free Quote", href: "#contact" },
  stats: [
    { value: "10+", label: "Projects Delivered" },
    { value: "3 Wks", label: "Avg. First Delivery" },
    { value: "100%", label: "IP Ownership Yours" },
    { value: "₹0", label: "Hidden Charges" }
  ]
};

export default function Hero(props: Partial<HeroProps>) {
  const {
    badge,
    headline,
    highlightWord,
    subheadline,
    ctaPrimary,
    ctaSecondary,
    stats
  } = { ...defaultProps, ...props };

  const [isMounted, setIsMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    const isWebGLAvailable = () => {
      try {
        const testCanvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    };

    if (!isWebGLAvailable()) {
      console.warn('WebGL is not available. 3D background disabled.');
      return;
    }

    try {
      renderer = new THREE.WebGLRenderer({ 
        canvas, 
        alpha: true, 
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch (e) {
      console.warn('WebGL initialization failed. 3D background disabled.', e);
      return;
    }

    if (!renderer) return;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 600;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 1500 : 3000;
    const radius = 269; // Increased by 20% from 224

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.2,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true
    });

    const sphere = new THREE.Points(geometry, material);
    scene.add(sphere);

    // Connection lines
    const linePositions = [];
    const connections = new Int32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      let connectionsCount = 0;
      for (let j = i + 1; j < particleCount; j++) {
        if (connectionsCount >= 3) break;
        if (connections[j] >= 3) continue;

        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < 45 * 45) {
          linePositions.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
          connectionsCount++;
          connections[j]++;
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15
    });
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      targetX = x;
      targetY = y;
    };

    const handleResize = () => {
      if (!canvasRef.current || !renderer) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const onContextLost = (event: Event) => {
      event.preventDefault();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };

    const onContextRestored = () => {
      // Logic to restore context if needed, or just reload
      window.location.reload();
    };

    canvas.addEventListener('webglcontextlost', onContextLost, false);
    canvas.addEventListener('webglcontextrestored', onContextRestored, false);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    handleResize();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      sphere.rotation.y += 0.0008;
      sphere.rotation.x += 0.0003;
      
      linesMesh.rotation.y = sphere.rotation.y;
      linesMesh.rotation.x = sphere.rotation.x;

      if (window.innerWidth >= 768) {
        sphere.rotation.y += (targetX - sphere.rotation.y) * 0.02;
        sphere.rotation.x += (targetY - sphere.rotation.x) * 0.02;
        linesMesh.rotation.y = sphere.rotation.y;
        linesMesh.rotation.x = sphere.rotation.x;
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      canvas.removeEventListener('webglcontextlost', onContextLost);
      canvas.removeEventListener('webglcontextrestored', onContextRestored);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      scene.clear();
    };
  }, []);

  const renderHeadline = () => {
    if (!highlightWord) return headline;
    const index = headline.indexOf(highlightWord);
    if (index === -1) return headline;
    
    return (
      <>
        {headline.substring(0, index)}
        <span className="text-[#b5ff3e]">{highlightWord}</span>
        {headline.substring(index + highlightWord.length)}
      </>
    );
  };

  const animClass = "anim-reveal";
  const stateClass = isMounted ? "is-visible" : "";

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-[calc(72px+2rem)] pb-16 px-6 overflow-hidden bg-[#000000]">
      <canvas 
        ref={canvasRef} 
        className="absolute right-0 top-0 w-full h-full lg:w-[45%] md:w-[40%] z-0 pointer-events-none" 
      />

      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[80%] max-w-none mx-auto">
        <div className="w-full lg:w-[60%] md:w-[65%] flex flex-col items-center md:items-start pr-0 md:pr-8">
          {/* Badge */}
          {badge && (
            <div
              className={`flex items-center gap-2 border border-[#b5ff3e]/[0.18] bg-[#b5ff3e]/[0.08] text-[#b5ff3e] text-[length:var(--text-xs)] uppercase tracking-[0.12em] px-4 py-1.5 rounded-full mb-8 ${animClass} ${stateClass}`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#b5ff3e] animate-pulse" />
              {badge}
            </div>
          )}

          {/* Headline */}
          <h1
            className={`font-[family-name:var(--font-display)] font-bold text-[length:calc(var(--text-3xl)*0.9)] text-[#e8e8f0] tracking-[-0.02em] leading-[1.15] ${animClass} ${stateClass}`}
            style={{ transitionDelay: '100ms' }}
          >
            {renderHeadline()}
          </h1>

          {/* Subheadline */}
          <p
            className={`font-[family-name:var(--font-body)] text-[length:calc(var(--text-base)*0.9)] text-[#8888a0] mt-6 leading-relaxed ${animClass} ${stateClass}`}
            style={{ transitionDelay: '200ms' }}
          >
            {subheadline}
          </p>

          {/* CTA Row */}
          <div
            className={`flex flex-wrap gap-4 justify-center md:justify-start mt-10 ${animClass} ${stateClass}`}
            style={{ transitionDelay: '300ms' }}
          >
            <Link
              href={ctaPrimary.href}
              className="flex items-center justify-center min-h-[48px] bg-[#b5ff3e] text-[#000000] font-semibold px-8 py-4 rounded-full hover:bg-[#c4ff66] hover:shadow-[var(--glow-md)] active:scale-95 active:bg-[#a3e635] transition-all duration-300 text-[length:var(--text-sm)]"
            >
              {ctaPrimary.label}
            </Link>
            <Link
              href={ctaSecondary.href}
              className="flex items-center justify-center min-h-[48px] border border-[#b5ff3e]/[0.18] text-[#b5ff3e] px-8 py-4 rounded-full hover:bg-[#b5ff3e]/[0.08] hover:shadow-[var(--glow-sm)] active:scale-95 transition-all duration-300 text-[length:var(--text-sm)]"
            >
              {ctaSecondary.label}
            </Link>
          </div>

          {/* Stats Row */}
          {stats && stats.length > 0 && (
            <div
              className={`grid grid-cols-2 md:flex md:flex-row items-center justify-center md:justify-start gap-8 md:gap-12 mt-16 pt-12 border-t border-white/[0.06] w-full ${animClass} ${stateClass}`}
              style={{ transitionDelay: '400ms' }}
            >
              {stats.map((stat, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center md:items-start">
                    <span className="font-[family-name:var(--font-display)] font-bold text-[#b5ff3e] text-2xl whitespace-nowrap">
                      {stat.value}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-[#8888a0] text-[length:var(--text-xs)] uppercase tracking-widest mt-1">
                      {stat.label}
                    </span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="hidden md:block w-px h-8 bg-white/[0.06]" />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
