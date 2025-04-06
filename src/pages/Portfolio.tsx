
import { useState, useEffect } from "react";
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
  
  return (
    <>
      <Navbar />
      
      {/* Portfolio Header */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
            <p className="text-gray-600">
              Explore my collection of design projects across various categories, including branding, 
              logo design, posters, social media, and more.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <PortfolioFilter
            categories={categories}
            onFilterChange={handleFilterChange}
            activeFilter={activeFilter}
          />
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <PortfolioItem key={item.id} {...item} />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium">No projects found</h3>
              <p className="text-gray-600 mt-2">
                No projects match the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Portfolio;
