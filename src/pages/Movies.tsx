
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentRow from '@/components/ContentRow';
import Navbar from '@/components/Navbar';
import { getMovies } from '@/data/content';
import { useAuth } from '@/contexts/AuthContext';

const Movies = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const movies = getMovies();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // Group movies by genre
  const groupedByGenre: Record<string, any[]> = {};
  
  movies.forEach(movie => {
    movie.genre.forEach(genre => {
      if (!groupedByGenre[genre]) {
        groupedByGenre[genre] = [];
      }
      if (!groupedByGenre[genre].includes(movie)) {
        groupedByGenre[genre].push(movie);
      }
    });
  });

  return (
    <div className="min-h-screen bg-dark-500">
      <Navbar />
      
      <div className="pt-24 pb-12"> {/* Add padding for fixed navbar */}
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-8">Movies</h1>
          
          {/* All Movies */}
          <ContentRow 
            title="All Movies" 
            items={movies} 
          />
          
          {/* Movies by Genre */}
          {Object.entries(groupedByGenre).map(([genre, genreMovies]) => (
            <ContentRow 
              key={genre}
              title={genre} 
              items={genreMovies} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
