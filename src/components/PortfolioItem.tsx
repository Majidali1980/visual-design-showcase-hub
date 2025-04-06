
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface PortfolioItemProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  client?: string;
}

const PortfolioItem = ({ id, title, category, imageUrl }: PortfolioItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="portfolio-item"
    >
      <Link to={`/portfolio/${id}`} className="block">
        <div className="h-[300px] relative overflow-hidden rounded-xl shadow-lg border border-secondary">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent flex flex-col justify-end p-6">
            <span className="text-xs font-medium uppercase tracking-wider text-accent mb-1">
              {category}
            </span>
            <h3 className="text-xl font-semibold text-white mt-1 text-gradient">{title}</h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PortfolioItem;
