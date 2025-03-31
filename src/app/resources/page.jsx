"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";

const ResourcesPage = () => {
  const learningResources = [
    {
      title: "NASA's Learning Resources",
      description:
        "Access NASA's official educational materials, videos, and interactive content.",
      link: "https://www.nasa.gov/learning-resources",
      category: "Official Resources",
    },
    {
      title: "Space.com Tutorials",
      description:
        "Comprehensive tutorials on astronomy, space science, and stargazing.",
      link: "https://www.space.com/topics/space-science",
      category: "Tutorials",
    },
    {
      title: "Khan Academy Space",
      description:
        "Free courses on astronomy, physics, and space science fundamentals.",
      link: "https://www.khanacademy.org/science/cosmology-and-astronomy",
      category: "Courses",
    },
  ];

  const toolsAndSoftware = [
    {
      title: "Stellarium",
      description: "Free open-source planetarium software for your computer.",
      link: "https://stellarium.org/",
      category: "Software",
    },
    {
      title: "Celestia",
      description: "Real-time 3D space simulation exploring the universe.",
      link: "https://celestia.space/",
      category: "Software",
    },
    {
      title: "NASA Eyes",
      description:
        "Interactive visualization of NASA's missions and spacecraft.",
      link: "https://eyes.nasa.gov/",
      category: "Software",
    },
  ];

  const communityResources = [
    {
      title: "Space Stack Exchange",
      description: "Q&A platform for space science and astronomy enthusiasts.",
      link: "https://space.stackexchange.com/",
      category: "Community",
    },
    {
      title: "Reddit Space Communities",
      description: "Active communities discussing space science and astronomy.",
      link: "https://www.reddit.com/r/space/",
      category: "Community",
    },
    {
      title: "Space Discord Servers",
      description: "Connect with space enthusiasts in real-time.",
      link: "https://discord.com/invite/space",
      category: "Community",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black relative">
      <Navbar />
      <div className="mx-[4vw] px-4 pt-48 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Space Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover a curated collection of tools, learning materials, and
            community resources to enhance your space exploration journey.
          </p>
        </motion.div>

        {/* Learning Resources Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningResources.map((resource, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-[#f65d2a] text-sm font-semibold mb-2 block">
                  {resource.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f65d2a] hover:text-[#e54d1a] transition-colors duration-300 inline-flex items-center"
                >
                  Visit Resource
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tools and Software Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Tools & Software
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsAndSoftware.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-[#f65d2a] text-sm font-semibold mb-2 block">
                  {tool.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {tool.title}
                </h3>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f65d2a] hover:text-[#e54d1a] transition-colors duration-300 inline-flex items-center"
                >
                  Download Tool
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Community Resources Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Community Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityResources.map((resource, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-[#f65d2a] text-sm font-semibold mb-2 block">
                  {resource.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f65d2a] hover:text-[#e54d1a] transition-colors duration-300 inline-flex items-center"
                >
                  Join Community
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our mailing list to receive updates about new resources,
            upcoming events, and space science news.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20 focus:outline-none focus:border-[#f65d2a]"
            />
            <button className="bg-[#f65d2a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e54d1a] transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ResourcesPage;
