import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

//  const shakeAnimation = {
//         initial: { x: 0 },
//         animate: {
//             x: [0, -5, 5, -5, 5, 0], // Define the shake pattern
//             transition: {
//                 delay: 0.8,
//                 duration: 0.5, // Duration of one shake
//                 repeat: Infinity, // Repeat infinitely
//                 repeatDelay: 3, // Delay between shakes
//                 ease: "easeInOut" // Easing for smoothness
//             }
//         }
//     };

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.link/vooh3l"
      target="_blank"
      title="WhatsApp"
      rel="noopener noreferrer"
      aria-label='WhatsApp'
      className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 bg-[#AC8968] text-white sm:p-4 p-3 rounded-full shadow-lg z-20 cursor-pointer hover:bg-green-600 transition-colors duration-300"
      animate={{
        rotate: [0, 10, -10, 10, -10, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <FaWhatsapp className="text-xl sm:text-3xl" />
    </motion.a>
  );
};

export default WhatsAppButton; 