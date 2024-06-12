import Header from "./Header";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import DownloadSection from "./sections/DownloadSection";
import Footer from "./Footer";
import FaqSection from "./sections/FaqSection";
import NewsletterSection from "./sections/NewsletterSection";

const App = () => {
  return (
    <>
      <a href="#main-content" className="sr-only sr-only-focusable">
        Skip to main content
      </a>
      <Header />

      <main id="main-content">
        <HeroSection />

        <FeaturesSection />

        <DownloadSection />

        <FaqSection />

        <NewsletterSection />
      </main>

      <Footer />
    </>
  );
};

export default App;
