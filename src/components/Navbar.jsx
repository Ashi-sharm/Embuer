import { Facebook, Twitter, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 flex flex-col transition-all duration-300">
      {/* Top white header with logo */}
      <div className={"w-full bg-white py-3 transition-all duration-300"}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-1 flex items-center justify-start">
            <span className="font-playfair text-embuer-rhino text-2xl font-bold">
              embuer
            </span>
          </a>

          {/* Search in the middle for desktop */}
          <form className="hidden md:flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-1 px-3 border border-gray-200 rounded-md"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <Search className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </form>

          {/* Social icons and cart for desktop */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            <div className="hidden md:flex space-x-2">
              <a
                href="#"
                className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-embuer-neptune hover:text-white transition-colors"
                aria-label="Visit our Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-embuer-neptune hover:text-white transition-colors"
                aria-label="Visit our Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-embuer-neptune hover:text-white transition-colors"
                aria-label="Visit our Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-embuer-rhino" />
              ) : (
                <Menu className="w-6 h-6 text-embuer-rhino" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom dark navigation bar */}
      <div className="w-full bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-between">
            <div className="flex space-x-8">
              {["Home", "About", "Products", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`${item.toLowerCase()}`}
                  className="py-3 text-white hover:text-embuer-naples font-medium text-sm tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-embuer-naples after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;