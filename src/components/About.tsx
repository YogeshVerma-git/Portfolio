import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      id="about"
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-center text-gray-600">
          I'm a full-stack developer with experience in building web applications using modern technologies.
        </p>
      </div>
    </motion.section>
  );
};

export default About;