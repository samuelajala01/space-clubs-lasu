"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/Logo-light.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < 10) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseHover = (e) => {
      if (e.clientY < 40) {
        setIsVisible(true);
      } else if (!isVisible && window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    window.addEventListener("mousemove", handleMouseHover);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
      window.removeEventListener("mousemove", handleMouseHover);
    };
  }, [lastScrollY, isVisible]);

  return (
    <div
      className={`w-full transition-all duration-300 ease-in-out fixed top-0 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-center w-full mt-4">
        {/* Mobile Nav */}
        <div className="md:hidden flex justify-between items-center px-4 py-4 w-[95%] rounded-3xl text-white shadow-md relative bg-white/5 backdrop-blur-md">
          <button
            className="text-2xl hover:text-[#f65d2a] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 w-24">
            <Image
              alt="Logo"
              width={120}
              height={120}
              src={Logo}
              className="w-full h-auto"
            />
          </div>

          <Link href="/join">
            <button className="bg-[#f65d2a] text-white rounded-xl py-2 px-4 hover:bg-[#e04c1a] transition-colors text-sm">
              Join Now
            </button>
          </Link>

          <ul
            className={`${
              isMenuOpen
                ? "flex flex-col absolute top-full left-0 w-full bg-white/10 backdrop-blur-lg rounded-b-2xl shadow-lg z-50 mt-2 py-4 px-6 space-y-4"
                : "hidden"
            }`}
          >
            <li className="w-full">
              <Link
                href="/"
                className="block py-2 hover:text-[#f65d2a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/about"
                className="block py-2 hover:text-[#f65d2a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/events"
                className="block py-2 hover:text-[#f65d2a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/gallery"
                className="block py-2 hover:text-[#f65d2a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/resources"
                className="block py-2 hover:text-[#f65d2a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center items-center gap-[2vw] px-8 py-4 w-fit rounded-3xl text-white shadow-md relative bg-white/5 backdrop-blur-md">
          <button className="hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div>
            <Image alt="Logo" width={70} height={70} src={Logo} />
          </div>

          <ul className="flex gap-[2.5vw] items-center">
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
