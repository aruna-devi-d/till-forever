import { useEffect, useRef } from "react";
export default function PhotoGallery() {
  const audioRef = useRef(null);

  const photos = [
    {
      url: "/pic.jpg",
      caption: "Just us. Just perfect 💕",
      rotation: "rotate-2",
      pinEmoji: "📌",
      pinPos: "top-[-14px] left-[-14px]",
    },
    {
      url: "/pic2.jpg",
      caption: "Caught you looking cute 💞",
      rotation: "-rotate-3",
      pinEmoji: "📎",
      pinPos: "top-[-14px] right-[-14px]",
    },
    {
      url: "/pic3.jpg",
      caption: "Forever my favorite person 💖",
      rotation: "rotate-1",
      pinEmoji: "🎀",
      pinPos: "top-[-14px] right-[-14px]",
    },
  ];

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(() => {});
      }
    };
    window.addEventListener("click", playMusic, { once: true });
    return () => window.removeEventListener("click", playMusic);
  }, []);

  return (
    <div className="h-screen bg-pink-100 px-4 font-[Indie_Flower] flex flex-col overflow-hidden">
      {/* Title positioned above but not at very top */}
      <div className="text-center pt-16 pb-8">
        <h2 className="text-5xl text-rose-700 font-bold">
          Our Precious Moments 📸
        </h2>
      </div>

      {/* Photo gallery perfectly centered in remaining space */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-10 pb-8">
          <audio ref={audioRef} loop>
            <source src="/perfect.mp3" type="audio/mpeg" />
          </audio>

          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative w-[240px] h-[300px] bg-white p-2 rounded-xl shadow-xl transition-transform duration-300 transform hover:scale-105 ${photo.rotation}`}
            >
              {/* Pushpin */}
              <div
                className={`absolute text-4xl ${photo.pinPos}`}
                style={{ transform: "rotate(-12deg)" }}
              >
                {photo.pinEmoji}
              </div>

              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-[220px] object-cover rounded-lg"
              />
              <p className="text-center mt-3 text-lg text-rose-600">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
