import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <>
        <section className="mx-[4vw] text-center mt-[35vh]">
          <div className="flex justify-center ">
            <Image
              className="w-[40vw]"
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <p className="text-2xl mb-8 text-white">
            Where curiosity meets the cosmos
          </p>
          <p className="text-4xl text-white">Insipre | Educate | Engage</p>

          <div className="mt-16 flex gap-6 text-center justify-center">
          <Link href='/'>
        <button className="bg-[#f65d2a] text-white rounded-full py-4 w-[14vw] font-semibold">
          Join our community
        </button>
        </Link>
        <Link href='/'>
        <button className="bg-[#f65d2a] text-white rounded-full py-4 w-[14vw] font-semibold">
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
