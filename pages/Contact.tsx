import React from 'react';
import Navbar from '../components/Navbar';
import { PERSONAL_INFO } from '../constants';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white pt-20 flex flex-col relative">
      <Navbar />
      
      <div className="flex-grow flex flex-col items-center justify-center px-4 text-center relative z-10">
        <div className="bg-black/80 p-8 md:p-16 rounded-lg border border-gray-800 max-w-2xl w-full backdrop-blur-sm animate-zoom-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl text-gray-400 mb-12">
            Always open to discussing new opportunities, creative collaborations, or just chatting about cinema and lyrics.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 bg-[#222] rounded-full flex items-center justify-center group-hover:bg-[#E50914] transition-colors duration-300">
                <FaEnvelope className="text-2xl" />
              </div>
              <span className="text-lg group-hover:text-[#E50914] transition-colors">Email Me</span>
            </a>
            
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 bg-[#222] rounded-full flex items-center justify-center group-hover:bg-[#0077b5] transition-colors duration-300">
                <FaLinkedin className="text-2xl" />
              </div>
              <span className="text-lg group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
            </a>

             <a href="#" className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 bg-[#222] rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <FaGithub className="text-2xl" />
              </div>
              <span className="text-lg group-hover:text-gray-300 transition-colors">GitHub</span>
            </a>
          </div>

          <div className="text-gray-500 text-sm border-t border-gray-800 pt-8">
            <p>Based in {PERSONAL_INFO.location}</p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop")' }}
      ></div>
    </div>
  );
};

export default Contact;
