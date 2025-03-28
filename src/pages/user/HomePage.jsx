
import HeroSection from "../../components/user/Home/Hero";
import { Helmet } from 'react-helmet';
import About from "@/components/user/Home/About";
import Services from "../../components/user/Home/Services";

const HomePage = () => {
  return (
    <main>
      <Helmet>
        <title>Valser</title>

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icon.png" /> 

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="az" />
      </Helmet>
      <HeroSection />
      <About />
      <Services />
    </main>
  )
}

export default HomePage
