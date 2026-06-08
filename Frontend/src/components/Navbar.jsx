// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import Button from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[95%] z-50 rounded-b-3xl bg-white shadow-sm border-b border-gray-100">
      <div className="w-full px-4 md:px-8 flex items-center justify-between h-[90px]">

        {/* ── LEFT: Logo ── */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="AskUs Foundation" className="h-16 md:h-20 w-auto" />
        </Link>

        {/* ── CENTER: Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-7 text-[14px] text-black-500 mx-auto">
          <li>
            <Link to="/" className="font-semibold text-xl hover:text-yellow-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/initiative" className="text-xl font-semibold hover:text-yellow-500 transition-colors">
              Initiative
            </Link>
          </li>

          {/* Project Dropdown (Desktop: Hover) */}
          <li className="relative group">
            <div className="flex items-center gap-1 cursor-pointer py-4">
              <h1 className="text-xl font-semibold group-hover:text-yellow-500 transition-colors">
                Projects
              </h1>
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="absolute left-0 top-full w-72 bg-[#FBF9F3]/95 backdrop-blur-md rounded-3xl border border-[#E8E1D4] shadow-[0_20px_60px_rgba(0,0,0,0.12)] py-3 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              <Link
                to="/projects"
                className="flex items-center justify-between px-6 py-4 text-xl font-semibold text-[#1A150D] hover:text-[#F99B2A] transition-all duration-200"
              >
                All Projects
                <span>→</span>
              </Link>
              <div className="mx-4 h-px bg-[#E8E1D4]" />
              <Link
                to="/project/1"
                className="block px-6 py-4 text-[#5F584D] hover:text-[#F99B2A] hover:pl-8 transition-all duration-200"
              >
                EmpowerEd
              </Link>
              <Link
                to="/project/2"
                className="block px-6 py-4 text-[#5F584D] hover:text-[#F99B2A] hover:pl-8 transition-all duration-200"
              >
                RevolutioNAARI
              </Link>
            </div>
          </li>

          <li>
            <Link to="/impact" className="text-xl font-semibold hover:text-yellow-500 transition-colors">
              Impact
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl font-semibold hover:text-yellow-500 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/membership" className="text-xl font-semibold hover:text-yellow-500 transition-colors">
              Membership
            </Link>
          </li>
        </ul>

        {/* ── RIGHT: Desktop Actions ── */}
        <div className="hidden md:flex items-center gap-4">
         
          <Link
            to="/donate"
            className="w-full sm:w-auto px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-lg hover:shadow-xl block"
          >
            Donate Now
          </Link>
        </div>

        {/* ── MOBILE: Hamburger Menu Button ── */}
        <div className="flex md:hidden items-center gap-4">
          
          <button
            className="text-black focus:outline-none p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── MOBILE: Dropdown Menu ── */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 rounded-b-3xl md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className="block text-lg font-semibold hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/initiative" onClick={() => setMenuOpen(false)} className="block text-lg font-semibold hover:text-yellow-500">
              Initiative
            </Link>
          </li>

          {/* Mobile Projects Accordion */}
          <li>
            <button
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className="flex items-center justify-between w-full text-lg font-semibold hover:text-yellow-500"
            >
              Projects
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${mobileProjectsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`flex flex-col pl-4 mt-2 space-y-3 overflow-hidden transition-all duration-300 ${mobileProjectsOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
              <Link to="/projects" onClick={() => setMenuOpen(false)} className="text-[#5F584D] hover:text-[#F99B2A] block">
                All Projects →
              </Link>
              <Link to="/project/1" onClick={() => setMenuOpen(false)} className="text-[#5F584D] hover:text-[#F99B2A] block">
                EmpowerEd
              </Link>
              <Link to="/project/2" onClick={() => setMenuOpen(false)} className="text-[#5F584D] hover:text-[#F99B2A] block">
                RevolutioNAARI
              </Link>
            </div>
          </li>

          <li>
            <Link to="/impact" onClick={() => setMenuOpen(false)} className="block text-lg font-semibold hover:text-yellow-500">
              Impact
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="block text-lg font-semibold hover:text-yellow-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/membership" onClick={() => setMenuOpen(false)} className="block text-lg font-semibold hover:text-yellow-500">
              Membership
            </Link>
          </li>
          <li className="pt-4 border-t border-gray-100">
            <Link
              to="/donate"
              className="w-full sm:w-auto px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-lg hover:shadow-xl block"
            >
              Donate Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}