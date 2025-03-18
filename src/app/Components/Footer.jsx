import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import {
  faLinkedinIn,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className=" bg-orange-600 w-[100vw]">
        <div className="p-[4vw]">
          <div>
            <div>this is the footer</div>
            <div className="flex gap-4 md:gap-[4vw]">
              <Link href="">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{
                    width: "2.5rem", // Explicit dimensions
                    height: "2.5rem",
                  }}
                />
              </Link>
              <Link href="/">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  style={{
                    width: "2.5rem", // Explicit dimensions
                    height: "2.5rem",
                  }}
                />
                </Link>
                <Link href="/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{
                      width: "2.5rem", // Explicit dimensions
                      height: "2.5rem",
                    }}
                  />
                </Link>
              
            </div>
            <p>About</p>
            <p>Reach Out</p>
            <p>Partner with us</p>
            <p>Donate</p>
          </div>
        </div>
        <p className="text-center pb-4">
          Space Clubs 2025, All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
