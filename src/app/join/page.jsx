import React from "react";
import Image from "next/image";
import Link from "next/link";

const JoinPage = () => {
  // Set this to true when accepting applications
  const isAcceptingApplications = false;

  const NotAcceptingMessage = () => (
    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 bg-[#f65d2a] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">🚀</span>
        </div>
      </div>
      <h1 className="text-5xl md:text-[4vw] text-white mb-8">
        Applications Currently Closed
      </h1>
      <p className="text-gray-200 text-lg mb-8 leading-relaxed max-w-2xl">
        We're currently not accepting new members for this term. Our next
        application window will open at the start of the next academic semester.
        Follow us on social media or join our newsletter to be notified when
        applications reopen!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link href="/">
          <button className="bg-[#f65d2a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e54d1a] transition-colors duration-300">
            Back to Home
          </button>
        </Link>
        <button className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300">
          Join Newsletter
        </button>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-white text-xl mb-3">Follow Updates</h3>
          <p className="text-gray-300">
            Stay informed about our next application window and club activities.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-white text-xl mb-3">Prepare</h3>
          <p className="text-gray-300">
            Learn about our club activities and requirements for the next
            intake.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-white text-xl mb-3">Get Involved</h3>
          <p className="text-gray-300">
            Attend our public events and connect with current members.
          </p>
        </div>
      </div>
    </div>
  );

  const ApplicationForm = () => (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-[4vw] text-center text-white mb-8">
        Join Space Club
      </h1>
      <p className="text-gray-200 text-center mb-12 text-lg">
        Embark on your cosmic journey! Fill out the form below to become a
        member of our space exploration community.
      </p>

      <form className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
        {/* Personal Information */}
        <div className="mb-8">
          <h2 className="text-2xl text-white mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="firstName">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="w-full bg-white/5 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-[#f65d2a] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="lastName">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                required
                className="w-full bg-white/5 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-[#f65d2a] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="email">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-white/5 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-[#f65d2a] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full bg-white/5 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-[#f65d2a] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="mb-8">
          <h2 className="text-2xl text-white mb-6">Academic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="institution">
                Institution/University *
              </label>
              <input
                type="text"
                id="institution"
                required
                className="w-full bg-white/5 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-[#f65d2a] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-2" htmlFor="major">
                Field of Study/Major *
              </label>
              <input
                type="text"
                id="major"
                required
                className="w-full bg-white/5 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-[#f65d2a] focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-8">
          <h2 className="text-2xl text-white mb-6">Areas of Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Astronomy",
              "Rocket Engineering",
              "Space Technology",
              "Astrophotography",
              "Mars Exploration",
              "Space Policy",
              "Satellite Systems",
              "Space Biology",
            ].map((interest) => (
              <div key={interest} className="flex items-center">
                <input
                  type="checkbox"
                  id={interest}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#f65d2a] focus:ring-[#f65d2a]"
                />
                <label className="ml-2 text-gray-200" htmlFor={interest}>
                  {interest}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-2xl text-white mb-6">Tell Us About Yourself</h2>
          <textarea
            rows="4"
            placeholder="Why do you want to join the Space Club? What do you hope to contribute and learn?"
            className="w-full bg-white/5 text-white rounded-lg px-4 py-3 border border-white/10 focus:border-[#f65d2a] focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#f65d2a] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#e54d1a] transition-colors duration-300"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"></div>
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          {isAcceptingApplications ? (
            <ApplicationForm />
          ) : (
            <NotAcceptingMessage />
          )}
        </div>
      </main>
    </div>
  );
};

export default JoinPage;
