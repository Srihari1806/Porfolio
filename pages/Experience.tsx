import React from 'react';
import Navbar from '../components/Navbar';
import { EXPERIENCE } from '../constants';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white pt-20">
      <Navbar />
      <div className="py-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Career Journey</h1>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {EXPERIENCE.map((item, index) => (
            <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-600 bg-slate-900 group-hover:bg-[#E50914] group-hover:border-[#E50914] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-300">
                {item.type === 'work' ? <FaBriefcase className="w-4 h-4" /> : <FaGraduationCap className="w-4 h-4" />}
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#1f1f1f] p-6 rounded-lg border border-slate-800 shadow-lg hover:border-[#E50914] transition-all duration-300 group-hover:scale-[1.02]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  <time className="font-medium text-[#E50914] text-sm whitespace-nowrap bg-red-900/20 px-2 py-0.5 rounded">{item.date}</time>
                </div>
                <div className="text-indigo-400 text-sm font-medium mb-3">{item.company}</div>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Star at the end */}
        <div className="flex justify-center mt-12 relative z-10">
             <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center border-4 border-[#141414] animate-pulse">
                <FaStar className="text-white w-5 h-5" />
             </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;