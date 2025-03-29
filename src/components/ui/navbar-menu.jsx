import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import { ArrowRight } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  isScrolled,
  isMenuOpen,
  isHomePage,
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer nav-link  hover:opacity-[0.9]  ${
          isScrolled || !isHomePage || isMenuOpen
            ? " text-black dark:text-white"
            : "text-white dark:text-white"
        } `}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0rem)] left-1/2 transform lg:-translate-x-1/2 -translate-x-2/3 pt-4 max-h-[580px] overflow-y-auto scrollbar-hide">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm  overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max lg:p-4 p-2"
                >
                  <div className="text-sm grid grid-cols-3 gap-3 p-1">
                    {React.Children.map(children, (child) => {
                      if (React.isValidElement(child)) {
                        return React.cloneElement(child, { setActive });
                      }
                      return child;
                    })}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative group min-[835px]:block hidden"
    >
      <ul className="flex space-x-4">{children}</ul>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  setActive,
}) => {
  return (
    <Link
      to={href}
      onClick={() => setActive(null)}
      className="flex items-start min-1200:max-w-72  max-w-48 flex-col group cursor-pointer bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800  p-4 hover:border-[#AC8968] dark:hover:border-white transition-all duration-300"
    >
      <div className="flex items-start mb-3">
        <h4 className="min-1200:text-base text-sm font-semibold text-red-800 dark:text-white">
          {title}
        </h4>
      </div>
      
      <p className="min-1200:text-sm text-xs text-gray-600 dark:text-gray-400 mt-1 mb-5 ">
        {description}
      </p>
      
      <div className="group w-full mt-auto cursor-pointer pt-3 border-t border-gray-200 dark:border-gray-800">
        <span className="inline-flex items-center text-xs text-black dark:text-white font-medium hover:opacity-60 transition-opacity">
          Ətraflı
          <ArrowRight className="group-hover:translate-x-1 ml-1 w-3 h-3 transition duration-300" />
        </span>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-all"
    >
      {children}
    </Link>
  );
};
