import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import worldMap from "../assets/image/worldmap.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import VolunteerSection from "../components/VolunteerSection";
import { Link } from "react-router-dom";
import revolutionaari from "../assets/image/revolutionaari.jpg"
import empowered from "../assets/image/empowerEd.jpg"
import pawerRanger from "../assets/image/pawerRanger.jpg"
import green from "../assets/image/green.jpg"
import littleLegend from "../assets/image/littleLegend.png"
import impact from "../assets/image/impact.jpg"
import impact2 from "../assets/image/impact2.png"
import i1 from "../assets/image/i1.png"
import i2 from "../assets/image/i2.png"
import i3 from "../assets/image/volunteer/v11.png"



const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, visible] = useInView(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
};

const Section = ({ children, className = "" }) => {
  const [ref, visible] = useInView();
  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </section>
  );
};


const initiatives = [
  {
    name: "RevolutioNAARI",
    tagline: "Women Employment & Financial Literacy",
    desc: "Uplifting rural women through vocational skills, financial literacy workshops, and self-employment pathways — fostering lasting independence.",
    img: revolutionaari,
    href: "/wing/Revolutioनारी",
    badge: "bg-amber-500",
    icon: "♀",
  },
  {
    name: "Empowered",
    tagline: "Personality Development & Communication",
    desc: "Free classes for youth that build confidence, communication skills, and leadership — because every voice deserves to be heard.",
    img: empowered,
    href: "/wing/empowered",
    badge: "bg-green-700",
    icon: "✦",
  },
  {
    name: "Pawer Rangers",
    tagline: "Animal Welfare & Care",
    desc: "Compassionate volunteers working to feed, rescue, and rehabilitate stray animals — because every creature deserves kindness.",
    img: pawerRanger,
    href: "/wing/pawerrangers",
    badge: "bg-orange-600",
    icon: "🐾",
  },
  {
    name: "Green Squad",
    tagline: "Environmental Awareness & Cleanliness",
    desc: "Driving sustainability through tree plantation drives, cleanliness campaigns, and nature-education for a greener tomorrow.",
    img: green,
    href: "/wing/greensquad",
    badge: "bg-green-800",
    icon: "🌿",
  },
  {
    name: "Little Legends",
    tagline: "Education for Underprivileged Children",
    desc: "Bridging the education gap for children from marginalised communities — giving them tools, hope, and a story worth telling.",
    img: littleLegend,
    href: "/wing/empowered",
    badge: "bg-stone-600",
    icon: "⭐",
  },
];

const values = [
  { icon: "◈", title: "Compassion in Action", desc: "We believe empathy must translate into tangible change. Every initiative is rooted in listening first, then serving." },
  { icon: "◉", title: "Community First", desc: "We are built by the community, for the community. Sustainable change only happens when people come together." },
  { icon: "◆", title: "Inclusive Growth", desc: "No one is left behind. We celebrate every identity, background, and story — our diversity is our greatest strength." },
  { icon: "◇", title: "Youth as Catalysts", desc: "We invest in the young because they are not the future — they are the present force for a श्रेष्ठ भारत." },
  { icon: "◎", title: "Environmental Stewardship", desc: "A thriving planet is a prerequisite for everything else. We integrate nature-consciousness into all our work." },
];

const stats = [
  { num: 500, suffix: "+", label: "Lives Impacted" },
  { num: 5, suffix: "", label: "Active Wings" },
  { num: 3, suffix: "+", label: "Years of Service" },
  { num: 100, suffix: "+", label: "Volunteers" },
];

