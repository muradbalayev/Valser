import { motion, useScroll, useTransform } from "framer-motion";
// import heroImg from "../../../assets/logos/heroImg.webp";
import { FiChevronDown } from "react-icons/fi";
import { useRef } from "react";

import test from "../../../assets/images/test3.jpg";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Create transform values based on scroll progress - move slower than scroll for parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (window.lenis) {
      window.lenis.scrollTo(aboutSection.offsetTop, { 
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Match the same easing as defined in App.jsx
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative lg:pt-0 pt-20 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${test})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // We're removing backgroundAttachment: "fixed" to allow our custom parallax
          y: backgroundY,
          scale: scale
        }}
      />
      
      {/* Optional overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <div className="container sm:mt-24 mt-4 lg:mt-0 mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full  mb-8 lg:mb-0">
            <motion.h1
              className="uppercase text-white text-4xl md:text-5xl lg:text-7xl hero-title text-center mb-6 sm:mt-0 mt-10 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Valser ilə hədəfə bir addım daha yaxın
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Button */}
      <div className="absolute lg:block hidden bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 15, 0] }} // Bouncing effect
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={scrollToAbout} // Function to scroll down
          className="cursor-pointer"
        >
          <FiChevronDown
            size={50}
            className=" text-white z-20"
          />
        </motion.div>
      </div>
    </section>
  );
}
