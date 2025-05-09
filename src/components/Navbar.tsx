
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show navbar on auth pages
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-500/95 backdrop-blur-sm shadow-md' : 'bg-gradient-to-b from-dark-500/80 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-streaming-500 font-heading">PIXELFLIX</h1>
          </Link>
          
          {isAuthenticated && (
            <nav className="hidden md:flex ml-10 space-x-6">
              <Link to="/browse" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/series" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Series
              </Link>
              <Link to="/movies" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Movies
              </Link>
              <Link to="/new" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                New & Popular
              </Link>
            </nav>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <button className="text-gray-300 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              
              <div className="flex items-center">
                <div className="mr-2 hidden sm:block">
                  <p className="text-sm font-medium text-gray-300">Hi, {user?.name.split(' ')[0]}</p>
                </div>
                
                <div className="relative group">
                  <button className="w-8 h-8 rounded-full bg-streaming-500 text-white flex items-center justify-center">
                    {user?.name.charAt(0).toUpperCase()}
                  </button>
                  
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-dark-400 ring-1 ring-black ring-opacity-5 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <Link to="/account" className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-300 hover:text-white">
                      Account
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-dark-300 hover:text-white"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            location.pathname === '/' && (
              <Link to="/login">
                <Button className="bg-streaming-500 hover:bg-streaming-600 text-white">
                  Sign In
                </Button>
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
