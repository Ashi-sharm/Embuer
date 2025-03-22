import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import ProductsSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<HeroSection />} />
//         <Route path="/" element={<ContactSection />} />
        
//         <Route path="*" element={<h1>404 Not Found</h1>} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductsSection/>
      <AboutSection/>
      <BlogSection/>
      <ContactSection />
      <Footer />
    </>
  );
}
export default App;
