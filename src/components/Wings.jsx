import React from 'react';
import empowerEd from "../assets/image/empowerEd.jpg";
import revolutionaari from "../assets/image/revolutionaari.jpg";
import CampaignCard from "../components/CampaignCard";

const Wings = () => {
    return (
        <section className='w-full flex flex-col items-center py-16 px-6 md:px-12 lg:px-24 bg-[#FBF9F3]'>
            {/* Top Tagline */}
            <p className='text-gray-500 font-bold tracking-widest text-sm md:text-base uppercase mb-4'>
                Our Wings
            </p>
            
            {/* Responsive Heading */}
            <h1 className='text-3xl md:text-5xl lg:text-6xl w-full md:w-4/5 lg:w-2/3 text-center font-bold mb-12 md:mb-16 leading-tight text-gray-900'>
                Empowering communities through education, care, and sustainable initiatives.
            </h1>

            {/* Responsive Grid for Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl'>
                <CampaignCard
                    image={empowerEd}
                    title="EmpowerEd"
                    description="Fostering education and personality development for the youth."
                    raised={4245}
                    goal={5000}
                    donations={11}
                />

                <CampaignCard
                    image={revolutionaari}
                    title="Revolutioनारी"
                    description="Uplifting rural women with skills and financial literacy."
                    raised={4245}
                    goal={10000}
                    donations={4}
                />

                <CampaignCard
                    image={empowerEd}
                    title="EmpowerEd"
                    description="Fostering education and personality development for the youth."
                    raised={4245}
                    goal={5000}
                    donations={11}
                />

                <CampaignCard
                    image={revolutionaari}
                    title="Revolutioनारी"
                    description="Uplifting rural women with skills and financial literacy."
                    raised={4245}
                    goal={10000}
                    donations={4}
                />
            </div>
        </section>
    );
};

export default Wings;