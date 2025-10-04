"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamPreview = () => {
  const [isClient, setIsClient] = useState(false);

  const coreTeam = [
    {
      name: "Sylvester Agose",
      role: "President",
      image: "/images/team/SylvesterAgose_.jpg",
      bio: "Driven by a passion for space education, innovation, and empowering the next generation of explorers and problem-solvers",
      social: {
        linkedin: "https://www.linkedin.com/in/sylvesteragose/",
        twitter: "https://twitter.com/vester_agose",
        email: "sarah.johnson@university.edu",
      },
    },
    {
      name: "David Muraina",
      role: "Vice President",
      image: "/images/team/DavidMuraina.jpg",
      bio: "Computer Science graduate dedicated to harnessing the power of space science and technology to drive meaningful impact for humanity",
      social: {
        linkedin: "https://www.linkedin.com/in/muraina-david-017b51157/",
        twitter: "https://twitter.com/_CodeNerd_",
        email: "alex.chen@university.edu",
      },
    },
    {
      name: "Kehinde Fodunrin",
      role: "PR Lead",
      image: "/images/team/KehindeFodunrin_.png",
      bio: "Senior Aerospace Engineering student passionate about space exploration.",
      social: {
        linkedin: "https://www.linkedin.com/in/kehinde-fodunrin-4a68b7257/",
        twitter: "https://twitter.com/KFodunrin6986",
        email: "kehindefodunrin@gmail.com",
      },
    },
    {
      name: "Favour Akinsiku",
      role: "General Secretary",
      image: "/images/team/FAVOURAKINSIKU.jpg",
      bio: "Aspiring astronaut and Aerospace Engineering Major fueled by curiosity and a passion for space exploration.",
      social: {
        linkedin: "https://www.linkedin.com/in/favourakinsiku/",
        twitter: "https://twitter.com/Astronautfavour",
        email: "favourakinsiku@gmail.com",
      },
    },
    {
      name: "Samuel Ajala",
      role: "Project Lead I",
      image: "/images/team/SamuelAjala.jpg",
      bio: "Computer Engineering student, Machine Learning and Robotics Engineer",
      social: {
        linkedin: "https://linkedin.com/in/samuelajala01",
        twitter: "https://twitter.com/cy63rx_",
        email: "samuelajala01@gmail.com",
      },
    },
    {
      name: "Abraham Fakorede",
      role: "Projects Lead II",
      image: "/images/team/AbrahamFakorede_.jpg",
      bio: "Strategic thinker and execution expert, leading and managing projects that push the boundaries of innovation and space exploration",
      social: {
        linkedin: "https://www.linkedin.com/in/abraham-fakorede-436658255/",
        twitter: "https://twitter.com/abraham_fakored",
        email: "james.wilson@university.edu",
      },
    },
  ];

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
              {...(isClient && {
                "data-aos": index % 2 === 0 ? "fade-right" : "fade-left",
                "data-aos-delay": index * 100,
                "data-aos-offset": "100",
                "data-aos-mirror": "true",
              })}
            >
              <div className="relative h-64">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    width={500}
                    height={500}
                    quality={100}
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
              View All Members
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
