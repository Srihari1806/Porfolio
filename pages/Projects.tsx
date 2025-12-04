import React from 'react';
import Navbar from '../components/Navbar';
import { PROJECTS } from '../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white pt-20">
      <Navbar />
      <div className="px-4 md:px-12 py-10">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-[#181818] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/50">
              <div className="h-48 overflow-hidden relative group">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition"><FaGithub size={20} /></button>
                  <button className="bg-[#E50914] text-white p-3 rounded-full hover:bg-red-700 transition"><FaExternalLinkAlt size={20} /></button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techUsed.map((tech, idx) => (
                    <span key={idx} className="text-xs font-semibold px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
