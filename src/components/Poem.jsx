// eslint-disable-next-line
import { motion } from "framer-motion";

export default function Poem() {
  const poemLines = [
    "எப்போதும் சண்டை வந்தால்",
    "முதலில் மன்னிப்பு கேட்பது நீ…",
    "முதலில் அருகே வருவது நீ…",
    "முதலில் சிரிப்பது கூட நீ…",
    "",
    "ஆனால்…",
    "நான் மட்டும் கோபம் பிடித்து,",
    "நீ பிடிக்காததை செய்வேன்…",
    "",
    "இனிமேல்…",
    "நீ விரும்பாததை நான் செய்ய மாட்டேன்…",
    "உன் சிரிப்பை மட்டும் தான் என் அருகில் வைத்துக் கொள்ள வேண்டும் ❤️",
  ];

  return (
    <div className="romantic-card text-center space-y-14 page-container relative">
      <h2 className="text-6xl md:text-8xl text-rose-600 font-extrabold drop-shadow-lg">
        A Promise To You 🤞
      </h2>

      <div className="space-y-8 text-center max-w-3xl mx-auto">
        {poemLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="text-3xl md:text-4xl text-gray-700 leading-relaxed font-semibold"
          >
            {line || <br />}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
