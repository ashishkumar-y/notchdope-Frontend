import React, { useState } from 'react';

const StoryDownloader = () => {
  const [url, setUrl] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleDownload = async () => {
    setError('');
    setMediaUrl('');
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5001/download-story?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      if (data.success) {
        setMediaUrl(data.mediaUrl);
        setShowCompleted(true);
        setTimeout(() => setShowCompleted(false), 3000);
      } else {
        setError(data.error || 'Failed to fetch story.');
      }
    } catch (err) {
      setError('Server error. Check backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-5 bg-black text-white relative">
      
      {/* Ads banner */}
      <div className='border mt-0 w-[80%] mx-auto bg-green-700 mb-6 h-28 rounded-md'>its For Ads Banner</div>

      <h1 className='text-4xl sm:text-5xl text-center font-bold mb-6'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500'>
          Instagram Story Downloader
        </span>
      </h1>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste Instagram story link..."
          className="w-full sm:w-[400px] px-4 py-3 rounded text-black"
        />
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded font-semibold"
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Download'}
        </button>
      </div>

      {loading && (
        <div className="mt-5 flex justify-center">
          <div className="loader"><span></span></div>
        </div>
      )}

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {mediaUrl && (
        <div className="mt-6 text-center">
          <div className="relative w-[300px] mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_#ff00ff44] border border-[#ff00ff66] backdrop-blur-md">
            {mediaUrl.endsWith('.mp4') ? (
              <video src={mediaUrl} controls className="w-full rounded-xl" />
            ) : (
              <img src={mediaUrl} alt="Story" className="w-full rounded-xl" />
            )}
          </div>
          <a
            href={mediaUrl}
            download
            className="inline-block mt-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 hover:brightness-110 transition-all"
          >
            ⬇️ Click to Download
          </a>
        </div>
      )}

      {showCompleted && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 px-6 py-3 rounded text-white font-semibold shadow-lg z-50">
          ✅ Download completed!
        </div>
      )}

      {/* Loader animation styles */}
      <style>{`
        .loader {
          position: relative;
          width: 150px;
          height: 150px;
          background: transparent;
          border-radius: 50%;
          box-shadow: 25px 25px 75px rgba(0,0,0,0.55);
          border: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .loader::before {
          content: '';
          position: absolute;
          inset: 20px;
          background: transparent;
          border: 1px dashed #444;
          border-radius: 50%;
          box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),
                      inset 5px 5px 35px rgba(0,0,0,0.25);
        }

        .loader::after {
          content: '';
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px dashed #444;
          box-shadow: inset -5px -5px 25px rgba(0,0,0,0.25),
                      inset 5px 5px 35px rgba(0,0,0,0.25);
        }

        .loader span {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 100%;
          background: transparent;
          transform-origin: top left;
          animation: radar81 2s linear infinite;
          border-top: 1px dashed #fff;
        }

        .loader span::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #f472b6;
          transform-origin: top left;
          transform: rotate(-55deg);
          filter: blur(30px) drop-shadow(20px 20px 20px #ec4899);
        }

        @keyframes radar81 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default StoryDownloader;
