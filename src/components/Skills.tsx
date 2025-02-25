import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Framer Motion'];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      id="skills"
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-2 bg-white rounded-full shadow-md"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;