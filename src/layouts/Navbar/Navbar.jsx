import {  useContext, useEffect, useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import darkLogo from "../../assets/logos/valserBlack.png";
import whiteLogo from "../../assets/logos/valserWhite.png";
// import logo from "../../assets/logos/logoWhite.png";
// import logoBlack from "../../assets/logos/logoBlack.png";
import ApplyModal from "@/components/modals/ApplyModal";
import { RiCloseLargeFill, RiMenuLine } from "react-icons/ri";
import {
  FaBalanceScale,
  FaBuilding,
  FaFileContract,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import translations from '../../translations.json'
import { LanguageContext } from '../../context/languageContext'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const languages = [
    { code: "az", label: "AZ" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  const filteredLanguages = languages.filter((lang) => lang?.code !== language);


  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/" && window.scrollY > 40) {
        setIsScrolled(true);
      } else if (location.pathname === "/") {
        setIsScrolled(false);
      }
    };

    // Initial check on page load or route change
    if (location.pathname === "/") {
      setIsScrolled(window.scrollY > 40);
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    const isHomePage = location.pathname === "/";
    setIsHomePage(isHomePage);
  }, [location]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const services = [
    {
      id: 1,
      title: translations[language]['service-1'],
      description: translations[language]['service-1-desc'],
      icon: <FaBuilding className="w-12 h-12" />,
      slug: "attestasiya"
    },
    {
      id: 2,
      title: translations[language]['service-2'],
      description: translations[language]['service-2-desc'],
      icon: <FaFileContract className="w-12 h-12" />,
      slug: "muhasibatliq"
    },
    {
      id: 3,
      title: translations[language]['service-3'],
      description: translations[language]['service-3-desc'],
      icon: <FaBalanceScale className="w-12 h-12" />,
      slug: "huquqi-xidmetler"
    },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 left-0 transition-all duration-300
      ${
        isScrolled || !isHomePage || isMenuOpen
          ? "bg-white dark:bg-[#131212] shadow-md"
          : "bg-transparent"
      } 
      dark:text-white text-gray-800`}
      >
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto xl:px-14 lg:px-10 sm:px-4 px-3 py-2">
          <Link
            to="/"
            className=" lg:w-44 lg:h-14 min-880:w-36 min-880:h-12 w-40 h-16"
          >
            <img
              src={
                !isScrolled && isHomePage && !isMenuOpen
                  ? whiteLogo
                  : darkLogo
              }
              alt="logo"
              className=" w-full h-full object-contain"
            />
              
          </Link>
          {/* <Link
            to="/"
            className="sm:hidden block w-14 h-12 pl-4"
          >
          <img
              src={
                !isScrolled && isHomePage && !isMenuOpen
                  ? logo
                  : logoBlack
              }
              alt="logo"
              className=" w-full h-full object-contain"
            />
              
          </Link> */}

          {/* Icons Place */}
          {/* <div className="min-1200:flex hidden justify-center gap-2 pt-1">
              <a
                title="Instagram"
                rel="noopener noreferrer"
                aria-label="instagram"
                href="https://www.instagram.com/evoacademy.az"
                target="_blank"
                className={`p-2 rounded-xl ${
                  isScrolled || !isHomePage || isMenuOpen
                    ? " text-gray-700 dark:text-gray-300  hover:bg-gray-200 dark:hover:bg-gray-700"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                <FaInstagram size={26} />
              </a>
              <a
                title="YouTube"
                rel="noopener noreferrer"
                aria-label="youtube"
                href="https://www.youtube.com/@EvoAcademyAz"
                target="_blank"
                className={`p-2 rounded-xl ${
                  isScrolled || !isHomePage || isMenuOpen
                    ? " text-gray-700 dark:text-gray-300  hover:bg-gray-200 dark:hover:bg-gray-700"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                <FaYoutube size={25} />
              </a>
              <a
                title="Linkedin"
                rel="noopener noreferrer"
                aria-label="linkedin"
                href="https://www.linkedin.com/company/evoacademy/"
                target="_blank"
                className={`p-2 rounded-xl ${
                  isScrolled || !isHomePage || isMenuOpen
                    ? " text-gray-700 dark:text-gray-300  hover:bg-gray-200 dark:hover:bg-gray-700"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                <FaLinkedin size={25} />
              </a>
              <a
                title="TikTok"
                rel="noopener noreferrer"
                aria-label="tiktok"
                href="https://www.tiktok.com/@evoacademy.az"
                target="_blank"
                className={`p-2 rounded-xl ${
                  isScrolled || !isHomePage || isMenuOpen
                    ? " text-gray-700 dark:text-gray-300  hover:bg-gray-200 dark:hover:bg-gray-700"
                    : "text-white hover:bg-gray-800"
                }`}
              >
                <FaTiktok size={24} />
              </a>
            </div> */}
          {/* <button
              onClick={openModal}
              className="poppins block  lg:text-sm text-xs bg-red-600 shadow-lg  transition-all duration-300 font-medium text-white lg:px-7 px-4 lg:py-3 py-3"
            >
              Müraciət et
            </button> */}
          {/* <button
              onClick={toggleTheme}
              className="md:hidden block p-2 ml-1 w-[38px] rounded-lg  transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {isDarkTheme ? (
                <BiSun className="text-yellow-500" size={22} />
              ) : (
                <FaMoon className="text-red-600" size={20} />
              )}
            </button>
            <button
              onClick={toggleTheme}
              className={`md:block hidden p-2 w-[41px] rounded-lg ${
                isMenuOpen ? "bg-gray-100 dark:bg-gray-800" : ""
              } transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700`}
              aria-label="Toggle dark mode"
            >
              {isDarkTheme ? (
                <BiSun className="text-white" size={25} />
              ) : (
                <FaMoon className="text-white" size={23} />
              )}
            </button> */}
            <div className="md:hidden flex items-center justify-center gap-2"> 
                {/* <button
                onClick={openModal}
                className={` apply-btn uppercase text-white dark:text-black bg-red-800 cursor-pointer lg:text-sm text-xs shadow-lg  transition-all duration-300  lg:px-9 px-4 lg:py-4 py-3`}
              >
                Müraciət
              </button> */}

          <button
            onClick={toggleMenu}
            type="button"
            className="flex items-center p-2  h-12 w-12 justify-center text-sm rounded-lg "
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen  ? (
              <RiCloseLargeFill className="text-black"  size={24} />
            ) : (
              <RiMenuLine className={` ${isScrolled ? "text-black" : "text-white"}`} size={24} />
            )}
          </button>
          </div>

          {/* Desktop Menu */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "" : "hidden md:flex"
            }`}
          >
            <ul className="nav-list xl:ms-10 ms-0 md:flex justify-center items-center hidden p-4 md:py-3 mt-4  rounded-lg flex-row xl:gap-7 lg:gap-6 min-880:gap-4 gap-3 md:mt-0 md:border-0 dark:md:bg-transparent dark:bg-gray-900 md:bg-transparent bg-white">
              <li>
                <Link
                  to="/"
                  className={`nav-link 
                    ${
                      isScrolled || !isHomePage || isMenuOpen
                        ? " text-black dark:text-white"
                        : "text-white dark:text-white"
                    } `}
                >
              {translations[language]["homepage"]}
              </Link>
              </li>
              <Menu setActive={setActive}>
                <div>
                  <MenuItem
                    setActive={setActive}
                    active={active}
                    item={translations[language]["services"]}
                    isHomePage={isHomePage}
                    isScrolled={isScrolled}
                    isMenuOpen={isMenuOpen}
                  >
                    {services.map((service) => (
                      <ProductItem
                        key={service.id}
                        title={service.title}
                        href={`/service/${service.slug}`}
                        src={service.imageUrl}
                        setActive={setActive}
                        description={service.description}
                      />
                    ))}
                  </MenuItem>
                </div>
              </Menu>
              <li>
                <Link
                  to="/about"
                  className={`nav-link   
                    ${
                      isScrolled || !isHomePage || isMenuOpen
                        ? " text-black dark:text-white"
                        : "text-white dark:text-white"
                    } `}
                >
                  {translations[language]["about"]}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`nav-link   
                    ${
                      isScrolled || !isHomePage || isMenuOpen
                        ? " text-black dark:text-white"
                        : "text-white dark:text-white"
                    } `}
                >
                  {translations[language]["contact"]}
                </Link>
              </li>
              <div className="flex items-center justify-center gap-4">
              <li
                onClick={openModal}
                className={`apply-btn uppercase text-white dark:text-black bg-red-800 hover:bg-red-900 block cursor-pointer xl:text-sm lg:text-[13px] text-xs shadow-lg  transition-all duration-300 xl:px-9 xl:py-4 lg:px-7 lg:py-4 px-4  py-3`}
              >
                {translations[language]["apply"]}
              </li>
              <div
              className="lang-switcher group flex justify-center xl:min-w-[100px] p-1  hover:bg-red-800 backdrop-blur-sm "
            >
              {filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  className={` xl:text-sm text-xs font-medium xl:px-2 px-1 first:border-e transition-colors ${
                    isScrolled || !isHomePage || isMenuOpen
                      ? " text-black  border-black group-hover:text-white group-hover:border-white"
                      : "text-white  border-white"
                  }`}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            </div>

            </ul>
          </div>

          {/*  Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={toggleMenu}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed top-[0px] right-0 bottom-0 w-[80%]  bg-white dark:bg-gray-900 shadow-xl z-[60] md:hidden overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: 1 }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-red-800">{translations[language]["menu"]}</h3>
                    <button 
                      onClick={toggleMenu}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <RiCloseLargeFill className="text-gray-800 dark:text-gray-200" size={24} />
                    </button>
                  </div>
                  <div className="flex flex-col space-y-6">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="border-b border-gray-200 dark:border-gray-700 pb-6"
                    >
                      <div 
                        className="flex items-center justify-between cursor-pointer py-2 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors mb-2"
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      >
                        <h3 className="text-lg font-semibold text-red-800">{translations[language]["services"]}</h3>
                        <motion.div
                          animate={{ rotate: servicesDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="text-red-800" />
                        </motion.div>
                      </div>
                      
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div 
                            className="space-y-3 pl-3 mt-2"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {services.map((service, index) => (
                              <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                              >
                                <Link
                                  onClick={toggleMenu}
                                  to={`/service/${service.slug}`}
                                  className="block py-2 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                                >
                                  {service.title}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-3"
                    >
                      <Link
                        onClick={toggleMenu}
                        to="/"
                        className="flex items-center py-2 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                      >
                        {translations[language]["homepage"]}
                      </Link>
                      <Link
                        onClick={toggleMenu}
                        to="/about"
                        className="flex items-center py-2 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                      >
                        {translations[language]["about"]}
                      </Link>
                      <Link
                        onClick={toggleMenu}
                        to="/contact"
                        className="flex items-center py-2 px-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                      >
                        {translations[language]["contact"]}
                      </Link>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="pt-6 border-t border-gray-200 dark:border-gray-700"
                    >
                      <button
                        onClick={() => {
                          openModal();
                          toggleMenu();
                        }}
                        className="uppercase w-full py-3 px-4 bg-red-800 text-white hover:bg-red-900 transition-colors"
                      >
                        {translations[language]["apply"]}
                      </button>
                    </motion.div>
                    <div
              className="lang-switcher mx-auto flex justify-center xl:min-w-[100px] p-2 backdrop-blur-sm "
            >
              {filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  className={`xl:text-sm text-sm font-medium px-3 first:border-e border-gray-400 transition-colors`}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  {lang.label}
                </button>
              ))}
            </div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex justify-center space-x-4"
                    >
                      <a
                        aria-label="instagram"
                        title="Instagram"
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-800 dark:hover:text-red-800 transition-colors"
                      >
                        <FaInstagram size={22} />
                      </a>
                      <a
                        aria-label="linkedin"
                        title="Linkedin"
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-800 dark:hover:text-red-800 transition-colors"
                      >
                        <FaLinkedin size={22} />
                      </a>
                      <a
                        aria-label="facebook"
                        title="Facebook"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-800 dark:hover:text-red-800 transition-colors"
                      >
                        <FaFacebook size={22} />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <ApplyModal isOpen={isModalOpen} onClose={closeModal} />
      <div
        className={`fixed ${
          active ? "opacity-100" : "opacity-0"
        } transition-all duration-300 inset-0 z-10 bg-gray-900 bg-opacity-50 pointer-events-none`}
      ></div>
    </>
  );
}
