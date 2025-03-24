"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/Logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center absolute top-4 mt-8">
      <div className="flex justify-center items-center gap-[4vw] py-6 px-8 bg-white w-fit rounded-full relative text-black">
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden absolute left-4 top-1/2 -translate-y-1/2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <div>
          <Image alt="Logo" className="" width={120} height={120} src={Logo} />
        </div>

        {/* Navigation Links */}
        <ul
          className={`
          flex-col md:flex-row
          ${
            isMenuOpen
              ? "flex absolute top-full left-0 w-full bg-white rounded-b-2xl shadow-lg"
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
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="resources">Resources</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Join Now Button */}
        <Link href="/">
          <button className="bg-[#f65d2a] text-white rounded-full py-2 px-6">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
