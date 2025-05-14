import React from "react";
import Link from "next/link";

const UpcomingEvents = () => {
  const allEvents = [
    {
      title: "CosmoPi",
      date: "June 13, 2025",
      time: "7:00 PM",
      location: "Aerospace lab",
      description:
        "Bringing students together to explore the night sky through telescopes, talks, and cosmic wonder.",
      status: "upcoming",
      registerLink: "https://lu.ma/3ujv2y4p",
    },
    {
      title: "Under The Epe Sky",
      date: "June 12, 2025",
      time: "8:00 PM",
      location: "Helipad, LASU EPE",
      description:
        "Bringing students together to explore the night sky through telescopes, talks, and cosmic wonder.",
      status: "upcoming",
      registerLink: "https://tix.africa/spaceclubslasu",
    },
    {
      title: "The Yuri's Flight",
      date: "April 27, 2025",
      time: "7:00 PM",
      location: "Virtual",
      description: "Learn how to capture stunning images of the night sky.",
      status: "past",
      registerLink: "https://tix.africa/spaceclubslasu",
    },
  ];

  const events = allEvents
    .filter((event) => event.status === "upcoming" || event.status === "past")
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="px-4 mx-[4vw] relative z-10">
        <h2 className="text-4xl md:text-[3vw] mb-12 text-center text-white">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-gray-200 mb-4">{event.description}</p>
              {event.status !== "past" && (
                      <a
                        href={event.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#f65d2a] text-white rounded-full py-2 px-6 font-semibold hover:bg-[#e54d1a] transition-colors duration-300"
                      >
                        Register Now
                      </a>
                    )}
                    {event.status === "past" && (
                      <button className="bg-gray-500 text-white rounded-full py-2 px-6 font-semibold cursor-not-allowed opacity-70">
                        Event Ended
                      </button>
                    )}
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
