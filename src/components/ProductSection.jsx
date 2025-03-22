import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Sample product data
const products = [
  {
    id: 1,
    name: "Baby Wet Wipes",
    category: "Baby Care",
    description: "Gentle and safe for baby's sensitive skin",
    image: "/public/products1.png"},
  {
    id: 2,
    name: "Facial Cleansing Wipes",
    category: "Personal Care",
    description: "Removes makeup and refreshes skin",
    image: "/public/product2.png"},
    // image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"

  {
    id: 3,
    name: "Antibacterial Hand Wipes",
    category: "Personal Care",
    description: "Kills 99.9% of bacteria",
    // price: "$3.99",
    // image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    image: "/public/products3.png"},

  {
    id: 4,
    name: "Kitchen Cleaning Wipes",
    category: "Home Care",
    description: "Effective against grease and grime",
    // price: "$6.99",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    id: 5,
    name: "Sensitive Baby Wipes",
    category: "Baby Care",
    description: "Extra gentle for newborns",
    // price: "$5.49",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  },
  {
    id: 6,
    name: "Bathroom Cleaning Wipes",
    category: "Home Care",
    description: "Eliminates soap scum and water spots",
    // price: "$6.49",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  }
];

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 3 });
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const filters = ["All", "Baby Care", "Personal Care", "Home Care"];

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeFilter));
    }
    // Reset to first set of products when filter changes
    setVisibleRange({ start: 0, end: Math.min(3, products.length) });
  }, [activeFilter]);

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

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newStart = Math.min(visibleRange.start + 1, filteredProducts.length - 3);
    setVisibleRange({
      start: newStart,
      end: Math.min(newStart + 3, filteredProducts.length)
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match duration with animation
  };

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newStart = Math.max(visibleRange.start - 1, 0);
    setVisibleRange({
      start: newStart,
      end: Math.min(newStart + 3, filteredProducts.length)
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match duration with animation
  };

  const visibleProducts = filteredProducts.slice(visibleRange.start, visibleRange.end);
  const canGoNext = visibleRange.end < filteredProducts.length;
  const canGoPrev = visibleRange.start > 0;

  // Enhanced animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const productVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };
  

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } }
  };

  const sectionHeadingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="products" className="py-10 md:py-10 bg-gradient-to-b from-white to-embuer-barley/20">
      <div ref={containerRef} className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionHeadingVariants}
        >
          <h2 className="section-title text-embuer-rhino">Our Products</h2>
          <p className="section-subtitle text-embuer-rhino/80">
            Discover our range of natural, eco-friendly products for you and your family
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center -top-20 mb-4 gap-2 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              custom={index}
              variants={filterVariants}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              onClick={() => setActiveFilter(filter)}
              className={`filter-button px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === filter 
                  ? "bg-embuer-neptune text-white border-embuer-neptune" 
                  : "bg-white text-embuer-neptune border-embuer-neptune/30 hover:bg-embuer-neptune/10"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <div className="relative mt-12">
          <div className="flex justify-between items-center absolute -top-16 right-0 space-x-3">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={handlePrev}
              disabled={!canGoPrev || isAnimating}
              className={`p-2 rounded-full ${
                canGoPrev && !isAnimating ? "bg-embuer-neptune text-white" : "bg-gray-200 text-gray-400"
              } transition-colors`}
              aria-label="Previous products"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={handleNext}
              disabled={!canGoNext || isAnimating}
              className={`p-2 rounded-full ${
                canGoNext && !isAnimating ? "bg-embuer-neptune text-white" : "bg-gray-200 text-gray-400"
              } transition-colors`}
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {visibleProducts.map((product, index) => (
              <motion.div
                key={`${product.id}-${visibleRange.start + index}`}
                variants={productVariants}
                className="product-card group"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="product-image-container overflow-hidden rounded-lg mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute top-2 right-2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <span className="inline-block px-2 py-1 bg-embuer-neptune/90 text-white text-xs rounded-full">
                      {product.category}
                    </span>
                  </motion.div>
                </div>
                <h3 className="font-semibold text-lg mb-1 text-embuer-rhino group-hover:text-embuer-neptune transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                {/* <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-embuer-naples">{product.price}</span>
                  <motion.button 
                    className="p-2 rounded-full bg-embuer-neptune/10 text-embuer-neptune hover:bg-embuer-neptune hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </motion.button>
                </div> */}
                
                {/* Add floating animation elements */}
                <motion.div 
                  className="absolute -z-10 w-12 h-12 rounded-full bg-embuer-naples/10 top-0 left-0 -translate-x-1/2 -translate-y-1/2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div 
                  className="absolute -z-10 w-8 h-8 rounded-full bg-embuer-olive/10 bottom-0 right-0 translate-x-1/3 translate-y-1/3"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full border bg-embuer-seaspray border-embuer-neptune text-white font-medium"
          >
            View All Products
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
