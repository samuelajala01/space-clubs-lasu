"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: "/images/members.jpg",
      alt: "Space Club Members",
    },
    {
      src: "/images/core team.jpg",
      alt: "Space Event",
    },
    {
      src: "/images/DSC_3599.jpg",
      alt: "Some members",
    },
    {
      src: "/images/DSC_3626.jpg",
      alt: "Mars Colony",
    },
    {
      src: "/images/DSC_3398.jpg",
      alt: "Our Beautiful Editorial Lead",
    },
    {
      src: "/images/DSC_3563.jpg",
      alt: "Members around the telescope",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      mirror: true,
    });
  }, []);

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
        email: "maya.patel@university.edu",
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
        email: "james.wilson@university.edu",
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
    {
      name: "Samuel Adebanjo",
      role: "Learning and Dev Co-ordinator",
      image: "/images/team/Adebanjo_Samuel.jpg",
      bio: "Leading Space Research initiatives for Learning and development.",
      social: {
        linkedin:
          "https://www.linkedin.com/in/samuel-adebanjo-%F0%9F%94%A5-60256825b/",
        twitter: "https://twitter.com/samuelAdebanj19",
        email: "emma.rodriguez@university.edu",
      },
    },

    {
      name: "Abdullah Saliu",
      role: "Programs Manager I",
      image: "/images/team/ABDULLAHSALIU.jpg",
      bio: "Connecting with schools and communities to spread space science awareness.",
      social: {
        linkedin: "https://www.linkedin.com/in/saliu-abdullah-591312301/",
        twitter: "https://twitter.com/cy63rx_",
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
      bio: "Aspiring Chemical and Polymer Engineer passionate about space education and sustainability.",
      social: {
        linkedin: "https://www.linkedin.com/in/rukayat-seriki-39b262321/",
        twitter: "https://twitter.com/RSayrikey",
        email: "james.wilson@university.edu",
      },
    },
    {
      name: "Esike Peace",
      role: "Community manager",
      image: "/images/team/EsikePeace_.jpg",
      bio: "Mechanical Engineering student driving space awareness through education and community building.",
      social: {
        linkedin: "https://www.linkedin.com/in/peace-esike-166018333/",
        twitter: "https://twitter.com/EMPERORS_0001",
        email: "james.wilson@university.edu",
      },
    },
    {
      name: "Adekunle Adjoto",
      role: "Design Lead",
      image: "/images/team/kunart.jpg",
      bio: "Creative visionary and problem-solver, shaping impactful designs that communicate and elevate the mission of Space Clubs.",
      social: {
        linkedin: "https://www.linkedin.com/in/peace-esike-166018333/",
        twitter: "https://twitter.com/kingkun251",
        email: "james.wilson@university.edu",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/about-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div
              className="relative rounded-2xl overflow-hidden h-[500px] md:h-[700px]"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {/* Hero Background */}
              <div className="absolute inset-0">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover brightness-110"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                aria-label="Previous slide"
              >
                <IoIosArrowBack className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                aria-label="Next slide"
              >
                <IoIosArrowForward className="w-6 h-6 text-white" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Hero Content */}
              <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-16 text-center">
                <h1
                  className="text-5xl font-bold text-white mb-6 drop-shadow-lg"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  About Us
                </h1>
                <p
                  className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  We are a passionate community of space enthusiasts,
                  researchers, and innovators dedicated to exploring the
                  mysteries of the cosmos and inspiring the next generation of
                  space explorers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2
              className="text-4xl text-white mb-12 text-center"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-offset="100"
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
                data-aos-offset="100"
              >
                <h3 className="text-xl font-bold text-white mb-4">Educate</h3>
                <p className="text-gray-300">
                  Provide hands-on learning opportunities and workshops for
                  students interested in space science and tech.
                </p>
              </div>
              <div
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-offset="100"
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
              data-aos="zoom-in"
              data-aos-duration="1200"
            >
              Meet the Team
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {coreTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  data-aos-offset="100"
                  data-aos-mirror="true"
                >
                  <div className="relative h-64">
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
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      data-aos="fade-up"
                      data-aos-delay={index * 100 + 100}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-[#f65d2a] mb-3"
                      data-aos="fade-up"
                      data-aos-delay={index * 100 + 200}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-gray-300 text-sm mb-4"
                      data-aos="fade-up"
                      data-aos-delay={index * 100 + 300}
                    >
                      {member.bio}
                    </p>

                    <div
                      className="flex space-x-4"
                      data-aos="fade-up"
                      data-aos-delay={index * 100 + 400}
                    >
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
