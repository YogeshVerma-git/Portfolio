import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for the mobile menu

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
     <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500 items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">

        {/* Logo or Brand Name */}
        <h1 className="text-xl font-bold text-white">My Portfolio</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4">
        <li>
            <a href="#experience" className="hover:text-gray-400">
              <Button variant="ghost" className="text-white">Experience</Button>
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              <Button variant="ghost" className="text-white">About</Button>
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400">
              <Button variant="ghost" className="text-white">Skills</Button>
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              <Button variant="ghost" className="text-white">Projects</Button>
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              <Button variant="ghost" className="text-white">Contact</Button>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 focus:outline-none text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-black shadow-md rounded-b-lg border-orange border-[0.5px]"
        >
          <ul className="flex flex-col space-y-2 p-4">
          <li>
              <a href="#experience" className="hover:text-gray-400">
                <Button variant="ghost" className="w-full text-white">Experience</Button>
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                <Button variant="ghost" className="w-full text-white">About</Button>
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-400">
                <Button variant="ghost" className="w-full text-white">Skills</Button>
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">
                <Button variant="ghost" className="w-full text-white">Projects</Button>
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                <Button variant="ghost" className="w-full text-white">Contact</Button>
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;