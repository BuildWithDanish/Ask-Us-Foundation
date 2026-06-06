import { useState } from "react";
import { motion } from "framer-motion";

const assistanceOptions = [
  "Food Assistance",
  "Housing Support",
  "Medical Aid",
  "Spiritual Guidance",
  "Other",
];

export default function SupportForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    location: "",
    phone: "",
    email: "",
    assistanceType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // handle submission logic here
  };

  // Variants for staggered form animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="support" className="min-h-[100svh] bg-gradient-to-b from-[#FBF9F3] to-blue-100 flex items-center justify-center px-4 sm:px-6 py-16 md:py-24">
      <div className="w-full max-w-2xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10 md:mb-12"
        >
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-widest text-gray-500 mb-3 md:mb-4 font-medium">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-800 leading-tight mb-1 md:mb-2">
            Need support? We're
          </h1> 
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-gray-700 leading-tight mb-5 md:mb-6">
            here for you
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto px-2 sm:px-0">
            If you or your loved ones are in need of assistance, please reach
            out. We offer support for food, housing, medical aid, and spiritual
            guidance.
          </p>
        </motion.div>  

        {/* Form Container */}
        <motion.form 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-5"
        >
          {/* Row 1: Full Name + Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            <motion.div variants={itemVariants}>
              <label className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium ml-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl px-4 py-3 md:py-3.5 text-gray-700 text-sm outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all shadow-sm"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium ml-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl px-4 py-3 md:py-3.5 text-gray-700 text-sm outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all shadow-sm"
              />
            </motion.div>
          </div>

          {/* Row 2: Phone + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            <motion.div variants={itemVariants}>
              <label className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium ml-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl px-4 py-3 md:py-3.5 text-gray-700 text-sm outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all shadow-sm"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium ml-1">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl px-4 py-3 md:py-3.5 text-gray-700 text-sm outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all shadow-sm"
              />
            </motion.div>
          </div>

          {/* Type of Assistance */}
          <motion.div variants={itemVariants}>
            <label className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium ml-1">
              Type of Assistance Needed:
            </label>
            <div className="relative">
              <select
                name="assistanceType"
                value={formData.assistanceType}
                onChange={handleChange}
                className="w-full bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl px-4 py-3 md:py-3.5 text-gray-500 text-sm outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all appearance-none cursor-pointer shadow-sm"
              >
                <option value="" disabled>
                  Select your option
                </option>
                {assistanceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {/* Custom dropdown arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <label className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium ml-1">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl px-4 py-3 md:py-3.5 text-gray-700 text-sm outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-all resize-none shadow-sm"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-[#F99B2A] hover:bg-[#E07B0A] text-white font-bold text-[11px] md:text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-colors duration-300 w-full sm:w-auto shadow-md mx-auto block"
            >
              Submit Request
            </motion.button>
          </motion.div>

        </motion.form>
      </div>
    </section>
  );
}