import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  FaBalanceScale,
  FaBuilding,
  FaFileContract,
  FaCheckCircle,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaChartLine,
  FaUserTie,
  FaHandshake,
  FaArrowRight as ArrowRight,
} from "react-icons/fa";
import NotFound from "@/pages/NotFound";
import { Helmet } from "react-helmet";
import { LanguageContext } from "@/context/languageContext";
import translations from "../../translations.json";
import attestation from "../../assets/images/attestation.jpg";
import attestationMark from "../../assets/images/attestationMark2.png";

export default function ServicePage() {
  const { serviceSlug } = useParams();
  const [openSyllabus, setOpenSyllabus] = useState({});
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Static array of services with detailed information
  const services = [
    {
      id: 1,
      title: translations[language]["service-1"],
      description: translations[language]["service-1-desc"],
      fullDescription: translations[language]["service-1-full-desc"],
      icon: <FaBuilding className="w-12 h-12" />,
      slug: "attestasiya",
      benefits: [
        translations[language]["service-1-benefit-1"],
        translations[language]["service-1-benefit-2"],
        translations[language]["service-1-benefit-3"],
        translations[language]["service-1-benefit-4"],
        translations[language]["service-1-benefit-5"],
      ],
      process: [
        {
          title: translations[language]["service-1-process-1-title"],
          description: translations[language]["service-1-process-1-desc"],
        },
        {
          title: translations[language]["service-1-process-2-title"],
          description: translations[language]["service-1-process-2-desc"],
        },
        {
          title: translations[language]["service-1-process-3-title"],
          description: translations[language]["service-1-process-3-desc"],
        },
        {
          title: translations[language]["service-1-process-4-title"],
          description: translations[language]["service-1-process-4-desc"],
        },
      ],
      tags: [
        translations[language]["service-1-tag-1"],
        translations[language]["service-1-tag-2"],
        translations[language]["service-1-tag-3"],
        translations[language]["service-1-tag-4"],
        translations[language]["service-1-tag-5"],
      ],
    },
    {
      id: 2,
      title: translations[language]["service-2"],
      description: translations[language]["service-2-desc"],
      fullDescription: translations[language]["service-2-full-desc"],
      icon: <FaFileContract className="w-12 h-12" />,
      slug: "muhasibatliq",
      benefits: [
        translations[language]["service-2-benefit-1"],
        translations[language]["service-2-benefit-2"],
        translations[language]["service-2-benefit-3"],
        translations[language]["service-2-benefit-4"],
        translations[language]["service-2-benefit-5"],
      ],
      process: [
        {
          title: translations[language]["service-2-process-1-title"],
          description: translations[language]["service-2-process-1-desc"],
        },
        {
          title: translations[language]["service-2-process-2-title"],
          description: translations[language]["service-2-process-2-desc"],
        },
        {
          title: translations[language]["service-2-process-3-title"],
          description: translations[language]["service-2-process-3-desc"],
        },
        {
          title: translations[language]["service-2-process-4-title"],
          description: translations[language]["service-2-process-4-desc"],
        },
      ],
      tags: [
        translations[language]["service-2-tag-1"],
        translations[language]["service-2-tag-2"],
        translations[language]["service-2-tag-3"],
        translations[language]["service-2-tag-4"],
        translations[language]["service-2-tag-5"],
      ],
    },
    {
      id: 3,
      title: translations[language]["service-3"],
      description: translations[language]["service-3-desc"],
      fullDescription: translations[language]["service-3-full-desc"],
      icon: <FaBalanceScale className="w-12 h-12" />,
      slug: "huquqi-xidmetler",
      benefits: [
        translations[language]["service-3-benefit-1"],
        translations[language]["service-3-benefit-2"],
        translations[language]["service-3-benefit-3"],
        translations[language]["service-3-benefit-4"],
        translations[language]["service-3-benefit-5"],
      ],
      process: [
        {
          title: translations[language]["service-3-process-1-title"],
          description: translations[language]["service-3-process-1-desc"],
        },
        {
          title: translations[language]["service-3-process-2-title"],
          description: translations[language]["service-3-process-2-desc"],
        },
        {
          title: translations[language]["service-3-process-3-title"],
          description: translations[language]["service-3-process-3-desc"],
        },
        {
          title: translations[language]["service-3-process-4-title"],
          description: translations[language]["service-3-process-4-desc"],
        },
      ],
      tags: [
        translations[language]["service-3-tag-1"],
        translations[language]["service-3-tag-2"],
        translations[language]["service-3-tag-3"],
        translations[language]["service-3-tag-4"],
        translations[language]["service-3-tag-5"],
      ],
    },
  ];

  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return <NotFound />;
  }

  const advantages = [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: translations[language]["advantage-1-title"],
      description: translations[language]["advantage-1-desc"],
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: translations[language]["advantage-2-title"],
      description: translations[language]["advantage-2-desc"],
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: translations[language]["advantage-3-title"],
      description: translations[language]["advantage-3-desc"],
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: translations[language]["advantage-4-title"],
      description: translations[language]["advantage-4-desc"],
    },
    {
      icon: <FaUserTie className="w-6 h-6" />,
      title: translations[language]["advantage-5-title"],
      description: translations[language]["advantage-5-desc"],
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: translations[language]["advantage-6-title"],
      description: translations[language]["advantage-6-desc"],
    },
  ];

  const tableData = [
    {
      id: 1,
      name: "Səs, infrosəs, ultrasəs, lokal və ümumi vibrasiyanın təyini",
      processName: "Fiziki faktorların qapalı, açıq və ətraf mühitdə ölçülməsi",
      method:
        "CH 2.2.4/2.1.8.562-96, CH 2.2.4/2.1.8.583-96, ГОСТ 12. 1.050- 86, 12.01.2007-ci il tarixli L -06 saylı Təlimat",
    },
    {
      id: 2,
      name: "Işıqlanma, parlaqlıq və pulsasiyanın təyini",
      processName: "Fiziki faktorların qapalı, açıq və ətraf mühitdə ölçülməsi",
      method:
        "CНиП 23-05-95,СанПиН 2.2.1/2.1.1.1278-03,MP 3863-85,ГОСТ 24940-96,СНиП 23-05-95,МУ 2.2.4.706-98,МУ 1322-75,12.01.2007-ci il tarixli, L-01 saylı Təlimat",
    },
    {
      id: 3,
      name: "Temperatur, nisbi rütubət, hava cərəyanının sürəti, atmosfer təzyiqi",
      processName: "Metiofaktorların qapalı, açıq və ətraf mühitdə ölçülməsi",
      method: "СанПиН 2.2.4.548-96,12.01,2007-ci il tarixli L-04 saylı Təlimat",
    },
    {
      id: 4,
      name: "Elektromaqnit dalğalarının qapalı və açıq iş yerlərində, VDT və ətraf mühitdə təyini",
      processName: "Fiziki faktorların qapalı, açıq və ətraf mühitdə ölçülməsi",
      method:
        "12.01.2007-ci il tarixli L-02 saylı Təlimat  СанПиН 2.1.8/2.2.4.2490-09ГОСТ 12.1.002-84,СанПиН 2.2.2.4.1340-03, СанПиН 2.2.2./2.4.2198-07, СанПиН 2.2.2V2.4.2620-10, СанПиН2.2.2./2.4.2732-10, СанПиН2.1.8/2.2.4.1191-03",
    },
    {
      id: 5,
      name: "Radiasiyanın (alfa, betta, qamma şüaları) açıq, qapalı iş sahələrində, ətraf mühitdə , torpaqda, suda və dənəvər mühitdə təyini ",
      processName: "Fiziki faktorların qapalı, açıq və ətraf mühitdə ölçülməsi",
      method:
        "СанПиН 2.6.1.2523 - 09 НРБ - 99/2009; 12.01.2007-ci il tarixli L-03 saylı Təlimat СанПиН 2.6.1.2523 - 09 НРБ - 99/2009;Respublika Tikinti Normaları ; РТН 31-93",
    },
    {
      id: 6,
      name: "NH3, C02 , C2-C10 və tozların təyini",
      processName:
        "Kimyəvi faktorların qapalı, açıq və ətraf mühitdə ölçülməsi",
      method:
        "12.01.2007-ci il tarixli; L -05 saylı Təlimat СанПиН 2.1.6.575-96;  СанПиН 2.2.1/2.1.1.1200 - 03; ГН 2.2.5.1827-03; ГН 2.2.5.1313-03",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Valser MMC | {translations[language][`service-${service.id}`]}
        </title>
        <meta
          name="description"
          content={`${translations[language][`service-${service.id}`]} - ${
            translations[language][`service-${service.id}-desc`]
          } Valser MMC peşəkar hüquqi xidmətlər təqdim edir.`}
        />
        <meta
          name="keywords"
          content={`${
            translations[language][`service-${service.id}`]
          }, ${service.tags?.join(", ")}, valser mmc, hüquqi xidmətlər`}
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content={`Valser MMC | ${
            translations[language][`service-${service.id}`]
          }`}
        />
        <meta
          property="og:description"
          content={translations[language][`service-${service.id}-desc`]}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icon.png" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="md:py-40 py-28 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white dark:bg-black shadow-xl overflow-hidden">
            <div className="relative p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="w-20 h-20 flex items-center justify-center bg-red-800 dark:bg-white text-white dark:text-black rounded-lg mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.icon}
                </motion.div>
                <motion.h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
                  {translations[language][`service-${service.id}`]}
                </motion.h1>
              </motion.div>
            </div>

            <div className="sm:p-8 p-4 bg-gray-50 dark:bg-gray-900">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="grid grid-cols-1 gap-8"
              >
                <div className="bg-white dark:bg-black sm:p-6 p-4 rounded-lg shadow-sm">
                  <h2 className="sm:text-xl text-base font-semibold mb-4 text-red-800 dark:text-red-800">
                    {translations[language]["service-about"]}
                  </h2>
                  <div className="space-y-4">
                    <p className="sm:text-base text-sm text-gray-600 dark:text-gray-300">
                      {service.fullDescription}
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-black sm:p-6 p-4 rounded-lg shadow-sm">
                  <h2 className="sm:text-xl text-base font-semibold mb-4 text-red-800 dark:text-red-800">
                    {translations[language]["service-advantages"]}
                  </h2>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-red-800 mt-1 mr-2 flex-shrink-0" />
                        <p className="sm:text-base text-sm text-gray-600 dark:text-gray-300">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pdf bg-white dark:bg-black sm:p-6 p-4 rounded-lg shadow-sm">
                  <h2 className="sm:text-xl text-base font-semibold mb-4 text-red-800 dark:text-red-800">
                    Akkredasiya Sahəsi
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                            İnspeksiya olunan məhsulun adı
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                            İnspeksiya prosedurunun adı
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700">
                            İnspeksiya metodu üçün NS
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-black divide-y divide-gray-200 dark:divide-gray-700">
                        {tableData.map((item, index) => (
                          <tr
                            key={index}
                            className={`hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors ${
                              index % 2 === 0
                                ? "bg-white dark:bg-black"
                                : "bg-gray-50 dark:bg-gray-900"
                            }`}
                          >
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                              {item.name}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                              {item.processName}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                              {item.method}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6">
                    <div className="max-w-xl mx-auto">
                      {/* Title at the top */}
                      <div className="text-center mb-3">
                        <p className="text-gray-800 poppins dark:text-gray-200 font-medium">
                          Attestat akkreditasiya sahəsi ilə birgə etibarlıdır.
                        </p>
                      </div>
                      
                      {/* Seal and signature with name on the right */}
                      <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="max-w-[300px]">
                          <img
                            src={attestationMark}
                            alt="Attestat akkreditasiya sahəsi"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="md:ml-4 mt-2 md:mt-0 text-left md:self-end md:mb-8">
                          <p className="font-bold text-gray-900 dark:text-white">Emin Zeynalov</p>
                          <p className="text-gray-700 dark:text-gray-300">Direktor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process */}

                <div className="bg-white dark:bg-black sm:p-6 p-4 rounded-lg shadow-sm">
                  <h2 className="sm:text-xl text-base font-semibold mb-6 text-red-800 dark:text-red-800">
                    {translations[language]["service-process"]}
                  </h2>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.6 + index * 0.1,
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                      >
                        <div
                          className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 transition-colors"
                          onClick={() =>
                            setOpenSyllabus((prev) => ({
                              ...prev,
                              [index]: !prev[index],
                            }))
                          }
                        >
                          <div className="flex items-center gap-x-3">
                            <span className="min-w-2 min-h-2 max-w-2 max-h-2 bg-red-800 rounded-full"></span>
                            <h3 className="font-medium sm:text-base text-sm text-gray-900 dark:text-white">
                              {step.title}
                            </h3>
                          </div>
                          <motion.svg
                            className="w-5 h-5 text-gray-500"
                            animate={{ rotate: openSyllabus[index] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </motion.svg>
                        </div>
                        <motion.div
                          initial={false}
                          animate={{
                            height: openSyllabus[index] ? "auto" : 0,
                            opacity: openSyllabus[index] ? 1 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="p-4 bg-white dark:bg-black">
                            <p className="sm:text-base text-sm text-gray-600 dark:text-gray-300">
                              {step.description}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-black sm:p-6 p-4 rounded-lg shadow-sm">
                  <h2 className="sm:text-xl text-base font-semibold mb-6 text-red-800 dark:text-red-800">
                    {translations[language]["service-why-choose"]}
                  </h2>
                  <div className="grid min-[880px]:grid-cols-3 sm:grid-cols-2 gap-4">
                    {advantages.map((advantage, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.1 * index,
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-900"
                      >
                        <div className="flex items-center justify-center h-full text-red-800">
                          {advantage.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                            {advantage.title}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                            {advantage.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex justify-center mt-8"
              >
                <Link to="/contact">
                  <button className="uppercase px-8 py-4 bg-red-800 text-white hover:bg-red-900 transition-all duration-300 hover:shadow-lg">
                    {translations[language]["apply"]}
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="max-w-4xl mt-12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services
                .filter((s) => s.id !== service.id)
                .slice(0, 2)
                .map((relatedService, index) => (
                  <motion.div
                    key={relatedService.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="h-full"
                  >
                    <Link to={`/service/${relatedService.slug}`}>
                      <div className="h-full flex flex-col bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-6 hover:border-[#AC8968] dark:hover:border-white transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <div className="bg-red-800 dark:bg-white text-white dark:text-black p-3 rounded-lg mr-4">
                            {relatedService.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-black dark:text-white">
                            {relatedService.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">
                          {relatedService.description}
                        </p>
                        <div className="cursor-pointer mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                          <span className="inline-flex items-center text-black dark:text-white font-medium group-hover:opacity-60 transition-opacity">
                            {translations[language]["more"]}
                            <ArrowRight className="group-hover:translate-x-1 ml-2 w-4 h-4 transition duration-300" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
