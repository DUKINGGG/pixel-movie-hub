
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const Index = () => {
  const { isAuthenticated } = useAuth();
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Cycle through features automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Watch Anywhere",
      description: "Stream on your phone, tablet, laptop, and TV without paying more.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Unlimited Content",
      description: "Thousands of movies and TV shows at your fingertips, always something new to discover.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "No Commitments",
      description: "Join today, cancel anytime. No complicated contracts, no binding commitments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-dark-500 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative flex-grow flex flex-col justify-center">
        {/* Background with video overlay */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src="/images/landing-hero.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/1920x1080?text=Streaming+Background";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/90 via-dark-500/70 to-dark-500/95 backdrop-blur-sm" />
          
          {/* RGB animated border at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 rgb-bg"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-12 md:py-20 z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading rgb-text">
              Unlimited movies, TV shows, and more.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Watch anywhere. Cancel anytime.
            </p>
            
            {isAuthenticated ? (
              <Link to="/browse">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="rgb-border bg-streaming-500/90 hover:bg-streaming-600 text-white text-lg px-8 py-6 backdrop-blur-sm">
                    Continue Watching
                  </Button>
                </motion.div>
              </Link>
            ) : (
              <Link to="/signup">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="rgb-border bg-streaming-500/90 hover:bg-streaming-600 text-white text-lg px-8 py-6 backdrop-blur-sm">
                    Get Started
                  </Button>
                </motion.div>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Features Section */}
      <section className="py-16 bg-dark-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 rgb-bg opacity-10"></div>
        </div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gradient">Why Choose PixelFlix?</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={`neo-blur p-6 rounded-lg ${index === activeFeature ? 'rgb-glow' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className={`w-12 h-12 ${index === activeFeature ? 'rgb-bg' : 'bg-streaming-500'} text-white flex items-center justify-center rounded-full mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Trending Preview Section */}
      <section className="py-16 bg-dark-500 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12 rgb-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Popular on PixelFlix
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item} 
                className={`aspect-[2/3] rounded-md overflow-hidden glass-card ${item % 3 === 0 ? 'rgb-border' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * item }}
                whileHover={{ y: -5 }}
              >
                <div className="w-full h-full bg-dark-200 pulse-slow" />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            {isAuthenticated ? (
              <Link to="/browse">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-streaming-500 hover:bg-streaming-600 text-white rgb-border">
                    Browse All Content
                  </Button>
                </motion.div>
              </Link>
            ) : (
              <Link to="/signup">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-streaming-500 hover:bg-streaming-600 text-white rgb-border">
                    Sign Up to Watch
                  </Button>
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-dark-400 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What is PixelFlix?", a: "PixelFlix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." },
              { q: "How much does PixelFlix cost?", a: "Watch PixelFlix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee." },
              { q: "Where can I watch?", a: "Watch anywhere, anytime. Sign in with your PixelFlix account to watch instantly on the web from your personal computer or on any internet-connected device." },
              { q: "How do I cancel?", a: "PixelFlix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-dark-300/80 backdrop-blur-sm rounded-md overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="p-4 border-b border-dark-200">
                  <h3 className="text-lg font-medium text-white">{item.q}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-300">{item.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">Ready to watch? Start your free trial today.</p>
            
            <Link to="/signup">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-streaming-500 hover:bg-streaming-600 text-white rgb-border">
                  Get Started
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-dark-500 border-t border-dark-300 relative">
        <div className="absolute inset-x-0 top-0 h-1 rgb-bg"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-xl font-bold rgb-text font-heading">PIXELFLIX</h1>
              <p className="text-gray-400 text-sm mt-2">© 2024 PixelFlix. All rights reserved.</p>
            </div>
            
            <div className="mt-6 md:mt-0 flex space-x-8">
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link to="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
