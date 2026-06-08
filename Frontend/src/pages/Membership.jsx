// src/pages/Membership.jsx

import { FaUsers, FaGraduationCap, FaLeaf, FaPaw, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

export default function Membership() {
  const plans = [
    {
      name: "Bronze",
      price: "₹499",
      features: [
        "Monthly Newsletter",
        "Community Access",
        "Event Invitations",
      ],
      featured: false,
    },
    {
      name: "Silver",
      price: "₹999",
      features: [
        "Everything in Bronze",
        "Volunteer Priority",
        "Workshops & Training",
      ],
      featured: false,
    },
    {
      name: "Gold",
      price: "₹2499",
      features: [
        "Everything in Silver",
        "Leadership Programs",
        "Recognition Certificate",
        "Special Impact Events",
      ],
      featured: true,
    },
  ];

  const benefits = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description:
        "Support educational initiatives that empower children and youth.",
    },
    {
      icon: <FaUsers />,
      title: "Women Empowerment",
      description:
        "Help create opportunities and independence for women in communities.",
    },
    {
      icon: <FaPaw />,
      title: "Animal Welfare",
      description:
        "Contribute to the care and protection of animals in need.",
    },
    {
      icon: <FaLeaf />,
      title: "Sustainability",
      description:
        "Promote environmental awareness and sustainable living.",
    },
  ];

  return (
    <div className="font-['DM_Sans',_sans-serif] bg-[#F8F4EE] text-[#222]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
            alt="Membership Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Become An
            <span className="block text-yellow-400 mt-2">AskUs Member</span>
          </motion.h1>

          <p className="mt-6 md:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            Join a community committed to empowering women, educating children,
            protecting animals, and building a sustainable future.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="#membershipform"
              className="px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A]"
            >
              Join Membership
            </a>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16">
            Why Become A Member?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 md:p-8 hover:-translate-y-2 transition duration-300 border border-gray-100"
              >
                <div className="text-3xl md:text-4xl text-yellow-500 mb-4 md:mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#111] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-500">500+</h3>
            <p className="mt-2 md:mt-3 text-sm md:text-base opacity-80">Lives Impacted</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-500">100+</h3>
            <p className="mt-2 md:mt-3 text-sm md:text-base opacity-80">Volunteers</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-500">50+</h3>
            <p className="mt-2 md:mt-3 text-sm md:text-base opacity-80">Communities Reached</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-500">100+</h3>
            <p className="mt-2 md:mt-3 text-sm md:text-base opacity-80">Projects Completed</p>
          </div>
        </div>
      </section>

      {/* ── WHY JOIN ── */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="w-full order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
              alt="Why Join"
              className="w-full h-[300px] sm:h-[400px] lg:h-auto rounded-2xl md:rounded-3xl shadow-xl object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              Together We Create Impact
            </h2>

            <div className="space-y-4 md:space-y-5">
              {[
                "Support Women Empowerment",
                "Improve Rural Education",
                "Protect Street Animals",
                "Promote Sustainability",
                "Join Meaningful Campaigns",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <FaCheck className="text-yellow-600 text-xs md:text-sm" />
                  </div>
                  <span className="text-base md:text-lg font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP FORM ── */}
      <section id="membershipform" className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-12">

          {/* Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">
              Become A Member
            </h2>

            <form className="space-y-4 md:space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 md:px-5 md:py-4 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all bg-[#FBF9F3]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 md:px-5 md:py-4 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all bg-[#FBF9F3]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 md:px-5 md:py-4 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all bg-[#FBF9F3]"
              />

              <select className="w-full border border-gray-200 rounded-xl px-4 py-3.5 md:px-5 md:py-4 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all bg-[#FBF9F3] text-gray-600">
                <option>Select Membership Plan</option>
                {plans.map((plan) => (
                  <option key={plan.name} value={plan.name}>
                    {plan.name} - {plan.price}
                  </option>
                ))}
              </select>

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 md:px-5 md:py-4 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all bg-[#FBF9F3] resize-none"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 py-4 rounded-xl font-bold text-gray-900 transition-colors shadow-md mt-2"
              >
                Submit Membership Request
              </button>
            </form>
          </div>

          {/* Payment Info */}
          <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-yellow-500 to-orange-500 p-6 sm:p-8 md:p-10 text-white shadow-xl h-fit">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">
              Payment Information
            </h2>

            <div className="space-y-5 md:space-y-6 text-base md:text-lg">
              <div className="bg-white/10 rounded-xl p-4 md:p-5 backdrop-blur-sm border border-white/20">
                <p className="text-sm opacity-90 mb-1 uppercase tracking-wider font-semibold">Bank Name</p>
                <h3 className="font-bold text-xl md:text-2xl">IndusInd Bank</h3>
              </div>

              <div className="bg-white/10 rounded-xl p-4 md:p-5 backdrop-blur-sm border border-white/20">
                <p className="text-sm opacity-90 mb-1 uppercase tracking-wider font-semibold">Account Holder</p>
                <h3 className="font-bold text-lg md:text-xl">Revolutionaari AskUs Foundation</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 rounded-xl p-4 md:p-5 backdrop-blur-sm border border-white/20">
                  <p className="text-sm opacity-90 mb-1 uppercase tracking-wider font-semibold">Account Number</p>
                  <h3 className="font-bold text-lg">XXXX XXXX 9200</h3>
                </div>

                <div className="bg-white/10 rounded-xl p-4 md:p-5 backdrop-blur-sm border border-white/20">
                  <p className="text-sm opacity-90 mb-1 uppercase tracking-wider font-semibold">IFSC Code</p>
                  <h3 className="font-bold text-lg">INDB0000019</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <CTA />

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}