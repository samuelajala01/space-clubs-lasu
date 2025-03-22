import React from "react";
import Link from "next/link";

const UpcomingEvents = () => {
  const events = [
    {
      title: "New Moon Stargazing",
      date: "March 15, 2024",
      time: "8:00 PM",
      location: "University Observatory",
      description:
        "Join us for a special stargazing session during the new moon phase, perfect for observing deep-sky objects.",
    },
    {
      title: "Rocket Building Workshop",
      date: "March 20, 2024",
      time: "2:00 PM",
      location: "Engineering Lab 101",
      description:
        "Learn the basics of rocket design and construction in this hands-on workshop.",
    },
    {
      title: "Space Science Symposium",
      date: "April 5, 2024",
      time: "10:00 AM",
      location: "Main Auditorium",
      description:
        "Annual symposium featuring guest speakers from NASA and SpaceX.",
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="px-4 mx-[4vw] relative z-10">
        <h2 className="text-4xl md:text-[3vw] mb-12 text-center text-white">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-white">
                {event.title}
              </h3>
              <div className="text-gray-200 mb-4">
                <p>📅 {event.date}</p>
                <p>⏰ {event.time}</p>
                <p>📍 {event.location}</p>
              </div>
              <p className="text-gray-200">{event.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/events">
            <button className="bg-[#f65d2a] text-white rounded-full py-4 px-8 font-semibold hover:bg-[#e54d1a] transition-colors duration-300">
              View All Events
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
