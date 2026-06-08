import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/image/hero-bg.png';
import Button from './Button';

export default function Hero() {
    return (
        <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden bg-gray-900">
            {/* Background Image */}
            <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={heroBg}
                alt="Faith in action background"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
            />

            {/* Content Box */}
            <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-0 left-0 bg-[#14294B] w-full md:w-[80%] lg:w-[65%] xl:w-[45%] h-auto z-10 rounded-tr-[2.5rem] md:rounded-tr-[4rem] flex flex-col gap-6 md:gap-8 items-center md:items-start justify-center p-8 sm:p-12 md:p-16 lg:p-20 text-white shadow-2xl"
            >
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left leading-tight"
                >
                    Faith in action.<br />
                    Hope for all.
                </motion.h1>

                {/* Buttons Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2"
                >
                    <a
                        href="#support"
                        className="w-full sm:w-auto px-8 py-3.5 text-center text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-white hover:bg-[#E07B0A] shadow-lg hover:shadow-xl"
                    >
                        Request help
                    </a>

                    <Link
                        to="/donate"
                        className="w-full sm:w-auto px-8 py-3.5 text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-sm tracking-wide bg-[#F99B2A] hover:bg-[#E07B0A] shadow-lg hover:shadow-xl block"
                    >
                        Donate Now
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}