import { Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Adjust based on navbar height
        behavior: "smooth",
      });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevents page refresh
  };

  const NavLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" },
];

  return (
    <header className="fixed w-full top-0 left-0 z-50 flex flex-col transition-all duration-300">
      {/* Top white header with logo */}
      <div className={"w-full bg-white py-3 transition-all duration-300"}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="https://www.embuer.com/"
            target="_blank"
            // onClick={() => scrollToSection("home")}
            className="text-2xl font-bold"
          >
            embuer
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
                type="button"
                onClick={handleSearch}
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
                href="https://www.facebook.com"
                 target="_blank"
                className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-embuer-neptune hover:text-white transition-colors"
                aria-label="Visit our Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                 target="_blank"
                className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-embuer-neptune hover:text-white transition-colors"
                aria-label="Visit our Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/"
                 target="_blank"
                className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-embuer-neptune hover:text-white transition-colors"
                aria-label="Visit our Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-seaspray hover:bg-linen/50 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
          </div>
        </div>
      </div>
{/* Mobile Navigation Menu */}
{isOpen && (
  <div className="md:hidden bg-embuer-babyblue text-gray-400 absolute top-full left-0 w-full shadow-md">
    <ul className="flex flex-col space-y-2 py-4 px-6">
      {NavLinks.map(({ name, id }) => (
        <li key={id}>
          <button
            onClick={() => {
              scrollToSection(id);
              setIsOpen(false); // Close menu after click
            }}
            className="block py-2 text-gray-400 hover:text-embuer-naples font-medium text-sm tracking-wide transition-colors"
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  </div>
)}




      {/* Bottom dark navigation bar */}
    <nav className="w-full bg-gray-800 text-white">
      <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {NavLinks.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="py-3 text-white hover:text-embuer-naples font-medium text-sm tracking-wide transition-colors"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
      </div>
      </nav>
    </header>
  );
};

export default Navbar;