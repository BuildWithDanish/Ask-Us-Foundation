import React from 'react';
import empowerEd from "../assets/image/empowerEd.jpg";
import revolutionaari from "../assets/image/revolutionaari.jpg";
import CampaignCard from "../components/CampaignCard";
import green from "../assets/image/green.jpg";
import littleLegend from"../assets/image/littleLegend.png";

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
                    description="EmpowerEd focuses on providing quality education, mentorship, and personality development programs for children and youth. Through holistic learning and life skills training, we inspire young individuals to unlock their potential and become future leaders."
                    raised={27500}
                    goal={100000}
                    donations={30}
                />

                <CampaignCard
                    image={revolutionaari}
                    title="Revolutioनारी"
                    description="Revolutioनारी is dedicated to empowering rural women by providing skill development training, financial literacy, and opportunities for economic independence. We help women build confidence, achieve self-reliance, and create a brighter future for themselves and their communities."
                    raised={42000}
                    goal={150000}
                    donations={44}
                />

                <CampaignCard
                    image={green}
                    title="GreenSquad"
                    description="Green Squad promotes environmental sustainability through tree plantation drives, awareness campaigns, and community-led green initiatives. We aim to inspire people across India to take action for a cleaner, healthier, and greener future."
                    raised={31000}
                    goal={100000}
                    donations={27}
                />

                <CampaignCard
                    image={littleLegend}
                    title="Little Legends"
                    description="Little Legends is dedicated to fostering education, creativity, and personality development among children. Through engaging learning experiences and mentorship, we empower young minds to dream big, grow confidently, and become responsible citizens."
                    raised={45000}
                    goal={100000}
                    donations={36}
                />
            </div>
        </section>
    );
};

export default Wings;