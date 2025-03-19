import React from "react";

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Stargazing Sessions",
      description:
        "Regular night sky observation events where members learn to identify constellations, planets, and deep-sky objects using telescopes.",
      icon: "🔭",
    },
    {
      title: "Rocket Building",
      description:
        "Hands-on workshops where members design and build model rockets, learning about aerodynamics and propulsion systems.",
      icon: "🚀",
    },
    {
      title: "Space Science Talks",
      description:
        "Monthly presentations by experts in astronomy, astrophysics, and space exploration.",
      icon: "🎯",
    },
    {
      title: "Mars Rover Challenge",
      description:
        "Annual competition where teams design and build Mars rover prototypes to complete various missions.",
      icon: "🤖",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-[3vw] mb-12 text-center">
          Our Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
