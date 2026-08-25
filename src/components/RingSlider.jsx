"use client";

import React, { useState, useEffect, useRef } from "react";

export default function RingSlider({ images = [] }) {
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const startX = useRef(0);
  const startRotation = useRef(0);

  const hasImages = Array.isArray(images) && images.length > 0;
  const angle = hasImages ? 360 / images.length : 0;
  const radius = 700; // Increased radius for wider slider

  // Auto rotation
  useEffect(() => {
    if (!hasImages || isHovering || isDragging) return;
    
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [hasImages, isHovering, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    startRotation.current = rotation;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - startX.current;
    setRotation(startRotation.current + delta * 0.5);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  // Safety check for images render
  if (!hasImages) {
    return (
      <div className="relative w-full h-[520px] flex items-center justify-center overflow-hidden bg-slate-100 rounded-2xl">
        <p className="text-slate-500 font-semibold">No images provided to RingSlider</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-[600px] flex items-center justify-center overflow-hidden"
      ref={containerRef}
      style={{ perspective: '2000px' }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotation}deg)`
        }}
        onMouseDown={handleMouseDown}
        onMouseEnter={() => {
          console.log('Mouse entered - stopping rotation');
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          console.log('Mouse left - resuming rotation');
          setIsHovering(false);
        }}
        className="cursor-grab"
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              marginLeft: '-400px',
              marginTop: '-250px',
              width: '800px',
              height: '500px',
              transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
              transformStyle: 'preserve-3d'
            }}
            className="rounded-2xl shadow-2xl overflow-hidden bg-transparent"
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="max-w-full max-h-full object-contain"
                style={{ width: 'auto', height: 'auto' }}
                onError={(e) => {
                  console.error(`Image ${i} failed to load:`, img);
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}