import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import icon from '../assets/images/icon.png';
import logoDarkRight from '../assets/logos/logoDarkRight.png';
const LoadingMask = () => {
  const [isLoading, setIsLoading] = useState(true);
  const particleCount = 12;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    visible: { opacity: 1 },
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren"
      }
    }
  };

  const sliceVariants = {
    initial: { y: 0 },
    animate: (i) => ({
      y: '-100%',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.5 + (i * 0.05)
      }
    })
  };

  const textVariants = {
    initial: { 
      y: 40,
      opacity: 0,
      scale: 0.95
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    exit: {
      y: -40,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  const particleVariants = {
    animate: (i) => ({
      opacity: [0, 0.4, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        delay: i * 0.1
      }
    })
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none bg-white dark:bg-gray-900"
          variants={containerVariants}
          initial="visible"
          exit="hidden"
        >
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(particleCount)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                variants={particleVariants}
                animate="animate"
                custom={i}
                exit={{ opacity: 0 }}
              />
            ))}
          </div>

          {/* Animated Slices */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-full bg-white dark:bg-gray-900 origin-top"
              style={{
                left: `${(i / 4) * 100}%`,
                width: `${100 / 4}%`,
                zIndex: 20
              }}
              variants={sliceVariants}
              animate={isLoading ? "initial" : "animate"}
              custom={i}
            />
          ))}

          {/* Glowing Text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: 30 }}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="relative">
              <motion.div
                className=" flex items-center justify-center gap-4  font-bold tracking-wider"
                animate={{
                  backgroundPositionX: ['0%', '100%', '0%'],
                  filter: 'hue-rotate(0deg)'
                }}
                transition={{
                  duration: 4,
                  ease: 'linear'
                }}
                style={{
                  background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899, #a855f7, #6366f1)',
                  backgroundSize: '400% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                {/* <img src={icon} alt="icon" className='md:w-16 md:h-16 w-12 h-12' /> */}
                <span className='md:text-5xl text-4xl font-bold'>EVO ACADEMY</span>
              </motion.div>
              
              {/* Typing Animation Text */}
              <motion.div
                className="text-center mt-5 sm:pr-4 text-lg text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {[..."Uğura bir addım daha yaxınsınız!"].map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='font-medium text-base poppins'
                    transition={{
                      duration: 0.1,
                      delay: index * 0.05,
                      ease: "easeIn"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>

              <div className="absolute -top-6 inset-0 blur-xl opacity-10 -z-10" 
               style={{
                 background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899)',
                 backgroundSize: '400% 100%'
               }} />
            </div>
          </motion.div>


          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingMask;