
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

  return (
    <div className="min-h-screen bg-dark-500">
      <Navbar />
      
      <div className="pt-16"> {/* Add padding for fixed navbar */}
        {/* Hero Section */}
        {heroContent && <HeroSection content={heroContent} />}
        
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
