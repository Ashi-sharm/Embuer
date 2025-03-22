import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import ProductsSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div>
        <VideoSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}

export default App;