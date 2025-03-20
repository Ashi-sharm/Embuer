import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded-full bg-embuer-sunshine text-embuer-seaspray text-sm font-medium mb-4"
            >
              Pure & Natural
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-embuer-seaspray leading-tight mb-6"
            >
              Gentle Care for <br/>
              <span className="text-embuer-bumblebee">Your Family</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              Discover our range of thoughtfully crafted personal care products made with natural ingredients for the whole family.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href="#products"
                className="px-6 py-3 bg-embuer-seaspray text-white rounded-full font-medium inline-flex items-center group transition-all hover:bg-embuer-seaspray/90 hover:shadow-md"
              >
                Shop Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="hero-image-container h-[350px] md:h-[350px] relative"
            >
              <img 
                src="\public\hero.png" 
                alt="Embuer Natural Products" 
                className="hero-image h-[350px]"
              />
              {/* <div className="absolute bottom-6 left-6 right-6 glass-effect p-4 rounded-lg z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-embuer-bumblebee"></div>
                  <p className="text-embuer-seaspray font-medium text-sm">100% Eco-friendly</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
