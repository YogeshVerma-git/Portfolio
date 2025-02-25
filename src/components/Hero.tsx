import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <h1 className="text-6xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-xl">I'm a passionate developer showcasing my skills and projects.</p>
    </motion.section>
  );
};

export default Hero;