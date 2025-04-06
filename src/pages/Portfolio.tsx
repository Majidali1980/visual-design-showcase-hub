
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PortfolioItem from "../components/PortfolioItem";
import PortfolioFilter from "../components/PortfolioFilter";
import { portfolioItems } from "../data/portfolioData";

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  
  // Extract unique categories from portfolio items
  const categories = Array.from(
    new Set(portfolioItems.map((item) => item.category))
  );
  
  // Filter portfolio items when active filter changes
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter]);
  
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <>
      <Navbar />
      
      {/* Portfolio Header */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-16 bg-gradient-to-b from-background to-secondary/20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1 
              initial={fadeInUp.hidden}
              animate={fadeInUp.visible}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold mb-6 text-gradient"
            >
              Portfolio
            </motion.h1>
            <motion.p 
              initial={fadeInUp.hidden}
              animate={fadeInUp.visible}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-muted-foreground"
            >
              Explore my collection of design projects across various categories, including branding, 
              logo design, posters, social media, and more.
            </motion.p>
          </div>
        </div>
      </motion.section>
      
      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <PortfolioFilter
              categories={categories}
              onFilterChange={handleFilterChange}
              activeFilter={activeFilter}
            />
          </motion.div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <PortfolioItem {...item} />
              </motion.div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                No projects match the selected filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Portfolio;
