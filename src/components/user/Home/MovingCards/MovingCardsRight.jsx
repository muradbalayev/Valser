import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from 'framer-motion';
import useMisc from "@/hooks/useMisc";

const MovingCardsRight = () => {
  const { graduates } = useMisc();
  return (
    (<div
      className="rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <motion.h2
        className="title font-bold text-center text-gray-800 dark:text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Məzunlarımızın Rəyləri
      </motion.h2>
      <InfiniteMovingCards items={graduates} direction="right" speed="slow" />
    </div>)
  );
}






export default MovingCardsRight