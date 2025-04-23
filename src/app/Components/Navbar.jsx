"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/Logo.png";
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
        <div className="flex justify-center items-center gap-[4vw] px-8 py-6 bg-white w-fit rounded-full text-black shadow-md relative">
          
        {/* <div className="flex justify-center items-center gap-[4vw] px-8 py-6 w-fit rounded-full text-white shadow-md relative bg-white/5 backdrop-blur-md"> */}

          <button
            className="md:hidden absolute left-4 top-1/2 -translate-y-1/2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          <div>
            <Image alt="Logo" width={120} height={120} src={Logo} />
          </div>

          <ul
            className={`flex-col md:flex-row ${
              isMenuOpen
                ? "flex absolute top-full left-0 w-full bg-white rounded-b-2xl shadow-lg z-50"
                : "hidden md:flex"
            } gap-[3vw] items-center`}
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
