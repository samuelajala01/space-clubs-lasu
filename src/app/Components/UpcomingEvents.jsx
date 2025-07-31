import React from "react";
import Link from "next/link";
import { allEvents } from "../data/events";

const UpcomingEvents = () => {
  // Get the last 3 events from the shared events data
  const events = allEvents
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
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300"
            >
              <div className="aspect-video bg-gray-800 relative">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <span className="text-gray-400">No Image Available</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-[#f65d2a] text-white px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </span>
                  <span className="bg-blue-500/20 text-blue-400 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium">
                    <span className="bg-blue-400 w-1.5 h-1.5 rounded-full"></span>
                    {event.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
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
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/events">
            <button className="bg-[#f65d2a] text-white rounded-full py-4 px-8 font-semibold hover:bg-[#e54d1a] transition-colors duration-300 flex items-center gap-2 mx-auto">
              View All Events
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
