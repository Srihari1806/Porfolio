import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/browse');
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
      <div className="text-red-600 text-6xl md:text-8xl font-black tracking-widest animate-pulse transform scale-110">
        PORTFOLIO
      </div>
    </div>
  );
};

export default Splash;
