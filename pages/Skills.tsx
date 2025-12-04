import React from 'react';
import Navbar from '../components/Navbar';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Group skills by category
  const skillsByCategory = SKILLS.reduce((acc: any, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#141414] text-white pt-20">
      <Navbar />
      <div className="px-4 md:px-12 py-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Technical Proficiency</h1>

        <div className="space-y-12">
          {Object.keys(skillsByCategory).map((category, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h2 className="text-2xl font-bold mb-6 text-[#E50914] border-b border-gray-800 pb-2 inline-block">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skillsByCategory[category].map((skill: any, idx: number) => (
                  <div 
                    key={idx} 
                    className="bg-[#1f1f1f] p-4 rounded flex items-center justify-center text-center hover:bg-[#333] transition-colors duration-300 border border-transparent hover:border-gray-600"
                  >
                    <span className="text-lg font-medium text-gray-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
