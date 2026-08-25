import React, { useEffect, useRef, useState } from "react";



const ParallaxSection = ({
  backgroundImage,
  backgroundPosition = "center",
  backgroundSize = "cover",
  backgroundColor= "#673a37",
  overlayColor = "#673a377e",
  overlayGradient,
  shapeDivider = false,
  shapeColor = "#ffffff",
  height = "100vh",
  children,
  className = "",
  speed = 0.5, // Parallax speed factor
}) => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Optimize scroll handling for performance
    let ticking = false;
    
    const updateParallax = () => {
      const scrollPosition = window.pageYOffset;
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      const offset = (scrollPosition - sectionTop) * speed;
      section.style.backgroundPosition = `center ${offset}px`;
      
      ticking = false;
    };
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`relative ${className} flex items-center justify-center`}
      style={{
        height: isMobile ? 'auto' : height, // Use auto height on mobile to contain the image
        minHeight: isMobile ? 'auto' : 'auto', // Remove 100vh minimum height for mobile
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: isMobile ? 'contain' : backgroundSize, // Use contain on mobile to show full image, prop on desktop
        backgroundPosition: 'center center', // Ensure center positioning
        backgroundAttachment: isMobile ? 'scroll' : 'fixed', // Use scroll on mobile for full image display, fixed for parallax on desktop
        backgroundRepeat: 'no-repeat',
        overflow: "hidden",
      }}
    >
      {overlayGradient && (
        <div
          className="absolute inset-0"
          style={{ backgroundImage: overlayGradient }}
        />
      )}
      {!overlayGradient && overlayColor && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />
      )}
      <div className="relative z-10 h-full w-full">{children}</div>
      {shapeDivider && (
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-16 md:h-24"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill={shapeColor}
            d="M0,96L60,122.7C120,149,240,203,360,186.7C480,171,600,85,720,80C840,75,960,149,1080,176C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      )}
    </section>
  );
};

export default ParallaxSection;
