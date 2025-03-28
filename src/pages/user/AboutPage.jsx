import { motion, AnimatePresence } from "framer-motion";
import {
  FaBalanceScale,
  FaBuilding,
  FaClipboardCheck,
  FaHandshake,
} from "react-icons/fa";
import aboutImage from "../../assets/about/aboutImage.webp";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const AboutPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const StatisticItem = ({ item }) => {
    return (
      <div className="relative group h-full">
        <div className="relative bg-white dark:bg-black p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col items-center">
            <div>
              <item.icon className="text-6xl mb-6 text-[#AC8968] dark:text-[#AC8968]" />
            </div>
            <h3 className="text-4xl font-bold mb-3 text-black dark:text-white">
              <CountUp
                end={item.value}
                duration={2.5}
                suffix={item.suffix || ""}
              />
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {item.label}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Valser MMC | Haqqımızda</title>
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

      <div className="about-page md:py-40 py-36 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Main About Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 50,
              }}
              className="lg:w-[70%]"
            >
              <h2 className="ordina-medium uppercase text-3xl md:text-4xl font-bold text-[#AC8968] dark:text-white mb-6">
                Haqqımızda
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
                <b>Valser MMC</b> - hüquq, mühasibatlıq və iş yerlərinin
                attestasiyası sahələrində ixtisaslaşmış, yerli qanunvericiliyə
                əsaslanan xidmətlər göstərən peşəkar şirkətdir.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
                <b>Məqsədimiz</b> - müəssisələrin və sahibkarların fəaliyyətini
                hüquqi, maliyyə və əməyin mühafizəsi baxımından dayanıqlı və
                etibarlı şəkildə qurmasına dəstək olmaqdır.
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                Şirkətimiz müştərilərə fərdi yanaşma və yüksək keyfiyyətli
                xidmət göstərməyi əsas prinsip olaraq qəbul edir. Peşəkar
                komandamız müasir tələblərə uyğun həllər təklif edərək,
                müştərilərimizin biznes fəaliyyətinin effektivliyini və
                qanuniliyini təmin edir.
              </p>
            </motion.div>

            {/* Image with modern animation */}
            <motion.div
              className="lg:w-[30%] h-[500px] overflow-hidden shadow-lg rounded-lg"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 50,
              }}
              style={{
                filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.15))",
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
          <section className="relative mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="uppercase ordina-medium text-3xl md:text-4xl font-bold text-[#AC8968] dark:text-white text-center mb-16">
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
          </section>

          {/* Additional Info Section */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-4xl mx-auto mt-20 bg-white dark:bg-black p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="uppercase text-2xl font-bold text-[#AC8968] dark:text-white mb-6"
              >
                İş Yerlərinin Attestasiyası
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Azərbaycan Respublikası Nazirlər Kabinetinin 6 mart 2000-ci il
                  tarixli qərarına və əmək Məcəlləsinin 64.1-ci maddəsinə
                  əsasən, bütün müəssisə və təşkilatlarda - mülkiyyət və
                  təşkilati-hüquqi formasından asılı olmayaraq - iş yerlərinin
                  attestasiyası ən azı 5 ildən bir dəfə aparılmalıdır.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  İnzibati Xətalar Məcəlləsinin 192.2-ci maddəsinə əsasən isə bu
                  prosesi həyata keçirməyən işəgötürənlər məsuliyyət daşıyır və
                  cərimələnə bilər.
                </p>

                <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
                  Attestasiya zamanı qiymətləndirilən əsas risklər:
                </h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-6 space-y-2">
                  <li>İstehsalat mühitinin zərərli və təhlükəli amilləri</li>
                  <li>İş prosesinin ağırlığı və gərginliyi</li>
                  <li>İş avadanlıqlarının təhlükəsizliyi</li>
                  <li>İşçilərin fərdi mühafizə vasitələri ilə təminatı</li>
                  <li>Sanitar-gigiyenik şərait</li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300">
                  Valser MMC olaraq, iş yerlərinin attestasiyası xidmətimiz ilə
                  müəssisənizi qanuni tələblərə uyğunlaşdırır, işçilərinizin
                  sağlamlığını qoruyur və potensial cərimələrdən yayınmağınıza
                  kömək edirik.
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
