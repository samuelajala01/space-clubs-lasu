"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { featuredCurrentTeam } from "../data/teamData";

const TeamPreview = () => {
  const [isClient, setIsClient] = useState(false);
  const coreTeam = featuredCurrentTeam;

  useEffect(() => {
    setIsClient(true);
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      mirror: true,
      disable: "mobile",
    });
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2
          className="text-4xl text-white mb-12 text-center"
          {...(isClient && {
            "data-aos": "fade-up",
          })}
        >
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {coreTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-64">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    width={500}
                    height={500}
                    quality={75}
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">👨‍🚀</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[#f65d2a] mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>

                <div className="flex space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaEnvelope className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/about#core-team">
            <button className="bg-[#f65d2a] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#e54d1a] transition-colors duration-300">
              View All Executives
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
