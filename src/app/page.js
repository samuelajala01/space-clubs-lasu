"use client";

import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import ActivitiesSection from "./Components/ActivitiesSection";
import UpcomingEvents from "./Components/UpcomingEvents";
import TeamPreview from "./Components/TeamPreview";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="mt-72 p-[4vw]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-4 mb-8"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-[4vw] mb-8">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              We are a community of students and professionals united by our
              passion for SPACE EXPLORATION and INNOVATION. Whether you're a
              stargazer, aspiring astronaut, or tech enthusiast, our club is the
              launchpad for your cosmic journey. Our diverse membership includes
              undergraduate and graduate students, faculty members, and space
              industry professionals who share a common goal: to explore the
              mysteries of the universe and push the boundaries of human
              knowledge.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-4 mb-8"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-[4vw] mb-8">What We Do</h2>
            <p className="text-lg leading-relaxed">
              Our club engages in a wide range of activities designed to
              educate, inspire, and prepare the next generation of space
              explorers. From hands-on rocket building workshops to deep-space
              observation sessions, we provide opportunities for both learning
              and practical experience. We collaborate with industry partners,
              participate in national competitions, and organize regular events
              that bring together space enthusiasts from all backgrounds.
            </p>
          </div>
        </motion.div>

        <div className="p-4 mb-8"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-[4vw] mb-8">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              We envision a future where space exploration is accessible to
              everyone. Our mission is to inspire, EDUCATE, and ENGAGE students
              in the wonders of space. Through hands-on projects, workshops, and
              events, we aim to foster a community where the fascination with
              the universe becomes a catalyst for learning and collaboration. We
              strive to be a leading force in student space exploration,
              contributing to the advancement of space science and technology
              while making space education engaging and accessible to all.
            </p>
          </div>
        </div>
      </section>
      <ActivitiesSection />
      <TeamPreview />
      <UpcomingEvents />
    </main>
  );
}
