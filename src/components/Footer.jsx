import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 px-6 sm:px-10 py-12 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white border-t border-white/10 shadow-[0_0_80px_rgba(140,82,255,0.15)] rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-[#8c52ff] to-white bg-clip-text text-transparent">Notchdope</h1>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Your central hub for Haryanvi media, digital promotion, artist branding, and creative tech solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/Download" className="hover:text-white transition">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
             <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="/privacypolicy" className="hover:text-white transition">Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Contact</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2"><FaEnvelope className="text-[#8c52ff]" /> notchdope01@gmail.com</li>
            <li className="flex items-center gap-2"><FaPhone className="text-[#8c52ff]" /> +91 7488708149</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Follow Us</h2>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/notchdope" target="_blank" rel="noopener noreferrer" className="text-[#8c52ff] hover:text-white text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <hr className="my-8 border-gray-700" />
      <p className="text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} <span className="text-[#8c52ff]">Notchdope</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
