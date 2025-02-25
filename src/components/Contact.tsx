import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      id="contact"
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center">Contact Me</h2>
        <form className="mt-8 max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 mt-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 mt-2 border rounded-md"></textarea>
          </div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">
            Send
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;