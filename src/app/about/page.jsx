import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const AboutPage = () => {
  const coreTeam = [
    {
      name: "Dr. Sarah Johnson",
      role: "Faculty Advisor",
      image: "/images/team/sarah.jpg",
      bio: "Professor of Astrophysics with 15 years of experience in space research.",
      social: {
        linkedin: "https://linkedin.com/in/sarah-johnson",
        twitter: "https://twitter.com/sarahjohnson",
        email: "sarah.johnson@university.edu",
      },
    },
    {
      name: "Alex Chen",
      role: "Club President",
      image: "/images/team/alex.jpg",
      bio: "Senior Aerospace Engineering student passionate about space exploration.",
      social: {
        linkedin: "https://linkedin.com/in/alex-chen",
        twitter: "https://twitter.com/alexchen",
        email: "alex.chen@university.edu",
      },
    },
    {
      name: "Maya Patel",
      role: "Technical Lead",
      image: "/images/team/maya.jpg",
      bio: "Robotics expert leading our Mars Rover project development.",
      social: {
        linkedin: "https://linkedin.com/in/maya-patel",
        twitter: "https://twitter.com/mayapatel",
        email: "maya.patel@university.edu",
      },
    },
    {
      name: "David Kim",
      role: "Events Coordinator",
      image: "/images/team/david.jpg",
      bio: "Organizing space science workshops and public outreach events.",
      social: {
        linkedin: "https://linkedin.com/in/david-kim",
        twitter: "https://twitter.com/davidkim",
        email: "david.kim@university.edu",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Starry Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/starry.jpg"
          alt="Starry background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a passionate community of space enthusiasts, researchers,
              and innovators dedicated to exploring the mysteries of the cosmos
              and inspiring the next generation of space explorers.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl text-white mb-12 text-center">
              Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Explore</h3>
                <p className="text-gray-300">
                  Conduct cutting-edge research and experiments in space science
                  and technology.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Learn</h3>
                <p className="text-gray-300">
                  Provide hands-on learning opportunities and workshops for
                  students interested in space science.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Inspire</h3>
                <p className="text-gray-300">
                  Share our passion for space exploration with the community
                  through public events and outreach programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Section */}
        <section id="core-team" className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl text-white mb-12 text-center">Core Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">👨‍🚀</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#f65d2a] mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-4">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaEnvelope className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
