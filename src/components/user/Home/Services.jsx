import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaBalanceScale, FaBuilding, FaFileContract } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import translations from "../../../translations.json";
import { LanguageContext } from "@/context/languageContext";
import { useContext } from 'react';

export default function Services() {
  const { language } = useContext(LanguageContext);
  
  // Static array of services with slugs
  const services = [
    {
      id: 1,
      title: translations[language]["service-1"],
      description: translations[language]["service-1-desc"],
      icon: <FaBuilding className="w-12 h-12" />,
      slug: "attestasiya"
    },
    {
      id: 2,
      title: translations[language]["service-2"],
      description: translations[language]["service-2-desc"],
      icon: <FaFileContract className="w-12 h-12" />,
      slug: "muhasibatliq"
    },
    {
      id: 3,
      title: translations[language]["service-3"],
      description: translations[language]["service-3-desc"],
      icon: <FaBalanceScale className="w-12 h-12" />,
      slug: "huquqi-xidmetler"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="uppercase ordina-medium text-3xl md:text-4xl font-bold text-red-800 dark:text-white mb-6">
            {translations[language]["services"]}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {translations[language]["services-desc"]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full group"
            >
              <div className="h-full flex flex-col bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800  p-6 hover:border-[#AC8968] dark:hover:border-white transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-red-800 dark:bg-white text-white dark:text-black p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">
                  {service.description}
                </p>
                
                <Link to={`/service/${service.slug}`} className="cursor-pointer mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <span className="inline-flex items-center text-black dark:text-white font-medium group-hover:opacity-60 transition-opacity">
                    {translations[language]["more"]}
                    <ArrowRight className="group-hover:translate-x-1 ml-2 w-4 h-4 transition duration-300" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
