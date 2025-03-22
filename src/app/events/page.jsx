import React from "react";

const EventsPage = () => {
  const allEvents = [
    {
      title: "New Moon Stargazing",
      date: "March 15, 2024",
      time: "8:00 PM",
      location: "University Observatory",
      description:
        "Join us for a special stargazing session during the new moon phase, perfect for observing deep-sky objects.",
      category: "Observation",
      image: "/images/stargazing.jpg",
    },
    {
      title: "Rocket Building Workshop",
      date: "March 20, 2024",
      time: "2:00 PM",
      location: "Engineering Lab 101",
      description:
        "Learn the basics of rocket design and construction in this hands-on workshop.",
      category: "Workshop",
      image: "/images/rocket-workshop.jpg",
    },
    {
      title: "Space Science Symposium",
      date: "April 5, 2024",
      time: "10:00 AM",
      location: "Main Auditorium",
      description:
        "Annual symposium featuring guest speakers from NASA and SpaceX.",
      category: "Conference",
      image: "/images/symposium.jpg",
    },
    {
      title: "Mars Rover Challenge",
      date: "April 15, 2024",
      time: "9:00 AM",
      location: "Robotics Lab",
      description:
        "Design and build Mars rover prototypes to complete various missions.",
      category: "Competition",
      image: "/images/rover-challenge.jpg",
    },
    {
      title: "Astrophotography Workshop",
      date: "April 20, 2024",
      time: "7:00 PM",
      location: "Photography Studio",
      description: "Learn how to capture stunning images of the night sky.",
      category: "Workshop",
      image: "/images/astrophotography.jpg",
    },
  ];

  const categories = [
    "All",
    "Observation",
    "Workshop",
    "Conference",
    "Competition",
  ];

  return (
    <div className="relative min-h-screen mx-[6vw]">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"></div>
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl md:text-[4vw] text-center text-white mb-12">
            All Events
          </h1>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <div className="aspect-video bg-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#f65d2a] text-white px-3 py-1 rounded-full text-sm">
                      {event.category}
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
                  <button className="bg-[#f65d2a] text-white rounded-full py-2 px-6 font-semibold hover:bg-[#e54d1a] transition-colors duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl text-white mb-4">
              Stay Updated with Our Events
            </h2>
            <p className="text-gray-200 mb-6">
              Subscribe to our newsletter to receive updates about upcoming
              events and activities.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20 focus:outline-none focus:border-[#f65d2a]"
              />
              <button className="bg-[#f65d2a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e54d1a] transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
