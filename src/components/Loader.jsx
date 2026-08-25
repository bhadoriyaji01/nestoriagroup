import React, { useState, useEffect } from 'react';

const Loader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loader after a short time 
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 1000); // Reduced from 4000ms to 1000ms for faster loading

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  // If not loading, don't render anything
  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[99999] bg-white h-screen w-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;