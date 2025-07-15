import React, { useState } from 'react';
import axios from 'axios';

const InstaDownloader = () => {
  const [link, setLink] = useState('');
  const [mediaInfo, setMediaInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHoldOn, setShowHoldOn] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  // const backendApi = 'http://localhost:6900';
    const backendApi = "https://notchdope-backend.up.railway.app";

  const getMedia = async (e) => {
    e.preventDefault();
    setMediaInfo(null);
    setLoading(true);
    try {
      const encodedURL = encodeURIComponent(link);
      const { data } = await axios.get(`${backendApi}/api/instagram/download?url=${encodedURL}`);


      if (data.success) {
        setMediaInfo({
          download: data.mediaUrl,
          is_video: data.is_video,
          thumbnail: data.thumbnail || '', // fallback
        });
      } else {
      alert('Failed to fetch media');
    }
  } catch (error) {
    alert('Server Error');
  }
  setLoading(false);
};

const download = () => {
  if (!mediaInfo?.download) return;
  setShowHoldOn(true);
  setTimeout(() => {
    window.location.href = mediaInfo.download;
    setTimeout(() => {
      setShowHoldOn(false);
      setShowCompleted(true);
      setTimeout(() => setShowCompleted(false), 3000);
    }, 5000);
  }, 1000);
};

return (
  <div className='min-h-screen p-5 bg-black text-white relative'>
    <div className='border mt-0 w-[80%] mx-auto bg-green-700 mb-6 h-28 rounded-md'>its For Ads Banner</div>

    <h1 className='text-4xl sm:text-5xl text-center font-bold'>
      <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500'>
        Instagram Downloader
      </span>
    </h1>

    <form onSubmit={getMedia} className="mt-5 flex flex-col sm:flex-row gap-4 justify-center">
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Paste Instagram reel/post link here..."
        className="w-full sm:w-[400px] px-4 py-3 rounded text-black"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded font-semibold hover:brightness-110"
      >
        {loading ? 'Fetching...' : 'Download'}
      </button>
    </form>

    {loading && (
      <div className="mt-6 flex justify-center">
        <div className="loader"><span></span></div>
      </div>
    )}

    {!loading && mediaInfo?.download && (
      <div className="mt-10 text-center">
        <div className="relative w-[300px] mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_#ff00ff33] border border-[#ff00ff66] backdrop-blur-md">
          {mediaInfo.is_video ? (
            <video src={mediaInfo.download} controls className="w-full object-cover rounded" />
          ) : (
            <img src={mediaInfo.download} alt="media" className="w-full object-cover rounded border border-green-600" />
          )}
        </div>

        <button
          onClick={download}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded font-semibold hover:scale-105 transition"
        >
          ⬇️ Download Now
        </button>
      </div>
    )}

    {showCompleted && (
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 px-6 py-3 rounded text-white font-semibold shadow-lg z-50">
        ✅ Download completed!
      </div>
    )}

    {showHoldOn && (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center items-center z-50">
        <div className="relative w-72 h-[500px] rounded overflow-hidden shadow-xl">
          {mediaInfo?.is_video ? (
            <video
              src={mediaInfo.download}
              className="w-full h-full object-cover saturate-0 mix-blend-screen"
              autoPlay
              muted
              loop
            />
          ) : (
            <img
              src={mediaInfo.download}
              className="w-full h-full object-cover saturate-0 mix-blend-screen"
              alt="preview"
            />
          )}
          <div className="absolute top-0 left-[-30%] w-[30%] h-full scanning-bar"></div>
        </div>
        <h2 className="text-xl font-semibold mt-5 text-white animate-pulse">
          Please wait... Preparing download
        </h2>
      </div>
    )}

    <style>{`
        .scanning-bar {
          position: absolute;
          top: 0;
          left: -15%;
          width: 20%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0) 0%,
            rgba(255,0,255,0.3),
            rgba(255,0,255,0.8),
            #ff00ff 90%,
            rgba(0,0,0,0) 100%
          );
          filter: blur(2px);
          animation: scanMove 2s infinite linear;
          z-index: 2;
        }

        @keyframes scanMove {
          0% { left: -15%; }
          100% { left: 100%; }
        }

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
          animation: rotate 2s linear infinite;
          border-top: 1px dashed #fff;
        }

        .loader span::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: #e879f9;
          transform: rotate(-55deg);
          filter: blur(30px);
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
  </div>
);
};

export default InstaDownloader;
