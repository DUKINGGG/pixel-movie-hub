
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentRow from '@/components/ContentRow';
import Navbar from '@/components/Navbar';
import { getSeries } from '@/data/content';
import { useAuth } from '@/contexts/AuthContext';

const Series = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const series = getSeries();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Group series by genre
  const groupedByGenre: Record<string, any[]> = {};
  
  series.forEach(show => {
    show.genre.forEach(genre => {
      if (!groupedByGenre[genre]) {
        groupedByGenre[genre] = [];
      }
      if (!groupedByGenre[genre].includes(show)) {
        groupedByGenre[genre].push(show);
      }
    });
  });

  return (
    <div className="min-h-screen bg-dark-500">
      <Navbar />
      
      <div className="pt-24 pb-12"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8">TV Series</h1>
          
          {/* All Series */}
          <ContentRow 
            title="All Series" 
            items={series} 
          />
          
          {/* Series by Genre */}
          {Object.entries(groupedByGenre).map(([genre, genreSeries]) => (
            <ContentRow 
              key={genre}
              title={genre} 
              items={genreSeries} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
