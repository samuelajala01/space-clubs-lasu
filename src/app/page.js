import Image from "next/image";
import HomePage from "./Components/HomePage";
import HeroSection from "./Components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="mt-72 p-[4vw]">
        <div className="p-4 mb-8">
          <div className="">
            <h2 className="text-4xl md:text-[4vw] mb-8">Who we are</h2>
            <p>
            We are a community of students and professionals united by our passion for SPACE EXPLORATION and INNOVATION. Whether you’re a stargazer, aspiring astronaut, or tech enthusiast, our club is the launchpad for your cosmic journey
            </p>
          </div>
        </div>
        <div className="p-4 mb-8">
          <div className="">
            <h2 className="text-4xl md:text-[4vw] mb-8">What we do</h2>
            <p>
              Lorem ipsum dolor site amet consecteur colos ainti afect keylio.
              Ladis awasher um doin g setials, meth and dfuo areg thdin idfnifn
              kedn rrirnroromr fifnojr wassa lok shfeo naoq deoje. meth and dfuo
              areg thdin idfnifn kedn rrirnroromr fifnojr wassa lok shfeo naoq
              deoje meth and dfuo areg thdin idfnifn kedn rrirnroromr fifnojr
              colos ainti afect keylio. Ladis awasher um doin g setials, meth
              and dfuo areg thdin idfnifn kedn rrirnroromr fifnojr wassa lok
              shfeo naoq deoje
            </p>
          </div>
        </div>
        <div className="p-4 mb-8">
          <div className="">
            <h2 className="text-4xl md:text-[4vw] mb-8">Vision</h2>
            <p>
              Lorem ipsum dolor site amet consecteur colos ainti afect keylio.
              Ladis awasher um doin g setials, meth and dfuo areg thdin idfnifn
              kedn rrirnroromr fifnojr wassa lok shfeo naoq deoje. meth and dfuo
              areg thdin idfnifn kedn rrirnroromr fifnojr wassa lok shfeo naoq
              deoje meth and dfuo areg thdin idfnifn kedn rrirnroromr fifnojr
              colos ainti afect keylio. Ladis awasher um doin g setials, meth
              and dfuo areg thdin idfnifn kedn rrirnroromr fifnojr wassa lok
              shfeo naoq deoje
            </p>
          </div>
        </div>
        <div className="p-4 mb-8">
          <div className="">
            <h2 className="text-4xl md:text-[4vw] mb-8">Who we are</h2>
            <p>
            Our mission is to inspire, EDUCATE, and ENGAGE students in the wonders of space. Through hands-on projects, workshops, and events, we aim to foster a community where the fascination with the universe becomes a catalyst for learning and collaboration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
