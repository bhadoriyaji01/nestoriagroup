import React, { useState } from 'react';
// Removed Link import as we'll use a button instead

function FloatingVideoButton({ 
  videos = [{ src: 'https://youtu.be/PqInsYRqm3c?si=0s14lXFcaY8b8xDW', title: 'The Journey of Dholera Smart City India: 2016 to 2024 and Beyond | Nestoria Group' }],
  buttonText = 'Virtual Tour'
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const currentVideo = videos[currentVideoIndex];

  const openDialog = () => {
    setIsDialogOpen(true);
    // Reset to first video when opening dialog
    setCurrentVideoIndex(0);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isDialogOpen) return;
    
    switch (e.key) {
      case 'Escape':
        closeDialog();
        break;
      case 'ArrowRight':
        playNextVideo();
        break;
      case 'ArrowLeft':
        playPrevVideo();
        break;
      default:
        break;
    }
  };
  
  // Dialog ref for click outside detection
  const dialogRef = React.useRef(null);
  
  // Handle click outside to close dialog
  const handleClickOutside = (e) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target)) {
      closeDialog();
    }
  };
  
  // Add and remove event listeners
  React.useEffect(() => {
    if (isDialogOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      
      // Prevent body scrolling when dialog is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      
      // Restore body scrolling when dialog is closed
      document.body.style.overflow = 'auto';
    };
  }, [isDialogOpen, currentVideoIndex]);

  const playNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const playPrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  return (
    <div>
      <div 
        className="fixed bottom-8 left-8 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button 
          onClick={openDialog}
          className={`flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 ease-in-out ${isHovered ? 'w-auto px-6 bg-gradient-to-r from-blue-600 to-blue-800' : 'bg-blue-600 w-14'} h-14 button-animation hover:scale-105`}
        >
          <i className="fas fa-play-circle text-xl icon-pulse"></i>
          {isHovered && (
            <span className="ml-2 whitespace-nowrap text-fade-in">{buttonText}</span>
          )}
        </button>
      </div>

      {/* Video Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xs flex items-center justify-center z-[9999] p-4 md:p-6 animate-fade-in">
          <div ref={dialogRef} className="bg-white rounded-lg p-4 w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-gray-800 truncate pr-2">{currentVideo.title}</h3>
              <button 
                onClick={closeDialog}
                className="text-gray-500 hover:text-gray-800 text-2xl flex-shrink-0"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="w-full relative" style={{ paddingBottom: '56.25%' }}>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                </div>
              )}
              <iframe 
                className="absolute inset-0 w-full h-full rounded" 
                src={currentVideo.src.replace('youtu.be/', 'youtube.com/embed/').replace('?si=', '?').replace(/\?.*/, '?autoplay=1&rel=0')}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                key={currentVideo.src} // Force iframe reload when source changes
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>

            {videos.length > 1 && (
              <div className="mt-4">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <button 
                    onClick={playPrevVideo} 
                    disabled={currentVideoIndex === 0}
                    className={`px-4 py-2 rounded ${currentVideoIndex === 0 ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    <i className="fas fa-chevron-left mr-1"></i> Previous
                  </button>
                  
                  <span className="text-gray-700">{currentVideoIndex + 1} / {videos.length}</span>
                  
                  <button 
                    onClick={playNextVideo} 
                    disabled={currentVideoIndex === videos.length - 1}
                    className={`px-4 py-2 rounded ${currentVideoIndex === videos.length - 1 ? 'bg-gray-200 text-gray-500' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                  >
                    Next <i className="fas fa-chevron-right ml-1"></i>
                  </button>
                </div>
                
                <div className="mt-3 overflow-x-auto pb-2">
                  <div className="flex space-x-2">
                    {videos.map((video, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVideoIndex(index)}
                        className={`flex-shrink-0 p-1 rounded ${currentVideoIndex === index ? 'ring-2 ring-blue-600' : ''}`}
                      >
                        <div className="w-24 h-16 bg-gray-200 rounded flex items-center justify-center">
                          <i className="fas fa-play-circle text-gray-500"></i>
                        </div>
                        <p className="text-xs mt-1 w-24 truncate">{video.title}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(209,178,150,0.5); }
          50% { box-shadow: 0 0 20px rgba(209, 178, 150, 0.8); }
          100% { box-shadow: 0 0 5px rgba(209, 178, 150, 0.5); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateX(-10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        .button-animation {
          animation: glow 2s infinite;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .icon-pulse {
          display: inline-block;
          animation: pulse 1.5s infinite;
          transition: transform 0.3s ease;
        }
        
        .text-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      ` }} />
    </div>
  );
}

export default FloatingVideoButton;