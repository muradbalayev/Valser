import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  FaBalanceScale,
  FaBuilding,
  FaFileContract,
  FaGavel,
  FaHandshake,
  FaCalculator,
  FaCheckCircle,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaChartLine,
  FaUserTie,
  FaArrowRight as ArrowRight
} from "react-icons/fa";
import NotFound from "@/pages/NotFound";
import { Helmet } from "react-helmet";

export default function ServicePage() {
  const { serviceSlug } = useParams();
  const [openSyllabus, setOpenSyllabus] = useState({});

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Static array of legal services with detailed information
  const services = [
    {
      id: 1,
      title: "Müəssisələrin hüquqi müşayiəti",
      description: "Müəssisənizin hüquqi məsələlərində peşəkar dəstək və müşayiət xidmətləri.",
      fullDescription: "Müəssisənizin fəaliyyəti zamanı qarşılaşa biləcəyi bütün hüquqi məsələlərdə dəstək və müşayiət xidmətləri təqdim edirik. Bu xidmət çərçivəsində müəssisənizin fəaliyyətinin qanunvericiliyə uyğunluğunu təmin edir, hüquqi risklərini qiymətləndirir və onların qarşısını almaq üçün tədbirlər görürük.",
      icon: <FaBuilding className="w-12 h-12" />,
      slug: "huquqi-musayiet",
      benefits: [
        "Hüquqi risklərin qiymətləndirilməsi və idarə edilməsi",
        "Daxili sənədlərin hüquqi ekspertizası",
        "Müəssisənin qeydiyyatı və yenidən təşkili",
        "Lisenziya və icazələrin alınması",
        "Hüquqi məsləhətləşmələr"
      ],
      process: [
        {
          title: "İlkin konsultasiya",
          description: "Müəssisənizin fəaliyyət sahəsi və hüquqi ehtiyacları müəyyənləşdirilir."
        },
        {
          title: "Hüquqi audit",
          description: "Mövcud sənədləşmə və prosedurların qanunvericiliyə uyğunluğu yoxlanılır."
        },
        {
          title: "Fəaliyyət planı",
          description: "Aşkar edilmiş problemlərin həlli üçün fəaliyyət planı hazırlanır."
        },
        {
          title: "Davamlı hüquqi dəstək",
          description: "Müəssisənin gündəlik fəaliyyətində hüquqi dəstək təmin edilir."
        }
      ],
      tags: ["Hüquqi audit", "Korporativ hüquq", "Lisenziyalaşdırma", "Hüquqi məsləhət", "Risk idarəetməsi"]
    },
    {
      id: 2,
      title: "Müqavilələrin hazırlanması və hüquqi ekspertizası",
      description: "Müqavilələrin hazırlanması və mövcud müqavilələrin hüquqi ekspertizası.",
      fullDescription: "Biznes fəaliyyətiniz üçün lazım olan bütün növ müqavilələrin hazırlanması və mövcud müqavilələrin hüquqi ekspertizasını həyata keçiririk. Müqavilələrinizin qanunvericiliyə uyğunluğunu təmin edir, hüquqlarınızı qoruyur və potensial riskləri minimuma endiririk.",
      icon: <FaFileContract className="w-12 h-12" />,
      slug: "muqavilelerin-hazirlanmasi",
      benefits: [
        "Fərdi tələblərə uyğun müqavilələrin hazırlanması",
        "Mövcud müqavilələrin hüquqi ekspertizası",
        "Potensial risklərin aşkarlanması və aradan qaldırılması",
        "Müqavilə şərtlərinin müzakirəsi və razılaşdırılması",
        "Beynəlxalq müqavilələrin hazırlanması"
      ],
      process: [
        {
          title: "Ehtiyacların müəyyənləşdirilməsi",
          description: "Müqavilənin məqsədi və əsas şərtləri müəyyənləşdirilir."
        },
        {
          title: "Müqavilə layihəsinin hazırlanması",
          description: "Tələblərə uyğun müqavilə layihəsi hazırlanır."
        },
        {
          title: "Hüquqi ekspertiza",
          description: "Müqavilənin qanunvericiliyə uyğunluğu və risklər qiymətləndirilir."
        },
        {
          title: "Yekun redaktə və təsdiq",
          description: "Müqavilə yekun redaktə edilir və təsdiqlənir."
        }
      ],
      tags: ["Müqavilə hüququ", "Hüquqi ekspertiza", "Kommersiya müqavilələri", "Beynəlxalq müqavilələr", "Risk qiymətləndirməsi"]
    },
    {
      id: 3,
      title: "Əmək münasibətlərinin tənzimlənməsi",
      description: "Əmək münasibətlərinin qanunvericiliyə uyğun şəkildə tənzimlənməsi xidmətləri.",
      fullDescription: "Əmək münasibətlərinin qanunvericiliyə uyğun şəkildə tənzimlənməsi, əmək müqavilələrinin hazırlanması, daxili əmək qaydalarının tərtib edilməsi və əmək mübahisələrinin həlli kimi xidmətlər göstəririk.",
      icon: <FaHandshake className="w-12 h-12" />,
      slug: "emek-munasibetleri",
      benefits: [
        "Əmək müqavilələrinin hazırlanması",
        "Daxili əmək qaydalarının tərtib edilməsi",
        "Əmək mübahisələrinin həlli",
        "İşçilərin işə qəbulu və işdən azad edilməsi prosedurlarının təşkili",
        "Əmək qanunvericiliyinə uyğunluğun təmin edilməsi"
      ],
      process: [
        {
          title: "Mövcud vəziyyətin analizi",
          description: "Şirkətin əmək münasibətləri sahəsində mövcud vəziyyəti analiz edilir."
        },
        {
          title: "Sənədləşmənin hazırlanması",
          description: "Əmək müqavilələri və daxili əmək qaydaları hazırlanır."
        },
        {
          title: "Prosedurların təkmilləşdirilməsi",
          description: "İşə qəbul və işdən azad etmə prosedurları təkmilləşdirilir."
        },
        {
          title: "Mübahisələrin həlli",
          description: "Əmək mübahisələrinin həlli."
        }
      ],
      tags: ["Əmək hüququ", "Əmək müqavilələri", "Daxili əmək qaydaları", "Əmək mübahisələri", "Kadr idarəetməsi"]
    },
    {
      id: 4,
      title: "Məhkəmə və arbitraj işlərində təmsilçilik",
      description: "Məhkəmə və arbitraj proseslərində peşəkar hüquqi təmsilçilik xidmətləri.",
      fullDescription: "Məhkəmə və arbitraj proseslərində maraqlarınızı təmsil edir, iddia ərizələrinin hazırlanması, sübutların toplanması və təqdim edilməsi, məhkəmə proseslərində iştirak və məhkəmə qərarlarının icrasının təmin edilməsi kimi xidmətlər göstəririk.",
      icon: <FaGavel className="w-12 h-12" />,
      slug: "mehkeme-temsilciliyi",
      benefits: [
        "Peşəkar hüquqi təmsilçilik",
        "İddia ərizələrinin hazırlanması",
        "Sübutların toplanması və təqdim edilməsi",
        "Məhkəmə proseslərində iştirak",
        "Məhkəmə qərarlarının icrasının təmin edilməsi"
      ],
      process: [
        {
          title: "İşin qiymətləndirilməsi",
          description: "Mübahisənin mahiyyəti və perspektivləri qiymətləndirilir."
        },
        {
          title: "Strategiyanın hazırlanması",
          description: "İşin uğurla həlli üçün hüquqi strategiya hazırlanır."
        },
        {
          title: "Sənədlərin hazırlanması",
          description: "İddia ərizəsi və digər prosessual sənədlər hazırlanır."
        },
        {
          title: "Məhkəmə prosesində təmsilçilik",
          description: "Məhkəmə və ya arbitraj prosesində maraqlarınız təmsil olunur."
        }
      ],
      tags: ["Məhkəmə təmsilçiliyi", "Arbitraj", "Mülki mübahisələr", "Kommersiya mübahisələri", "İddia ərizələri"]
    },
    {
      id: 5,
      title: "Korporativ hüquq və vergi hüququ sahəsində məsləhətlər",
      description: "Korporativ və vergi hüququ sahəsində peşəkar məsləhət xidmətləri.",
      fullDescription: "Korporativ və vergi hüququ sahəsində peşəkar məsləhət xidmətləri təqdim edirik. Şirkətlərin qeydiyyatı, yenidən təşkili, birləşməsi və bölünməsi, səhmdarların hüquqlarının qorunması, vergi planlaması və vergi mübahisələrinin həlli kimi məsələlərdə dəstək göstəririk.",
      icon: <FaBalanceScale className="w-12 h-12" />,
      slug: "korporativ-huquq",
      benefits: [
        "Şirkətlərin qeydiyyatı və yenidən təşkili",
        "Səhmdarların hüquqlarının qorunması",
        "Korporativ idarəetmə strukturunun təkmilləşdirilməsi",
        "Vergi planlaması və optimallaşdırılması",
        "Vergi mübahisələrinin həlli"
      ],
      process: [
        {
          title: "Vəziyyətin analizi",
          description: "Şirkətin korporativ və vergi vəziyyəti analiz edilir."
        },
        {
          title: "Hüquqi məsləhətləşmə",
          description: "Korporativ və vergi məsələləri üzrə hüquqi məsləhətlər verilir."
        },
        {
          title: "Strategiyanın hazırlanması",
          description: "Korporativ və vergi strategiyası hazırlanır."
        },
        {
          title: "Tətbiq və nəzarət",
          description: "Strategiyanın tətbiqi və nəticələrin monitorinqi həyata keçirilir."
        }
      ],
      tags: ["Korporativ hüquq", "Vergi hüququ", "Şirkət qeydiyyatı", "Vergi planlaması", "Səhmdarların hüquqları"]
    },
    {
      id: 6,
      title: "Mühasibatlıq xidmətləri",
      description: "Peşəkar mühasibatlıq və maliyyə hesabatları xidmətləri.",
      fullDescription: "Peşəkar mühasibatlıq və maliyyə hesabatları xidmətləri təqdim edirik. Mühasibat uçotunun aparılması, maliyyə hesabatlarının hazırlanması, vergi bəyannamələrinin tərtib edilməsi və təqdim olunması, əmək haqqı hesablamaları və digər mühasibatlıq xidmətləri göstəririk.",
      icon: <FaCalculator className="w-12 h-12" />,
      slug: "muhasibatliq-xidmetleri",
      benefits: [
        "Mühasibat uçotunun aparılması",
        "Maliyyə hesabatlarının hazırlanması",
        "Vergi bəyannamələrinin tərtib edilməsi və təqdim olunması",
        "Əmək haqqı hesablamaları",
        "Audit xidmətləri"
      ],
      process: [
        {
          title: "İlkin qiymətləndirmə",
          description: "Müəssisənin mühasibat uçotu vəziyyəti qiymətləndirilir."
        },
        {
          title: "Mühasibat uçotunun təşkili",
          description: "Mühasibat uçotu sisteminin qurulması və ya təkmilləşdirilməsi."
        },
        {
          title: "Cari mühasibat əməliyyatları",
          description: "Gündəlik mühasibat əməliyyatlarının aparılması."
        },
        {
          title: "Hesabatların hazırlanması",
          description: "Maliyyə və vergi hesabatlarının hazırlanması və təqdim edilməsi."
        }
      ],
      tags: ["Mühasibat uçotu", "Maliyyə hesabatları", "Vergi bəyannamələri", "Əmək haqqı hesablamaları", "Audit"]
    }
  ];

  const service = services.find(s => s.slug === serviceSlug);

  if (!service) {
    return <NotFound />;
  }

  const advantages = [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Peşəkar Yanaşma",
      description: "Yüksək keyfiyyətli hüquqi xidmətlər",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Fərdi Yanaşma",
      description: "Hər müştəriyə xüsusi diqqət",
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Vaxtında İcra",
      description: "Xidmətlərin vaxtında və keyfiyyətlə icrası",
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Effektiv Həllər",
      description: "Optimal və effektiv həllərin təklif edilməsi",
    },
    {
      icon: <FaUserTie className="w-6 h-6" />,
      title: "Təcrübəli Mütəxəssislər",
      description: "5+ il təcrübəli hüquqşünaslar",
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Etibarlı Tərəfdaşlıq",
      description: "Uzunmüddətli əməkdaşlıq münasibətləri",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Valser MMC | {service.title}</title>
        <meta
          name="description"
          content={`${service.title} - ${service.description} Valser MMC peşəkar hüquqi xidmətlər təqdim edir.`}
        />
        <meta
          name="keywords"
          content={`${service.title}, ${service.tags?.join(", ")}, valser mmc, hüquqi xidmətlər`}
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content={`Valser MMC | ${service.title}`} />
        <meta property="og:description" content={service.description} />
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
          <div className="max-w-4xl mx-auto bg-white dark:bg-black rounded-lg shadow-xl overflow-hidden">
            <div className="relative p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  className="w-20 h-20 flex items-center justify-center bg-red-800 dark:bg-white text-white dark:text-black rounded-lg mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.icon}
                </motion.div>
                <motion.h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
                  {service.title}
                </motion.h1>
              </motion.div>
            </div>

            <div className="sm:p-8 p-4 bg-gray-50 dark:bg-gray-900">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="grid grid-cols-1 gap-8"
              >
                <div className="bg-white dark:bg-black sm:p-6 p-4 rounded-lg shadow-sm">
                  <h2 className="sm:text-xl text-base font-semibold mb-4 text-[#AC8968] dark:text-[#AC8968]">
                    Xidmət Haqqında
                  </h2>
                  <div className="space-y-4">
                    <p className="sm:text-base text-sm text-gray-600 dark:text-gray-300">
                      {service.fullDescription}
                    </p>

                    {/* Tags */}
                    <div className="mt-6">
                      <p className="font-semibold sm:text-base text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Əsas sahələr:
                      </p>
                      <div className="flex flex-wrap sm:gap-2 gap-1">
                        {service.tags?.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 sm:text-sm text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-black sm:p-6 p-4 rounded-lg shadow-sm">
                  <h2 className="sm:text-xl text-base font-semibold mb-4 text-[#AC8968] dark:text-[#AC8968]">
                    Xidmətin Üstünlükləri
                  </h2>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <FaCheckCircle className="text-[#AC8968] mt-1 mr-2 flex-shrink-0" />
                        <p className="sm:text-base text-sm text-gray-600 dark:text-gray-300">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-black sm:p-6 p-4 rounded-lg shadow-sm">
                  <h2 className="sm:text-xl text-base font-semibold mb-6 text-[#AC8968] dark:text-[#AC8968]">
                    Xidmət Prosesi
                  </h2>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
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
                            <span className="min-w-2 min-h-2 max-w-2 max-h-2 bg-[#AC8968] rounded-full"></span>
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
                            ease: "easeInOut",
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
                  <h2 className="sm:text-xl text-base font-semibold mb-6 text-[#AC8968] dark:text-[#AC8968]">
                    Valser MMC Fərqi
                  </h2>
                  <div className="grid min-[880px]:grid-cols-3 sm:grid-cols-2 gap-4">
                    {advantages.map((advantage, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                        className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-900"
                      >
                        <div className="flex items-center justify-center h-full text-[#AC8968]">
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
                  <button className="px-8 py-4 bg-[#AC8968] text-white hover:bg-[#8A6D54] transition-all duration-300 hover:shadow-lg">
                    Müraciət Et
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="max-w-4xl mt-12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services
                .filter(s => s.id !== service.id)
                .slice(0, 2)
                .map((relatedService, index) => (
                  <motion.div
                    key={relatedService.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Link to={`/service/${relatedService.slug}`}>
                      <div className="h-full flex flex-col bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-[#AC8968] dark:hover:border-white transition-all duration-300">
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
                            Ətraflı
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
