import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  
  // Create scroll-based animations
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });
  
  // Transform values for parallax effect - footer rises up as user scrolls down
  const footerY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <motion.footer
      ref={footerRef}
      className="w-full bg-[#0c0c0c] text-white pt-16 pb-8 relative overflow-hidden"
      style={{
        y: footerY,
        opacity: footerOpacity
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Logo and tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Valser MMC</h2>
            <p className="text-gray-400 max-w-md">Hüquq, mühasibatlıq və iş yerlərinin attestasiyası sahələrində peşəkar xidmətlər</p>
          </div>
          
          {/* Contact info */}
          <div className="mt-8 md:mt-0">
            <div className="flex items-center mb-3">
              <FiPhone className="mr-3 text-gray-400" />
              <a href="tel:+994501234567" className="hover:text-gray-300 transition-colors">+994 50 123 45 67</a>
            </div>
            <div className="flex items-center mb-3">
              <FiMail className="mr-3 text-gray-400" />
              <a href="mailto:info@valser.az" className="hover:text-gray-300 transition-colors">info@valser.az</a>
            </div>
            <div className="flex items-center">
              <FiMapPin className="mr-3 text-gray-400" />
              <span>Bakı şəhəri, Nərimanov rayonu</span>
            </div>
          </div>
        </div>
        
        {/* Navigation and services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-b border-gray-800">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:text-start text-center">Naviqasiya</h3>
            <ul className="space-y-2 sm:text-start text-center">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Ana Səhifə</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Haqqımızda</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Xidmətlər</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Əlaqə</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:text-start text-center">Xidmətlər</h3>
            <ul className="space-y-2 sm:text-start text-center">
              <li><Link to="/services/legal" className="text-gray-400 hover:text-white transition-colors">Hüquqi xidmətlər</Link></li>
              <li><Link to="/services/accounting" className="text-gray-400 hover:text-white transition-colors">Mühasibatlıq</Link></li>
              <li><Link to="/services/certification" className="text-gray-400 hover:text-white transition-colors">İş yerlərinin attestasiyası</Link></li>
            </ul>
          </div>
          
          {/* Social media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 sm:text-start text-center">Sosial Media</h3>
            <div className="flex sm:justify-start justify-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <FaFacebook className="text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <FaInstagram className="text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <FaLinkedin className="text-white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="flex sm:flex-row flex-col items-center justify-between text-center text-gray-400 mt-8 pt-8 ">
          <p>
            &copy; {new Date().getFullYear()} Valser MMC. Bütün hüquqlar qorunur.
          </p>
          <p className="mt-2">
            Designed and developed by {' '}
            <a 
              href="https://muradbalazada.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#AC8968] hover:text-[#8a6c50] transition-colors"
            >
              Murad Balazada
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
