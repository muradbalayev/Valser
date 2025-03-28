import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { useCallback, useEffect, useRef, useState } from "react";
import { BiBriefcase, BiLogOut, BiSolidShoppingBag } from "react-icons/bi";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import './Sidebar.css'
import { FaChalkboardTeacher } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { Eye, EyeOff, FileEdit, Home, LucideFileSpreadsheet, Settings, X } from "lucide-react";
import useLogout from "@/hooks/useLogout";
import useChangePassword from "@/hooks/useChangePassword";
import toast from "react-hot-toast";
import { useEditSettingMutation, useGetSettingsQuery } from "@/redux/services/settingsApi";
import Swal from "sweetalert2";
// import useLogout from '../../hooks/useLogout'

const Sidebar = ({ isMobileOpen, setIsMobileOpen, menuButtonRef }) => {
  const mobileSidebarRef = useRef(null);
  const navigate = useNavigate();
  const logout = useLogout();
  const { changePassword, isLoading } = useChangePassword();

  const { data } = useGetSettingsQuery();
  const [editSettings] = useEditSettingMutation();

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    repeatPassword: ''
  });

  const [showPasswords, setShowPasswords] = useState({
    old: false,
    new: false,
    repeat: false
  });

  const handleEditSettings = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to change the bitrix forwarding setting",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const body = {
          enabled: !data?.settings?.bitrixForwarding,
        };
        console.log(body);
        await editSettings(body);
        toast.success("Bitrix forwarding setting updated successfully");
      }
    });
  };


  const handleChangePassword = async (e) => {
    e.preventDefault();

    // Add Swal confirmation alert
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to change your password?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, change it!',
    });

    if (!result.isConfirmed) {
      return; // Exit if the user cancels
    }

    if (passwordData.newPassword !== passwordData.repeatPassword) {
      toast.error("New passwords don't match");
      return;
    }

    const success = await changePassword(
      passwordData.oldPassword,
      passwordData.newPassword
    );

    if (success) {
      setShowChangePassword(false);
      setPasswordData({
        oldPassword: '',
        newPassword: '',
        repeatPassword: ''
      });
    }
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (
        mobileSidebarRef.current &&
        !mobileSidebarRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMobileOpen(false);
      }
    },
    [setIsMobileOpen, menuButtonRef]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const SIDEBARITEMS = [
    {
      id: 1,
      title: "Instructors",
      icon: <FaChalkboardTeacher size={20} />,
      path: "/admin/dashboard",
    },
    {
      id: 2,
      title: "Graduates",
      icon: <FaUserGraduate size={20} />,
      path: "/admin/dashboard/graduates",
    },
    {
      id: 3,
      title: "Courses",
      icon: <FileEdit size={20} />,
      path: "/admin/dashboard/courses",
    },
    {
      id: 4,
      title: "Events",
      icon: <BiBook size={20} />,
      path: "/admin/dashboard/events",
    },
    {
      id: 5,
      title: "Vacancies",
      icon: <BiBriefcase size={20} />,
      path: "/admin/dashboard/vacancies",
    },
    {
      id: 6,
      title: "Blogs",
      icon: <BiBook size={20} />,
      path: "/admin/dashboard/blogs",
    },
    {
      id: 7,
      title: 'Applies',
      icon: <LucideFileSpreadsheet size={20} />,
      path: "/admin/dashboard/applies"
    },
    {
      id:9,
      title: "Diploma",
      icon: <FaGraduationCap size={20} />,
      path: "/admin/dashboard/diplomas"
    },
    {
      id: 8,
      title: "Partners",
      icon: <BiSolidShoppingBag size={20} />,
      path: "/admin/dashboard/partners"
    }
  ];


  return (
    <>
      <div className="sidebar md:min-w-52 sm:min-w-40 sm:flex hidden relative bg-gray-900">
        <button className="z-10" onClick={() => setShowSettings(true)}>
          <Settings size={25} className="text-gray-300 absolute top-3 right-3 transition-opacity" />
        </button>
        <button title="Home" className="z-10" onClick={() => navigate("/")}>
          <Home size={25} className="text-gray-300 absolute top-3 left-3 transition-opacity" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center py-6"
        >
          <div onClick={() => setShowChangePassword(true)}
            className="p-3 cursor-pointer bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl mb-3">
            <FaUser className="text-white text-4xl" />
          </div>
          <h3 className="text-sm font-semibold text-white">Admin Panel</h3>
        </motion.div>
        <nav className="links z-0 overflow-auto mb-4 px-3">
          {SIDEBARITEMS.map((item) => (
            <NavLink
              key={item.id}
              className={({ isActive }) => `
                flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all
                text-sm font-medium
                ${isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'}
              `}
              to={item.path}
              end
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

        <motion.div
          className="px-3 pb-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            onClick={logout}
            className="w-full flex items-center justify-center p-3 rounded-xl
          bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
          >
            <BiLogOut className="mr-2 text-lg" />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </motion.div>
      </div>



      <div
        ref={mobileSidebarRef}
        className={`mobile-sidebar bg-gray-900 w-[80%] z-10 sm:hidden fixed ${isMobileOpen ? "left-0" : "-left-full"
          }`}
      >
        <div className="w-full flex flex-col gap-3 items-center justify-start mt-6">
        <button className="z-10" onClick={() => setShowSettings(true)}>
          <Settings size={25} className="text-gray-300 absolute top-3 right-3 transition-opacity" />
        </button>
        <button title="Home" className="z-10" onClick={() => navigate("/")}>
          <Home size={25} className="text-gray-300 absolute top-3 left-3 transition-opacity" />
        </button>
          <div className="profile-img flex bg-gray-800 rounded-full transition duration-300 sm:p-5 p-3">
            <FaUser className="text-gray-300" size={50} />
          </div>
          <h3 className="text-sm text-white text-center">Admin Panel</h3>
        </div>
        <nav className="links w-full mt-10 overflow-auto mb-4 px-3">
          {SIDEBARITEMS.map((item) => (
            <NavLink
              key={item.id}
              className={({ isActive }) => `
                flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all
                text-sm font-medium
                ${isActive
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'}
              `}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              end
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>



        <motion.div
          className="px-3 py-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <button
            onClick={logout}
            className="w-full flex items-center justify-center p-3 pr-5 rounded-xl
          bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
          >
            <BiLogOut className="mr-2 text-lg" />
            <span className="text-sm font-medium">Log Out</span>
          </button>
        </motion.div>
      </div>
      {showChangePassword && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-md"
          >
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-700/30 relative">
              <button
                onClick={() => setShowChangePassword(false)}
                className="absolute -top-3 -right-3 bg-gray-700/50 hover:bg-gray-600/60 p-1.5 rounded-full transition-all duration-200 hover:rotate-90"
              >
                <X size={20} className="text-gray-200" />
              </button>

              <div className="text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Change Password
                </h2>
              </div>

              <form onSubmit={handleChangePassword} className="space-y-5 mt-4">
                {['old', 'new', 'repeat'].map((type) => (
                  <div key={type} className="relative">
                    <input
                      type={showPasswords[type] ? "text" : "password"}
                      value={passwordData[`${type}Password`]}
                      onChange={(e) => setPasswordData(prev => ({
                        ...prev,
                        [`${type}Password`]: e.target.value
                      }))}
                      placeholder={`${type === 'repeat' ? 'Repeat New' : type.charAt(0).toUpperCase() + type.slice(1)} Password`}
                      className="w-full px-4 py-3 bg-gray-800/30 border border-gray-700/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
                      required
                    />
                    <span
                      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-200 transition-colors"
                      onClick={() => setShowPasswords(prev => ({ ...prev, [type]: !prev[type] }))}
                    >
                      {showPasswords[type] ? <Eye size={18} color="green" /> : <EyeOff size={18} color="green" />}
                    </span>
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-4 rounded-xl transition-all font-semibold 
              ${isLoading ? 'bg-gray-500/50 cursor-not-allowed' : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 hover:text-emerald-300'}`}
                >
                  {isLoading ? 'Changing...' : 'Change Password'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}



      {showSettings && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-md"
          >
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-700/30 relative">
              <button
                onClick={() => setShowSettings(false)}
                className="absolute -top-3 -right-3 bg-gray-700/50 hover:bg-gray-600/60 p-1.5 rounded-full transition-all duration-200 hover:rotate-90"
              >
                <X size={20} className="text-gray-200" />
              </button>

              <div className="space-y-5">
                <div className="text-center">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    System Settings
                  </h2>
                  <p className="text-gray-400 mt-1 text-sm">Manage integration settings</p>
                </div>

                <div className="flex flex-col gap-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/20">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-200">Bitrix24 Integration</h3>
                      <p className="text-sm text-gray-400">Automated data forwarding</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${data?.settings?.bitrixForwarding ? 'bg-emerald-400/10 text-emerald-400' : 'bg-rose-400/10 text-rose-400'}`}>
                      {data?.settings?.bitrixForwarding ? "Active" : "Inactive"}
                    </span>
                  </div>

                  <button
                    onClick={handleEditSettings}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl transition-all
                ${data?.settings?.bitrixForwarding
                        ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300'
                        : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 hover:text-emerald-300'}
                `}
                  >
                    {data?.settings?.bitrixForwarding ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                        Disable Integration
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 12h16m-8-8v16" />
                        </svg>
                        Enable Integration
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
