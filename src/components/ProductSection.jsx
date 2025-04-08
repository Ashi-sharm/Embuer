import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";
const products = [
  {
    id: 1,
    name: "Baby Wet Wipes",
    category: "Baby Care",
    description: "Gentle and safe for baby's sensitive skin",
    price: "Rs 3.99",
    image: "/public/products1.png",
  },
  {
    id: 2,
    name: "Facial Cleansing Wipes",
    category: "Baby Care",
    description: "Removes makeup and refreshes skin",
    price: "Rs 3.99",
    image: "/public/product2.png",
  },
  {
    id: 3,
    name: "Antibacterial Hand Wipes",
    category: "Personal Care",
    description: "Kills 99.9% of bacteria",
    price: "Rs 3.99",
    image: "/public/products3.png",
  },
  {
    id: 4,
    name: "Kitchen Cleaning Wipes",
    category: "Home Care",
    description: "Effective against grease and grime",
    price: "Rs 3.99",
    image: "/public/products3.png",
  },
  {
    id: 5,
    name: "Sensitive Baby Wipes",
    category: "Baby Care",
    description: "Extra gentle for newborns",
    price: "Rs 3.99",
    image: "/public/products3.png",
  },
  {
    id: 6,
    name: "Bathroom Cleaning Wipes",
    category: "Home Care",
    description: "Eliminates soap scum and water spots",
    price: "Rs 3.99",
    image: "/public/products1.png",
  },
  {
    id: 7,
    name: "Baby Cleaning Wipes",
    category: "Baby Care",
    description: "Eliminates soap scum and water spots",
    price: "Rs 3.99",
    image: "/public/products3.png",
  },
  {
    id: 8,
    name: "Facial Scrub Wipes",
    category: "Personal Care",
    description: "Eliminates soap scum and water spots",
    price: "Rs 3.99",
    image: "/public/product2.png",
  },
];

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 3;

  const filters = ["All", "Baby Care", "Personal Care", "Home Care"];
  useEffect(() => {
    let filtered = [];
    
    if (activeFilter === "All") {
      filtered = [...products];
    } else {
      filtered = products.filter((product) => product.category === activeFilter);
    }
    
    setFilteredProducts(filtered);
    setCurrentPage(0);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//to find which product is visible 
  const visibleProducts = filteredProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );


  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  // for maintaining the disability of the next and prev button
  const canGoNext = currentPage < totalPages - 1;
  const canGoPrev = currentPage > 0;


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
        duration: 0.5,
      },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  const sectionHeadingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="products"
      className="py-10 md:py-10 bg-gradient-to-b from-white to-embuer-barley/20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionHeadingVariants}
        >
          <h2 className="section-title text-embuer-rhino">Our Products</h2>
          <p className="section-subtitle text-embuer-rhino/80">
            Discover our range of natural, eco-friendly products for you and
            your family
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
              disabled={!canGoPrev}
              className={`p-2 rounded-full transition-colors ${
                canGoPrev
                  ? "bg-embuer-babyblue text-white"
                  : "bg-gray-200 text-gray-400"
              }`}
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
              disabled={!canGoNext}
              className={`p-2 rounded-full ${
                canGoNext
                  ? "bg-embuer-babyblue text-white"
                  : "bg-gray-200 text-gray-400"
              } transition-colors`}
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            key={currentPage}
            initial="hidden"
            animate="visible"
            viewport={{ once: false }}
          >
            {visibleProducts.length > 0 ? (
              visibleProducts.map((product, index) => (
                <motion.div
  key={`${product.id}-${index}`}
  variants={productVariants}
  className="product-card group"
  whileHover={{ y: -10, transition: { duration: 0.3 } }}
>

                  <div className="product-image-container relative overflow-hidden rounded-lg mb-3">
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
                  <p className="text-gray-600 text-sm mb-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-embuer-naples">
                      {product.price}
                    </span>
                    <motion.button
                      className="p-2 rounded-full bg-embuer-neptune/10 text-embuer-neptune hover:bg-embuer-neptune hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ShoppingCart className="w-4 h-4" />
  </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-8">
                <p>No products found for this category.</p>
              </div>
            )}
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};
export default ProductsSection;