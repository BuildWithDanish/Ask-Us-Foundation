// src/sections/Gallery.jsx

import { Link } from "react-router-dom";
import gallery1 from "../assets/image/gallery1.jpg";
import gallery2 from "../assets/image/gallery2.png";
import gallery3 from "../assets/image/gallery3.png";

export default function Gallery() {
  return (
    <section className="w-full relative py-16 md:py-24 lg:py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-blue-100 to-[#FBF9F3]">
      {/* Container: Stack on mobile, side-by-side on large screens */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-7xl mx-auto">

        {/* Left Side: Staggered Image Gallery */}
        <div className="flex gap-4 w-full lg:w-1/2 justify-center">

          {/* Left Column (Two stacked images) */}
          <div className="flex flex-col items-end gap-4 w-1/2 sm:w-[280px] lg:w-auto">
            <div className="w-full sm:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img src={gallery2} alt="Gallery image 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-4/5 sm:w-[240px] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <img src={gallery3} alt="Gallery image 3" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column (Single offset image) */}
          <div className="w-1/2 sm:w-[220px] lg:w-auto aspect-[4/5] rounded-2xl overflow-hidden mt-8 sm:mt-12 lg:mt-24 shadow-lg">
            <img src={gallery1} alt="Gallery image 1" className="w-full h-full object-cover" />
          </div>

        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start mt-8 lg:mt-0 text-left">
          <p className="text-sm md:text-base mb-4 text-gray-500 font-bold tracking-widest uppercase">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight text-gray-900">
            Celebrating Empowerment, Care and Sustainability Initiatives
          </h1>
          <p className="w-full md:w-5/6 text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, unde. Dolores ea iure sed repellendus neque, magni ullam deleniti, amet quas quam corporis suscipit mollitia eum obcaecati error dolore illo?
          </p>
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-lg hover:shadow-xl block"
          >
            More About Us
          </Link>
        </div>

      </div>
    </section>
  );
}