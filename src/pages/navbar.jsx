import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-gray-200 bg-opacity-20 text-lg rounded-b-3xl px-16 py-6">
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          href="#"
          className="text-white hover:text-gray-500 font-semibold"
        >
          Home
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          href="#"
          className="text-white hover:text-gray-500 font-semibold ml-6"
        >
          About
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          href="#"
          className="text-white hover:text-gray-500 font-semibold ml-6"
        >
          Privacy Policy
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          href="#"
          className="text-white hover:text-gray-500 font-semibold ml-6"
        >
          Tutorial
        </motion.a>
      </div>
      <div className="lg:hidden absolute top-5 right-5">
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-gray-500 font-semibold text-3xl focus:outline-none"
        >
          &#9776;
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="lg:hidden fixed top-0 left-0 w-full md:w-96 h-full bg-gray-200 bg-opacity-40 backdrop-blur-2xl z-50"
          >
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-200 bg-opacity-20 px-4 py-4 shadow-black shadow-2xl w-full h-screen max-w-md"
              >
                <button
                  onClick={closeMobileMenu}
                  className="absolute top-2 right-2 text-white hover:text-gray-500 font-semibold text-5xl focus:outline-none"
                >
                  &times;
                </button>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-end mt-20"
                >
                  <motion.a
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    href="#"
                    className="text-white hover:text-gray-500 font-semibold block mb-4 text-2xl"
                  >
                    Home
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    href="#"
                    className="text-white hover:text-gray-500 font-semibold block mb-4 text-2xl"
                  >
                    About
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    href="#"
                    className="text-white hover:text-gray-500 font-semibold block mb-4 text-2xl"
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    href="#"
                    className="text-white hover:text-gray-500 font-semibold block mb-4 text-2xl"
                  >
                    Tutorial
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
