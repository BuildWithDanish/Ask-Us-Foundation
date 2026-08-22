import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/image/hero-bg.png';
import Button from './Button';

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-gray-900 md:h-[100svh] md:min-h-[600px]">
            {/* Background Image */}
            <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={heroBg}
                alt="Faith in action background"
                className="relative h-[60vh] min-h-[320px] w-full object-cover object-[77%_30%] opacity-90 md:absolute md:inset-0 md:h-full"
            />

            {/* Content Box */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full bg-gradient-to-b from-[#b086ce] to-[#c7d3e6] z-10 flex flex-col gap-6 items-center justify-center p-8 text-white shadow-2xl
                md:absolute md:bottom-0 md:left-0 md:w-[80%] lg:w-[65%] xl:w-[45%] md:h-auto md:rounded-tr-[4rem] md:gap-8 md:items-start md:p-16 lg:p-20 rounded-tr-none"
            >
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left leading-tight"
                >
                    Compassion in Action.<br />
                    Hope for Every Life.
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