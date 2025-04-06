
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

const PortfolioFilter = ({ categories, onFilterChange, activeFilter }: FilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-10">
      <button
        onClick={() => onFilterChange("all")}
        className={cn(
          "px-4 py-2 rounded-full text-sm transition-all",
          activeFilter === "all"
            ? "bg-blue-600 text-white font-medium"
            : "bg-gray-100 hover:bg-gray-200"
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm transition-all",
            activeFilter === category
              ? "bg-blue-600 text-white font-medium"
              : "bg-gray-100 hover:bg-gray-200"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilter;
