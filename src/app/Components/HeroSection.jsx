import Image from "next/image";
import Logo from "../../../public/images/space-clubs-logo.jpg";

const HeroSection = () => {
  return (
    <>
      <>
        <section className="mx-[4vw] text-center mt-[35vh]">
          
    <div className="flex justify-center ">
<Image className="w-[40vw]" src={Logo} alt="Logo" width={100} height={100}/>

    </div>
          <p className="text-2xl mb-8 text-white">
            Where curiosity meets the cosmos
          </p>
          <p className="text-4xl text-white">Insipre | Educate | Engage</p>
        </section>
      </>
    </>
  );
};

export default HeroSection;
