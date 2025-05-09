
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContentItem } from '@/data/content';
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentCardProps {
  content: ContentItem;
  size?: 'small' | 'medium' | 'large';
}

const ContentCard: React.FC<ContentCardProps> = ({ content, size = 'medium' }) => {
  const navigate = useNavigate();
  
  const getThumbnail = () => {
    switch (size) {
      case 'small':
        return content.thumbnail.small;
      case 'large':
        return content.thumbnail.large;
      default:
        return content.thumbnail.medium;
    }
  };
  
  const handleClick = () => {
    navigate(`/watch/${content.id}`);
  };
  
  return (
    <div 
      className="content-card group cursor-pointer"
      onClick={handleClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video md:aspect-[16/9]">
        <img 
          src={getThumbnail()} 
          alt={content.title}
          className="w-full h-full object-cover rounded-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Fallback image
            target.src = "https://via.placeholder.com/300x169?text=No+Image";
          }}
        />
        <div className="overlay-gradient opacity-50 group-hover:opacity-80 transition-opacity" />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <h3 className="font-bold text-white text-sm md:text-base leading-tight mb-1">{content.title}</h3>
          <div className="flex items-center text-xs space-x-2">
            <span className="text-green-400 font-medium">{content.rating}/10</span>
            <span className="text-gray-300">{content.releaseYear}</span>
            {content.type === 'movie' ? (
              <span className="text-gray-300">{content.duration} min</span>
            ) : (
              <span className="text-gray-300">{content.seasons} {content.seasons === 1 ? 'Season' : 'Seasons'}</span>
            )}
          </div>
          
          <div className="flex space-x-2 mt-3">
            <Button size="sm" className="bg-white hover:bg-white/90 text-black" onClick={(e) => {
              e.stopPropagation();
              navigate(`/watch/${content.id}`);
            }}>
              <Play className="h-3 w-3 mr-1" /> Play
            </Button>
            <Button size="sm" variant="outline" className="bg-transparent border-white/40 hover:bg-white/20" onClick={(e) => {
              e.stopPropagation();
              navigate(`/details/${content.id}`);
            }}>
              <Info className="h-3 w-3 mr-1" /> Details
            </Button>
          </div>
        </div>
        
        {/* New badge */}
        {content.isNew && (
          <div className="absolute top-2 right-2 bg-streaming-500 text-white text-xs px-2 py-1 rounded">
            NEW
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
