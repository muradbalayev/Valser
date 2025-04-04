import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiUser, FiMail, FiPhone, FiBook } from "react-icons/fi";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useCourseApplyMutation } from "@/redux/misc/courseApplyApi";
import { useContext } from "react";
import { LanguageContext } from "@/context/languageContext";
import translations from '../../translations.json'

export default function ApplyModal({ isOpen, onClose }) {
  const [courseApply, { isLoading }] = useCourseApplyMutation();

  const { language } = useContext(LanguageContext);

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    applicationCategory: "",
    applicationType: "individual"
  });

  const validationSchema = {
    fullName: (value) => !value && "Please enter a fullName",
    email: (value) => !value && "Please enter an email",
    phoneNumber: (value) => !value && "Please enter a phone number",
    applicationCategory: (value) =>
      !value && "Please select an application category",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const [field, validateField] of Object.entries(validationSchema)) {
      const errorMessage = validateField(data[field]);
      if (errorMessage) {
        toast.error(errorMessage);
        return;
      }
    }

    let formattedPhone = data.phoneNumber || "";

    if (formattedPhone.startsWith("0")) {
      formattedPhone = formattedPhone.substring(1);
    }

    const updatedData = {
      ...data,
      phoneNumber: `+994${formattedPhone}`,
    };

    try {
      await courseApply(updatedData).unwrap();

      setData({
        fullName: "",
        email: "",
        phoneNumber: "",
        applicationCategory: "",
        applicationType: "individual"
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
            "px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg",
        },
      });

      onClose();
    } catch (error) {
      console.error("Müraciət xətası:", error);

      Swal.fire({
        title: "Xəta!",
        text: "Müraciətiniz göndərilmədi. Xahiş edirik bir daha cəhd edin.",
        icon: "error",
        confirmButtonText: "Bağla",
        confirmButtonColor: "#AC8968",
      });
    }
  };

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

  const handleClose = () => {
    onClose();
    // Reset form data only when closing manually
    setData({
      fullName: "",
      email: "",
      phoneNumber: "",
      applicationCategory: "",
      applicationType: "individual"
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with improved blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal with improved animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20 }}
            className="apply-modal fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-xl mx-auto px-4 sm:px-0"
          >
            <div className="bg-white dark:bg-black shadow-2xl sm:p-10 p-6 relative max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800">
              {/* Close button with animation */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                onClick={handleClose}
                className="absolute sm:right-6 sm:top-6 right-4 top-4 text-black dark:text-white hover:text-red-800 dark:hover:text-red-800"
              >
                <IoClose size={24} />
              </motion.button>

              {/* Header with black text */}
              <div className="text-center mb-8">
                <h2 className="sm:text-3xl text-2xl font-bold mb-2 text-red-800 dark:text-white ordina-medium ">
                  {translations[language]["apply-form"]}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 sm:text-base text-sm">
                  {translations[language]["form-desc"]}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 sm:text-base text-sm">
                {/* Name Input */}
                <div className="relative ">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={data.fullName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 outline-none border border-gray-300 dark:border-gray-700 focus:border-red-800 dark:focus:border-red-800 focus:ring-0 dark:bg-gray-900 dark:text-white transition-all duration-200"
                    placeholder={translations[language]["fullname"]}
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 outline-none border border-gray-300 dark:border-gray-700 focus:border-red-800 dark:focus:border-red-800 focus:ring-0 dark:bg-gray-900 dark:text-white transition-all duration-200"
                    placeholder={translations[language]["email"]}
                  />
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={handlePhoneChange}
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                    className="w-full pl-10 pr-4 py-3 outline-none border border-gray-300 dark:border-gray-700 focus:border-red-800 dark:focus:border-red-800 focus:ring-0 dark:bg-gray-900 dark:text-white transition-all duration-200"
                    placeholder="(055) 000 00 00"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    {data.phoneNumber.length}/10
                  </div>
                </div>

                {/* Course Select */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiBook className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <select
                    name="applicationCategory"
                    value={data.applicationCategory}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 outline-none border border-gray-300 dark:border-gray-700 focus:border-red-800 dark:focus:border-red-800 focus:ring-0 dark:bg-gray-900 dark:text-white appearance-none transition-all duration-200"
                  >
                    <option value="" disabled>
                      {translations[language]["select"]}
                    </option>
                    <option value="muessise">{translations[language]["service-1"]}</option>
                    <option value="muqavile">{translations[language]["service-2"]}</option>
                    <option value="emek">{translations[language]["service-3"]}</option>
                    <option value="other">{translations[language]["other"]}</option>
                  </select>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  type="submit"
                  className={`${
                    isLoading && "cursor-not-allowed"
                  } w-full bg-red-800 text-white font-medium py-3 px-4 transition-all duration-300 hover:bg-[#8a6c50] uppercase`}
                >
                  {isLoading ? (
                    <div className="flex w-full items-center justify-center gap-2">
                      Sending... 
                    </div>
                  ) : (
                    translations[language]["apply"]
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
