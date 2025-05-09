
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';

const Index = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-dark-500 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative flex-grow flex flex-col justify-center">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/landing-hero.jpg"
            alt="Hero background"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/1920x1080?text=Streaming+Background";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-500/60 via-dark-500/80 to-dark-500" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-12 md:py-20 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">
              Unlimited movies, TV shows, and more.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Watch anywhere. Cancel anytime.
            </p>
            
            {isAuthenticated ? (
              <Link to="/browse">
                <Button size="lg" className="bg-streaming-500 hover:bg-streaming-600 text-white text-lg px-8 py-6">
                  Continue Watching
                </Button>
              </Link>
            ) : (
              <Link to="/signup">
                <Button size="lg" className="bg-streaming-500 hover:bg-streaming-600 text-white text-lg px-8 py-6">
                  Get Started
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <section className="py-16 bg-dark-400">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-300 p-6 rounded-lg">
              <div className="w-12 h-12 bg-streaming-500 text-white flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Watch Anywhere</h3>
              <p className="text-gray-300">Stream on your phone, tablet, laptop, and TV without paying more.</p>
            </div>
            
            <div className="bg-dark-300 p-6 rounded-lg">
              <div className="w-12 h-12 bg-streaming-500 text-white flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Unlimited Content</h3>
              <p className="text-gray-300">Thousands of movies and TV shows at your fingertips, always something new to discover.</p>
            </div>
            
            <div className="bg-dark-300 p-6 rounded-lg">
              <div className="w-12 h-12 bg-streaming-500 text-white flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Commitments</h3>
              <p className="text-gray-300">Join today, cancel anytime. No complicated contracts, no binding commitments.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trending Preview Section */}
      <section className="py-16 bg-dark-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Popular on PixelFlix</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-[2/3] rounded-md overflow-hidden bg-dark-300 animate-pulse">
                <div className="w-full h-full bg-dark-200" />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            {isAuthenticated ? (
              <Link to="/browse">
                <Button className="bg-streaming-500 hover:bg-streaming-600 text-white">
                  Browse All Content
                </Button>
              </Link>
            ) : (
              <Link to="/signup">
                <Button className="bg-streaming-500 hover:bg-streaming-600 text-white">
                  Sign Up to Watch
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-dark-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "What is PixelFlix?", a: "PixelFlix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices." },
              { q: "How much does PixelFlix cost?", a: "Watch PixelFlix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee." },
              { q: "Where can I watch?", a: "Watch anywhere, anytime. Sign in with your PixelFlix account to watch instantly on the web from your personal computer or on any internet-connected device." },
              { q: "How do I cancel?", a: "PixelFlix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks." }
            ].map((item, index) => (
              <div key={index} className="bg-dark-300 rounded-md overflow-hidden">
                <div className="p-4 border-b border-dark-200">
                  <h3 className="text-lg font-medium text-white">{item.q}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-300">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">Ready to watch? Start your free trial today.</p>
            
            <Link to="/signup">
              <Button size="lg" className="bg-streaming-500 hover:bg-streaming-600 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-dark-500 border-t border-dark-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-streaming-500 font-heading">PIXELFLIX</h1>
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
