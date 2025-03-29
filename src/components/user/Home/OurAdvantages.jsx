import { motion } from "framer-motion";
import { FaBalanceScale, FaBuilding, FaFileContract } from 'react-icons/fa';
import { useState } from 'react';
import ApplyModal from '@/components/modals/ApplyModal';
import translations from "../../../translations.json";
import { useContext } from 'react';
import { LanguageContext } from '@/context/languageContext';

const OurAdvantages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useContext(LanguageContext);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const services = [
    {
      id: 1,
      title: translations[language]["service-1"],
      description: translations[language]["service-1-desc"],
      icon: <FaBuilding className="w-8 h-8" />,
      slug: "attestasiya"
    },
    {
      id: 2,
      title: translations[language]["service-2"],
      description: translations[language]["service-2-desc"],
      icon: <FaFileContract className="w-8 h-8" />,
      slug: "muhasibatliq"
    },
    {
      id: 3,
      title: translations[language]["service-3"],
      description: translations[language]["service-3-desc"],
      icon: <FaBalanceScale className="w-8 h-8" />,
      slug: "huquqi-xidmetler"
    }
  ];

  return (
    <section className="md:py-20 py-10 relative overflow-hidden  dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="uppercase ordina-medium text-red-800 text-3xl md:text-4xl font-bold dark:text-white mb-6">
            {translations[language]["what-we-do"]}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {translations[language]["what-we-do-desc"]}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative z-10 h-full bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300">
                {/* Icon container with black/white design */}
                <div className="w-16 h-16 rounded-full bg-red-800 dark:bg-white flex items-center justify-center text-white dark:text-black mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-black dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={openModal}
            className="bg-red-800 hover:bg-red-900 dark:bg-white text-white dark:text-black font-medium px-10 py-3 transition-all duration-300 hover:opacity-90"
          >
            {translations[language]["apply"]}
          </button>
        </motion.div> 
      </div>

      <ApplyModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default OurAdvantages;
