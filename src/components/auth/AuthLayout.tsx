
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  footer?: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, footer }) => {
  const { loading } = useAuth();

  return (
    <div className="relative min-h-screen flex flex-col bg-dark-500">
      {/* Background image with overlay */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/images/auth-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/1920x1080?text=Movie+Background";
          }}
        />
        <div className="absolute inset-0 bg-dark-500/70" />
      </div>

      {/* Header */}
      <header className="py-6 px-4 md:px-8">
        <div className="container mx-auto">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-bold text-streaming-500 font-heading">PIXELFLIX</h1>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md bg-dark-400/80 backdrop-blur-sm p-8 rounded-md shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
          
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-pulse-slow w-8 h-8 rounded-full border-2 border-t-transparent border-streaming-500 animate-spin" />
            </div>
          ) : children}
          
          {footer && <div className="mt-6">{footer}</div>}
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
