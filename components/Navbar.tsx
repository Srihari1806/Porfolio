import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 px-4 md:px-12 py-4 flex items-center justify-between ${isScrolled ? 'bg-[#141414] shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center gap-8">
        <Link to="/browse" className="text-red-600 text-2xl md:text-3xl font-bold tracking-tighter cursor-pointer uppercase">
          PORTFOLIO
        </Link>
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-white transition">
                {link.name}
              </Link>
            </li>
          ))}
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
          <span className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-white ml-1 transition-transform group-hover:rotate-180 hidden sm:block"></span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#141414] border-t border-gray-800 md:hidden flex flex-col p-4 gap-4 animate-fade-in shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-gray-300 hover:text-white font-medium py-2 border-b border-gray-800 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;