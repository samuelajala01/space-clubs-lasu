"use client";

import React, { useState } from "react";
import JoinMailList from "../Components/JoinMailList";
import { allEvents } from "../data/events";

const EventsPage = () => {
  const categories = [
    "All",
    "Observation",
    "Workshop",
    "Webinar",
    "Meetup",
    "Discussion",
  ];

  const statuses = ["All", "Past", "Ongoing", "Upcoming"];

  // State for filters
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // Function to get status badge color
  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "past":
        return "bg-red-500/20 text-red-400";
      case "ongoing":
        return "bg-green-500/20 text-green-400";
      case "upcoming":
        return "bg-blue-500/20 text-blue-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  // Function to get status dot color
  const getStatusDotColor = (status) => {
    switch (status) {
      case "past":
        return "bg-red-400";
      case "ongoing":
        return "bg-green-400";
      case "upcoming":
        return "bg-blue-400";
      default:
        return "bg-gray-400";
    }
  };

  // Filter events based on selected category and status
  const filteredEvents = allEvents.filter((event) => {
    const categoryMatch =
      categoryFilter === "All" || event.category === categoryFilter;
    const statusMatch =
      statusFilter === "All" || event.status === statusFilter.toLowerCase();
    return categoryMatch && statusMatch;
  });

  return (
    <div className="mx-[6vw] pt-28 relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/80 z-10"></div>
        <img
          src="/images/event-bg.jpg"
          alt="Space Events Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="fixed inset-0 bg-black/10 -z-10"></div>

      <main className="relative z-0">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl md:text-[4vw] text-center text-white mb-12">
            All Events
          </h1>

          {/* Filters Section */}
          <div className="mb-12 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Category Filter */}
              <div className="w-full md:w-auto">
                <h3 className="text-white text-sm font-medium mb-3">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setCategoryFilter(category)}
                      className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300 ${
                        categoryFilter === category
                          ? "bg-[#f65d2a] text-white"
                          : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter Dropdown */}
              <div className="w-full md:w-auto">
                <h3 className="text-white text-sm font-medium mb-3">Status</h3>
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none bg-white/10 backdrop-blur-md text-white px-4 py-2 pr-10 rounded-lg w-full md:w-48 border border-white/20 focus:outline-none focus:border-[#f65d2a]"
                  >
                    {statuses.map((status) => (
                      <option
                        key={status}
                        value={status}
                        className="bg-gray-800"
                      >
                        {status}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
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
                        <span className="text-gray-400">
                          No Image Available
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className="bg-[#f65d2a] text-white px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </span>
                      <span
                        className={`${getStatusBadgeColor(
                          event.status
                        )} flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium`}
                      >
                        <span
                          className={`${getStatusDotColor(
                            event.status
                          )} w-1.5 h-1.5 rounded-full`}
                        ></span>
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-white text-xl">
                  No events match your filters. Try adjusting your selection.
                </p>
              </div>
            )}
          </div>

          {/* Newsletter Signup */}
          <JoinMailList />
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
