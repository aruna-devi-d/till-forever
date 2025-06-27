import { useEffect, useState } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

const startDate = new Date("2025-02-12T00:00:00"); // Feb 12, 2025

export default function MilestoneCounter() {
  const [timePassed, setTimePassed] = useState(getTimeDifference());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimePassed(getTimeDifference());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeDifference() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <motion.div
      className="romantic-card text-center mt-16 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-7xl md:text-8xl text-rose-600 mb-14 font-extrabold drop-shadow-lg">
        Our Journey ❤️
      </h2>

      <p className="text-5xl md:text-6xl text-gray-700 mb-6 font-bold">
        Together since:
      </p>

      <p className="text-4xl md:text-5xl text-rose-500 mb-12 font-extrabold">
        February 12, 2025
      </p>

      <div className="space-y-4 text-gray-700 text-4xl md:text-5xl font-bold font-sans leading-relaxed">
        <p>It’s been</p>
        <p className="text-rose-500 text-6xl md:text-7xl font-extrabold">
          {timePassed.days} days
        </p>
        <p>
          {timePassed.hours} hours, {timePassed.minutes} minutes,{" "}
          {timePassed.seconds} seconds
        </p>
        <p>since we became US 💖</p>
      </div>
    </motion.div>
  );
}
