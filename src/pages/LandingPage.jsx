import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Brand Strategy",
      description: "Define your brand's vision and goals.",
    },
    {
      title: "Digital Marketing",
      description: "Grow your online presence effectively.",
    },
    {
      title: "Creative Design",
      description: "Captivating designs for modern brands.",
    },
  ];

  // Variants for animations
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const rotateButton = {
    hover: { rotate: 360, scale: 1.5 },
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-600 text-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Brand Kiln
          </motion.h1>
          <motion.ul
            className="flex space-x-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {["Home", "Services", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.2, color: "#6366f1" }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-500 "
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        id="hero"
        className="h-screen flex items-center justify-center bg-cover bg-center"
        // style={{
        //   backgroundImage: `url('/temp.png')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   height: "100vh",
        //   width: "100%",
        // }}
      >
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            Empower Your Brand
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.5 }}
          >
            Innovative strategies designed for brand excellence.
          </motion.p>
          <motion.button
            onClick={() => navigate("/tasks")}
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg text-lg"
            variants={rotateButton}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 100 }}
          >
            Explore Tasks
          </motion.button>
        </motion.div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20 bg-indigo-600">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-orange-400 rounded-full shadow-md hover:shadow-lg"
                variants={fadeIn}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-black">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <motion.h3
            className="text-xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h3>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Email: contact@brandkiln.com
          </motion.p>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Phone: +1 234 567 890
          </motion.p>
          <p className="mt-4">© 2024 Brand Kiln. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
