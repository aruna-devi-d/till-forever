import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

export default function ProposalPreview() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const futureMoments = [
    {
      image: "/home.png",
      caption: "Our cozy little world 🏡",
      pinEmoji: "📌",
      pinPos: "top-[-14px] left-[-14px]",
      rotation: "rotate-2",
    },
    {
      image: "/family.png",
      caption: "Little feet, big joy 👶",
      pinEmoji: "🎀",
      pinPos: "top-[-14px] right-[-14px]",
      rotation: "-rotate-3",
    },
    {
      image: "/adventure.png",
      caption: "Wanderers at heart 🌍",
      pinEmoji: "📎",
      pinPos: "top-[-14px] right-[-14px]",
      rotation: "rotate-1",
    },
    {
      image: "/fights.png",
      caption: "Even fights are cute with you 😂",
      pinEmoji: "✨",
      pinPos: "top-[-14px] right-[-14px]",
      rotation: "-rotate-2",
    },
    {
      image: "/couple.png",
      caption: "Forever and always ❤️",
      pinEmoji: "💌",
      pinPos: "top-[-14px] right-[-14px]",
      rotation: "rotate-1",
    },
  ];

  // Autoplay on first click
  useEffect(() => {
    const playOnClick = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.5;
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };
    window.addEventListener("click", playOnClick, { once: true });
    return () => {
      window.removeEventListener("click", playOnClick);
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 px-4 font-[Indie_Flower] flex flex-col overflow-hidden relative">
      {/* 🎵 Music */}
      <audio ref={audioRef} src="/perfect.mp3" loop preload="auto" />

      {/* Music Button */}
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 12L6 6V18Z"
              />
            </svg>
          )}
        </motion.div>
        🔊
      </button>

      {/* Title */}
      <div className="text-center pt-16 pb-8">
        <h2 className="text-5xl text-rose-700 font-bold">
          💍 Our Future Preview 💍
        </h2>
      </div>

      {/* Scrapbook-style Future Gallery */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-10 pb-10">
          {futureMoments.map((moment, index) => (
            <div
              key={index}
              className={`relative w-[240px] h-[300px] bg-white p-2 rounded-xl shadow-xl transition-transform duration-300 transform hover:scale-105 ${moment.rotation}`}
            >
              {/* Pin */}
              <div
                className={`absolute text-4xl ${moment.pinPos}`}
                style={{ transform: "rotate(-12deg)" }}
              >
                {moment.pinEmoji}
              </div>

              {/* Image */}
              <img
                src={moment.image}
                alt={moment.caption}
                className="w-full h-[220px] object-cover rounded-lg"
              />
              <p className="text-center mt-3 text-lg text-rose-600">
                {moment.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
