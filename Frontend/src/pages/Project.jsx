// src/pages/Projects.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowRight } from "react-icons/fa";
import empowerEd from "../assets/image/empowerEd.jpg";
import revolutionaari from "../assets/image/revolutionaari.jpg"
import hero from "../assets/image/gallery2.png";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 2,
    title: "Revolutioनारी",
    category: "Community Development",
    description:
      "She isn’t asking for sympathy — she’s asking for opportunity.That’s what Revolutioनारी stands for — a movement where underprivileged women rise with strength, skill, and self-respect.",
    image: revolutionaari,
    reverse: false,
  },
  {
    id: 1,
    title: "EmpowerEd",
    category: "Community Development",
    description:
      "Under EmpowerEd, we run our flagship program “AskUs Kaksha”, which provides completely free classes to children from marginalized and rural communities.",
    image: empowerEd,
    reverse: true,
  }
];

export default function Projects() {
  return (
    <div className="font-['DM_Sans',_sans-serif]">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[82svh] flex items-center pt-20 pb-16">
        <img
          src={hero}
          alt="Projects Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-white text-center flex flex-col items-center mt-10 md:mt-0">
          <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#F99B2A] mb-4 md:mb-6 text-sm md:text-base font-bold">
            AskUs Foundation Projects
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-4xl mx-auto">
            Creating
            <br />
            Lasting Impact
            <br />
            Through Action
          </h1>

          <p className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-gray-300 mx-auto leading-relaxed">
            Every project is designed to solve real challenges, empower
            communities, and build a stronger future for those who need it
            most.
          </p>

          
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 md:py-24 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#F99B2A] mb-3 md:mb-4 text-xs md:text-sm font-bold">
            What We Build
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A150D] leading-tight">
            Transforming Communities
            <span className="block italic text-[#F99B2A] mt-1 md:mt-2">
              One Project At A Time
            </span>
          </h2>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From education and women empowerment to environmental sustainability
            and community welfare, our projects are designed to create
            measurable impact and long-term change.
          </p>
        </div>
      </section>

      {/* ── PROJECTS LOOP ── */}
      {projects.map((project, index) => (
        <section
          key={project.title}
          className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-[#F5F3EE]" : "bg-white"
            }`}
        >
          <div
            className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center ${project.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
          >
            {/* IMAGE */}
            <div className="overflow-hidden rounded-2xl md:rounded-[32px] w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* CONTENT */}
            <div className="text-center lg:text-left">
              <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#F99B2A] text-xs md:text-sm mb-3 md:mb-4 font-bold">
                {project.category}
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A150D]">
                {project.title}
              </h2>

              <p className="mt-5 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <Link
                to={`/project/${project.id}`}
                className="mt-8 md:mt-10 inline-flex items-center justify-center gap-3 border-2 border-[#F99B2A] text-[#F99B2A] px-8 py-3.5 md:py-4 rounded-full hover:bg-[#F99B2A] hover:text-white hover:scale-105 transition-all duration-300 w-full sm:w-auto font-semibold"
              >
                Explore Project
                <FaArrowRight className="text-sm md:text-base" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── IMPACT STATS ── */}
      <section className="bg-[#1A150D] py-16 md:py-24 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#F99B2A]">
                500+
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/60">
                Lives Impacted
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#F99B2A]">
                100+
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/60">
                Volunteers
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#F99B2A]">
                50+
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/60">
                Community Events
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#F99B2A]">
                3+
              </h3>
              <p className="mt-2 text-sm md:text-base text-white/60">
                Years Of Impact
              </p>
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