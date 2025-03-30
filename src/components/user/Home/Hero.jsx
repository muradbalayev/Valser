import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { useContext, useRef } from "react";

import test from "../../../assets/images/test3.jpg";
import { LanguageContext } from "@/context/languageContext";
import translations from "../../../translations.json";
export default function HeroSection() {
  const { language } = useContext(LanguageContext);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001
  });
  
  
  // Create transform values based on scroll progress - move slower than scroll for parallax
  // const backgroundY = useTransform(smoothScrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(smoothScrollYProgress, [0, 1], [1, 1.2]);

  

  // const scrollToAbout = () => {
  //   const aboutSection = document.getElementById("about");
  //   if (window.lenis) {
  //     window.lenis.scrollTo(aboutSection.offsetTop, { 
  //       duration: 1.4,
  //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Match the same easing as defined in App.jsx
  //     });
  //   } else {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about"); // Make sure this ID matches the About 
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section ref={sectionRef} className="relative bg-[#26343D] lg:pt-0 pt-20 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax effect */}
      <motion.div 
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 , ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${test})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          // y: backgroundY,
          scale: scale
        }}
      />
      
      {/* Optional overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <div className="container sm:mt-24 mt-4 lg:mt-0 mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full  mb-8 lg:mb-0">
            <motion.h1
              className="uppercase text-white text-4xl md:text-5xl lg:text-7xl hero-title text-center mb-10  leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 , ease: [0.25, 0.1, 0.25, 1] }}
            >
              {translations[language]["header-title"]}
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
