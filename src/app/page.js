"use client";

import HeroSection from "./Components/HeroSection";
import ActivitiesSection from "./Components/ActivitiesSection";
import UpcomingEvents from "./Components/UpcomingEvents";
import { useEffect } from "react";
import TeamPreview from "./Components/TeamPreview";
import JoinMailList from "./Components/JoinMailList";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      mirror: true,
    });
  }, []);
  return (
    <>
      {/* <div className="fixed inset-0 backdrop-blur-sm -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/5 to-black/10 z-10"></div>
        <img
          // src="/images/event-bg.jpg"
          src="/images/home-bg.png"
          alt="Space Events Background"
          className="w-full h-full object-cover"
        />
      </div> */}
      <main>
        <HeroSection />
        <section className="mt-28 flex justify-center">
          <Image
            src="/images/club-icons.png"
            alt="Club Icons"
            width={1200}
            height={400}
            className="w-[90%] max-w-6xl h-auto"
            priority
            loading="eager"
            quality={75}
          />
        </section>
        <section className="mt-28 p-[4vw]">
          <div className="p-4 mb-8">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-4xl md:text-[4vw] mb-8"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-offset="100"
              >
                Who We Are
              </h2>
              <p
                className="text-lg leading-relaxed"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-offset="100"
              >
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
              <h2
                className="text-4xl md:text-[4vw] mb-8"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-offset="100"
              >
                What We Do
              </h2>
              <p
                className="text-lg leading-relaxed"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-offset="100"
              >
                Our club engages in a wide range of activities designed to
                educate, inspire, and prepare the next generation of space
                explorers. From hands-on rocket building workshops to deep-space
                observation sessions, we provide opportunities for both learning
                and practical experience. We collaborate with industry partners,
                participate in national competitions, and organize regular
                events that bring together space enthusiasts from all
                backgrounds.
              </p>
            </div>
          </div>

          <div className="p-4 mb-8">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-4xl md:text-[4vw] mb-8"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-offset="100"
              >
                Our Vision
              </h2>
              <p
                className="text-lg leading-relaxed"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-offset="100"
              >
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
            <h2
              className="text-4xl md:text-[4vw] mb-12 text-center"
              data-aos="fade-up"
            >
              Some of Our Amazing Supporters
            </h2>
            <div
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-8"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
                {[
                  { src: "/images/partners/wsw_naija.png", alt: "WSW Naija" },
                  { src: "/images/partners/SpaceClub3.png", alt: "Space Club" },
                  { src: "/images/partners/sgac.png", alt: "SGAC" },
                  { src: "/images/partners/spacebar.png", alt: "Space Bar" },
                  { src: "/images/partners/rainin.png", alt: "Rainin" },
                  { src: "/images/partners/cydata.png", alt: "CyData" },
                  { src: "/images/partners/nimeche.png", alt: "NIMECHE" },
                  { src: "/images/partners/bans.png", alt: "BANS" },
                  {
                    src: "/images/partners/Milsat_Logo_White_0096effeda.png",
                    alt: "Milsat",
                  },
                  { src: "/images/partners/NASRDA-Logo_N2.png", alt: "NASRDA" },
                  { src: "/images/partners/AESA LOGO-1.png", alt: "AESA" },
                  {
                    src: "/images/partners/spaceclubfuta.png",
                    alt: "Space Club FUTA",
                  },
                  { src: "/images/partners/spacehubs.png", alt: "Space Hubs" },
                ].map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={500}
                    height={500}
                    className="w-[13rem] h-[13rem] object-contain"
                    data-aos="zoom-in"
                    quality={100}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <JoinMailList />
      </main>
    </>
  );
}
