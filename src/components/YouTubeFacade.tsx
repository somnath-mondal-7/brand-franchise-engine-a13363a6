import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  customThumbnail?: string;
}

const YouTubeFacade = ({ videoId, title, customThumbnail }: YouTubeFacadeProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        {!isPlaying ? (
          <button
            onClick={handlePlay}
            className="relative w-full h-full group cursor-pointer"
            aria-label={`Play video: ${title}`}
          >
            {/* Thumbnail - custom or YouTube default */}
            <img
              src={customThumbnail || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`${title} video thumbnail`}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover"
              width="1280"
              height="720"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-10 h-10 text-white ml-1" fill="white" />
              </div>
            </div>
          </button>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            width="800"
            height="450"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        See how we've helped 5000+ franchise businesses generate qualified leads
      </p>
    </div>
  );
};

export default YouTubeFacade;
