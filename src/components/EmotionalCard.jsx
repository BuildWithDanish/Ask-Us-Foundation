import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const raised = 5707;
const goal = 10000;
const donations = 22;
// Cap progress at 100% to prevent the bar from overflowing
const progress = Math.min(Math.round((raised / goal) * 100), 100);

const EmotionalCard = () => {
  return (
    <section className='flex justify-center items-center w-full min-h-screen bg-[#FBF9F3] p-4 sm:p-8 py-16'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className='w-full max-w-6xl border border-gray-200 shadow-xl rounded-[2rem] flex flex-col lg:flex-row overflow-hidden bg-white'
      >
        {/* Left: Image Section */}
        <div className='w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto bg-amber-950 overflow-hidden relative'>
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src="https://plus.unsplash.com/premium_photo-1723773755648-ca9710c3b1bb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Support communities in need"
            className='w-full h-full object-cover origin-center'
          />
        </div>

        {/* Right: Content Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-10 bg-stone-50">

          {/* Inner Card */}
          <div className="w-full border-2 rounded-3xl border-gray-100 shadow-lg p-6 sm:p-8 lg:p-10 bg-white flex flex-col justify-between">

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5 leading-tight font-serif"
            >
              Save lives with a single donation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8"
            >
              Your donation can feed a family, build a well, or send a child
              to school. Every gift - big or small - makes a lasting impact.
            </motion.p>

            {/* Stats Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl p-5 sm:p-6 mb-6 bg-white border border-amber-100 shadow-sm"
            >
              {/* Stats Row */}
              <div className="grid grid-cols-3 mb-5 sm:mb-6 pb-4 sm:pb-5 border-b border-amber-100">
                {[
                  { value: `$${raised.toLocaleString()}`, label: "Raised" },
                  { value: donations, label: "Donations" },
                  { value: `$${goal.toLocaleString()}`, label: "Goal" },
                ].map((stat, i) => (
                  <div key={stat.label}
                    className={`flex flex-col items-center py-1 sm:py-2 ${i < 2 ? "border-r border-amber-100" : ""}`}>
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 font-serif">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-500 mt-1 uppercase tracking-wider font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="w-full rounded-full overflow-hidden h-2.5 bg-amber-100 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                  className="h-full rounded-full bg-amber-400"
                />
              </div>

              {/* Progress Labels */}
              <div className="flex justify-between mt-3">
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium">${raised.toLocaleString()} raised</span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-medium">${goal.toLocaleString()} goal</span>
              </div>
            </motion.div>

            {/* Donate Button */}
            <Link
              to="/donate"
              className="w-full sm:w-auto px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-lg hover:shadow-xl block"
            >
              Donate Now
            </Link>

            {/* Secure Badge */}
            <div className="flex items-center mt-2 justify-center gap-2 opacity-80">
              <span className="text-sm">🔒</span>
              <span className="text-[11px] sm:text-xs text-gray-700 font-medium tracking-wide uppercase">100% Secure Donation</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default EmotionalCard;