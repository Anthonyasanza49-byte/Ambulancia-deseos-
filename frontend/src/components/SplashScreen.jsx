import { useState, useEffect, useRef } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const handleEnded = () => {
      setIsFading(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 800);
    };

    video.addEventListener('ended', handleEnded);

    const fallbackTimer = setTimeout(() => {
      if (isVisible) {
        setIsFading(true);
        setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 800);
      }
    }, 8000);

    return () => {
      video.removeEventListener('ended', handleEnded);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-[800ms] ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src="/splash-animation.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
