
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioItem from "../components/PortfolioItem";
import { portfolioItems } from "../data/portfolioData";
import { ArrowRight, Instagram, Dribbble } from "lucide-react";

const Index = () => {
  // Get featured items (just the first 4)
  const featuredItems = portfolioItems.slice(0, 4);
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Crafting Visual Stories That Capture Attention
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                A design portfolio showcasing branding, logos, posters, and digital media that communicate and connect.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  View Portfolio
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-blue-600/20 rounded-full top-10 left-10 animate-pulse" style={{ animationDuration: '6s' }}></div>
              <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-600/10 rounded-full bottom-10 right-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=3270&auto=format&fit=crop"
                  alt="Design Portfolio Showcase"
                  className="max-h-full rounded-xl shadow-xl object-cover z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of recent design work spanning multiple disciplines and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <PortfolioItem key={item.id} {...item} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Design Services</h2>
              <p className="text-gray-600 mb-8">
                With expertise in both print and digital design, I create cohesive visual experiences that help brands connect with their audience.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Brand Identity Design</h3>
                    <p className="text-gray-600">
                      Comprehensive visual systems that define how your brand looks, feels, and communicates.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Print & Editorial</h3>
                    <p className="text-gray-600">
                      From posters and publications to packaging and promotional materials.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Digital & Social Media</h3>
                    <p className="text-gray-600">
                      Engaging visuals that stand out in feeds and drive engagement across platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
                <h3 className="font-semibold text-lg">Logo Design</h3>
                <p className="text-4xl font-bold">15+</p>
              </div>
              <div className="aspect-square bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-between">
                <h3 className="font-semibold text-lg">Branding Projects</h3>
                <p className="text-4xl font-bold">28+</p>
              </div>
              <div className="aspect-square bg-blue-600 text-white rounded-lg p-6 flex flex-col justify-between">
                <h3 className="font-semibold text-lg">Happy Clients</h3>
                <p className="text-4xl font-bold">40+</p>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
                <h3 className="font-semibold text-lg">Years Experience</h3>
                <p className="text-4xl font-bold">5+</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Connect */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
            <p className="text-gray-300 mb-8">
              Have a project in mind or want to see more of my work? I'd love to connect and discuss how we can collaborate.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href="#"
                className="border border-white/30 px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Dribbble size={18} /> Dribbble
              </a>
              <a
                href="#"
                className="border border-white/30 px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Instagram size={18} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
