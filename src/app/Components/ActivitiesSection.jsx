import React from "react";
import { motion } from "framer-motion";

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Stargazing Sessions",
      description:
        "Regular stargazing events where members can observe celestial objects through telescopes.",
      icon: "🔭",
    },
    {
      title: "Rocket Building",
      description:
        "Hands-on workshops to design and build model rockets, learning about propulsion and aerodynamics.",
      icon: "🚀",
    },
    {
      title: "Space Science Talks",
      description:
        "Guest lectures from experts in astronomy, astrophysics, and space technology.",
      icon: "🎓",
    },
    {
      title: "Mars Rover Project",
      description:
        "Collaborative project to design and build a Mars rover prototype for competitions.",
      icon: "🤖",
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-white mb-12 text-center"
        >
          Our Activities
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-300">{activity.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
