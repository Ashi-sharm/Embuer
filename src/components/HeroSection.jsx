import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen  w-full overflow-hidden flex items-center">
      {/* Main content container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-embuer-babyblue opacity-80 animate-float"></div>
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-embuer-matcha opacity-40 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-embuer-linen opacity-40 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10 ">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md flex items-center justify-center">
              <div className="w-3 h-4 bg-white"></div>
            </div>
            <span className="font-bold text-xl text-seaspray">embuer</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-seaspray font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-seaspray font-medium"
            >
              About
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-seaspray font-medium"
            >
              Products
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-seaspray font-medium"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-seaspray font-medium"
            >
              Contact
            </a>
          </div>

          <button className="px-6 py-3 rounded-full bg-seaspray text-white font-medium hover:shadow-lg hover:shadow-seaspray/20 transition-all">
            Shop Now
          </button>
        </div>

        {/* Hero content with new layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center -mr-4">
          {/* Left side content */}
          <div className="order-2 md:order-1 md:pr-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-embuer-seaspray leading-tight mb-6"
            >
              Gentle Care for <br />
              <span className="text-embuer-bumblebee">Your Family</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 mb-10 max-w-lg reveal reveal-delay-3"
            >
              Discover our range of thoughtfully crafted personal care products
              made with natural ingredients that nourish and protect your entire
              family.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-6 reveal reveal-delay-4"
            >
              <a
                href="#products"
                className="px-8 py-4 bg-embuer-seaspray text-white rounded-full font-medium flex items-center justify-center sm:justify-start group hover:shadow-lg hover:shadow-seaspray/20 transition-all"
              >
                Shop Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* <a 
                href="#video" 
                className="px-8 py-4 bg-transparent border border-seaspray/20 text-seaspray rounded-full font-medium flex items-center justify-center sm:justify-start hover:border-seaspray transition-all"
              >
                <div className="mr-3 w-8 h-8 rounded-full bg-seaspray/10 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-seaspray ml-1"></div>
                </div>
                Watch Video
              </a> */}
            </motion.div>

            {/* Social proof metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-8 max-w-md"
            >
              <div>
                <div className="text-2xl font-bold text-seaspray">
                  <CountUp start={0} end={15000} duration={2.5} separator="," />
                  +
                </div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-seaspray">
                  <CountUp start={0} end={95} duration={2.5} suffix="%" />
                </div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-seaspray">
                  <CountUp start={0} end={100} duration={2.5} suffix="%" />
                </div>
                <div className="text-sm text-gray-500">Natural</div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image section */}
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
  
            <div className="relative w-full max-w-md overflow-hidden">
              <img
                src="/public/hero.v.png"
                alt="Natural skincare products"
                className="object-contain w-full max-w-md h-auto z-20 relative"
              />
            </div>
            <motion.div
                  className="absolute top-1/4 -left-8 bg-embuer-linen p-4 rounded-lg shadow-xl z-30"
                  initial={{ opacity: 0, x: 40, y: 30 }}
                  animate={{ opacity: 1, x: 70, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-sunshine flex items-center justify-center">
                      <span className="text-sm font-bold">100%</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium block">Natural</span>
                      <span className="text-xs text-gray-500">Ingredients</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/3 -right-8 bg-embuer-linen p-4 rounded-lg shadow-xl z-30"
                  initial={{ opacity: 0, x: -60, y: 30 }}
                  animate={{ opacity: 1, x: -50, y: 70 }}
                  transition={{ delay: 1.1, duration: 0.7 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-matcha flex items-center justify-center">
                      <span className="text-sm font-bold">Eco</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium block">Friendly</span>
                      <span className="text-xs text-gray-500">Packaging</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute top-2/3 -left-12 bg-embuer-linen p-4 rounded-lg shadow-xl z-30"
                  initial={{ opacity: 0, x: 40, y: -30 }}
                  animate={{ opacity: 1, x: 60, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.7 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full  flex items-center justify-center">
                      <span className="text-sm font-bold">Child</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium block">Safe</span>
                      <span className="text-xs text-gray-500">Formula</span>
                    </div>
                  </div>
                </motion.div>
          </div>
        </div>
        <div className="w-full bg-embuer-matcha text-gray-500 py-2 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="mr-10">🌿 100% Natural & Organic Ingredients</span>
            <span className="mr-10">
              🛡️ Dermatologically Tested & Safe for All Skin Types
            </span>
            <span className="mr-10">
              🌎 Eco-Friendly & Sustainable Packaging
            </span>
            <span className="mr-10">
              🚫 No Harsh Chemicals, Sulfates, or Parabens
            </span>
            <span className="mr-10">🐰 Cruelty-Free & Vegan Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
