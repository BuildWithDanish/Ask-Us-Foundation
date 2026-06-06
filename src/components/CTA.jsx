import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-white">

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Join the Movement</p>
                <h2 className="font-playfair text-4xl md:text-6xl font-bold  mb-6 leading-tight">
                    Be the change<br />
                    <em className="italic font-normal">Bharat needs</em>
                </h2>
                <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                    Whether you volunteer, donate, or simply spread the word —
                    every action counts in our journey toward a श्रेष्ठ भारत.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                        to="/membership#membershipform"
                        className="w-full sm:w-auto px-8 py-3.5 text-center text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-white hover:bg-[#E07B0A] shadow-lg hover:shadow-xl block">
                        Become a member
                    </Link>
                    <Link
                        to="/temp"
                        className="w-full sm:w-auto px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-lg hover:shadow-xl block"
                    >
                        Donate Now
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default CTA
