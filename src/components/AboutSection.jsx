import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-10 md:py-10 overflow-hidden bg-gradient-to-b from-white to-embuer-barley/20">
      <div ref={containerRef} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-4 reveal">
          <h2 className="section-title">We Are Embuer</h2>
          <p className="section-subtitle">
            Learn about our journey and commitment to providing pure and natural
            products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-4">
          <div className="order-2 md:order-1 reveal reveal-delay-1">
            <div className="inline-block px-3 py-1 rounded-full bg-embuer-sunshine text-embuer-seaspray text-sm font-medium mb-4">
              Our Story
            </div>
            {/* <h3 className="text-2xl md:text-3xl font-semibold text-embuer-seaspray mb-4 font-playfair">
              We Are Embuer
            </h3> */}
            <p className="text-gray-600 mb-4">
              Embuer Health Pvt Ltd., based in New Delhi, is a leading
              manufacturer and supplier of high-quality, multi-use, and
              cost-effective wipes and table napkins. Since its establishment in
              2011, Embuer has been at the forefront of introducing ultra-clean
              and versatile products, including baby wipes, kitchen wipes, roti
              wraps, wet wipes, industrial wipes, and serving napkins, catering
              to the needs of health-conscious consumers.
            </p>
            <p className="text-gray-600 mb-6">
              As the first company in India to introduce a novel, non-woven
              fabric range for disposable napkins, Embuer stands out for its
              commitment to innovation and maintaining high-quality standards.
              Understanding the growing importance of personal hygiene, the
              company has developed an extensive range of wiping products that
              provide a smooth hygiene experience while ensuring value for
              money.
            </p>
            <p className="text-gray-600 mb-4">
              Designed for both individual and industrial use, Embuer’s products
              are safe, eco-friendly, and superior to many imported
              alternatives. Whether for households, the hospitality industry,
              beauty salons, or childcare, Embuer’s wipes are crafted to meet
              diverse needs. With a passion for innovation and excellence,
              Embuer continues to set new benchmarks in hygiene and convenience.
            </p>
            <div className="flex items-center space-x-4">
              {/* <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" 
                alt="Founder" 
                className="w-12 h-12 rounded-full object-cover border-2 border-embuer-seaspray"
              /> */}
              <div>
                <p className="font-semibold text-embuer-seaspray">XXXXXXXXX</p>
                <p className="text-sm text-gray-600">Founder & CEO</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 reveal reveal-delay-2">
            <div className="hero-image-container h-[525px]">
              <img
                src="https://static.wixstatic.com/media/5f7699_5abdf3a9efb0433181ca3f54bad266d8~mv2.jpg/v1/crop/x_0,y_295,w_1113,h_1081/fill/w_857,h_833,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Picture1.jpg"
                alt="About Embuer"
                className="hero-image"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-8 reveal reveal-delay-3">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-semibold  mb-4 font-playfair">
              Our Commitment to Nature
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our video to learn more about our eco-friendly and  sustainability practices.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative rounded-2xl overflow-hidden aspect-video max-w-3xl mx-auto shadow-lg"
          >
            <iframe
               className="w-full h-full"
              src="https://www.youtube.com/embed/iQX56bhxdM8"
              title="YouTube Video"
              //   frameBorder="0"
              //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              //   allowFullScreen
            ></iframe>

            {/* <img 
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover"
            /> */}
            <div className="absolute inset-0 bg-embuer-seaspray/20 flex items-center justify-center">
              <button
                className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-embuer-seaspray hover:bg-white transition-colors"
                aria-label="Play video"
              >
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
