
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
    <Link to={`/portfolio/${id}`} className="portfolio-item group block">
      <div className="h-[300px] relative overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span className="text-xs font-medium uppercase tracking-wider text-blue-300">
            {category}
          </span>
          <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItem;
