import { useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      mirror: true,
      disable: "mobile",
    });
  }, []);

  return (
    <section className="mx-[4vw] text-center relative">
      <div
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-duration="800"
      ></div>

      <h1
        className="mt-[12vh] md:mt-[15vh] mb-8 text-4xl sm:text-[1.5rem] md:text-5xl lg:text-7xl text-white lg:px-32 font-medium"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        We are on a mission to Inspire, Educate, and Engage students.
      </h1>
      <p className="text-[1.1rem] sm:text-2xl">
        Empowering them to lead Africa's journey into space and advanced
        technology
      </p>

      <div className="mt-16 flex flex-row gap-4 sm:gap-6 md:gap-[6vw] text-center justify-center items-center">
        <Link href="/join" prefetch={false}>
          <button
            className="w-[140px] sm:w-[180px] bg-[#f65d2a] text-white rounded-full py-4 font-semibold hover:bg-[#e54d1a] transition-colors duration-300 text-sm sm:text-base"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            Join our community
          </button>
        </Link>
        <Link href="/donate" prefetch={false}>
          <button
            className="w-[140px] sm:w-[180px] bg-transparent border-2 border-[#f65d2a] text-[#f65d2a] rounded-full py-4 font-semibold hover:bg-[#f65d2a]/10 transition-colors duration-300 text-sm sm:text-base"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Donate
          </button>
        </Link>
      </div>

      {/* Side Scroll Cue */}
      <div
        className="absolute right-8 bottom-2/5 -translate-y-1/2 hidden md:flex flex-col items-center gap-2"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        <span className="text-white/60 text-sm rotate-90 whitespace-nowrap mb-2">
          Scroll
        </span>
        <svg
          className="w-6 h-6 text-white/60 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default memo(HeroSection);
