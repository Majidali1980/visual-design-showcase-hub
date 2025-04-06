
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { portfolioItems } from "../data/portfolioData";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the project that matches the ID
  const project = portfolioItems.find((item) => item.id === id);
  
  // If no project is found, show a message
  if (!project) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-32 min-h-screen">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 text-gradient">Project Not Found</h1>
            <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 bg-secondary px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <ArrowLeft size={18} /> Back to Portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  // Mock project details
  const projectDetails = {
    description: `This ${project.category.toLowerCase()} project for ${project.client || "a client"} showcases a unique approach to visual design, focusing on brand identity and creative expression.`,
    challenge: "The client needed a distinctive visual identity that would stand out in a competitive market while maintaining brand recognition and conveying their core values.",
    solution: "I developed a comprehensive design system that included logo variations, color palette, typography guidelines, and application examples across various media.",
    testimonial: {
      quote: "The design perfectly captures our brand essence and has received overwhelmingly positive feedback from our customers and stakeholders.",
      author: project.client || "Client",
      position: "Marketing Director"
    },
    images: [
      project.imageUrl,
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=3000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561070791-4526d3072056?q=80&w=3000&auto=format&fit=crop"
    ],
    deliverables: [
      "Brand Strategy",
      "Logo Design",
      "Color Palette",
      "Typography System",
      "Brand Guidelines",
      "Marketing Collateral"
    ],
    duration: "6 weeks",
    year: "2023"
  };
  
  return (
    <>
      <Navbar />
      
      {/* Project Hero */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.6 }}
        className="pt-32 pb-16 bg-gradient-to-b from-background to-secondary/20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gradient"
            >
              {project.title}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                {project.category}
              </span>
              {project.client && (
                <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                  Client: {project.client}
                </span>
              )}
              <span className="bg-secondary px-3 py-1 rounded-full text-sm">
                {projectDetails.year}
              </span>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Project Featured Image */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={project.imageUrl} 
              alt={`${project.title} - Featured Image`} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>
      
      {/* Project Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-muted-foreground mb-8">
                {projectDetails.description}
              </p>
              
              <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
              <p className="text-muted-foreground mb-8">
                {projectDetails.challenge}
              </p>
              
              <h2 className="text-2xl font-bold mb-6">The Solution</h2>
              <p className="text-muted-foreground mb-12">
                {projectDetails.solution}
              </p>
              
              {/* Project Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {projectDetails.images.slice(1).map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg overflow-hidden shadow-md"
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} - Gallery Image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Testimonial */}
              <div className="bg-secondary/50 p-8 rounded-xl mb-12 relative">
                <div className="absolute top-4 left-4 text-4xl text-primary/30">"</div>
                <div className="relative z-10">
                  <p className="italic text-lg mb-4">{projectDetails.testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{projectDetails.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{projectDetails.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-secondary/30 p-6 rounded-xl sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Project Details</h3>
                
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Category</p>
                  <p className="font-medium">{project.category}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Client</p>
                  <p className="font-medium">{project.client || "Confidential"}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Duration</p>
                  <p className="font-medium">{projectDetails.duration}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Year</p>
                  <p className="font-medium">{projectDetails.year}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Deliverables</p>
                  <ul className="space-y-2">
                    {projectDetails.deliverables.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next Projects */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-gradient">Explore More Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems
              .filter(item => item.id !== id)
              .slice(0, 3)
              .map(item => (
                <Link
                  key={item.id}
                  to={`/portfolio/${item.id}`}
                  className="group block"
                >
                  <div className="h-[250px] relative overflow-hidden rounded-xl">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-100 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <span className="text-xs font-medium uppercase tracking-wider text-accent">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ProjectDetail;
