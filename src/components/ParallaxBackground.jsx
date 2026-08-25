import React, { useEffect, useRef, useState, useCallback } from 'react';


const ParallaxBackground = ({ 
  children,
  images = [], // Array of image URLs to create parallax layers
  speeds = [], // Array of speeds for each layer (0-1)
  opacities = [], // Array of opacities for each layer (0-1)
  className = ''
}) => {
  const backgroundsRef = useRef([]);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);


  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  useEffect(() => {
    // Optimize scroll handling for performance
    let ticking = false;
    
    const updateParallax = () => {
      const scrollY = window.scrollY;
      const scrollPercent = scrollY / Math.max(document.body.scrollHeight - windowHeight, 1);
      
      backgroundsRef.current.forEach((bg, index) => {
        if (!bg) return;
        
        // Vertical parallax effect
        const yPos = -scrollY * (speeds[index] || 0.5);
        
        // Add subtle horizontal movement based on scroll position
        const xPos = (scrollPercent * windowWidth * 0.05) * (index % 2 === 0 ? 1 : -1);
        
        // Apply scale effect for depth
        const scale = 1 + (scrollPercent * 0.1) * (index % 2 === 0 ? 1 : -1);
        
        bg.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale})`;
      });
      
      ticking = false;
    };
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position
    updateParallax();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speeds, windowHeight, windowWidth]);
  
  return (
    <div 
      className={`fixed inset-0 z-[-1] overflow-hidden ${className}`}
    >
      {/* Parallax background layers */}
      {images.map((image, index) => (
        <div 
          key={`parallax-layer-${index}`}
          ref={el => backgroundsRef.current[index] = el}
          className="absolute inset-0 w-full h-full transition-transform duration-300"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: opacities[index] || 1,
            zIndex: -10 - index,
            willChange: 'transform',
            transformOrigin: 'center center'
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;