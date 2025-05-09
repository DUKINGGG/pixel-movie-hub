
import React from 'react';
import { Link } from 'react-router-dom';
import ContentCard from './ContentCard';
import { ContentItem } from '@/data/content';
import { ChevronRight } from 'lucide-react';

interface ContentRowProps {
  title: string;
  items: ContentItem[];
  seeAllLink?: string;
}

const ContentRow: React.FC<ContentRowProps> = ({ title, items, seeAllLink }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="py-4 md:py-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
        
        {seeAllLink && (
          <Link 
            to={seeAllLink} 
            className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
          >
            See all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {items.slice(0, 5).map((item) => (
          <ContentCard key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
};

export default ContentRow;
