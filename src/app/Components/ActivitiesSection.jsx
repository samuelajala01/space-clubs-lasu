"use client";

import React, { useMemo, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ActivitiesSection = () => {
  const [isClient, setIsClient] = useState(false);

  const activities = useMemo(
    () => [
      {
        title: "Bootcamps",
        description:
          "Hands-on workshops covering topics like simulation: On Fluids and even CAD.",
        icon: "👨🏽‍💻",
      },
      {
        title: "Project building",
        description:
          "Phases where members get to collaborate to design and build space-related projects, and Learn in the process.",
        icon: "🚀",
      },
      {
        title: "Webinars",
        description:
          "Guest lectures from experts in Astronomy and Aeronautics. Learn about propulsion and aerodynamics",
        icon: "🎓",
      },
      {
        title: "Trivia Nights",
        description:
          "Regular social events where members can get to test their knowledge on Space and win prizes too.",
        icon: "🎮",
      },
    ],
    []
  );

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
      <div className="mx-[4vw] md:mx-[6vw] px-4">
        <h2
          className="text-4xl text-white mb-12 text-center"
          {...(isClient && {
            "data-aos": "fade-up",
          })}
        >
          Our Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              {...(isClient && {
                "data-aos": "fade-up",
                "data-aos-delay": index * 200,
                "data-aos-duration": "800",
              })}
            >
              <div
                className="text-4xl mb-4"
                {...(isClient && {
                  "data-aos": "zoom-in",
                  "data-aos-delay": index * 200 + 200,
                })}
              >
                {activity.icon}
              </div>
              <h3
                className="text-xl font-bold text-white mb-2"
                {...(isClient && {
                  "data-aos": "fade-up",
                  "data-aos-delay": index * 200 + 300,
                })}
              >
                {activity.title}
              </h3>
              <p
                className="text-gray-300"
                {...(isClient && {
                  "data-aos": "fade-left",
                  "data-aos-delay": index * 200 + 400,
                })}
              >
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ActivitiesSection);
