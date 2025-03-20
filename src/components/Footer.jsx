import { ChevronRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-embuer-seaspray text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">embuer</h3>
            <p className="text-embuer-linen mb-4 text-sm">
              Providing pure and natural personal care products for you and your family. Made with love and care for the environment.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "twitter", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <i className={`lucide lucide-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "About Us", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-embuer-linen hover:text-white transition-colors inline-flex items-center"
                  >
                    <ChevronRight className="w-3 h-3 mr-1" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Products</h4>
            <ul className="space-y-2">
              {["Baby Care", "Personal Care", "Home Care", "Gift Sets", "Eco-Friendly"].map((category) => (
                <li key={category}>
                  <a 
                    href="#"
                    className="text-embuer-linen hover:text-white transition-colors inline-flex items-center"
                  >
                    <ChevronRight className="w-3 h-3 mr-1" />
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Contact Us</h4>
            <address className="not-italic text-embuer-linen text-sm">
              <p className="mb-2">123 Green Avenue, Ecoville, CA 90210</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p className="mb-2">Email: hello@embuer.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-embuer-linen text-sm mb-4 md:mb-0">
              &copy; {currentYear} Embuer. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-embuer-linen">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
              <a href="#" className="hover:text-white transition-colors">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;