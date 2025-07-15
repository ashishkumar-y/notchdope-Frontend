// import React, { useState } from 'react';
// import InstaDownloader from './InstaDownloader';
// import StoryDownloader from './StoryDownloader';

// const InstaToolPage = () => {
//   const [activeTab, setActiveTab] = useState('video'); // or 'story'

//   return (
//     <div className="min-h-screen bg-black text-white p-5">
//       <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
//         Instagram Media Downloader
//       </h1>

//       {/* 🔀 Tab Buttons */}
//       <div className="flex justify-center gap-4 mb-10">
//         <button
//           onClick={() => setActiveTab('video')}
//           className={`px-6 py-2 rounded ${
//             activeTab === 'video'
//               ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
//               : 'bg-gray-800 text-gray-400'
//           }`}
//         >
//           📹 Reels / Video / Post
//         </button>
//         <button
//           onClick={() => setActiveTab('story')}
//           className={`px-6 py-2 rounded ${
//             activeTab === 'story'
//               ? 'bg-gradient-to-r from-yellow-500 to-pink-500 text-white'
//               : 'bg-gray-800 text-gray-400'
//           }`}
//         >
//           📖 Story / Highlights
//         </button>
//       </div>

//       {/* 🧠 Render Selected Tab */}
//       {activeTab === 'video' && <InstaDownloader />}
//       {activeTab === 'story' && <StoryDownloader />}
//     </div>
//   );
// };

// export default InstaToolPage;



import React, { useState } from 'react';
import InstaDownloader from './InstaDownloader';
import StoryDownloader from './StoryDownloader';
import YouTubeDownloader from '../Download/Download'; // ✅ added

const InstaToolPage = () => {
  const [activeTab, setActiveTab] = useState('video'); // video | story | youtube

  return (
    <div className="min-h-screen bg-black text-white p-5">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
        Media Downloader Toolkit
      </h1>

      {/* 🔀 Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab('video')}
          className={`px-6 py-2 rounded ${
            activeTab === 'video'
              ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          📹 Instagram Reels / Post
        </button>

        <button
          onClick={() => setActiveTab('story')}
          className={`px-6 py-2 rounded ${
            activeTab === 'story'
              ? 'bg-gradient-to-r from-yellow-500 to-pink-500 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          📖 Insta Stories / Highlights
        </button>

        <button
          onClick={() => setActiveTab('youtube')}
          className={`px-6 py-2 rounded ${
            activeTab === 'youtube'
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          ▶️ YouTube Video
        </button>
      </div>

      {/* 🧠 Render Selected Tab */}
      {activeTab === 'video' && <InstaDownloader />}
      {activeTab === 'story' && <StoryDownloader />}
      {activeTab === 'youtube' && <YouTubeDownloader />} {/* ✅ now added */}
    </div>
  );
};

export default InstaToolPage;
