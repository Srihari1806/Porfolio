import React from 'react';
import { PERSONAL_INFO } from '../constants';
import SkillsChart from './SkillsChart';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Engineering with a focus on <span className="text-indigo-400">User Experience</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {PERSONAL_INFO.about}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              My journey started when I built my first static website. Since then, I've dived deep into the JavaScript ecosystem, mastering React, Node.js, and cloud architecture. I believe in writing code that is not only functional but also clean, maintainable, and scalable.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                <span className="block text-3xl font-bold text-white mb-1">50+</span>
                <span className="text-sm text-slate-500">Projects Completed</span>
              </div>
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                <span className="block text-3xl font-bold text-white mb-1">100%</span>
                <span className="text-sm text-slate-500">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>

          <motion.div
             id="skills"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800 shadow-xl"
          >
            <h3 className="text-xl font-semibold text-center text-white mb-2">Technical Proficiency</h3>
            <SkillsChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
