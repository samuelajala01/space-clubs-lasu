import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import {
  faLinkedinIn,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Space Clubs</h3>
            <p className="text-sm">
              Empowering the next generation of space explorers through
              education, innovation, and hands-on experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-200 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-orange-200 transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-orange-200 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-orange-200 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/login"
                  className="hover:text-orange-200 transition-colors"
                >
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="mailto:spaceclublasu@gmail.com">spaceclublasu@gmail.com</a></li>
              <li>Phone: <a href='tel:+2349071820601'>+234 907 182 0601</a></li>
              <li>Address: Lagos State University, Epe</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/space-clubs-lasu/"
                className="hover:text-orange-200 transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
              </Link>
              <Link
                href="https://x.com/lasu_space"
                className="hover:text-orange-200 transition-colors"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com/spaceclubs"
                className="hover:text-orange-200 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-500 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Space Clubs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
