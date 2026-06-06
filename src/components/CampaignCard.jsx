import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CampaignCard({ image, title, description, raised, goal, donations }) {
  // Cap the progress at 100% so the bar doesn't overflow
  const progress = Math.min((raised / goal) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#F7EDD1] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full w-full max-w-[450px] mx-auto"
    >
      {/* Image */}
      <div className="h-48 sm:h-56 md:h-64 overflow-hidden shrink-0">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1A150D] mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-gray-700 mb-6 line-clamp-3">
          {description}
        </p>

        {/* Progress Section (Pushed to the bottom using mt-auto) */}
        <div className="mt-auto">

          {/* Progress Bar */}
          <div className="w-full bg-gray-300/60 rounded-full h-2 sm:h-2.5 mb-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="bg-amber-500 h-full rounded-full"
            />
          </div>

          {/* Stats */}
          <div className="flex justify-between items-end text-sm sm:text-base mb-6">
            <div>
              <p className="font-bold text-[#1A150D]">${raised.toLocaleString()}</p>
              <p className="text-xs sm:text-sm text-gray-600">of ${goal.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-[#1A150D]">{donations}</p>
              <p className="text-xs sm:text-sm text-gray-600">donations</p>
            </div>
          </div>

          {/* Button */}
          <Link
            to="/donate"
            className="w-full sm:w-auto px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-lg hover:shadow-xl block"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}