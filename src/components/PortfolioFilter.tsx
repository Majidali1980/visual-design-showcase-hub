
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

const PortfolioFilter = ({ categories, onFilterChange, activeFilter }: FilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-10">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onFilterChange("all")}
        className={cn(
          "px-4 py-2 rounded-full text-sm transition-all",
          activeFilter === "all"
            ? "bg-gradient-animated text-white font-medium"
            : "bg-secondary hover:bg-secondary/80"
        )}
      >
        All
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onFilterChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm transition-all",
            activeFilter === category
              ? "bg-gradient-animated text-white font-medium"
              : "bg-secondary hover:bg-secondary/80"
          )}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
