
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContentItem } from '@/data/content';
import { Play, Info, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  content: ContentItem;
  showDescription?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ content, showDescription = true }) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background image */}
      <img
        src={content.thumbnail.large}
        alt={content.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://via.placeholder.com/1920x1080?text=No+Image";
        }}
      />
      
      {/* Overlay gradient */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 md:pb-16 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 font-heading">{content.title}</h1>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="text-white">{content.rating}/10</span>
            </div>
            <span className="text-gray-300">{content.releaseYear}</span>
            {content.type === 'movie' ? (
              <span className="text-gray-300">{content.duration} min</span>
            ) : (
              <span className="text-gray-300">{content.seasons} {content.seasons === 1 ? 'Season' : 'Seasons'}</span>
            )}
            
            <div className="flex space-x-2">
              {content.genre.slice(0, 2).map((genre, index) => (
                <span key={index} className="px-2 py-1 rounded bg-dark-400/50 text-xs text-gray-300">
                  {genre}
                </span>
              ))}
            </div>
          </div>
          
          {showDescription && (
            <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-3">
              {content.description}
            </p>
          )}
          
          <div className="flex space-x-4">
            <Button onClick={() => navigate(`/watch/${content.id}`)} className="bg-streaming-500 hover:bg-streaming-600">
              <Play className="h-4 w-4 mr-2" /> Play
            </Button>
            <Button variant="outline" onClick={() => navigate(`/details/${content.id}`)}>
              <Info className="h-4 w-4 mr-2" /> More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
