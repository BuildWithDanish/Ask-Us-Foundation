import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/image/worldmap.png";
import vol1 from "../assets/image/volunteer/v1.png"
import vol2 from "../assets/image/volunteer/v2.png"
import vol3 from "../assets/image/volunteer/v3.png"
import hero from "../assets/image/impact.jpg";
import CTA from "../components/CTA";
import Stats from "../components/Stats";
import { Link } from "react-router-dom";

const impactAreas = [
  {
    title: "RevolutioNAARI",
    description:
      "Providing women with employment opportunities, skill development, and financial literacy support.",
  },
  {
    title: "EmpowerEd",
    description:
      "Building confidence and communication skills through education and mentorship.",
  },
  {
    title: "Little Legends",
    description:
      "Supporting children with quality education and learning opportunities.",
  },
  {
    title: "Green Squad",
    description:
      "Creating environmental awareness through sustainability initiatives.",
  },
  {
    title: "Pawer Rangers",
    description:
      "Promoting compassion and welfare for street animals.",
  },
];

export default function Impact() {
  return (
    <div className="font-['DM_Sans',_sans-serif]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[85svh] flex items-center justify-center pt-20 pb-16">
        <img
          src={hero}
          alt="Impact background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-white text-center md:text-left">
          <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#F99B2A] mb-4 md:mb-6 text-sm md:text-base font-bold">
            Our Impact
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Every Number
            <br />
            Represents
            <br />
            A Life Changed
          </h1>

          <p className="mt-6 md:mt-8 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed mx-auto md:mx-0">
            From empowering women and educating children to supporting
            families and protecting the environment, our impact is measured
            in transformed lives.
          </p>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}

      <Stats />

      {/* ── IMPACT AREAS ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#F99B2A] mb-3 md:mb-4 text-xs md:text-sm font-bold">
              Impact Areas
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A150D]">
              How We Create Impact
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactAreas.map((item) => (
              <div
                key={item.title}
                className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#F5F3EE] hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#1A150D]">
                  {item.title}
                </h3>
                <p className="mt-3 md:mt-5 text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── ASKUS IMMORTALS ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#F99B2A] mb-3 md:mb-4 text-xs md:text-sm font-bold">
            Our Volunteers
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A150D]">
            Hands and hearts behind the mission
          </h2>

          <p className="mt-6 md:mt-8 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
            Behind every campaign, every outreach activity and every impact
            story stands a passionate group of volunteers. The AskUs
            Immortals are the driving force that transforms ideas into
            action and compassion into change.
          </p>

          <div className="grid items-center sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 md:mt-16 text-left">
            {[vol1, vol2, vol3].map((item) => (
              <div
                className="rounded-2xl md:rounded-3xl overflow-hidden bg-[#F5F3EE] transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <img
                  src={item}
                  alt={`Volunteer ${item}`}
                  className="w-full h-56 md:h-72 object-contain"
                />

              </div>
            ))}
          </div>

          <Link
            to="/about#volunteer"
            className="w-full md:w-fit mx-auto mt-4 sm:w-auto px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-lg hover:shadow-xl block"
          >
            View All
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTA />

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}