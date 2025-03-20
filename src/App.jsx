import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

      {/* Footer should be outside of Routes so it stays visible on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
