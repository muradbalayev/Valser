import { LanguageContext } from "@/context/languageContext";
import { useCourseApplyMutation } from "@/redux/misc/courseApplyApi";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import Select from "react-select";
import Swal from "sweetalert2";
import translations from "../../translations.json";

const ContactPage = () => {
  const [courseApply, { isLoading }] = useCourseApplyMutation();
  const { language } = useContext(LanguageContext);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceOptions = [
    { value: "attestation", label: translations[language]["service-1"] },
    { value: "accounting", label: translations[language]["service-2"] },
    { value: "legal-services", label: translations[language]["service-3"] },
    { value: "other", label: translations[language]["other"] },
  ];

  const validationSchema = {
    fullName: (value) => !value && "Zəhmət olmasa adınızı daxil edin",
    email: (value) => !value && "Zəhmət olmasa email ünvanınızı daxil edin",
    phoneNumber: (value) => !value && "Zəhmət olmasa əlaqə nömrənizi daxil edin",
    applicationCategory: (value) => !value && "Zəhmət olmasa xidmət növünü seçin",
  };

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    applicationCategory: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const [field, validateField] of Object.entries(validationSchema)) {
      const errorMessage = validateField(data[field]);
      if (errorMessage) {
        toast.error(errorMessage);
        return;
      }
    }

    let formattedPhone = data.phoneNumber || '';

    if (formattedPhone.startsWith("0")) {
      formattedPhone = formattedPhone.substring(1);
    }

    const updatedData = {
      ...data,
      phoneNumber: `+994${formattedPhone}`,
    };
    console.log(updatedData)

    try {
      await courseApply(updatedData).unwrap();

      setData({
        fullName: '',
        email: '',
        phoneNumber: '',
        applicationCategory: '',
      });

      Swal.fire({
        title: "Təşəkkür edirik!",
        text: "Müraciətiniz qəbul edildi. Tezliklə sizinlə əlaqə saxlanılacaq.",
        icon: "success",
        confirmButtonText: "Bağla",
        confirmButtonColor: "#AC8968",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        customClass: {
          confirmButton:
            "px-6 py-2.5  text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#AC8968]/30",
        },
      });

    } catch (error) {
      console.error('Müraciət xətası:', error);

      Swal.fire({
        title: "Xəta!",
        text: "Müraciətiniz göndərilmədi. Xahiş edirik bir daha cəhd edin.",
        icon: "error",
        confirmButtonText: "Bağla",
        confirmButtonColor: "#AC8968",
      });
    }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length <= 10) {
      // Limit to 10 digits
      setData({
        ...data,
        phoneNumber: value,
      });
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "phoneNumber") return;
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setData({
      ...data,
      applicationCategory: selectedOption ? selectedOption.value : "",
    })
  }


  return (
    <>
      <Helmet>
        <title>Valser MMC | Əlaqə</title>
        <meta
          name="description"
          content="Valser MMC ilə əlaqə saxlayın. Hüquqi xidmətlər, mühasibatlıq və iş yerlərinin attestasiyası sahələrində peşəkar həllər üçün bizə müraciət edin."
        />
        <meta
          name="keywords"
          content="valser mmc əlaqə, valser mmc ünvan, valser mmc telefon, valser mmc müraciət, hüquqi xidmətlər, mühasibatlıq, attestasiya"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Valser MMC | Əlaqə" />
        <meta
          property="og:description"
          content="Valser MMC-yə müraciət edin. Peşəkar komandamız sizə ən uyğun həlləri təklif edəcək."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icon.png" />

        {/* Local Business Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Valser MMC",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Moskva prospekti 3001 / Oskar Biznes Mərkəzi",
              "addressLocality": "Bakı",
              "addressCountry": "AZ"
            },
            "telephone": [
              "+994 10 395 43 93",
              "+994 12 530 81 49"
            ],
            "email": "info@valser.az",
            "url": "https://valsermmc.az",
            "openingHours": "Mo-Fr 09:00-18:00"
          })}
        </script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contact-section mx-auto md:py-40 py-28  dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="ordina-medium uppercase text-3xl md:text-4xl font-bold text-red-800 dark:text-white text-center mb-16">
            {translations[language]["contact-us"]}
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              >
              <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-black p-8  border border-gray-200 dark:border-gray-800 shadow-lg">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {translations[language]["fullname"]}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={data.fullName}
                    onChange={handleChange}
                    placeholder={translations[language]["fullname"]}
                    required
                    className="mt-1 outline-none border py-2 px-3 block w-full border-gray-300 shadow-sm focus:border-[#AC8968] focus:ring focus:ring-[#AC8968] focus:ring-opacity-50 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {translations[language]["email"]}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder={translations[language]["email"]}
                    required
                    className="mt-1 outline-none border py-2 px-3 block w-full border-gray-300 shadow-sm focus:border-[#AC8968] focus:ring focus:ring-[#AC8968] focus:ring-opacity-50 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {translations[language]["phone"]}
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="(055) 123 45 67"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                    className="mt-1 outline-none border py-2 px-3 block w-full border-gray-300 shadow-sm focus:border-[#AC8968] focus:ring focus:ring-[#AC8968] focus:ring-opacity-50 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {translations[language]["select"]}
                  </label>
                  <Select
                    name="applicationCategory"
                    value={serviceOptions.find(
                      (option) => option.value === data.applicationCategory
                    )}
                    onChange={handleSelectChange}
                    options={serviceOptions}
                    placeholder={translations[language]["select"]}
                    isSearchable={false}
                    classNamePrefix="select"
                    className="react-select-container"
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary: "#AC8968",
                        primary25: "#f3f4f6",
                        primary50: "#AC8968",
                        primary75: "#8A6D54",
                        neutral20: "#e5e7eb",
                        neutral30: "#AC8968",
                        neutral80: "#374151",
                      },
                    })}
                  />
                </div>

                <div>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    type="submit"
                    className={`${isLoading && "cursor-not-allowed"
                      } w-full bg-red-800 hover:bg-red-900 dark:bg-white text-white font-medium py-3 px-4 transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-[#AC8968]/30`}
                  >
                    {isLoading ? (
                      <div className="flex w-full items-center justify-center gap-2">
                        Göndərilir...
                      </div>
                    ) : (
                      translations[language]["apply"]
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="space-y-8">
              <div className="bg-white dark:bg-black p-8  border border-gray-200 dark:border-gray-800 shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-red-800 dark:text-red-800">
                  {translations[language]["contact-info"]}
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FaPhone className="mr-3 mt-1 text-red-800" />
                    <div>
                      <p>+994 10 395 43 93</p>
                      <p>+994 12 530 81 49</p>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-600 dark:text-gray-300">
                    <FaEnvelope className="mr-3 mt-1 text-red-800" /> 
                    <span>info@valsermmc.az</span>
                  </div>
                  <div className="flex items-center  text-gray-600 dark:text-gray-300">
                    <FaMapMarkerAlt className="mr-3 mt-1 text-red-800" /> 
                    <span>Moskva prospekti 3001 / Oskar Biznes Mərkəzi</span>
                  </div>
                  <div className="flex items-start text-gray-600 dark:text-gray-300">
                    <FaBuilding className="mr-3 mt-1 text-red-800" /> 
                    <span>{translations[language]["valser"]}</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-80  overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.9762543200358!2d49.81158365144752!3d40.39954767342197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087785ac400a5%3A0xaf840f9e1b853bb8!2sOskar%20Business%20center!5e1!3m2!1str!2saz!4v1743338357635!5m2!1str!2saz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;
