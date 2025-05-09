
export interface ContentThumbnail {
  small: string;
  medium: string;
  large: string;
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'movie' | 'series';
  genre: string[];
  releaseYear: number;
  rating: number;
  duration?: number; // minutes (for movies)
  seasons?: number; // for series
  episodes?: ContentEpisode[]; // for series
  thumbnail: ContentThumbnail;
  videoUrl: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isTrending?: boolean;
}

export interface ContentEpisode {
  id: string;
  title: string;
  description: string;
  seasonNumber: number;
  episodeNumber: number;
  duration: number; // minutes
  thumbnail: string;
  videoUrl: string;
}

// Mock content data
export const contentLibrary: ContentItem[] = [
  {
    id: "squid-game",
    title: "Squid Game",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    type: "series",
    genre: ["Thriller", "Drama", "Action"],
    releaseYear: 2021,
    rating: 8.7,
    seasons: 1,
    episodes: [
      {
        id: "squid-game-s01e01",
        title: "Red Light, Green Light",
        description: "Hoping to win easy money, a desperate Gi-hun agrees to participate in an enigmatic game. Not long into the first round, unforeseen horrors unfold.",
        seasonNumber: 1,
        episodeNumber: 1,
        duration: 60,
        thumbnail: "/images/squid-game-ep1.jpg",
        videoUrl: "/videos/squid-game-trailer.mp4" 
      },
      {
        id: "squid-game-s01e02",
        title: "Hell",
        description: "Split on whether to continue or withdraw, the group holds a vote. But their realities in the outside world may prove to be just as unforgiving.",
        seasonNumber: 1,
        episodeNumber: 2,
        duration: 58,
        thumbnail: "/images/squid-game-ep2.jpg",
        videoUrl: "/videos/squid-game-trailer.mp4"
      }
    ],
    thumbnail: {
      small: "/images/squid-game-sm.jpg",
      medium: "/images/squid-game-md.jpg",
      large: "/images/squid-game-lg.jpg"
    },
    videoUrl: "/videos/squid-game-trailer.mp4",
    isFeatured: true,
    isNew: false,
    isTrending: true
  },
  {
    id: "stranger-things",
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    type: "series",
    genre: ["Sci-Fi", "Horror", "Drama"],
    releaseYear: 2016,
    rating: 8.7,
    seasons: 4,
    thumbnail: {
      small: "/images/stranger-things-sm.jpg",
      medium: "/images/stranger-things-md.jpg",
      large: "/images/stranger-things-lg.jpg"
    },
    videoUrl: "/videos/stranger-things-trailer.mp4",
    isFeatured: true,
    isNew: false,
    isTrending: true
  },
  {
    id: "wednesday",
    title: "Wednesday",
    description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    type: "series",
    genre: ["Comedy", "Fantasy", "Mystery"],
    releaseYear: 2022,
    rating: 8.2,
    seasons: 1,
    thumbnail: {
      small: "/images/wednesday-sm.jpg",
      medium: "/images/wednesday-md.jpg",
      large: "/images/wednesday-lg.jpg"
    },
    videoUrl: "/videos/wednesday-trailer.mp4",
    isFeatured: false,
    isNew: true
  },
  {
    id: "dune",
    title: "Dune",
    description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    type: "movie",
    genre: ["Sci-Fi", "Adventure"],
    releaseYear: 2021,
    rating: 8.0,
    duration: 155,
    thumbnail: {
      small: "/images/dune-sm.jpg",
      medium: "/images/dune-md.jpg",
      large: "/images/dune-lg.jpg"
    },
    videoUrl: "/videos/dune-trailer.mp4",
    isFeatured: true,
    isNew: false
  },
  {
    id: "interstellar",
    title: "Interstellar",
    description: "When Earth becomes uninhabitable, a farmer and ex-NASA pilot embark on a mission to find a new home for humanity.",
    type: "movie",
    genre: ["Sci-Fi", "Drama", "Adventure"],
    releaseYear: 2014,
    rating: 8.6,
    duration: 169,
    thumbnail: {
      small: "/images/interstellar-sm.jpg",
      medium: "/images/interstellar-md.jpg",
      large: "/images/interstellar-lg.jpg"
    },
    videoUrl: "/videos/interstellar-trailer.mp4",
    isFeatured: false,
    isNew: false,
    isTrending: true
  },
  {
    id: "the-witcher",
    title: "The Witcher",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    type: "series",
    genre: ["Fantasy", "Adventure", "Drama"],
    releaseYear: 2019,
    rating: 8.2,
    seasons: 3,
    thumbnail: {
      small: "/images/witcher-sm.jpg",
      medium: "/images/witcher-md.jpg",
      large: "/images/witcher-lg.jpg"
    },
    videoUrl: "/videos/witcher-trailer.mp4",
    isFeatured: false,
    isNew: false,
    isTrending: true
  },
  {
    id: "inception",
    title: "Inception",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    type: "movie",
    genre: ["Sci-Fi", "Action", "Thriller"],
    releaseYear: 2010,
    rating: 8.8,
    duration: 148,
    thumbnail: {
      small: "/images/inception-sm.jpg",
      medium: "/images/inception-md.jpg",
      large: "/images/inception-lg.jpg"
    },
    videoUrl: "/videos/inception-trailer.mp4",
    isFeatured: false,
    isNew: false
  },
  {
    id: "dark",
    title: "Dark",
    description: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    type: "series",
    genre: ["Sci-Fi", "Thriller", "Mystery"],
    releaseYear: 2017,
    rating: 8.7,
    seasons: 3,
    thumbnail: {
      small: "/images/dark-sm.jpg",
      medium: "/images/dark-md.jpg",
      large: "/images/dark-lg.jpg"
    },
    videoUrl: "/videos/dark-trailer.mp4",
    isFeatured: false,
    isNew: false
  }
];

// Filter functions
export const getFeaturedContent = () => contentLibrary.filter(item => item.isFeatured);
export const getNewContent = () => contentLibrary.filter(item => item.isNew);
export const getTrendingContent = () => contentLibrary.filter(item => item.isTrending);
export const getMovies = () => contentLibrary.filter(item => item.type === 'movie');
export const getSeries = () => contentLibrary.filter(item => item.type === 'series');
export const getContentById = (id: string) => contentLibrary.find(item => item.id === id);
