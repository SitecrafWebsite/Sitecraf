'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      renderer = new THREE.WebGLRenderer({ 
        canvas, 
        alpha: true, 
        antialias: true,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: true
      });
    } catch (e) {
      console.error('WebGL initialization failed:', e);
      return;
    }

    if (!renderer) return;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 600;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 1500 : 3000;
    const radius = 280;

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
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const onContextLost = (event: Event) => {
      event.preventDefault();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };

    const onContextRestored = () => {
      window.location.reload();
    };

    canvas.addEventListener('webglcontextlost', onContextLost, false);
    canvas.addEventListener('webglcontextrestored', onContextRestored, false);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Ensure layout is complete before initial resize
    setTimeout(handleResize, 0);

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

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute right-0 top-0 w-full h-full lg:w-[45%] md:w-[40%] z-0 pointer-events-none opacity-30 md:opacity-100" 
    />
  );
}
