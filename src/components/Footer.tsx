
import { Link } from "react-router-dom";
import { Instagram, Dribbble, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-gray-800">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-display font-bold text-white">
              DESIGN<span className="text-blue-500">.</span>
            </Link>
            <p className="text-gray-400 mt-4 max-w-xs">
              Creating memorable visual experiences through thoughtful design and strategic thinking.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-100">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-blue-500 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-100">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/portfolio?category=logo" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Logo Design
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio?category=branding" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio?category=poster" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Poster Design
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio?category=social" className="text-gray-400 hover:text-blue-500 transition-colors">
                    Social Media
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-100">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <Dribbble size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500">
                  <Twitter size={20} />
                </a>
              </div>
              <p className="text-gray-400">
                hello@designportfolio.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Design Portfolio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
