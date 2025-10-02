"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy load heavy components
const HeroSection = dynamic(() => import("./Components/HeroSection"), {
  loading: () => <div className="h-screen bg-black/20 animate-pulse" />,
});
const ActivitiesSection = dynamic(() => import("./Components/ActivitiesSection"), {
  loading: () => <div className="h-96 bg-black/20 animate-pulse" />,
});
const UpcomingEvents = dynamic(() => import("./Components/UpcomingEvents"), {
  loading: () => <div className="h-96 bg-black/20 animate-pulse" />,
});
const TeamPreview = dynamic(() => import("./Components/TeamPreview"), {
  loading: () => <div className="h-96 bg-black/20 animate-pulse" />,
});
const JoinMailList = dynamic(() => import("./Components/JoinMailList"), {
  loading: () => <div className="h-64 bg-black/20 animate-pulse" />,
});

export default function Home() {
  // Memoize partner logos
  const partnerLogos = useMemo(() => [
    { src: "/images/partners/NASRDA-Logo_N2.png", alt: "NASRDA" },
    { src: "/images/partners/wsw_naija.png", alt: "WSW Naija" },
    { src: "/images/partners/unisec.png", alt: "UNISEC" },
    { src: "/images/partners/sgac.png", alt: "SGAC" },
    { src: "/images/partners/spacebar.png", alt: "Space Bar" },
    { src: "/images/partners/spacehubs.png", alt: "Space Hubs" },
    { src: "/images/partners/cydata.png", alt: "CyData" },
    { src: "/images/partners/rainin.png", alt: "Rainin" },
    { src: "/images/partners/Milsat_Logo_White_0096effeda.png", alt: "Milsat" },
    { src: "/images/partners/bans.png", alt: "BANS" },
  ], []);

  useEffect(() => {
    // Load AOS only after component mounts
    import("aos").then((AOSModule) => {
      const AOS = AOSModule.default;
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        disable: 'mobile', // Disable on mobile for better performance
      });
    });

    // Import CSS separately
    import("aos/dist/aos.css");
  }, []);

  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/home-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={60}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>
      
      <HeroSection />
      
      <section className="mt-28 flex justify-center">
        <Image
          src="/images/club-icons.png"
          alt="Club Icons"
          width={1200}
          height={400}
          className="w-[90%] max-w-6xl h-auto"
          priority
          quality={70}
          sizes="(max-width: 768px) 90vw, 1200px"
        />
      </section>
      
      <section className="mt-28 p-[4vw]">
        <div className="p-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-[4vw] mb-8">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed">
              We are a community of students and professionals united by our
              passion for SPACE EXPLORATION and INNOVATION. Whether you're a
              stargazer, aspiring astronaut, or tech enthusiast, our club is
              the launchpad for your cosmic journey. Our diverse membership
              includes undergraduate and graduate students, faculty members,
              and space industry professionals who share a common goal: to
              explore the mysteries of the universe and push the boundaries of
              human knowledge.
            </p>
          </div>
        </div>

        <div className="p-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-[4vw] mb-8">
              What We Do
            </h2>
            <p className="text-lg leading-relaxed">
              Our club engages in a wide range of activities designed to
              educate, inspire, and prepare the next generation of space
              explorers. From hands-on rocket building workshops to deep-space
              observation sessions, we provide opportunities for both learning
              and practical experience. We collaborate with industry partners, and organize regular
              events that bring together space enthusiasts from all
              backgrounds.
            </p>
          </div>
        </div>

        <div className="p-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-[4vw] mb-8">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed">
              We envision a future where space exploration is accessible to
              everyone. Our mission is to inspire, EDUCATE, and ENGAGE
              students in the wonders of space. Through hands-on projects,
              workshops, and events, we aim to foster a community where the
              fascination with the universe becomes a catalyst for learning
              and collaboration. We strive to be a leading force in student
              space exploration, contributing to the advancement of space
              science and technology while making space education engaging and
              accessible to all.
            </p>
          </div>
        </div>
      </section>
      
      <ActivitiesSection />
      <TeamPreview />
      <UpcomingEvents />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-[4vw] mb-12 text-center">
            Some of Our Amazing Supporters
          </h2>
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {partnerLogos.map((logo, index) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={208}
                  height={208}
                  className="w-[13rem] h-[13rem] object-contain"
                  quality={80}
                  loading={index < 4 ? "eager" : "lazy"}
                  sizes="208px"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-white">
            Read our Reports
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Access our comprehensive reports, research findings, and
            publications from Space Clubs LASU activities and events.
          </p>
          <a
            href="/reports"
            className="inline-block bg-[#f65d2a] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e54d1a] transition-colors duration-300"
          >
            View All Reports →
          </a>
        </div>
      </section>

      <JoinMailList />
    </main>
  );
}