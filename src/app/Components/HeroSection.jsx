import Image from "next/image";
import { useEffect } from "react";
import Logo from "../../../public/images/Logo-light.png";
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
    });
  }, []);
  return (
    <>
      <>
        <section className="mx-[4vw] text-center">
          <div
            className="flex justify-center "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Image
              className="w-[40vw] mt-[27vh] mb-12"
              src={Logo}
              alt="Logo"
              width={500}
              height={100}
            />
          </div>
          {/* <p className="text-2xl mb-8 text-white">
            Where curiosity meets the cosmos
          </p> */}
          <p
            className="text-3xl text-white"
            data-aos="fade-down"
            
            data-aos-duration="800"
          >
            Inspire | Educate | Engage
          </p>

          <div className="mt-16 flex gap-6 md:gap-[8vw] text-center justify-center">
            <Link href="/join">
              <button
                className="bg-[#f65d2a] text-white rounded-full py-4 w-[14vw] font-semibold hover:bg-[#e54d1a] transition-colors duration-300"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                Join our community
              </button>
            </Link>
            <Link href="/donate">
              <button
                className="bg-[#f65d2a] text-white rounded-full py-4 w-[14vw] font-semibold hover:bg-[#e54d1a] transition-colors duration-300"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                Donate
              </button>
            </Link>
          </div>
        </section>
      </>
    </>
  );
};

export default HeroSection;
