import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import hero from "../assets/image/president.png"
import image from "../assets/image/impact.jpg"
import g1 from "../assets/image/gallery/g1.png"
import g2 from "../assets/image/gallery/g2.png"
import g3 from "../assets/image/gallery/g3.png"
import g4 from "../assets/image/gallery/g4.png"
import g5 from "../assets/image/gallery/g5.png"

import v1 from "../assets/image/green.jpg"
import v2 from "../assets/image/pawerRanger.jpg"
import v3 from "../assets/image/littleLegend.png"
import v4 from "../assets/image/impact.jpg"
import v5 from "../assets/image/empowerEd.jpg"
import v6 from "../assets/image/image.png"
import v7 from "../assets/image/img2.png"
import v8 from "../assets/image/img3.png"









const Gallery = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dummy data with varied aspect ratios to demonstrate the masonry effect
  const presidentImages = [g1, g2, g3, g4, g5];

  // Dummy data with square aspect ratios as seen in the volunteer section
  const volunteerImages = [v1, v2, v3, v4, v5, v6, v7, v8];

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
      
      <Navbar/>

      <main className="flex-grow">


        {/* 3. Hero Section with Background Image */}

        <div className="relative w-full h-[40vh] md:h-[100vh] bg-gray-200">
          <img 
            src={hero} 
            alt="Hero Banner" 
            className="w-full h-full object-cover"
          />
          {/* Optional dark overlay if text needs better contrast */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Moments Captured
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl drop-shadow-md">
              Relive the joy of every occasion through our curated photo collections.
            </p>
          </div>
        </div>

        {/* 4. President Moments (Masonry Layout) */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">President Moments</h2>
            <p className="text-gray-600 text-center">Snapshots capturing joy from every special occasion.</p>
          </div>
          
          {/* Tailwind Masonry Grid: Uses columns instead of standard CSS grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {presidentImages.map((src, index) => (
              <div key={`pres-${index}`} className="break-inside-avoid group cursor-pointer">
                <img
                  src={src}
                  alt={`President Moment ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 5. Volunteers' Moments (Square Grid Layout) */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Volunteers' Moments</h2>
            <p className="text-gray-600 text-center">Our warriors turning every moment into a victory.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {volunteerImages.map((src, index) => (
              <div key={`vol-${index}`} className="group cursor-pointer aspect-square">
                <img
                  src={src}
                  alt={`Volunteer Moment ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;