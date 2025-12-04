import React from 'react';
import Navbar from '../components/Navbar';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { EXPERIENCE } from '../constants';
import { MdWork, MdSchool } from 'react-icons/md';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white pt-20">
      <Navbar />
      <div className="py-10">
        <h1 className="text-4xl font-bold mb-12 text-center">Career Journey</h1>
        
        <VerticalTimeline>
          {EXPERIENCE.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#1f1f1f', color: '#fff', borderTop: '3px solid #E50914' }}
              contentArrowStyle={{ borderRight: '7px solid  #1f1f1f' }}
              date={item.date}
              iconStyle={{ background: item.type === 'work' ? '#E50914' : '#0077b5', color: '#fff' }}
              icon={item.type === 'work' ? <MdWork /> : <MdSchool />}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-gray-400 mt-1">{item.company}</h4>
              <p className="!text-gray-300 !text-sm !font-normal mt-4">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;