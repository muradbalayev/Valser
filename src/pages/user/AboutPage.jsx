import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaBalanceScale,
//   FaBuilding,
//   FaClipboardCheck,
//   FaHandshake,
// } from "react-icons/fa";
import aboutImage from "../../assets/about/aboutImg.jpg";
// import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import OurAdvantages from "@/components/user/Home/OurAdvantages";
import { LanguageContext } from "@/context/languageContext";
import { useContext } from "react";
import translations from "../../translations.json";
const AboutPage = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const StatisticItem = ({ item }) => {
  //   return (
  //     <div className="relative group h-full">
  //       <div className="relative bg-white dark:bg-black p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
  //         <div className="flex flex-col items-center">
  //           <div>
  //             <item.icon className="text-6xl mb-6 text-red-800 dark:text-red-800" />
  //           </div>
  //           <h3 className="text-4xl font-bold mb-3 text-black dark:text-white">
  //             <CountUp
  //               end={item.value}
  //               duration={2.5}
  //               suffix={item.suffix || ""}
  //             />
  //           </h3>
  //           <p className="text-xl text-gray-700 dark:text-gray-300 whitespace-nowrap">
  //             {item.label}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      <Helmet>
        <title>Valser MMC | {translations[language]["about"]}</title>
        <meta
          name="description"
          content="Valser MMC - hüquq, mühasibatlıq və iş yerlərinin attestasiyası sahələrində ixtisaslaşmış, yerli qanunvericiliyə əsaslanan xidmətlər göstərən peşəkar şirkət."
        />
        <meta
          name="keywords"
          content="valser mmc, haqqımızda, hüquq, mühasibatlıq, iş yerlərinin attestasiyası"
        />
        <meta property="og:title" content="Valser MMC | Haqqımızda" />
        <meta
          property="og:description"
          content="Valser MMC - müəssisələrin və sahibkarların fəaliyyətini hüquqi, maliyyə və əməyin mühafizəsi baxımından dayanıqlı və etibarlı şəkildə qurmasına dəstək olmaqdır."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={aboutImage} />
      </Helmet>

      <div className="about-page md:py-40 py-36 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Main About Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="lg:w-[70%]"
            >
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="ordina-medium uppercase text-3xl md:text-4xl font-bold text-red-800 dark:text-white mb-6">
                {translations[language]["about"]}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
                <b>{translations[language]["valser"]}</b> - {translations[language]["about-desc-1"]}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
                <b>{translations[language]["our-goal"]}</b> - {translations[language]["about-desc-2"]}
              </motion.p>
            </motion.div>

            {/* Image with modern animation */}
            <motion.div
              className="lg:w-[30%] h-[500px] overflow-hidden"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <motion.img
                src={aboutImage}
                alt="Valser MMC"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>

          {/* Statistics Section */}
          {/* <section className="relative mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="uppercase ordina-medium text-3xl md:text-4xl font-bold text-red-800 dark:text-white text-center mb-16">
                Nəticələrimiz
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: FaBuilding,
                    value: 100,
                    label: "Müştəri Şirkət",
                    suffix: "+",
                  },
                  {
                    icon: FaClipboardCheck,
                    value: 200,
                    label: "Attestasiya Layihəsi",
                    suffix: "+",
                  },
                  {
                    icon: FaHandshake,
                    value: 5,
                    label: "İl Təcrübə",
                    suffix: "+",
                  },
                  {
                    icon: FaBalanceScale,
                    value: 95,
                    label: "Müştəri Məmnuniyyəti",
                    suffix: "%",
                  },
                ].map((item, index) => (
                  <StatisticItem key={index} item={item} />
                ))}
              </div>
            </motion.div>
          </section> */}

          <OurAdvantages/>

          {/* Additional Info Section */}
          <AnimatePresence>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-10 bg-white dark:bg-black p-8  border border-gray-200 dark:border-gray-800"
        >
          <h3 className="sm:text-start text-center uppercase text-2xl font-bold text-red-800 dark:text-white mb-6">
            {translations[language]["attestation"]}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {translations[language]["attestation-desc-1"]}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {translations[language]["attestation-desc-2"]}
          </p>

          <h4 className="text-xl font-semibold text-red-800 dark:text-white mb-4">
            {translations[language]["attestation-title-2"]}
          </h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>{translations[language]["attestasion-tag-1"]}</li>
            <li>{translations[language]["attestasion-tag-2"]}</li>
            <li>{translations[language]["attestasion-tag-3"]}</li>
            <li>{translations[language]["attestasion-tag-4"]}</li>
          </ul>

          <p className="text-gray-700 dark:text-gray-300">
            {translations[language]["attestation-desc-3"]}
          </p>
        </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
