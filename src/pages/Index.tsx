
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioItem from "../components/PortfolioItem";
import { portfolioItems } from "../data/portfolioData";
import { ArrowRight, Instagram, Dribbble, ExternalLink } from "lucide-react";

const Index = () => {
  // Get featured items (just the first 4)
  const featuredItems = portfolioItems.slice(0, 4);
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDuration: '20s' }}></div>
        
        <div className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <motion.h1 
                initial={fadeInUp.hidden}
                animate={fadeInUp.visible}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="text-gradient">Crafting Visual</span> Stories That <span className="text-gradient">Capture Attention</span>
              </motion.h1>
              <motion.p 
                initial={fadeInUp.hidden}
                animate={fadeInUp.visible}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-muted-foreground mb-8"
              >
                Hi, I'm Alex Morgan, a graphic designer specializing in branding, logos, posters, and digital media that communicate and connect with your audience.
              </motion.p>
              <motion.div 
                initial={fadeInUp.hidden}
                animate={fadeInUp.visible}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/portfolio"
                  className="bg-gradient-animated text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  View Portfolio
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="bg-secondary/80 border border-secondary text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/60 transition-colors"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px]"
            >
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-primary/20 rounded-full top-10 left-10 animate-pulse" style={{ animationDuration: '6s' }}></div>
              <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-accent/20 rounded-full bottom-10 right-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=3270&auto=format&fit=crop"
                  alt="Design Portfolio Showcase"
                  className="max-h-full rounded-xl shadow-2xl object-cover z-10 border border-secondary"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of recent design work spanning multiple disciplines and industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <PortfolioItem {...item} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-primary transition-colors"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Design Services</h2>
              <p className="text-muted-foreground mb-8">
                With expertise in both print and digital design, I create cohesive visual experiences that help brands connect with their audience.
              </p>
              
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Brand Identity Design</h3>
                    <p className="text-muted-foreground">
                      Comprehensive visual systems that define how your brand looks, feels, and communicates with your audience.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Print & Editorial</h3>
                    <p className="text-muted-foreground">
                      From posters and publications to packaging and promotional materials that make an impression.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Digital & Social Media</h3>
                    <p className="text-muted-foreground">
                      Engaging visuals that stand out in feeds and drive engagement across all your digital platforms.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="aspect-square bg-secondary/30 rounded-lg p-6 flex flex-col justify-between border border-secondary/50"
              >
                <h3 className="font-semibold text-lg">Logo Design</h3>
                <p className="text-4xl font-bold text-gradient">15+</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 text-foreground rounded-lg p-6 flex flex-col justify-between border border-primary/20"
              >
                <h3 className="font-semibold text-lg">Branding Projects</h3>
                <p className="text-4xl font-bold text-gradient">28+</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 text-foreground rounded-lg p-6 flex flex-col justify-between border border-accent/20"
              >
                <h3 className="font-semibold text-lg">Happy Clients</h3>
                <p className="text-4xl font-bold text-gradient">40+</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="aspect-square bg-secondary/30 rounded-lg p-6 flex flex-col justify-between border border-secondary/50"
              >
                <h3 className="font-semibold text-lg">Years Experience</h3>
                <p className="text-4xl font-bold text-gradient">5+</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Connect */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Let's Create Something Amazing</h2>
            <p className="text-muted-foreground mb-8">
              Have a project in mind or want to see more of my work? I'd love to connect and discuss how we can collaborate.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-gradient-animated text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Get in Touch
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#"
                  className="bg-secondary/80 border border-secondary px-6 py-3 rounded-lg font-medium hover:bg-secondary/60 transition-colors flex items-center gap-2"
                >
                  <Dribbble size={18} /> Dribbble
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#"
                  className="bg-secondary/80 border border-secondary px-6 py-3 rounded-lg font-medium hover:bg-secondary/60 transition-colors flex items-center gap-2"
                >
                  <Instagram size={18} /> Instagram
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
