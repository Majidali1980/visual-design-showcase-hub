
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const About = () => {
  const skills = [
    { 
      name: "Brand Identity", 
      proficiency: 95,
      images: [
        "https://images.unsplash.com/photo-1635405074683-96d6b313e34a?q=80&w=3000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1557131399-a0fdd5d62a7c?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524293568345-75d62c3664f7?q=80&w=2000&auto=format&fit=crop"
      ]
    },
    { 
      name: "Logo Design", 
      proficiency: 90,
      images: [
        "https://images.unsplash.com/photo-1594587636268-b38a6ef215f5?q=80&w=2700&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop"
      ]
    },
    { 
      name: "Typography", 
      proficiency: 85,
      images: [
        "https://images.unsplash.com/photo-1611155155386-8261dc2984a6?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1467991521834-fb8e202c7074?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562932831-afcadcfa4cae?q=80&w=2000&auto=format&fit=crop"
      ]
    },
    { 
      name: "Print Design", 
      proficiency: 88,
      images: [
        "https://images.unsplash.com/photo-1472572349882-fb7cb873552a?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1601276174812-63015a70209b?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515448392538-99de4ad97d1c?q=80&w=2000&auto=format&fit=crop"
      ]
    },
    { 
      name: "Social Media", 
      proficiency: 92,
      images: [
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2000&auto=format&fit=crop"
      ]
    },
    { 
      name: "UI/UX Design", 
      proficiency: 80,
      images: [
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?q=80&w=2000&auto=format&fit=crop"
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      
      {/* About Header */}
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
              About Me
            </motion.h1>
            <motion.p 
              initial={fadeInUp.hidden}
              animate={fadeInUp.visible}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-muted-foreground"
            >
              I'm a passionate graphic designer creating memorable visual experiences 
              that tell stories and connect with audiences.
            </motion.p>
          </div>
        </div>
      </motion.section>
      
      {/* Designer Bio */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-primary/10 animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-accent/10 animate-pulse" style={{ animationDuration: '10s' }}></div>
                <img
                  src="https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?q=80&w=3087&auto=format&fit=crop"
                  alt="Alex Morgan - Graphic Designer"
                  className="rounded-2xl w-full h-auto relative z-10 border-2 border-secondary"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient">Hello, I'm Alex Morgan</h2>
              <p className="text-muted-foreground mb-4">
                I'm a graphic designer with over 5 years of experience creating memorable visual identities, 
                print materials, and digital design solutions for clients across various industries.
              </p>
              <p className="text-muted-foreground mb-4">
                My design philosophy centers around finding the perfect balance between aesthetics and 
                functionality. I believe that great design should not only look beautiful but also effectively 
                communicate the client's message and connect with their audience.
              </p>
              <p className="text-muted-foreground mb-6">
                With a background in both traditional and digital media, I bring a versatile skill set that 
                allows me to tackle projects from multiple angles and deliver cohesive visual solutions that 
                stand out in today's crowded visual landscape.
              </p>
              
              <div className="border-t border-secondary/50 pt-6 mt-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-accent">Education</h3>
                    <p className="text-muted-foreground">Bachelor of Fine Arts in Graphic Design, Rhode Island School of Design</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 text-accent">Experience</h3>
                    <p className="text-muted-foreground">
                      Previously worked with Creative Agency X, Design Studio Y, and as a freelance designer for 3+ years.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section with Portfolio Images */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">My Skills & Work</h2>
            
            <div className="space-y-16">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xl font-semibold">{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-animated rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                  
                  {/* Portfolio Carousel for Each Skill */}
                  <div className="mt-6">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full"
                    >
                      <CarouselContent>
                        {skill.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex} className="md:basis-1/2 lg:basis-1/3">
                            <motion.div 
                              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                              className="bg-secondary/30 rounded-xl overflow-hidden"
                            >
                              <AspectRatio ratio={16/9}>
                                <img 
                                  src={image} 
                                  alt={`${skill.name} Work Sample ${imageIndex + 1}`}
                                  className="object-cover w-full h-full"
                                />
                              </AspectRatio>
                              <div className="p-4">
                                <h4 className="text-sm font-medium">{skill.name} - Sample {imageIndex + 1}</h4>
                              </div>
                            </motion.div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-secondary/80 hover:bg-secondary text-foreground" />
                      <CarouselNext className="right-2 bg-secondary/80 hover:bg-secondary text-foreground" />
                    </Carousel>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gradient">My Design Process</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-secondary/30 p-6 rounded-xl text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-animated"></div>
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">1</div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-muted-foreground">
                  I begin by diving deep into your brand, audience, and goals to establish clear design objectives and direction.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-secondary/30 p-6 rounded-xl text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-animated"></div>
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">2</div>
                <h3 className="text-xl font-semibold mb-3">Concept Development</h3>
                <p className="text-muted-foreground">
                  I create multiple design concepts, exploring various creative approaches to find the perfect visual solution.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-secondary/30 p-6 rounded-xl text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-animated"></div>
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">3</div>
                <h3 className="text-xl font-semibold mb-3">Refinement & Delivery</h3>
                <p className="text-muted-foreground">
                  I fine-tune the selected concept with your feedback and deliver polished designs ready for implementation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gradient">What Clients Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-secondary/30 p-8 rounded-xl relative"
            >
              <div className="absolute -top-4 left-8 text-4xl text-primary">"</div>
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">
                "Alex created a stunning brand identity for my business that perfectly captures our essence. The attention to detail and creativity exceeded my expectations."
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">CEO, Eco Warriors</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-secondary/30 p-8 rounded-xl relative"
            >
              <div className="absolute -top-4 left-8 text-4xl text-primary">"</div>
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">
                "Working with Alex was a pleasure from start to finish. The poster designs created for our event got so many compliments and perfectly matched our vision."
              </p>
              <div>
                <p className="font-semibold">David Chen</p>
                <p className="text-sm text-muted-foreground">Event Coordinator, City Arts Council</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-secondary/30 p-8 rounded-xl relative"
            >
              <div className="absolute -top-4 left-8 text-4xl text-primary">"</div>
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">
                "Alex completely transformed our social media presence with eye-catching designs that increased our engagement dramatically. Highly recommended!"
              </p>
              <div>
                <p className="font-semibold">Maya Rodriguez</p>
                <p className="text-sm text-muted-foreground">Founder, Wellness Collective</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-secondary/50 to-secondary/20 p-12 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-animated"></div>
            <h2 className="text-3xl font-bold mb-4 text-gradient">Ready to Start a Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              I'm currently available for freelance projects. Let's create something amazing together that helps you achieve your goals.
            </p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact" 
              className="inline-block bg-gradient-animated text-white px-8 py-3 rounded-lg font-medium"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
