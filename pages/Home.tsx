import React from 'react';
import Navbar from '../components/Navbar';
import { PERSONAL_INFO, PROJECTS, SKILLS } from '../constants';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-[80vh] w-full">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop')` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute bottom-[20%] left-4 md:left-12 max-w-2xl space-y-6 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white drop-shadow-lg">
            {PERSONAL_INFO.name.split(" ")[0]}
          </h1>
          <p className="text-2xl font-semibold text-gray-200 drop-shadow-md">
            {PERSONAL_INFO.role}
          </p>
          <p className="text-lg text-gray-300 line-clamp-3 drop-shadow-md max-w-xl">
            {PERSONAL_INFO.tagline}
          </p>
          
          <div className="flex gap-4 pt-4">
            <button 
              onClick={() => navigate('/projects')}
              className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded hover:bg-opacity-80 transition font-bold text-lg"
            >
              <FaPlay /> Projects
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="flex items-center gap-2 bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 rounded hover:bg-gray-500/50 transition font-bold text-lg backdrop-blur-sm"
            >
              <FaInfoCircle /> Contact Info
            </button>
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="px-4 md:px-12 pb-20 space-y-12 -mt-24 relative z-10">
        
        {/* Projects Row */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-100 hover:text-white cursor-pointer">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PROJECTS.map((project) => (
              <div 
                key={project.id}
                onClick={() => navigate('/projects')}
                className="relative h-40 md:h-48 bg-gray-800 rounded-md overflow-hidden cursor-pointer hover-scale group"
              >
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <div className="flex gap-2 mt-1 flex-wrap">
                    {project.techUsed.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="text-xs text-gray-300 border border-gray-500 px-1 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Row */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-100">Top Skills</h2>
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="min-w-[160px] h-24 bg-gray-900 border border-gray-800 rounded hover:bg-gray-800 transition flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-gray-600"
                onClick={() => navigate('/skills')}
              >
                <span className="font-medium text-center px-2">{skill.name}</span>
                <span className="text-xs text-gray-500 uppercase">{skill.category}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
