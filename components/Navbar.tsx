import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBell } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-colors duration-300 px-4 md:px-12 py-4 flex items-center justify-between ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center gap-8">
        <Link to="/browse" className="text-red-600 text-2xl md:text-4xl font-bold tracking-tighter cursor-pointer uppercase">
          PORTFOLIO
        </Link>
        <ul className="hidden md:flex gap-6 text-sm text-gray-300">
          <li><Link to="/home" className="hover:text-white transition">Home</Link></li>
          <li><Link to="/projects" className="hover:text-white transition">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-white transition">Skills</Link></li>
          <li><Link to="/experience" className="hover:text-white transition">Experience</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
        </ul>
      </div>
      
      <div className="flex items-center gap-6 text-white">
        <FaSearch className="w-5 h-5 cursor-pointer hover:text-gray-300 hidden sm:block" />
        <FaBell className="w-5 h-5 cursor-pointer hover:text-gray-300 hidden sm:block" />
        <div className="flex items-center gap-2 cursor-pointer group relative" onClick={() => navigate('/browse')}>
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" 
            alt="Profile" 
            className="w-8 h-8 rounded-sm" 
          />
          <span className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-white ml-1 transition-transform group-hover:rotate-180"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
