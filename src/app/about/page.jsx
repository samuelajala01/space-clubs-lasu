import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const coreTeam = [
    {
      name: "Dr. Sarah Johnson",
      role: "Faculty Advisor",
      image: "/images/team/sarah.jpg",
      bio: "Professor of Astrophysics with 15 years of experience in space research.",
      socials: {
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
      socials: {
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
      socials: {
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
      socials: {
        linkedin: "https://linkedin.com/in/david-kim",
        twitter: "https://twitter.com/davidkim",
        email: "david.kim@university.edu",
      },
    },
  ];

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"></div>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-5xl md:text-[4vw] text-center text-white mb-8">
            About Space Club
          </h1>
          <p className="text-gray-200 text-center max-w-3xl mx-auto text-lg leading-relaxed">
            We are a community of passionate students and professionals
            dedicated to exploring the mysteries of space. Our club provides
            opportunities for hands-on learning, research, and collaboration in
            space science and technology.
          </p>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-white mb-8 text-center">
              Our Mission
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Our mission is to inspire and educate the next generation of space
              explorers. We believe in making space science accessible to
              everyone and fostering a community where curiosity about the
              cosmos leads to innovation and discovery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <h3 className="text-white text-xl mb-3">Inspire</h3>
                <p className="text-gray-300">
                  Igniting passion for space exploration in students of all
                  backgrounds.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <h3 className="text-white text-xl mb-3">Educate</h3>
                <p className="text-gray-300">
                  Providing hands-on learning opportunities in space science and
                  technology.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <h3 className="text-white text-xl mb-3">Innovate</h3>
                <p className="text-gray-300">
                  Developing new solutions for space exploration challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Section */}
        <section id="core-team" className="container mx-auto px-4 py-16">
          <h2 className="text-4xl text-white mb-12 text-center">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                  <div className="flex gap-4">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.018-2.013-1.227-2.013-1.227 0-1.415.957-1.415 1.951v5.666h-3v-11h2.85v1.03h.04c.315-.6 1.092-1.233 2.246-1.233 2.4 0 2.85 1.58 2.85 3.638v6.565z" />
                      </svg>
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="sr-only">Email</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
