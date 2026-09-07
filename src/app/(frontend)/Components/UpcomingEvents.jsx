"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events?sort=-date&limit=3');
        const data = await response.json();
        setEvents(data.docs || []);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 relative min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <p className="text-white relative z-10">Loading events...</p>
      </section>
    );
  }

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="px-4 mx-[4vw] relative z-10">
        <h2 className="text-4xl md:text-[3vw] mb-12 text-center text-white">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => {
            // Calculate status dynamically based on current date
            const eventDate = new Date(event.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate day comparison
            
            const isPast = eventDate < today;
            const status = isPast ? "past" : "upcoming";
            
            // Extract the URL from Payload's Media object
            const imageUrl = event.coverImage?.url;

            return (
              <div
                key={event.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <div className="aspect-video bg-gray-800 relative">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={60}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                    <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${isPast ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isPast ? 'bg-red-400' : 'bg-blue-400'}`}></span>
                      {status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {event.title}
                  </h3>
                  <div className="text-gray-200 mb-4">
                    <p>📅 {new Date(event.date).toLocaleDateString()}</p>
                    <p>⏰ {event.time}</p>
                    <p>📍 {event.location}</p>
                  </div>
                  <p className="text-gray-200 mb-4">{event.description}</p>
                  
                  {!isPast && event.registerLink && (
                    <a
                      href={event.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#f65d2a] text-white rounded-full py-2 px-6 font-semibold hover:bg-[#e54d1a] transition-colors duration-300"
                    >
                      Register Now
                    </a>
                  )}
                  {isPast && (
                    <button className="bg-gray-500 text-white rounded-full py-2 px-6 font-semibold cursor-not-allowed opacity-70">
                      Event Ended
                    </button>
                  )}
                </div>
              </div>
            );
          })}
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