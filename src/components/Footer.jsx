import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "../assets/image/logo.png"

export default function Footer() {
  return (
    <footer className="bg-[#14294B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="AskUs Foundation"
              className="h-20 mb-6 "
            />

            <p className="text-gray-300 leading-relaxed text-sm">
              Empowering communities through education, women empowerment,
              animal welfare, and environmental sustainability.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300">
              Kashi Tower Above Mishra Electronics <br /> Main Market Telibagh<br /> Lucknow,<br />Uttar Pradesh 226002

              <div className="pt-4">
                <a
                  href="tel:+919451481141"
                  className="block hover:text-[#F99B2A] transition"
                >
                  +91 94514 81141
                </a>

                <a
                  href="mailto:askusfoundation.lko@gmail.com"
                  className="block hover:text-[#F99B2A] transition"
                >
                  askusfoundation.lko@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              <a
                href="https://www.facebook.com/p/AskUs-Foundation-Lko-61565764890229/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#F99B2A] flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/askusfoundation.lko/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#F99B2A] flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/askus-foundation/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#F99B2A] flex items-center justify-center hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://x.com/ananyapandey_84"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-[#F99B2A] flex items-center justify-center hover:scale-110 transition"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">
              Pages
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="/" className="hover:text-[#F99B2A] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-[#F99B2A] transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="/initiatives" className="hover:text-[#F99B2A] transition">
                  Initiatives
                </a>
              </li>

              <li>
                <a href="/projects" className="hover:text-[#F99B2A] transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="/impact" className="hover:text-[#F99B2A] transition">
                  Impact
                </a>
              </li>

              <li>
                <a href="/membership" className="hover:text-[#F99B2A] transition">
                  Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Initiatives */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">
              Our Initiatives
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>
                <a
                  href="/revolutionaari"
                  className="hover:text-[#F99B2A] transition"
                >
                  RevolutioNAARI
                </a>
              </li>

              <li>
                <a
                  href="/empowered"
                  className="hover:text-[#F99B2A] transition"
                >
                  Empowered
                </a>
              </li>

              <li>
                <a
                  href="/pawer-rangers"
                  className="hover:text-[#F99B2A] transition"
                >
                  Pawer Rangers
                </a>
              </li>

              <li>
                <a
                  href="/green-squad"
                  className="hover:text-[#F99B2A] transition"
                >
                  Green Squad
                </a>
              </li>

              <li>
                <a
                  href="/little-legends"
                  className="hover:text-[#F99B2A] transition"
                >
                  Little Legends
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} AskUs Foundation. All Rights Reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy-policy"
                className="hover:text-[#F99B2A] transition"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="hover:text-[#F99B2A] transition"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}