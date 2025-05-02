"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// import sa from "../public/SylvesterAgose_.jpg"
// import dm from "../public/KehindeFodunrin_.png"

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const coreTeam = [
    {
      name: "Sylvester Agose",
      role: "President",
      image: "/images/team/SylvesterAgose_.jpg",
      bio: "Aerospace Engineering Major, interested in Space education and innovation.",
      social: {
        linkedin: "https://www.linkedin.com/in/sylvesteragose/",
        twitter: "https://twitter.com/sarahjohnson",
        email: "sarah.johnson@university.edu",
      },
    },
    {
      name: "David M",
      role: "Vice President",
      image: "/images/team/DavidMuraina.jpg",
      bio: "a computer science graduate passionate about the use of space science and tech for the benefit of humanity",
      social: {
        linkedin: "https://www.linkedin.com/in/muraina-david-017b51157/",
        twitter: "https://twitter.com/alexchen",
        email: "alex.chen@university.edu",
      },
    },
    {
      name: "Kehinde Fodurin",
      role: "Outreach and PR Lead",
      image: "/images/team/KehindeFodunrin_.png",
      bio: "Senior Aerospace Engineering student passionate about space exploration.",
      social: {
        linkedin: "https://www.linkedin.com/in/kehinde-fodunrin-4a68b7257/",
        twitter: "https://twitter.com/mayapatel",
        email: "maya.patel@university.edu",
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
      name: "Samuel Adebanjo",
      role: "Learning and Dev Co-ordinator",
      image: "/images/team/Adebanjo_Samuel.jpg",
      bio: "Leading our space research initiatives and data analysis projects.",
      social: {
        linkedin:
          "https://www.linkedin.com/in/samuel-adebanjo-%F0%9F%94%A5-60256825b/",
        twitter: "https://twitter.com/emmarodriguez",
        email: "emma.rodriguez@university.edu",
      },
    },
    {
      name: "Favour Akinsiku",
      role: "General Secretary",
      image: "/images/team/FAVOURAKINSIKU.jpg",
      bio: "Aspiring astronaut and Aerospace Engineering Major fueled by curiosity and a passion for space exploration.",
      social: {
        linkedin: "https://www.linkedin.com/in/favourakinsiku/",
        twitter: "https://twitter.com/jameswilson",
        email: "james.wilson@university.edu",
      },
    },
    {
      name: "Emmanuel Akinyemi",
      role: "Programs Manager II",
      image: "/images/team/AkinyemiEmmanuel_.jpg",
      bio: "Connecting with schools and communities to spread space science awareness.",
      social: {
        linkedin: "https://www.linkedin.com/in/emmanuel-akinyemi-867240344/",
        twitter: "https://twitter.com/jameswilson",
        email: "james.wilson@university.edu",
      },
    },
    {
      name: "Rukayat Seriki",
      role: "Editorial Lead",
      image: "/images/team/RukayatSeriki.jpg",
      bio: "Connecting with schools and communities to spread space science awareness.",
      social: {
        linkedin: "https://www.linkedin.com/in/rukayat-seriki-39b262321/",
        twitter: "https://twitter.com/jameswilson",
        email: "james.wilson@university.edu",
      },
    },
    {
      name: "Esike Peace",
      role: "Community manager",
      image: "/images/team/EsikePeace_.jpg",
      bio: "Connecting with schools and communities to spread space science awareness.",
      social: {
        linkedin: "https://linkedin.com/in/james-wilson",
        twitter: "https://twitter.com/jameswilson",
        email: "james.wilson@university.edu",
      },
    },
    {
      name: "Abdullah Saliu",
      role: "Programs Manager I",
      image: "/images/team/ABDULLAHSALIU.jpg",
      bio: "Connecting with schools and communities to spread space science awareness.",
      social: {
        linkedin: "https://linkedin.com/in/james-wilson",
        twitter: "https://twitter.com/jameswilson",
        email: "james.wilson@university.edu",
      },
    },
    {
      name: "Abraham Fakorede",
      role: "Projects manager II",
      image: "/images/team/AbrahamFakorede_.jpg",
      bio: "An Aerospace Engineer passionate in making space exploration accessible through engaging projects",
      social: {
        linkedin: "https://linkedin.com/in/james-wilson",
        twitter: "https://twitter.com/jameswilson",
        email: "james.wilson@university.edu",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10">
        <Image
          src="/images/about-bg.jpg"
          alt="About background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative min-h-screen  ">
        {/* Hero Section */}
        <section className="py-20 text-center" data-aos="fade-up">
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
            <h2
              className="text-4xl text-white mb-12 text-center"
              data-aos="fade-up"
            >
              Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-xl font-bold text-white mb-4">Inspire</h3>
                <p className="text-gray-300">
                  Share our passion for space exploration with the community
                  through public events and outreach programs.
                </p>
              </div>
              <div
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-xl font-bold text-white mb-4">Educate</h3>
                <p className="text-gray-300">
                  Provide hands-on learning opportunities and workshops for
                  students interested in space science and tech.
                </p>
              </div>
              <div
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="text-xl font-bold text-white mb-4">Engage</h3>
                <p className="text-gray-300">
                  Conduct cutting-edge research and experiments in space science
                  and technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Section */}
        <section id="core-team" className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2
              className="text-4xl text-white mb-12 text-center"
              data-aos="fade-up"
            >
              Core Team
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {coreTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="relative h-64">
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div> */}
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        width="500"
                        height="500"
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
