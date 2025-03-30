import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Navbar";

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
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-[4vw] text-white mb-8 text-center">
        Join Our Space Community
      </h1>
      <form className="space-y-8">
        {/* Personal Information */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">First Name</label>
              <input
                type="text"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Last Name</label>
              <input
                type="text"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Phone</label>
              <input
                type="tel"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Academic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">Institution</label>
              <input
                type="text"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Field of Study</label>
              <input
                type="text"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Areas of Interest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Astronomy",
              "Rocketry",
              "Space Science",
              "Robotics",
              "Astrophysics",
              "Space Engineering",
            ].map((interest) => (
              <label key={interest} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-[#f65d2a] rounded border-gray-300 focus:ring-[#f65d2a]"
                />
                <span className="text-white">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Personal Statement */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Personal Statement
          </h2>
          <textarea
            required
            rows="6"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
            placeholder="Tell us about your interest in space and why you want to join our community..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#f65d2a] text-white py-3 rounded-lg font-semibold hover:bg-[#e54d1a] transition-colors duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative">
      {/* Starry Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/starry.jpg"
          alt="Starry background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="pt-48 pb-16">
          <div className="container mx-auto px-4">
            {isAcceptingApplications ? (
              <ApplicationForm />
            ) : (
              <NotAcceptingMessage />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
