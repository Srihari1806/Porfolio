import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROFILES } from '../constants';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center animate-fade-in">
      <h1 className="text-3xl md:text-5xl text-white font-normal mb-12">Who's watching?</h1>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4">
        {PROFILES.map((profile) => (
          <div 
            key={profile.id} 
            className="group flex flex-col items-center gap-4 w-32 md:w-44 cursor-pointer"
            onClick={handleProfileClick}
          >
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-md overflow-hidden border-4 border-transparent group-hover:border-white transition-all duration-300">
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gray-500 group-hover:text-white text-lg md:text-xl transition-colors">
              {profile.name}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-16 border border-gray-500 text-gray-500 px-6 py-2 uppercase tracking-widest hover:border-white hover:text-white transition-colors">
        Manage Profiles
      </button>
    </div>
  );
};

export default Browse;