const galleryImgs = [
  i1,
  i2,
  i3
];

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="overflow-x-hidden font-['DM_Sans',_sans-serif] bg-[#F5F3EE] text-[#1A150D]">
      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── HERO ── */}
      <div className="relative min-h-[100svh] flex flex-col justify-end pb-16 pt-32 md:pb-20 md:pt-28 bg-[linear-gradient(to_bottom,rgba(26,21,13,0.72)_0%,rgba(26,21,13,0.45)_60%,rgba(26,21,13,0.88)_100%),url('/president.png')] bg-center bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-[#F99B2A] leading-tight mb-4 md:mb-6 max-w-4xl">
            A Step Towards
          </h1>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 max-w-4xl">
            श्रेष्ठ भारत<br />
            <em className="italic font-normal text-[#F99B2A]">Our Story</em>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-8 md:mb-10 font-light text-white/80">
            Born in the lanes of Lucknow, Askus Foundation is a youth-led movement weaving empowerment,
            nature, and education into the fabric of communities that deserve better.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#initiatives"
              className="px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A]"
            >
              Explore Our Wings
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hidden sm:flex">
          <span className="text-[10px] md:text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 md:h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="py-10 md:py-12 bg-[#1A150D]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-playfair text-4xl md:text-5xl font-bold text-[#F99B2A]">
                <CountUp end={s.num} suffix={s.suffix} />
              </p>
              <p className="text-xs md:text-sm mt-1 tracking-wide text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── STORY ── */}
      <Section className="py-16 md:py-24 px-6 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-[#E07B0A]">Who We Are</p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#1A150D]">
              A <em className="italic font-normal text-[#F99B2A]">diverse</em> &amp; inclusive<br />community
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-5 text-[#6B6157]">
              Askus Foundation was born from a simple belief — that ordinary young people can do
              extraordinary things when given the right platform. What started as a handful of friends
              determined to make a difference in Lucknow has grown into five active wings touching hundreds of lives.
            </p>
            <p className="text-base leading-relaxed mb-8 text-[#6B6157]">
              We work at the intersection of women's empowerment, youth development, animal welfare,
              and environmental action. Every volunteer, every drive, every class brings us closer to
              the India we know is possible.
            </p>
            <div className="flex items-center gap-4 p-4 sm:p-5 rounded-r-xl bg-[#FFF8ED] border-l-4 border-[#F99B2A]">
              <span className="text-2xl sm:text-3xl">🌱</span>
              <p className="font-playfair text-sm leading-relaxed italic text-[#4A4237]">
                "Community is everything. When everyone belongs, we are stronger and smarter together."
              </p>
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 relative z-10">
              <img
                src={impact}
                alt="Women empowerment"
                className="rounded-xl sm:rounded-2xl object-cover h-32 sm:h-40 md:h-52 w-full"
              />
              <img
                src={impact2}
                alt="Youth education"
                className="rounded-xl sm:rounded-2xl object-cover h-32 sm:h-40 md:h-52 w-full mt-4 sm:mt-6"
              />
              <img
                src={green}
                alt="Green squad"
                className="rounded-xl sm:rounded-2xl object-cover h-28 sm:h-36 md:h-44 w-full col-span-2"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 rounded-full blur-2xl opacity-40 bg-[#F99B2A]" />
            <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full blur-2xl opacity-30 bg-[#4D9E52]" />
          </div>
        </div>
      </Section>

      {/* ── Wings ── */}
      <div id="initiatives" className="py-16 md:py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <Section>
            <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3 text-[#E07B0A]">Our Wings</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1A150D]">
                Empowerment<br />
                <em className="italic font-normal text-[#F99B2A]">Initiatives</em>
              </h2>
              <p className="max-w-sm text-sm sm:text-base leading-relaxed text-[#6B6157]">
                Five wings, one mission: empowering communities through education, care, and sustainability.
              </p>
            </div>
          </Section>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item) => (
              <Section key={item.name}>
                <Link
                  to={item.href}
                  className="group flex flex-col rounded-3xl overflow-hidden h-full bg-[#F5F3EE] border border-[#E0DBCF] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(26,21,13,0.18)]"
                >
                  <div className="relative overflow-hidden h-48 sm:h-52 shrink-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a150d99] to-transparent" />
                    <span className={`absolute top-4 left-4 ${item.badge} text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wide uppercase`}>
                      {item.name}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase mb-2 text-[#E07B0A]">
                      {item.tagline}
                    </p>
                    <p className="text-sm leading-relaxed mb-4 text-[#6B6157] flex-1">{item.desc}</p>
                    <span className="inline-flex items-center gap-1.5 group-hover:gap-3 text-sm font-semibold transition-all duration-300 text-[#E07B0A]">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Section>
            ))}
          </div>
        </div>
      </div>


      <VolunteerSection />

      {/* ── VALUES ── */}
      <Section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3 text-[#F99B2A]">What Drives Us</p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Our Core <em className="italic font-normal text-[#F99B2A]">Values</em>
          </h2>
          <p className="max-w-xl mb-10 md:mb-14 text-base sm:text-lg leading-relaxed">
            Demonstrated through every class, every drive, every act of care — these are the principles that bind us.
          </p>

          <div className="space-y-2 md:space-y-1">
            {values.map((v) => (
              <div
                key={v.title}
                className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-5 md:p-6 rounded-2xl cursor-default transition-all duration-300 sm:border-l-[3px] border-l-transparent sm:hover:border-l-[#F99B2A] hover:bg-[#F99B2A]/5"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg sm:text-xl text-[#F99B2A] bg-[#F99B2A]/15 transition-all duration-300 group-hover:bg-[#F99B2A]/25">
                  {v.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-1 sm:mb-2">
                    <h3 className="font-semibold text-lg sm:text-xl">{v.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#6B6157]">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── GALLERY ── */}
      <Section className="py-16 md:py-24 px-6 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3 text-[#E07B0A]">Memories</p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-14 leading-tight text-[#1A150D]">
            Moments worth <em className="italic font-normal text-[#F99B2A]">remembering</em>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImgs.map((src, i) => (
              <a
                key={i}
                href="https://askusfoundation.org/gallery"
                className="group overflow-hidden rounded-2xl block h-56 sm:h-64 md:h-72 w-full"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <Link to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-full transition-all duration-300 text-sm border-2 border-[#F99B2A] text-[#E07B0A] hover:bg-[#F99B2A] hover:text-white"
            >
              View Full Gallery
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* ── MAP / FIND US ── */}
      <Section className="py-16 md:py-24 w-full h-full bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.3em] uppercase mb-3 text-[#E07B0A]">Find Us</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1A150D]">
              Where we <em className="italic font-normal text-[#F99B2A]">operate</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Custom World Map */}
            <div className="lg:col-span-2 rounded-3xl w-full h-full min-h-[250px] sm:min-h-[350px] overflow-hidden relative flex items-center justify-center p-2 sm:p-6 bg-[#FBF9F3]">
              <img src={worldMap} alt="World Map" className="w-full h-auto object-contain" />

              {/* Lucknow Marker */}
              <div className="absolute left-[69%] top-[47%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative z-10 group flex flex-col items-center">
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 md:mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-y-2 group-hover:translate-y-0 pointer-events-none z-50">
                    <div className="bg-white shadow-xl border border-gray-200 rounded-xl px-3 py-2 md:px-4 md:py-3 min-w-[200px] md:min-w-[220px]">
                      <p className="font-semibold text-xs md:text-sm text-gray-900">
                        AskUs Foundation
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-600 mt-1">
                        Sainik Nagar, Ramprasad Bismil Nagar,
                        Alambagh, Lucknow, UP 226005
                      </p>
                    </div>
                    {/* Arrow */}
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-white border-r border-b border-gray-200 rotate-45 mx-auto -mt-1 md:-mt-2" />
                  </div>
                  {/* Marker */}
                  <FaMapMarkerAlt className="text-2xl sm:text-3xl drop-shadow-lg cursor-pointer hover:scale-110 transition-transform text-[#F99B2A]" />
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-4 w-full">
              {/* Address */}
              <div className="p-5 md:p-6 rounded-2xl flex gap-4 items-start bg-[#F5F3EE] border border-gray-200 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-[#F5E6D1]">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1 text-[#1A150D]">Our Address</p>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#6B6157]">
                    Kashi Tower Above Mishra Electronics <br /> Main Market Telibagh<br /> Lucknow, UP 226002
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="p-5 md:p-6 rounded-2xl flex gap-4 items-start bg-[#F5F3EE] border border-gray-200 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-[#F5E6D1]">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1 text-[#1A150D]">Call Us</p>
                  <a href="tel:+919451481141" className="text-sm font-medium text-[#E07B0A] hover:underline">+91 94514 81141</a>
                  <p className="text-[11px] sm:text-xs mt-1 text-[#8A8070]">Mon – Sat, 10:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 md:p-6 rounded-2xl flex gap-4 items-start bg-[#F5F3EE] border border-gray-200 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg bg-[#F5E6D1]">
                  ✉️
                </div>
                <div className="w-full overflow-hidden">
                  <p className="font-semibold text-sm mb-1 text-[#1A150D]">Email Us</p>
                  <a href="mailto:askusfoundation.lko@gmail.com" className="text-xs sm:text-sm font-medium break-all text-[#E07B0A] hover:underline">
                    askusfoundation.lko@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── CTA BANNER ── */}
      <CTA />

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}