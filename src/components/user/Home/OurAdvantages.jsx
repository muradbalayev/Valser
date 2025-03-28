import { motion } from "framer-motion";
import { FaBalanceScale, FaCalculator, FaClipboardCheck, FaFileContract, FaGavel, FaHandshake } from 'react-icons/fa';
import { useState } from 'react';
import ApplyModal from '@/components/modals/ApplyModal';

const OurAdvantages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const services = [
    {
      id: 1,
      title: "İş Yerlərinin Attestasiyası",
      description: "Azərbaycan qanunvericiliyinə uyğun olaraq, bütün müəssisələrdə iş yerlərinin attestasiyası xidməti.",
      icon: <FaClipboardCheck className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Hüquqi Müşayiət",
      description: "Müəssisələrin hüquqi müşayiəti və müqavilələrin hazırlanması, hüquqi ekspertizası.",
      icon: <FaGavel className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Əmək Münasibətləri",
      description: "Əmək münasibətlərinin tənzimlənməsi və hüquqi dəstək.",
      icon: <FaHandshake className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Məhkəmə Təmsilçiliyi",
      description: "Məhkəmə və arbitraj işlərində peşəkar təmsilçilik xidmətləri.",
      icon: <FaBalanceScale className="w-8 h-8" />,
    },
    {
      id: 5,
      title: "Korporativ Hüquq",
      description: "Korporativ hüquq və vergi hüququ sahəsində peşəkar məsləhətlər.",
      icon: <FaFileContract className="w-8 h-8" />,
    },
    {
      id: 6,
      title: "Mühasibatlıq Xidmətləri",
      description: "Peşəkar mühasibatlıq və maliyyə hesabatları xidmətləri.",
      icon: <FaCalculator className="w-8 h-8" />,
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
          <h2 className="uppercase ordina-medium text-[#AC8968] text-3xl md:text-4xl font-bold dark:text-white mb-6">
            NƏ EDİRİK?
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hüquq, mühasibatlıq və iş yerlərinin attestasiyası sahələrində peşəkar xidmətlər
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
            MÜRACİƏT
          </button>
        </motion.div> 
      </div>

      <ApplyModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default OurAdvantages;
