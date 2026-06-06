import React from 'react';
import v1 from "../assets/image/volunteer/v1.png"
import v2 from "../assets/image/volunteer/v2.png"
import v3 from "../assets/image/volunteer/v3.png"
import v4 from "../assets/image/volunteer/v4.png"
import v5 from "../assets/image/volunteer/v5.png"
import v6 from "../assets/image/volunteer/v6.png"
import v7 from "../assets/image/volunteer/v7.png"
import v8 from "../assets/image/volunteer/v8.png"
import v9 from "../assets/image/volunteer/v9.png"
import v10 from "../assets/image/volunteer/v10.png"
import v11 from "../assets/image/volunteer/v11.png"


// Single Card Component
const VolunteerCard = ({ name, role, image, quote }) => {
  return (
    <div className="bg-[#FBF6EA] rounded-[2rem] p-8 md:p-10 flex flex-col items-center transition-shadow duration-300 hover:shadow-md h-full">
      {/* Name & Role */}
      <div className="text-center mb-8">
        <h3 className="text-2xl text-gray-900 font-medium mb-1.5">{name}</h3>
        <p className="text-sm text-gray-500 font-light tracking-wide">{role}</p>
      </div>

      {/* Circular Image */}
      <div className="w-48 h-48 md:w-52 md:h-52 rounded-full overflow-hidden mb-8 shadow-sm">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Quote */}
      <div className="text-center px-2">
        <p className="text-gray-700 text-[15px] leading-relaxed font-medium">
          "{quote}"
        </p>
      </div>
    </div>
  );
};

const VolunteerSection = () => {
  // Dummy Data
  const volunteerData = [
    {
      name: "Daniel Brooks",
      role: "Community Meal Coordinator",
      image: v1,
      quote: "I joined to serve others. What I found was a deeper connection with God and a new family in faith."
    },
    {
      name: "Sophia Martinez",
      role: "Global Health Volunteer",
      image: v2,
      quote: "Every time we bring care to a remote village, we bring light with it. It's a privilege to serve."
    },
    {
      name: "Ethan Walker",
      role: "",
      image: v3,
      quote: "We don't just hand out food—we build relationships. That's how transformation begins."
    },
    {
      name: "Olivia Hayes",
      role: "Food Distribution Specialist",
      image: v4,
      quote: "Serving warm, nutritious meals to families in crisis, the elderly, and children facing hunger."
    },
    {
      name: "Maya Chen",
      role: "Rural Health Advocate",
      image: v5,
      quote: "Providing care kits with food and clothing to individuals experiencing homelessness in urban areas."
    },
    {
      name: "Liana Johnson",
      role: "Community Engagement Officer",
      image: v6,
      quote: "Spreading the Word by distributing translated Bibles and holding small-group faith sessions."
    },
    {
      name: "Liana Johnson",
      role: "Community Engagement Officer",
      image: v7,
      quote: "Spreading the Word by distributing translated Bibles and holding small-group faith sessions."
    },
    {
      name: "Liana Johnson",
      role: "Community Engagement Officer",
      image: v8,
      quote: "Spreading the Word by distributing translated Bibles and holding small-group faith sessions."
    },
   {
      name: "Liana Johnson",
      role: "Community Engagement Officer",
      image: v9,
      quote: "Spreading the Word by distributing translated Bibles and holding small-group faith sessions."
    }, 
    {
      name: "Liana Johnson",
      role: "Community Engagement Officer",
      image: v10,
      quote: "Spreading the Word by distributing translated Bibles and holding small-group faith sessions."
    }, 
    {
      name: "Liana Johnson",
      role: "Community Engagement Officer",
      image: v11,
      quote: "Spreading the Word by distributing translated Bibles and holding small-group faith sessions."
    },
  ];

  return (
    <section id='volunteer' className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Optional Heading for the section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Volunteers</h2>
          <p className="text-gray-600">The heroes turning every moment into a victory.</p>
        </div>

        {/* Responsive Grid: 1 Col (Mobile) -> 2 Cols (Tablet) -> 3 Cols (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {volunteerData.map((member, index) => (
            <VolunteerCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              quote={member.quote}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default VolunteerSection;