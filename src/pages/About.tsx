
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* About Header */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About</h1>
            <p className="text-gray-600">
              Learn more about the designer behind the work and my approach to creative problem-solving.
            </p>
          </div>
        </div>
      </section>
      
      {/* Designer Bio */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?q=80&w=3087&auto=format&fit=crop"
                alt="Designer Portrait"
                className="rounded-lg w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Hello, I'm Alex Morgan</h2>
              <p className="text-gray-600 mb-4">
                I'm a graphic designer with over 5 years of experience creating memorable visual identities, print materials, and digital design solutions for clients across various industries.
              </p>
              <p className="text-gray-600 mb-4">
                My design philosophy centers around finding the perfect balance between aesthetics and functionality. I believe that great design should not only look beautiful but also effectively communicate the client's message and connect with their audience.
              </p>
              <p className="text-gray-600 mb-6">
                With a background in both traditional and digital media, I bring a versatile skill set that allows me to tackle projects from multiple angles and deliver cohesive visual solutions.
              </p>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-gray-600 mb-4">Bachelor of Fine Arts in Graphic Design, Rhode Island School of Design</p>
                
                <h3 className="font-semibold mb-2">Professional Experience</h3>
                <p className="text-gray-600">
                  Previously worked with Creative Agency X, Design Studio Y, and as a freelance designer for 3+ years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills & Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">My Process</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-gray-600">
                  Understanding your goals, audience, and market position to establish clear design objectives.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-3">Concept</h3>
                <p className="text-gray-600">
                  Developing creative solutions through sketching, ideation, and exploring visual directions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-3">Execution</h3>
                <p className="text-gray-600">
                  Refining and implementing the chosen concept with meticulous attention to detail.
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-md text-center">
                  <h4 className="font-semibold">Brand Identity</h4>
                </div>
                <div className="bg-white p-4 rounded-md text-center">
                  <h4 className="font-semibold">Logo Design</h4>
                </div>
                <div className="bg-white p-4 rounded-md text-center">
                  <h4 className="font-semibold">Typography</h4>
                </div>
                <div className="bg-white p-4 rounded-md text-center">
                  <h4 className="font-semibold">Print Design</h4>
                </div>
                <div className="bg-white p-4 rounded-md text-center">
                  <h4 className="font-semibold">Social Media</h4>
                </div>
                <div className="bg-white p-4 rounded-md text-center">
                  <h4 className="font-semibold">Packaging</h4>
                </div>
                <div className="bg-white p-4 rounded-md text-center">
                  <h4 className="font-semibold">Editorial Design</h4>
                </div>
                <div className="bg-white p-4 rounded-md text-center">
                  <h4 className="font-semibold">Digital Design</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex-auto mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "Alex's work on our rebrand was exceptional. They truly understood our vision and transformed it into a visual identity that perfectly represents our company."
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-gray-500 text-sm">Marketing Director, Eco Warriors</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex-auto mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "The poster designs exceeded our expectations. We received countless compliments about the visual identity of our festival."
              </p>
              <div>
                <p className="font-semibold">David Chen</p>
                <p className="text-gray-500 text-sm">Event Coordinator, City Arts Council</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex-auto mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "Our social media engagement increased dramatically after implementing the new content design strategy. Alex's work was transformative for our brand."
              </p>
              <div>
                <p className="font-semibold">Maya Rodriguez</p>
                <p className="text-gray-500 text-sm">Founder, Wellness Collective</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
