"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import dynamic from "next/dynamic";

const AOS = dynamic(() => import("aos"), { ssr: false });

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAOSLoaded, setIsAOSLoaded] = useState(false);

  const heroImages = useMemo(() => [
    { src: "/images/members.jpg", alt: "Space Club Members" },
    { src: "/images/core team.jpg", alt: "Space Event" },
    { src: "/images/DSC_3599.jpg", alt: "Some members" },
    { src: "/images/DSC_3626.jpg", alt: "Mars Colony" },
    { src: "/images/DSC_3398.jpg", alt: "Our Beautiful Editorial Lead" },
    { src: "/images/DSC_3563.jpg", alt: "Members around the telescope" },
  ], []);

  // Memoize team data
  const coreTeam = useMemo(() => [
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
        email: "murainadavidabisoye@gmail.com",
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
        email: "abrahamfakorede541@gmail.com",
      },
    },
    {
      name: "Samuel Adebanjo",
      role: "Learning and Dev Co-ordinator",
      image: "/images/team/Adebanjo_Samuel.jpg",
      bio: "Leading Space Research initiatives for Learning and development.",
      social: {
        linkedin: "https://www.linkedin.com/in/samuel-adebanjo-60256825b/",
        twitter: "https://twitter.com/samuelAdebanj19",
        email: "samueloluola.a@gmail.com",
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
        email: "saliuabdullahakinlabi@gmail.com",
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
        email: "akinyemieniola718@gmail.com",
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
        email: "serikirukayat45@gmail.com",
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
        email: "esikepeace81@gmail.com",
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
  ], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, [heroImages.length]);

  useEffect(() => {
    // Load AOS only after component mounts
    import("aos").then((AOSModule) => {
      const AOS = AOSModule.default;
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        disable: 'mobile', 
      });
      setIsAOSLoaded(true);
    });

   
    import("aos/dist/aos.css");
  }, []);

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/about-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={60}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="relative rounded-2xl overflow-hidden h-[500px] md:h-[700px]">
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
                      quality={index === 0 ? 85 : 60}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
                  </div>
                ))}
              </div>

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

              <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-16 text-center">
                <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
                  About Us
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md">
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
            <h2 className="text-4xl text-white mb-12 text-center">
              Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Inspire</h3>
                <p className="text-gray-300">
                  Share our passion for space exploration with the community
                  through public events and outreach programs.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Educate</h3>
                <p className="text-gray-300">
                  Provide hands-on learning opportunities and workshops for
                  students interested in space science and tech.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
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
            <h2 className="text-4xl text-white mb-12 text-center">
              Meet the Team
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {coreTeam.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="relative h-64">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={70}
                        loading={index < 6 ? "eager" : "lazy"}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-[#f65d2a]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,15A7,7 0 0,1 5,8A7,7 0 0,1 12,1A7,7 0 0,1 19,8A7,7 0 0,1 12,15M12,3A5,5 0 0,0 7,8A5,5 0 0,0 12,13A5,5 0 0,0 17,8A5,5 0 0,0 12,3M12,10.5A2.5,2.5 0 0,0 14.5,8A2.5,2.5 0 0,0 12,5.5A2.5,2.5 0 0,0 9.5,8A2.5,2.5 0 0,0 12,10.5M12,16C12,17.11 12.9,18 14,18H22V20H14A4,4 0 0,1 10,16H12M12,16H10A4,4 0 0,1 6,20H2V18H6C7.11,18 8,17.11 8,16H10H12Z"/>
                        </svg>
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