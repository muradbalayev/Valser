import { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, delay } from "framer-motion";
import logo from "../assets/logos/logoWhite.png";
const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  // Text for animations
  const titleText = "VALSER";
  const titleText2 = "MMC";

  const containerVariants = {
    animate: {
      x: [0, 0, -110],
      transition: {
        delayChildren: 0.6,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
        duration: 2.1,
      },
    },
  };

  const containerVariants2 = {
    animate: {
      x: [0, 0, 70],
      transition: {
        delayChildren: 1,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
        duration: 2.1,
      },
    },
  };

  const letterVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.22, 1, 0.36, 1],
        duration: 0.9,
      },
    },
  };

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (containerRef.current) {
        containerRef.current.style.visibility = "visible";
      }
    });
  }, []);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.floor(Math.random() * 8);
        if (newProgress >= 100) {
          clearInterval(interval);

          // Delay a bit after reaching 100% before removing loading screen
          setTimeout(() => {
            setLoading(false);
          }, 400);

          return 100;
        }
        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-50 xl:flex hidden flex-col bg-[#AC8968] items-center justify-center overflow-x-hidden"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.2,
              delay: 0.3,
              ease: [0.6, 0.01, 0.05, 0.95],
            },
          }}
        >
          <motion.div
            ref={containerRef}
            className="fixed inset-0 z-20 bg-[#0C0C0C] items-center justify-center overflow-x-hidden"
            initial={{ opacity: 1 }}
            exit={{
              y: "-100%",
              transition: {
                duration: 1.2,
                delay: 0.1,
                ease: [0.6, 0.01, 0.05, 0.95],
              },
            }}
          > </motion.div>

          <motion.div className="w-full flex xl:flex-row flex-col gap-5 items-center justify-center max-w-7xl z-20">
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="flex text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-semibold text-center overflow-hidden"
            >
              <motion.span
                variants={letterVariants}
                className="text-white ordina-medium  lg:leading-20 md:leading-18 sm:leading-16 leading-14 text-center"
              >
                {titleText}
              </motion.span>
            </motion.div>
            <motion.div
              variants={containerVariants2}
              initial="initial"
              animate="animate"
              className="flex w-[400px] text-5xl sm:text-5xl md:text-6xl lg:text-[82px] font-semibold text-center overflow-hidden"
            >
              <motion.span
                variants={letterVariants}
                className="text-white ordina-medium  lg:leading-20 md:leading-18 sm:leading-16 leading-14 text-center"
              >
                {titleText2}
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-[100px] overflow-hidden absolute"
            >
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
