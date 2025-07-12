import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  // Extract YouTube video ID or playlist ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    
    // Handle YouTube playlist URLs
    const playlistMatch = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    if (playlistMatch) {
      return { type: 'playlist', id: playlistMatch[1] };
    }
    
    // Handle different YouTube video URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^#&?]*)/,
      /youtube\.com\/v\/([^#&?]*)/,
      /youtube\.com\/watch\?.*v=([^#&?]*)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1] && match[1].length === 11) {
        return { type: 'video', id: match[1] };
      }
    }
    
    return null;
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
    } else {
      setIsLoading(true);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const videoData = getYouTubeVideoId(videoUrl);
  const isPlaylist = videoData?.type === 'playlist';
  const videoId = videoData?.id;

  return (
    <div className="fixed inset-0 backdrop-blur-lg bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-3 sm:p-4 border-b border-gray-200">
          <h2 className="text-sm sm:text-lg font-semibold text-gray-800 truncate pr-4">
            {title || (isPlaylist ? 'Video Playlist' : 'Video Lecture')}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 flex-shrink-0"
            aria-label="Close modal"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
          {isLoading && videoId && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900">
              <div className="text-center text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p>Loading video...</p>
              </div>
            </div>
          )}
          {videoId ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={isPlaylist 
                ? `https://www.youtube.com/embed/videoseries?list=${videoId}&autoplay=1&rel=0&modestbranding=1`
                : `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3`
              }
              title={title || (isPlaylist ? 'Video Playlist' : 'Video Lecture')}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              onLoad={() => setIsLoading(false)}
            />
          ) : (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center text-gray-500">
                <div className="mb-4">
                  <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-lg font-medium">Invalid Video URL</p>
                <p className="text-sm">Please check the video link</p>
                {videoUrl && (
                  <p className="text-xs mt-2 text-gray-400 break-all">{videoUrl}</p>
                )}
              </div>
            </div>
          )}
        </div>
        {/* Modal Footer */}
        <div className="mb-5 sm:p-4 border-t border-gray-200 bg-gray-50 ">
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors border border-gray-300 rounded hover:bg-gray-100"
            >
              Close
            </button>
            {videoId && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dull transition-colors text-center"
              >
                Open in YouTube
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;