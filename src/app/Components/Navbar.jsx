"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/Logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // If we've scrolled down and past the navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // If we've scrolled to the top
      else if (currentScrollY < 10) {
        setIsVisible(true);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    
    // Handle mouse hover at top of screen
    const handleMouseHover = (e) => {
      if (e.clientY < 40) {
        setIsVisible(true);
      } else if (!isVisible && window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseHover);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('mousemove', handleMouseHover);
    };
  }, [lastScrollY, isVisible]);

  // Initial render - return a placeholder with the same structure
  // to avoid hydration errors
  if (!mounted) {
    return (
      <div className="w-full fixed top-0 z-50">
        <div className="flex justify-center w-full mt-4">
          <div className="flex justify-center items-center gap-[4vw] px-8 py-6 bg-white w-fit rounded-full text-black">
            <div>
              <div className="w-[120px] h-[120px]"></div>
            </div>
            <ul className="hidden md:flex gap-[3vw] items-center">
              <li><span>Home</span></li>
              <li><span>About</span></li>
              <li><span>Events</span></li>
              <li><span>Gallery</span></li>
              <li><span>Resources</span></li>
            </ul>
            <div>
              <div className="bg-[#f65d2a] text-white rounded-full py-2 px-6">
                Join Now
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`w-full transition-all duration-300 ease-in-out fixed top-0 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-center w-full mt-4">
        <div className="flex justify-center items-center gap-[4vw] px-8 py-6 bg-white w-fit rounded-full text-black shadow-md">
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden absolute left-4 top-1/2 -translate-y-1/2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Logo */}
          <div>
            <Image alt="Logo" width={120} height={120} src={Logo} />
          </div>

          {/* Navigation Links */}
          <ul
            className={`
            flex-col md:flex-row
            ${
              isMenuOpen
                ? "flex absolute top-full left-0 w-full bg-white rounded-b-2xl shadow-lg z-50"
                : "hidden md:flex"
            }
            gap-[3vw] items-center
          `}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            
          </ul>

          {/* Join Now Button */}
          <Link href="/join">
            <button className="bg-[#f65d2a] text-white rounded-full py-2 px-6">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;