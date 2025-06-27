import { useEffect, useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

const heartEmojis = ["❤️", "💖", "💝", "💕", "💗", "💓", "💘"];

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        scale: 0.6 + Math.random() * 0.8,
      };

      setHearts((prevHearts) => [...prevHearts.slice(-20), newHeart]);

      setTimeout(() => {
        setHearts((prevHearts) =>
          prevHearts.filter((heart) => heart.id !== newHeart.id)
        );
      }, 4000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: "110vh",
            x: `${heart.x}vw`,
            scale: heart.scale,
            opacity: 0.7,
          }}
          animate={{
            y: "-10vh",
            opacity: 0,
            transition: {
              duration: 4,
              delay: heart.delay,
              ease: "easeOut",
            },
          }}
          className="absolute text-3xl md:text-4xl"
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
}
