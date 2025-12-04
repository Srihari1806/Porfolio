import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-slate-800" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}>
                
                {/* Dot */}
                <div className="absolute left-[-8px] md:left-1/2 md:translate-x-[-50%] w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 z-10" />

                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right">
                  {index % 2 === 0 ? (
                    <div className="hidden md:block">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <h4 className="text-indigo-400 font-medium mb-2">{exp.company}</h4>
                        <span className="inline-block px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-400 border border-slate-800 mb-3">{exp.date}</span>
                        <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ) : (
                    // Mobile view for even items (rendered on right for desktop)
                    <div className="md:pl-12 md:text-left">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <h4 className="text-indigo-400 font-medium mb-2">{exp.company}</h4>
                        <span className="inline-block px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-400 border border-slate-800 mb-3">{exp.date}</span>
                        <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  )}
                </div>

                <div className="w-full md:w-1/2 pl-8 md:pl-12 md:text-left">
                    {index % 2 !== 0 ? (
                         <div className="hidden md:block">
                            {/* Empty for layout balance */}
                         </div>
                    ) : (
                        // Mobile view for odd items (rendered here for desktop to match reverse flex)
                        <div className="md:hidden">
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <h4 className="text-indigo-400 font-medium mb-2">{exp.company}</h4>
                            <span className="inline-block px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-400 border border-slate-800 mb-3">{exp.date}</span>
                            <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                        </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
