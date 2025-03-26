import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="video"
      className="py-10 overflow-hidden bg-gradient-to-b from-white to-embuer-barley/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 font-playfair text-center">
          Our Commitment to Nature
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-8">
          Watch our video to learn more about our eco-friendly and
          sustainability practices.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full h-[325px] md:h-[425px] lg:h-[525px] mt-8  flex items-center justify-center overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>


          <button
            className="absolute z-20 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 flex items-center justify-center text-embuer-seaspray hover:bg-white transition-all shadow-lg"
            aria-label="Play video"
            onClick={() => setIsOpen(true)}
          >
            <Play
              className="w-10 h-10 ml-1 text-embuer-seaspray"
              fill="currentColor"
            />
          </button>
        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        
        >
          <div
            className="relative max-w-4xl"
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl p-2"
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/iQX56bhxdM8?autoplay=1"
              title="YouTube Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoSection;
