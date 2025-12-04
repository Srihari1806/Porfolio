import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 font-medium text-sm">
            Available for freelance work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{PERSONAL_INFO.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 mb-6 font-light">
            {PERSONAL_INFO.role}
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a 
              href="#projects"
              className="px-8 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-3.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-medium flex items-center justify-center transition-all hover:bg-slate-800"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="h-6 w-6" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl -rotate-6 blur opacity-30" />
            <img 
              src="https://picsum.photos/600/600?grayscale" 
              alt="Profile" 
              className="relative w-full h-full object-cover rounded-3xl border-2 border-slate-700/50 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-slate-200">8+ Years Experience</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
