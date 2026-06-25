import React, { useState, useEffect, useCallback } from "react";
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";

import {
  Image as ImageIcon,
  Play,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const IMAGE_FOLDER_ID = process.env.REACT_APP_GOOGLE_IMAGE_FOLDER_ID;
const VIDEO_FOLDER_ID = process.env.REACT_APP_GOOGLE_VIDEO_FOLDER_ID;

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="w-full h-32 bg-gray-200" />
    <div className="p-4">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  </div>
);

const ComingSoon = () => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
    {/* Animated Circles Background */}
    <motion.div
      className="absolute w-[300px] h-[300px] bg-blue-300 rounded-full opacity-20 animate-ping"
      style={{ top: "10%", left: "5%" }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] bg-purple-300 rounded-full opacity-20 animate-pulse"
      style={{ bottom: "15%", right: "10%" }}
    />
    <motion.div
      className="absolute w-[200px] h-[200px] bg-pink-300 rounded-full opacity-30 animate-bounce"
      style={{ top: "40%", right: "20%" }}
    />

    {/* Main Content */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="relative z-10 flex flex-col items-center text-center px-4"
    >
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
      >
        Coming Soon 📽️
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
        className="text-lg md:text-xl font-medium text-gray-700 mb-8 max-w-xl"
      >
        We're building something extraordinary for you. Stay tuned and get ready to explore the future of innovation.
      </motion.p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </motion.div>
  </div>
);

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(true);
  const [activeTab, setActiveTab] = useState("images");
  const [currentIndex, setCurrentIndex] = useState(null);

  // Fetch Images
  const fetchImages = async () => {
    try {
      setLoadingImages(true);
      const res = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${IMAGE_FOLDER_ID}'+in+parents+and+mimeType contains 'image/'&key=${GOOGLE_API_KEY}&fields=files(id,name,mimeType,thumbnailLink,webContentLink)`
      );
      const data = await res.json();
      if (data.files) {
        setImages(
          data.files.map((file) => {
            // For HEIC or images that fail thumbnail generation, we can use the direct preview or 
            // construct a generic docs google com view link which handles HEIC in browser
            const previewPath = `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`;
            const fallbackLink = `https://drive.google.com/uc?export=view&id=${file.id}`;
            return {
              ...file,
              thumbnailLink: file.thumbnailLink ? file.thumbnailLink.replace(/=s\d+/, "=s1000") : previewPath,
              previewLink: file.webContentLink || fallbackLink,
              fallbackPreview: fallbackLink
            };
          })
        );
      }
    } catch (err) {
      console.error("Error fetching images:", err);
    } finally {
      setLoadingImages(false);
    }
  };

  // Fetch Videos
  const fetchVideos = async () => {
    try {
      setLoadingVideos(true);
      const res = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${VIDEO_FOLDER_ID}'+in+parents+and+mimeType contains 'video/'&key=${GOOGLE_API_KEY}&fields=files(id,name,mimeType)`
      );
      const data = await res.json();
      if (data.files) {
        setVideos(
          data.files.map((file) => ({
            ...file,
            previewLink: `https://drive.google.com/file/d/${file.id}/preview`,
          }))
        );
      }
    } catch (err) {
      console.error("Error fetching videos:", err);
    } finally {
      setLoadingVideos(false);
    }
  };

  useEffect(() => {
    fetchImages();
    fetchVideos();
  }, []);

  const displayData = activeTab === "images" ? images : videos;
  const isLoading = activeTab === "images" ? loadingImages : loadingVideos;

  // Modal navigation
  const openPreview = (i) => setCurrentIndex(i);
  const closePreview = () => setCurrentIndex(null);
  const next = () => setCurrentIndex((prev) => (prev + 1) % displayData.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + displayData.length) % displayData.length
    );

  const handleKeyDown = useCallback(
    (e) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") closePreview();
    },
    [currentIndex, displayData.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const showComingSoon = activeTab === "videos" && !loadingVideos && videos.length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4 sm:px-6 lg:px-12">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="bg-white shadow-md rounded-full flex gap-2 px-1 py-1 relative">
          {["images", "videos"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentIndex(null);
              }}
              className={`flex items-center gap-2 font-semibold transition-all px-4 py-2 rounded-full relative z-10 ${activeTab === tab ? "text-white" : "text-gray-600"
                }`}
            >
              {tab === "images" ? (
                <ImageIcon className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
          <motion.div
            layout
            className="absolute top-0.5 bottom-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-0"
            style={{
              left: activeTab === "images" ? "4px" : "calc(50% + 4px)",
              right: activeTab === "images" ? "calc(50% + 4px)" : "4px",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </div>
      </div>

      {/* Grid or Coming Soon */}
      {showComingSoon ? (
        <ComingSoon />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === "images" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === "images" ? 50 : -50 }}
            transition={{ duration: 0.4 }}
            className={`grid gap-6 
              ${activeTab === "images"
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
          >
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
              : displayData.map((file, i) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer"
                  onClick={() => openPreview(i)}
                >
                  {activeTab === "images" ? (
                    <img
                      src={file.thumbnailLink}
                      alt={file.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative group w-full h-64">
                      <iframe
                        src={file.previewLink}
                        className="w-full h-full object-cover rounded-2xl"
                        allow="autoplay"
                        allowFullScreen
                        title={file.name}
                      ></iframe>
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition rounded-2xl">
                        <Play size={48} />
                      </div>
                    </div>
                  )}
                  {/* <div className="p-2">
                      <h3 className="font-semibold text-gray-800 text-center truncate">
                        {file.name}
                      </h3>
                    </div> */}
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Modal */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closePreview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-transparent max-w-6xl w-full flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
              >
                <X size={24} />
              </button>

              {/* Preview */}
              {activeTab === "images" ? (
                <img
                  src={displayData[currentIndex].thumbnailLink}
                  alt={displayData[currentIndex].name}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
                />
              ) : (
                <iframe
                  src={displayData[currentIndex].previewLink}
                  className="w-full max-h-[80vh] aspect-video rounded-xl shadow-xl"
                  allow="autoplay"
                  allowFullScreen
                  title={displayData[currentIndex].name}
                ></iframe>
              )}

              {/* Navigation Buttons */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
              >
                <ChevronRight size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;





// import React, { useState, useEffect, useCallback, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Image as ImageIcon,
//   Play,
//   ChevronLeft,
//   ChevronRight,
//   X,
// } from "lucide-react";

// const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// const IMAGE_FOLDER_ID = process.env.REACT_APP_GOOGLE_IMAGE_FOLDER_ID;
// const VIDEO_FOLDER_ID = process.env.REACT_APP_GOOGLE_VIDEO_FOLDER_ID;

// const SkeletonCard = () => (
//   <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
//     <div className="w-full h-32 bg-gray-200" />
//     <div className="p-4">
//       <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
//       <div className="h-4 bg-gray-200 rounded w-1/2" />
//     </div>
//   </div>
// );

// const Gallery = () => {
//   const [images, setImages] = useState([]);
//   const [videos, setVideos] = useState([]);
//   const [loadingImages, setLoadingImages] = useState(true);
//   const [loadingVideos, setLoadingVideos] = useState(true);
//   const [activeTab, setActiveTab] = useState("images");
//   const [currentIndex, setCurrentIndex] = useState(null);

//   // Fetch Images
//   const fetchImages = async () => {
//     try {
//       setLoadingImages(true);
//       const res = await fetch(
//         `https://www.googleapis.com/drive/v3/files?q='${IMAGE_FOLDER_ID}'+in+parents+and+mimeType contains 'image/'&key=${GOOGLE_API_KEY}&fields=files(id,name,mimeType)`
//       );
//       const data = await res.json();
//       if (data.files) {
//         setImages(
//           data.files.map((file) => ({
//             ...file,
//             thumbnailLink: `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`,
//             previewLink: `https://drive.google.com/uc?export=view&id=${file.id}`,
//           }))
//         );
//       }
//     } catch (err) {
//       console.error("Error fetching images:", err);
//     } finally {
//       setLoadingImages(false);
//     }
//   };

//   // Fetch Videos
//   const fetchVideos = async () => {
//     try {
//       setLoadingVideos(true);
//       const res = await fetch(
//         `https://www.googleapis.com/drive/v3/files?q='${VIDEO_FOLDER_ID}'+in+parents+and+mimeType contains 'video/'&key=${GOOGLE_API_KEY}&fields=files(id,name,mimeType)`
//       );
//       const data = await res.json();
//       if (data.files) {
//         setVideos(
//           data.files.map((file) => ({
//             ...file,
//             previewLink: `https://drive.google.com/uc?export=download&id=${file.id}`,
//           }))
//         );
//       }
//     } catch (err) {
//       console.error("Error fetching videos:", err);
//     } finally {
//       setLoadingVideos(false);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//     fetchVideos();
//   }, []);

//   const displayData = activeTab === "images" ? images : videos;
//   const isLoading = activeTab === "images" ? loadingImages : loadingVideos;

//   // Modal navigation
//   const openPreview = (i) => setCurrentIndex(i);
//   const closePreview = () => setCurrentIndex(null);
//   const next = () => setCurrentIndex((prev) => (prev + 1) % displayData.length);
//   const prev = () =>
//     setCurrentIndex(
//       (prev) => (prev - 1 + displayData.length) % displayData.length
//     );

//   const handleKeyDown = useCallback(
//     (e) => {
//       if (currentIndex === null) return;
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "Escape") closePreview();
//     },
//     [currentIndex, displayData.length]
//   );

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [handleKeyDown]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4 sm:px-6 lg:px-12">
//       {/* Tabs */}
//       <div className="flex justify-center mb-6">
//         <div className="bg-white shadow-md rounded-full flex gap-2 px-1 py-1 relative">
//           {["images", "videos"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => {
//                 setActiveTab(tab);
//                 setCurrentIndex(null);
//               }}
//               className={`flex items-center gap-2 font-semibold transition-all px-4 py-2 rounded-full relative z-10 ${
//                 activeTab === tab ? "text-white" : "text-gray-600"
//               }`}
//             >
//               {tab === "images" ? (
//                 <ImageIcon className="w-4 h-4" />
//               ) : (
//                 <Play className="w-4 h-4" />
//               )}
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//           <motion.div
//             layout
//             className="absolute top-0.5 bottom-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-0"
//             style={{
//               left: activeTab === "images" ? "4px" : "calc(50% + 4px)",
//               right: activeTab === "images" ? "calc(50% + 4px)" : "4px",
//             }}
//             transition={{ type: "spring", stiffness: 300, damping: 25 }}
//           />
//         </div>
//       </div>

//       {/* Grid */}
//       <AnimatePresence mode="wait">
// <motion.div
//   key={activeTab}
//   initial={{ opacity: 0, x: activeTab === "images" ? -50 : 50 }}
//   animate={{ opacity: 1, x: 0 }}
//   exit={{ opacity: 0, x: activeTab === "images" ? 50 : -50 }}
//   transition={{ duration: 0.4 }}
//   className={`grid gap-6
//     ${activeTab === "images"
//       ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
//       : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//     }`}
// >
//   {isLoading
//     ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
//     : displayData.map((file, i) => (
//         <motion.div
//           key={file.id}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: i * 0.05 }}
//           className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer"
//           onClick={() => openPreview(i)}
//         >
//           {activeTab === "images" ? (
//             <img
//               src={file.thumbnailLink}
//               alt={file.name}
//               className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
//             />
//           ) : (
//             <div className="relative group w-full h-64">
//               <iframe
//                 src={`https://drive.google.com/file/d/${file.id}/preview`}
//                 className="w-full h-full object-cover rounded-2xl"
//                 allow="autoplay"
//                 allowFullScreen
//                 title={file.name}
//               ></iframe>
//               <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition rounded-2xl">
//                 <Play size={48} />
//               </div>
//             </div>
//           )}
//           <div className="p-2">
//             <h3 className="font-semibold text-gray-800 text-center truncate">
//               {file.name}
//             </h3>
//           </div>
//         </motion.div>
//       ))}
// </motion.div>

//       </AnimatePresence>

//       {/* Modal */}
//       <AnimatePresence>
//         {currentIndex !== null && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
//             onClick={closePreview}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="relative bg-transparent max-w-6xl w-full flex justify-center items-center"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={closePreview}
//                 className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
//               >
//                 <X size={24} />
//               </button>

//               {/* Preview */}
//               {activeTab === "images" ? (
//                 <img
//                   src={displayData[currentIndex].thumbnailLink}
//                   alt={displayData[currentIndex].name}
//                   className="w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
//                 />
//               ) : (
//                 <iframe
//                   src={`https://drive.google.com/file/d/${displayData[currentIndex].id}/preview`}
//                   className="w-full max-h-[80vh] aspect-video rounded-xl shadow-xl"
//                   allow="autoplay"
//                   allowFullScreen
//                   title={displayData[currentIndex].name}
//                 ></iframe>
//               )}

//               {/* Navigation Buttons */}
//               <button
//                 onClick={prev}
//                 className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
//               >
//                 <ChevronLeft size={28} />
//               </button>
//               <button
//                 onClick={next}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
//               >
//                 <ChevronRight size={28} />
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Gallery;
