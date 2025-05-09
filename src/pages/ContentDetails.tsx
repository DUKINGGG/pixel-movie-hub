
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ContentItem, getContentById } from '@/data/content';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Play, Plus, ThumbsUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const ContentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<ContentItem | undefined>(undefined);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (id) {
      const foundContent = getContentById(id);
      if (foundContent) {
        setContent(foundContent);
      } else {
        navigate('/not-found');
      }
    }
  }, [id, isAuthenticated, navigate]);

  if (!content) {
    return (
      <div className="min-h-screen bg-dark-500 flex items-center justify-center">
        <div className="animate-pulse-slow w-12 h-12 rounded-full border-4 border-t-transparent border-streaming-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-500">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] min-h-[500px]">
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
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 font-heading">{content.title}</h1>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
              <span className="text-green-400 font-semibold">{content.rating}/10</span>
              <span className="text-gray-300">{content.releaseYear}</span>
              
              {content.type === 'movie' ? (
                <span className="text-gray-300">{content.duration} min</span>
              ) : (
                <span className="text-gray-300">{content.seasons} {content.seasons === 1 ? 'Season' : 'Seasons'}</span>
              )}
              
              <div className="flex flex-wrap gap-2">
                {content.genre.map((genre, index) => (
                  <span key={index} className="px-2 py-1 rounded bg-dark-400/50 text-xs text-gray-300">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-gray-300 text-sm md:text-base mb-6">
              {content.description}
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Link to={`/watch/${content.id}`}>
                <Button className="bg-streaming-500 hover:bg-streaming-600">
                  <Play className="h-4 w-4 mr-2" /> Play
                </Button>
              </Link>
              
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                <Plus className="h-4 w-4 mr-2" /> My List
              </Button>
              
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                <ThumbsUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Details Section */}
      <div className="container mx-auto px-4 py-8">
        {content.type === 'series' && content.episodes && content.episodes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-4">Episodes</h2>
            
            <div className="space-y-4">
              {content.episodes.map((episode) => (
                <div 
                  key={episode.id} 
                  className="flex flex-col md:flex-row bg-dark-400 rounded-md overflow-hidden"
                  onClick={() => navigate(`/watch/${content.id}/${episode.id}`)}
                >
                  <div className="md:w-64 h-40">
                    <img 
                      src={episode.thumbnail} 
                      alt={episode.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/300x169?text=No+Image";
                      }}
                    />
                  </div>
                  
                  <div className="p-4 flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium text-lg">{episode.title}</h3>
                      <span className="text-gray-400 text-sm">{episode.duration} min</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-2">
                      S{episode.seasonNumber} E{episode.episodeNumber}
                    </p>
                    
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {episode.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Additional info can be added here */}
      </div>
    </div>
  );
};

export default ContentDetails;
