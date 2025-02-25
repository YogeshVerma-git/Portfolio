import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { name: 'Project 1', description: 'A web application built with React and Node.js' },
    { name: 'Project 2', description: 'A mobile app built with React Native' },
    { name: 'Project 3', description: 'A data visualization tool built with D3.js' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      id="projects"
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-100 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;