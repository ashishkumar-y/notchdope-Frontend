import React, { useState } from 'react';
import axios from 'axios';

const Download = () => {
  const [link, setLink] = useState('');
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHoldOn, setShowHoldOn] = useState(false);
  const [currentQuality, setCurrentQuality] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);

  const getVideoDetails = async (e) => {
    e.preventDefault();
    setVideoInfo(null);
    setLoading(true);
    try {
      const encodedURL = encodeURIComponent(link);
      const { data } = await axios.get(`http://localhost:6900/api/get-video-info/${encodedURL}`);
      setVideoInfo(data);
    } catch (error) {
      alert("Failed to fetch video info.");
    }
    setLoading(false);
  };

  const downloadVideo = (quality) => {
    setCurrentQuality(quality);
    setShowHoldOn(true);

    const encodedURL = encodeURIComponent(link);
    const downloadURL = `http://localhost:6900/api/download/${encodedURL}/${quality}`;

    setTimeout(() => {
      window.location.href = downloadURL;

      setTimeout(() => {
        setShowHoldOn(false);
        setShowCompleted(true);
        setTimeout(() => setShowCompleted(false), 3000);
      }, 9000);
    }, 1000);
  };

  return (
    <div className='min-h-screen p-5 bg-black text-white relative'>

{/* //Ads  */}
<div className='border mt-0 w-[80%] mx-auto bg-green-700 mb-6 h-28  rounded-md'>its For Ads BAnner</div>

      <h1 className='text-4xl sm:text-5xl text-center font-bold'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500'>
          YouTube HD Downloader
        </span>
      </h1>

      <form onSubmit={getVideoDetails} className="mt-5 flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter YouTube link"
          className="w-full sm:w-[400px] px-4 py-3 rounded text-black"
        />
        <button type="submit" className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded font-semibold">
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && (
        <div className="mt-5 flex justify-center">
          <div className="loader"><span></span></div>
        </div>
      )}

      {!loading && videoInfo?.title && (
        <div className="mt-6 text-center z-10">
          <h2 className='text-2xl font-bold mb-4 text-white/90'>{videoInfo.title}</h2>

          <div className="relative w-[300px] mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_#00f0ff44] border border-[#00f0ff66] backdrop-blur-md">
            <img
              src={videoInfo.thumbnail}
              alt="video thumbnail"
              className="w-full object-cover saturate-[0.6]"
            />
          </div>

          <div className="flex justify-center flex-wrap gap-4 mt-8">
            {[2160, 1440, 1080, 720, 480, 360].map((q) => (
              <button
                key={q}
                onClick={() => downloadVideo(q)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg text-white font-semibold shadow hover:scale-105 hover:brightness-110 transition-all"
              >
                Download {q}p
              </button>
            ))}
          </div>

          {showCompleted && (
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 px-6 py-3 rounded text-white font-semibold shadow-lg z-50">
              ✅ Download completed!
            </div>
          )}
        </div>
      )}

      {showHoldOn && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center items-center z-50">
          <div className="relative w-72 h-40 rounded overflow-hidden shadow-xl">
            <img
              src={videoInfo?.thumbnail}
              alt="thumbnail"
              className="w-full h-full object-cover saturate-0 mix-blend-screen"
            />
            <div className="absolute top-0 left-[-30%] w-[30%] h-full scanning-bar"></div>
          </div>
          <h2 className="text-xl font-semibold mt-5 text-white animate-pulse">
            Wait on... Downloading {currentQuality}p
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
            rgba(0,255,255,0.3),
            rgba(0,255,255,0.8),
            #00f0ff 90%,
            rgba(0,0,0,0) 100%
          );
          filter: blur(2px);
          animation: scanMove 2s infinite linear;
          z-index: 2;
          pointer-events: none;
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
          background: #a855f7;
          transform-origin: top left;
          transform: rotate(-55deg);
          filter: blur(30px) drop-shadow(20px 20px 20px #9333ea);
        }

        @keyframes radar81 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Download;
