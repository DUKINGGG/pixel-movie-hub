
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ContentRow from '@/components/ContentRow';
import Navbar from '@/components/Navbar';
import { 
  contentLibrary, 
  getFeaturedContent, 
  getNewContent,
  getTrendingContent,
  getMovies,
  getSeries
} from '@/data/content';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, Play, Info } from 'lucide-react';

const Browse = () => {
  const [featuredContent, setFeaturedContent] = useState(getFeaturedContent());
  const [heroContent, setHeroContent] = useState(featuredContent[0]);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Randomly select a featured content for the hero section
    if (featuredContent.length > 0) {
      const randomIndex = Math.floor(Math.random() * featuredContent.length);
      setHeroContent(featuredContent[randomIndex]);
    }
  }, [featuredContent]);

  // Hero section categories
  const categories = ['All', 'Action', 'Comedy', 'Drama', 'Thriller', 'Sci-Fi', 'Horror', 'Romance', 'Documentary'];

  return (
    <div className="min-h-screen bg-dark-500">
      <Navbar />
      
      <div className="pt-16"> {/* Add padding for fixed navbar */}
        {/* Hero Section */}
        {heroContent && <HeroSection content={heroContent} />}
        
        {/* Hero Section Bar - Categories */}
        <motion.div 
          className="bg-dark-400/80 backdrop-blur-sm border-y border-white/5 sticky top-16 z-30"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3 overflow-x-auto scrollbar-none">
              <div className="flex space-x-1 md:space-x-2">
                {categories.map((category, index) => (
                  <Button
                    key={category}
                    variant={index === 0 ? "default" : "outline"}
                    size="sm"
                    className={index === 0 ? "bg-streaming-500 hover:bg-streaming-600" : "bg-transparent hover:bg-dark-300 border-white/10"}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search titles..."
                    className="bg-dark-300/50 border border-white/10 rounded-md pl-9 pr-4 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-streaming-500 focus:border-streaming-500 w-48 placeholder-gray-500 text-white"
                  />
                </div>
                
                <Button variant="ghost" size="sm" className="text-gray-300">
                  <Info className="w-4 h-4 mr-1" /> Filter
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Content Rows */}
        <div className="container mx-auto px-4 py-8">
          <ContentRow 
            title="Continue Watching" 
            items={contentLibrary.slice(0, 5)} 
          />
          
          <ContentRow 
            title="New Releases" 
            items={getNewContent()}
            seeAllLink="/new"
          />
          
          <ContentRow 
            title="Trending Now" 
            items={getTrendingContent()}
            seeAllLink="/trending"
          />
          
          <ContentRow 
            title="Popular Movies" 
            items={getMovies()}
            seeAllLink="/movies"
          />
          
          <ContentRow 
            title="Popular Series" 
            items={getSeries()}
            seeAllLink="/series"
          />
        </div>
      </div>
    </div>
  );
};

export default Browse;
