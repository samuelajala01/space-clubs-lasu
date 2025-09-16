const Donate = () => {
  const donateLink = "https://paystack.shop/pay/qgpgtyp8cy";

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
          Support Our Mission
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 text-gray-300">
          Together, we can inspire the next generation of explorers, innovators,
          and dreamers. Your contribution powers our activities and helps us
          bring space science closer to communities.
        </p>
        <a
          href={donateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-[#f65d2a] text-white font-bold rounded-full shadow-lg hover:bg-[#e54d1a] transition duration-300 text-lg"
        >
          Donate Now
        </a>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why Your Support Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-[#f65d2a]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#f65d2a] text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Space Outreach
              </h3>
              <p className="text-gray-300">
                We host school visits, space talks, and workshops to spark
                curiosity and passion for space exploration in young minds.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-[#f65d2a]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#f65d2a] text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                STEM Projects
              </h3>
              <p className="text-gray-300">
                Donations fund hands-on projects like mini Mars rovers,
                telescopes, and coding sessions that give students real-world
                experience.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-[#f65d2a]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#f65d2a] text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Community Events
              </h3>
              <p className="text-gray-300">
                From star-gazing nights to hackathons, we create opportunities
                for everyone to learn, share, and build together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Every Contribution Counts
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              No matter the size, your donation fuels our vision for a
              space-savvy future. Together, we can build a stronger foundation
              for education, innovation, and exploration in our community.
            </p>
            <a
              href={donateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#f65d2a] text-white font-semibold rounded-full shadow-md hover:bg-[#e54d1a] transition duration-300 text-lg"
            >
              Donate Today
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter and be the first to know about our
            impact and upcoming initiatives.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 backdrop-blur-md text-white placeholder-gray-400 px-6 py-3 rounded-full border border-white/20 focus:outline-none focus:border-[#f65d2a] flex-1"
            />
            <button className="bg-[#f65d2a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e54d1a] transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
