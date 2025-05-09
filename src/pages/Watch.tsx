
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContentItem, ContentEpisode, getContentById } from '@/data/content';
import VideoPlayer from '@/components/VideoPlayer';
import { useAuth } from '@/contexts/AuthContext';

const Watch = () => {
  const { contentId, episodeId } = useParams<{ contentId: string, episodeId?: string }>();
  const [content, setContent] = useState<ContentItem | undefined>(undefined);
  const [episode, setEpisode] = useState<ContentEpisode | undefined>(undefined);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (contentId) {
      const foundContent = getContentById(contentId);
      
      if (foundContent) {
        setContent(foundContent);
        
        if (episodeId && foundContent.episodes) {
          const foundEpisode = foundContent.episodes.find(ep => ep.id === episodeId);
          if (foundEpisode) {
            setEpisode(foundEpisode);
          } else {
            // If episode not found but content has episodes, use first episode
            setEpisode(foundContent.episodes[0]);
          }
        }
      } else {
        navigate('/not-found');
      }
    }
  }, [contentId, episodeId, isAuthenticated, navigate]);

  if (!content) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse-slow w-12 h-12 rounded-full border-4 border-t-transparent border-streaming-500 animate-spin" />
      </div>
    );
  }

  const videoSource = episode ? episode.videoUrl : content.videoUrl;
  const videoTitle = episode ? `${content.title}: ${episode.title}` : content.title;

  return (
    <div className="h-screen bg-black">
      <div className="h-full w-full">
        <VideoPlayer 
          src={videoSource} 
          title={videoTitle} 
        />
      </div>
    </div>
  );
};

export default Watch;
