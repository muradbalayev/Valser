import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import HomePage from "./user/HomePage";
import UserLayout from "@/layouts/UserLayout";
import { ThemeContext } from "@/context/ThemeContext";
import ContactPage from "./user/ContactPage";
import AboutPage from "./user/AboutPage";

import WhatsAppButton from "@/components/WhatsAppButton";
import NotFound from "./NotFound";

// import AdminLayout from "@/layouts/AdminLayout";
import { Toaster } from "react-hot-toast";

// import { clearTokens, setTokens } from "@/redux/slice/authSlice";
// import { useDispatch } from "react-redux";
import LoadingScreen from "@/components/LoadingScreen";
import ServicePage from "./user/ServicePage";

const RouterApp = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isAdminRoute, setIsAdminRoute] = useState(false);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const scrollToTop = () => {
    // Use the Lenis instance if available, otherwise fallback to standard scrollTo
    if (window.lenis) {
      window.lenis.scrollTo(0, { 
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Match the same easing as defined in App.jsx
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check if current path starts with /admin
    const checkAdminRoute = () => {
      setIsAdminRoute(window.location.pathname.startsWith("/admin"));
    };

    // Initial check
    checkAdminRoute();

    // Listen for route changes
    window.addEventListener("popstate", checkAdminRoute);
    return () => window.removeEventListener("popstate", checkAdminRoute);
  }, []);

  return (
    <div
      className={`bg-[#f4f6fa] dark:bg-gray-900 min-h-screen relative ${
        isDarkTheme ? "dark" : ""
      }`}
    >
      {!isAdminRoute && !isMobile && <LoadingScreen />}
      {!isAdminRoute && <WhatsAppButton />}
      <Toaster
        containerClassName="toast "
        position="top-center"
        toastOptions={{
          duration: 3000,
          className: "custom-toast",
          style: {
            fontWeight: "600",
            padding: "16px",
            color: "white",
          },
        }}
      />
      {/* Scroll to top button */}
      {!isAdminRoute && (
        <button
          onClick={scrollToTop}
          className={`fixed sm:bottom-6 bottom-[20px] sm:right-6 right-[20px] z-50 bg-black text-white hover:bg-red-700  p-3  shadow-lg transition-all duration-300 ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 invisible"
          }`}
        >
          <IoArrowUpOutline className="sm:h-5 sm:w-5 h-4 w-4" />
        </button>
      )}

      <div className="mx-auto overflow-hidden relative">
        <BrowserRouter>
          <AuthInitializer />
        </BrowserRouter>
      </div>
    </div>
  );
};

function AuthInitializer() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { accessToken } = useSelector((state) => state.auth);
  // console.log(accessToken)
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   dispatch(
  //     setTokens({
  //       refreshToken:
  //         localStorage.getItem("refreshToken") ||
  //         sessionStorage.getItem("refreshToken"),
  //       accessToken: null,
  //     })
  //   );
  // }, [dispatch]);

  // useEffect(() => {
  //   const initializeAuth = async () => {
  //     const refreshToken =
  //       localStorage.getItem("refreshToken") ||
  //       sessionStorage.getItem("refreshToken");

  //     // console.log(refreshToken);

  //     if (refreshToken) {
  //       try {
  //         const response = await fetch(
  //           `${
  //             import.meta.env.VITE_API_GLOBAL_URL
  //           }/api/admin/auth/refresh-token`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${refreshToken} type=refresh`,
  //             },
  //           }
  //         );

  //         if (response.ok) {
  //           const data = await response.json();
  //           const { accessToken } = data;

  //           dispatch(setTokens({ accessToken, refreshToken }));
  //         } else {
  //           clearAuthData();
  //           // navigate(role === 'admin' ? '/admin/login' : '/'); // Redirect to login page
  //         }
  //       } catch (error) {
  //         console.log("Token refresh failed:", error);
  //         clearAuthData();
  //         // navigate(role === 'admin' ? '/admin/login' : '/'); // Redirect to login page
  //       }
  //     } else {
  //       dispatch(clearTokens());
  //       // navigate(role === 'admin' ? '/admin/login' : '/'); // Redirect to login page
  //     }

  //     setLoading(false);
  //   };

  //   const clearAuthData = () => {
  //     dispatch(clearTokens());
  //     localStorage.removeItem("refreshToken");
  //     sessionStorage.removeItem("refreshToken");
  //   };

  //   initializeAuth();
  // }, [dispatch, navigate]);

  // if (loading) {
  //   return (
  //     <div className="loader-container w-full flex justify-center items-center min-h-screen gap-3">
  //       {/* <CircularProgress /> */} loading
  //     </div>
  //   );
  // }

  return (
    <Routes>
      {/* Admin Routes */}
      {/* <Route
        path="/admin/lgn-evo-scrt"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedAdminRoute requiredRole="admin">
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route path="" element={<AdminInstructorsPage />} />
        <Route path="courses" element={<AdminCoursesPage />} />
        <Route path="graduates" element={<AdminGraduatesPage />} />
        <Route path="events" element={<AdminEventPage />} />
        <Route path="vacancies" element={<AdminVacanciesPage />} />
        <Route path="blogs" element={<AdminBlogPage />} />
        <Route path="blogs/:blogId" element={<AdminBlogDetail />} />
        <Route path="applies" element={<AdminAppliesPage />} />
        <Route path="diplomas" element={<AdminDiplomaPage/> }/>
        <Route path="partners" element={<AdminPartnersPage />} />
      </Route> */}

      {/* User Routes */}
      <Route
        element={
          <div className={``}>
            <div className="bg-white dark:bg-[#0c0c0c] min-h-screen relative">
           

              {/* Main content */}
              <div className="relative z-10">
                <UserLayout />
              </div>
            </div>
          </div>
        }
      >
        <Route index path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service/:serviceSlug" element={<ServicePage />} />
      </Route>

      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RouterApp;
