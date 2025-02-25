import { motion } from "framer-motion";
import { fadeIn } from "../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="pt-40 pb-16 h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      {/* Hero Gradient Background */}
      <div>
        <div className="shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
        <div className="shadow-cyanMediumShadow absolute top-[5%] left-0 -z-10 opacity-50"></div>
        <div className="shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse"></div>
        <div className="shadow-orangeMediumShadow absolute top-[10%] left-0 -z-10 opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="flex md:flex-row flex-col max-w-[1200px] w-full mx-auto justify-between items-center px-4">
        {/* Hero Text - Left Side */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="flex flex-col gap-4 md:w-1/2 w-full md:text-left text-center"
        >
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
          >
            Full-Stack Developer
          </motion.h2>
          <motion.h1
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
          >
            Yogesh <br className="sm:hidden md:block" />
            Verma
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="text-lg mt-4"
          >
            A Passionate Full-Stack Developer <br /> with 6 months of
            experience.
          </motion.p>
        </motion.div>

        {/* Hero Image - Right Side */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="md:w-1/2 w-full h-full flex items-center justify-center relative"
        >
          {/* Image Container */}
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src="../../public/images/me.jpg"
              alt="Yogesh Verma"
              className="w-auto h-auto md:max-w-[350px] sm:max-w-[200px] z-10 border rounded-full"
            />

            {/* Hexagon Effects */}
            <div className="absolute -z-10 flex justify-center items-center animate-spin-slow">
              <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-orange opacity-70" />
            </div>
            <div className="absolute -z-10 flex justify-center items-center animate-spin-slow">
              <PiHexagonThin className="md:h-[90%] sm:h-[120%] blur-lg min-h-[500px] w-auto text-orange opacity-70" />
            </div>
            <div className="absolute -z-10 flex justify-center items-center animate-spin-reverse-slow">
              <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-cyan opacity-70" />
            </div>
            <div className="absolute -z-10 flex justify-center items-center animate-spin-reverse-slow">
              <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-cyan opacity-70 blur-lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;