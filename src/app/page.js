"use client";

import HeroSection from "./Components/HeroSection";
import ActivitiesSection from "./Components/ActivitiesSection";
import UpcomingEvents from "./Components/UpcomingEvents";
import { useEffect } from "react";
import TeamPreview from "./Components/TeamPreview";
import JoinMailList from "./Components/JoinMailList";
import AOS from "aos";
import "aos/dist/aos.css";

 

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      mirror: true,
    });
  }, []);
  return (
    <main>
      <HeroSection />
      <section className="mt-40 p-[4vw]">
        <div className="p-4 mb-8"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-[4vw] mb-8" data-aos="fade-right"
                data-aos-delay="100"
                data-aos-offset="100">Who We Are</h2>
            <p className="text-lg leading-relaxed" data-aos="fade-left"
                data-aos-delay="100"
                data-aos-offset="100">
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
        </div>

        <div className="p-4 mb-8"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-[4vw] mb-8" data-aos="fade-left"
                data-aos-delay="100"
                data-aos-offset="100">What We Do</h2>
            <p className="text-lg leading-relaxed" data-aos="fade-left"
                data-aos-delay="100"
                data-aos-offset="100">
              Our club engages in a wide range of activities designed to
              educate, inspire, and prepare the next generation of space
              explorers. From hands-on rocket building workshops to deep-space
              observation sessions, we provide opportunities for both learning
              and practical experience. We collaborate with industry partners,
              participate in national competitions, and organize regular events
              that bring together space enthusiasts from all backgrounds.
            </p>
          </div>
        </div>

        <div className="p-4 mb-8"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-[4vw] mb-8" data-aos="fade-right"
                data-aos-delay="100"
                data-aos-offset="100">Our Vision</h2>
            <p className="text-lg leading-relaxed" data-aos="fade-left"
                data-aos-delay="100"
                data-aos-offset="100">
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
      <JoinMailList/>
    </main>
  );
}
