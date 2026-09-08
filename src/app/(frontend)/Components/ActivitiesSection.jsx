"use client";

import React, { useMemo } from "react";

const ActivitiesSection = () => {
  const activities = useMemo(
    () => [
      {
        title: "Bootcamps",
        description:
          "Hands-on workshops covering topics like simulation on fluids and even CAD.",
      },
      {
        title: "Project Building",
        description:
          "Phases where members collaborate to design and build space-related projects while learning in the process.",
      },
      {
        title: "Webinars",
        description:
          "Guest lectures from experts in Astronomy and Aeronautics. Learn about propulsion and aerodynamics.",
      },
      {
        title: "Trivia Nights",
        description:
          "Regular social events where members can test their knowledge on Space and win prizes too.",
      },
    ],
    []
  );

  return (
    <section className="py-16">
      <div className="mx-[4vw] md:mx-[6vw] px-4">
        <h2 className="text-4xl mb-12 text-center">
          Our Activities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="
                relative
                rounded-xl
                border border-gray-700/70
                bg-white/5
                p-6

                shadow-[0_6px_0_rgba(0,0,0,0.12),0_12px_25px_rgba(0,0,0,0.18)]

                transition-all
                duration-300
                ease-out

                hover:-translate-y-1.5
                hover:border-gray-600
                hover:bg-white/10
                hover:shadow-[0_8px_0_rgba(0,0,0,0.12),0_20px_35px_rgba(0,0,0,0.22)]
              "
            >
              <h3 className="text-xl font-bold mb-3">
                {activity.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
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