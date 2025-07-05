import React, { useState } from 'react';
import { loginSignup, NavLinks } from './Data/content';
import { MdMenuOpen } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className=" mt-4 w-full  flex justify-between items-center py-4 px-4 lg:px-20 z-50">
      
      {/* Logo */}
      <a
        href="https://www.instagram.com/"
        className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-white"
        aria-label="Notch-Dope Instagram"
      >
        Notch-Dope
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-5">
        {NavLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-sm font-medium tracking-wide hover:text-[#8c52ff] transition-colors text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Desktop Login/Signup Buttons */}
      <div className="hidden md:flex gap-3">
        {loginSignup.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="border border-white py-2 px-6 rounded-xl font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <MdMenuOpen />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 bg-black/60 backdrop-blur-md z-40 p-6 flex flex-col items-center">
          <nav className="flex flex-col gap-5">
            {NavLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {loginSignup.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="border border-white mt-4 py-2 px-6 rounded-xl font-medium hover:bg-white hover:text-black transition-all duration-300 text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
