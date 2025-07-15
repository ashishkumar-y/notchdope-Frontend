import React, { useState } from 'react';
import { NavLinks } from './Data/content';
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const filteredLinks = NavLinks.filter(
    link =>
      link.label.toLowerCase() !== 'terms' &&
      link.label.toLowerCase() !== 'privacy'
  );

  return (
    <header className="mt-4 lg:w-[90%] mx-auto flex justify-between items-center py-4 px-4 lg:px-20 z-50 relative backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl">
      
      {/* Logo */}
      <a
        href="https://www.instagram.com/notchdope"
        className="text-3xl lg:text-4xl font-bold tracking-widest text-white drop-shadow-[0_0_5px_#8c52ff]"
        aria-label="Notchdope Instagram"
      >
        Notch<span className="text-[#8c52ff]">Dope</span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {filteredLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="relative text-sm font-semibold text-white hover:text-[#8c52ff] transition-all duration-300 hover:scale-105"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-white text-3xl bg-white/10 p-2 rounded-xl hover:bg-white/20 transition"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {menuOpen ? <IoClose /> : <MdMenuOpen />}
      </button>

      {/* Mobile Menu Overlay */}
    


         <div className={`md:hidden fixed top-0 left-0 w-full h-screen z-[999] transition-transform duration-500 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e] backdrop-blur-lg shadow-[0_0_60px_rgba(140,82,255,0.5)] flex flex-col items-center justify-center p-8`}>

        {/* Close Button Top Right */}
        <button
          className="absolute top-5 right-5 text-white text-4xl p-2 hover:rotate-90 transition-transform duration-300"
          onClick={toggleMobileMenu}
        >
          <IoClose />
        </button>

        <nav className="flex flex-col gap-8 items-center">
          {filteredLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-2xl font-bold text-white hover:text-[#8c52ff] tracking-wider transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
