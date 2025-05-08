
import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 10) + 5;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="w-32 h-32 mb-8 animate-pulse">
        <img 
          src="/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png" 
          alt="Swirl Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-64 h-2 bg-gray-200 rounded-full mb-2">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-gray-600 font-medium">{progress}%</span>
    </div>
  );
};

export default LoadingScreen;
