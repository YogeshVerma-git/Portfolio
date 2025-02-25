import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray-600">About</a></li>
          <li><a href="#skills" className="hover:text-gray-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;