import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "The Benefits of Natural Ingredients in Baby Care",
    excerpt: "Learn why choosing natural ingredients for your baby's skincare is important...",
    date: "June 12, 2023",
    readTime: "5 min read",
    category: "Baby Care",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  },
  {
    id: 2,
    title: "Sustainable Packaging: Our Commitment to the Environment",
    excerpt: "Discover how we're reducing our environmental footprint with innovative packaging...",
    date: "May 28, 2023",
    readTime: "4 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: 3,
    title: "5 Ways to Create an Eco-Friendly Home Cleaning Routine",
    excerpt: "Simple steps to make your home cleaning routine more environmentally friendly...",
    date: "April 15, 2023",
    readTime: "6 min read",
    category: "Home Care",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  }
];

const BlogSection = () => {
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

  const blogVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-embuer-linen">
      <div ref={containerRef} className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">News From Embuer Blog</h2>
          <p className="section-subtitle">
          Read out the articles about healthy lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal reveal-delay-1">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={blogVariants}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-embuer-babyblue/20 hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-embuer-sunshine text-embuer-seaspray text-xs font-medium rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {blog.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-embuer-seaspray mb-2">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {blog.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-embuer-seaspray font-medium text-sm hover:text-embuer-bumblebee transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12 reveal reveal-delay-2">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full border border-embuer-seaspray text-embuer-seaspray font-medium hover:bg-embuer-seaspray hover:text-white transition-colors"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;