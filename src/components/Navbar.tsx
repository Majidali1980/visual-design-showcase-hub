
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-md py-3"
          : "bg-gray-900/80 backdrop-blur-sm py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold text-white">
            DESIGN<span className="text-blue-500">.</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block md:hidden text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-sm font-medium text-gray-200 hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link to="/portfolio" className="text-sm font-medium text-gray-200 hover:text-blue-500 transition-colors">
              Portfolio
            </Link>
            <Link to="/about" className="text-sm font-medium text-gray-200 hover:text-blue-500 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-200 hover:text-blue-500 transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in bg-gray-900/95 mt-4 rounded-lg">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-base font-medium py-2 text-gray-200 hover:text-blue-500 transition-colors px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="text-base font-medium py-2 text-gray-200 hover:text-blue-500 transition-colors px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/about"
                className="text-base font-medium py-2 text-gray-200 hover:text-blue-500 transition-colors px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-base font-medium py-2 text-gray-200 hover:text-blue-500 transition-colors px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
