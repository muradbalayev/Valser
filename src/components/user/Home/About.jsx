import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaBalanceScale,
  FaBuilding,
  FaClipboardCheck,
  FaHandshake,
} from "react-icons/fa";
import CountUp from "react-countup";

import aboutImage from "@/assets/about/aboutImage.webp";

const About = () => {
  const aboutSectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: aboutSectionRef,
    offset: isMobile ? ["start end", "center start"] : ["start end", "end start"]
  });

  // Create transform values based on scroll progress with smoother easing
  // On mobile, make animations trigger earlier
  const imageX = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.3] : [0, 0.5], 
    [100, 0]
  );
  const imageOpacity = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.2] : [0, 0.3], 
    [0, 1]
  );
  const imageScale = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.3] : [0, 0.5], 
    [0.9, 1]
  );
  const imageRotate = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.3] : [0, 0.5], 
    [2, 0]
  );
  
  // Text animation values based on scroll progress
  const textX = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.3] : [0, 0.5], 
    [-100, 0]
  );
  const textOpacity = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.2] : [0, 0.3], 
    [0, 1]
  );
  const textScale = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.3] : [0, 0.5], 
    [0.9, 1]
  );

  return (
    <section id="about" className="md:py-20 py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container relative mx-auto px-4">
        {/* About Valser MMC Section */}
        <div 
          ref={aboutSectionRef}
          className="sm:flex hidden flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto mb-20"
        >
          {/* Text Content */}
          <motion.div
            style={{ 
              x: textX,
              opacity: textOpacity,
              scale: textScale
            }}
            transition={{
              duration: isMobile ? 0.8 : 1.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="lg:w-[70%]"
          >
            <h2 className="ordina-medium uppercase text-3xl md:text-4xl font-bold text-[#AC8968] dark:text-white mb-6">
              Haqqımızda
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
             <b>Valser MMC</b> - hüquq, mühasibatlıq və iş yerlərinin attestasiyası sahələrində ixtisaslaşmış,
              yerli qanunvericiliyə əsaslanan xidmətlər göstərən peşəkar şirkətdir.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
             <b>Məqsədimiz</b> - müəssisələrin və sahibkarların fəaliyyətini hüquqi, maliyyə və əməyin mühafizəsi
              baxımından dayanıqlı və etibarlı şəkildə qurmasına dəstək olmaqdır.
            </p>
          </motion.div>

          {/* Image with scroll animation */}
          <motion.div 
            className="lg:w-[30%] h-[500px] overflow-hidden shadow-lg"
            style={{ 
              x: imageX,
              opacity: imageOpacity,
              scale: imageScale,
              rotate: imageRotate,
              filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.15))"
            }}
            transition={{
              duration: isMobile ? 0.8 : 1.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <img 
              src={aboutImage} 
              alt="Valser MMC" 
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </motion.div>
        </div>
        <div 
          className="sm:hidden flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto mb-20"
        >
          {/* Text Content */}
          <div
            className="w-full"
          >
            <h2 className="ordina-medium text-center uppercase text-3xl md:text-4xl font-bold text-[#AC8968] dark:text-white mb-6">
              Haqqımızda
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
             <b>Valser MMC</b> - hüquq, mühasibatlıq və iş yerlərinin attestasiyası sahələrində ixtisaslaşmış,
              yerli qanunvericiliyə əsaslanan xidmətlər göstərən peşəkar şirkətdir.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
             <b>Məqsədimiz</b> - müəssisələrin və sahibkarların fəaliyyətini hüquqi, maliyyə və əməyin mühafizəsi
              baxımından dayanıqlı və etibarlı şəkildə qurmasına dəstək olmaqdır.
            </p>
          </div>

          {/* Image with scroll animation */}
          <div 
            className="lg:w-[30%] h-[500px] overflow-hidden shadow-lg"
          >
            <img 
              src={aboutImage} 
              alt="Valser MMC" 
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </div>
        </div>
        {/* Statistics Section */}
        <section className="relative mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
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
                <StatisticItem key={index} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 bg-white dark:bg-black p-8 rounded-lg border border-gray-200 dark:border-gray-800"
        >
          <h3 className="sm:text-start text-center uppercase text-2xl font-bold text-[#AC8968] dark:text-white mb-6">
            İş Yerlərinin Attestasiyası
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Azərbaycan Respublikası Nazirlər Kabinetinin 6 mart 2000-ci il tarixli qərarına və əmək
            Məcəlləsinin 64.1-ci maddəsinə əsasən, bütün müəssisə və təşkilatlarda - mülkiyyət və
            təşkilati-hüquqi formasından asılı olmayaraq - iş yerlərinin attestasiyası ən azı 5 ildən bir
            dəfə aparılmalıdır.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            İnzibati Xətalar Məcəlləsinin 192.2-ci maddəsinə əsasən isə bu prosesi həyata keçirməyən
            işəgötürənlər məsuliyyət daşıyır və cərimələnə bilər.
          </p>
          
          <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
            Attestasiya zamanı qiymətləndirilən əsas risklər:
          </h4>
          <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Hava çirkləndiriciləri</li>
            <li>Kimyəvi və bioloji zərərlər</li>
            <li>Fiziki amillər (səs-küy, radiasiya, vibrasiya və s.)</li>
            <li>Erqonomik təhlükələr</li>
          </ul>
          
          <p className="text-gray-700 dark:text-gray-300">
            Valser MMC attestasiyanı texniki normativlərə uyğun olaraq həyata keçirir və müəssisələrin
            əməyin mühafizəsi sahəsində bütün hüquqi və texniki tələblərə cavab verməsinə dəstək
            göstərir.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const StatisticItem = ({ item, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      key={index}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full"
    >
      <div className="relative z-0 h-full bg-white dark:bg-black p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[#AC8968] dark:hover:border-white transition-all duration-300">
        <div className="flex flex-col items-center h-full">
          <div>
            <item.icon className="text-5xl mb-6 text-[#AC8968] dark:text-white" />
          </div>
          <h3 className="text-4xl font-bold mb-3 text-gray-600 dark:text-white">
            {isInView ? (
              <CountUp
                end={item.value}
                duration={2}
                delay={0.3}
                suffix={item.suffix || ""}
              />
            ) : (
              "0"
            )}
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300 text-center">
            {item.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
