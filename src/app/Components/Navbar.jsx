"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/Logo-light.png";
import { useState, useEffect, useCallback, memo } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else if (currentScrollY < 10) {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  const handleMouseHover = useCallback(
    (e) => {
      if (e.clientY < 40) {
        setIsVisible(true);
      } else if (!isVisible && window.scrollY > 100) {
        setIsVisible(false);
      }
    },
    [isVisible]
  );

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar, { passive: true });
    window.addEventListener("mousemove", handleMouseHover, { passive: true });

    return () => {
      window.removeEventListener("scroll", controlNavbar);
      window.removeEventListener("mousemove", handleMouseHover);
    };
  }, [controlNavbar, handleMouseHover]);

  return (
    <div
      className={`w-full transition-all duration-300 ease-in-out fixed top-0 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-center w-full mt-4">
        {/* Mobile Nav */}
        <div className="md:hidden flex justify-between items-center px-4 py-3 w-[95%] rounded-3xl text-white shadow-md bg-white/5 backdrop-blur-md">
          {/* Mobile layout with separated elements */}
          <button
            className="text-2xl hover:text-[#f65d2a] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div className="w-24 flex justify-center">
            <Image
              alt="Logo"
              width={120}
              height={120}
              src={Logo} // Update this with your actual logo path
              className="w-full h-auto"
            />
          </div>

          {/* Mobile menu dropdown */}
          <div className="w-8">{/* Empty div to balance the layout */}</div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-lg rounded-b-2xl shadow-lg z-50 mt-2 py-4 px-6">
              <ul className="space-y-4">
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
                {/* Join button moved to dropdown on mobile */}
                <li className="w-full pt-2">
                  <Link href="/join">
                    <button className="bg-[#f65d2a] text-white rounded-xl py-2 px-4 w-full hover:bg-[#e04c1a] transition-colors">
                      Join Now
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-around items-center w-full ">
          <div className="flex items-center">
            <Image
              alt="Logo"
              width={150}
              height={150}
              src={Logo} // Update this with your actual logo path
            />
          </div>

          <ul className="flex gap-[4vw] items-center px-10 py-6 rounded-2xl text-white shadow-md bg-white/5 backdrop-blur-md font-medium">
            <li>
              <Link href="/" className="hover:text-[#f65d2a] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#f65d2a] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="hover:text-[#f65d2a] transition-colors"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-[#f65d2a] transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="hover:text-[#f65d2a] transition-colors"
              >
                Resources
              </Link>
            </li>
          </ul>

          <Link href="/join">
            <button className="bg-[#f65d2a] text-white rounded-full py-2 px-6 hover:bg-[#e04c1a] transition-colors">
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
