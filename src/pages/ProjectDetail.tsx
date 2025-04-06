
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { portfolioItems, projectDetails } from "../data/portfolioData";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  useEffect(() => {
    // Find the project in our data
    if (id && projectDetails[id as keyof typeof projectDetails]) {
      setProject(projectDetails[id as keyof typeof projectDetails]);
    } else {
      setNotFound(true);
    }
  }, [id]);
  
  if (notFound) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, the project you're looking for doesn't exist.</p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  
  if (!project) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      
      {/* Project Header */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="text-lg text-gray-600 mb-6">{project.description}</div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm uppercase text-gray-500 font-medium">Client</p>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-sm uppercase text-gray-500 font-medium">Year</p>
                <p className="font-medium">{project.year}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm uppercase text-gray-500 font-medium">Services</p>
                <p className="font-medium">{project.services?.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Main Image */}
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={project.images?.[activeImageIndex] || project.images?.[0]}
              alt={project.title}
              className="w-full object-cover h-[500px]"
            />
          </div>
          
          {/* Image Thumbnails (if multiple images) */}
          {project.images && project.images.length > 1 && (
            <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
              {project.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`rounded-md overflow-hidden flex-shrink-0 transition-all ${
                    activeImageIndex === index
                      ? "ring-4 ring-blue-600"
                      : "ring-0 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} - View ${index + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
          
          {/* Project Details */}
          <div className="max-w-3xl grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
              <p className="text-gray-600">{project.challenge}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">The Solution</h3>
              <p className="text-gray-600">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.slice(0, 3).map((item) => (
              <PortfolioItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ProjectDetail;
