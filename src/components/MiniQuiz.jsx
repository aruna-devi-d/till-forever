import { useState, useEffect } from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

const questions = [
  { q: "Enaku pidicha hairstyle? 💭", a: "french braid" },
  { q: "enaku pidicha color enna? 🎨", a: "pink" },
  { q: "Enoda favourite chella peru enna? 💝", a: "pondatti" },
  { q: "Namma enga first uh kiss panom? 😘", a: "cafe" },
  { q: "Enaku pidicha movie? 🎬", a: "alaipayuthey" },
  { q: "Enaku entha dress pidikum? 😉", a: "frock" },
  { q: "Enaku pidicha beverages? ☕", a: "coffee" },
  { q: "Nama Honeymoon ku enga polam? ✈", a: "maldives" },
];

export default function MiniQuiz({ nextStep }) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  const handleAnswer = (userAnswer) => {
    if (isLocked) return;
    setIsLocked(true);

    if (userAnswer.trim().toLowerCase() === questions[step].a.toLowerCase()) {
      setScore(score + 1);
      setFeedback({ type: "correct", message: "sooper mama❤️" });
    } else {
      setFeedback({ type: "wrong", message: "lusu 😏" });
    }

    setTimeout(() => {
      setFeedback(null);
      setAnswer("");
      setStep(step + 1);
      setIsLocked(false);
    }, 1500);
  };

  const isQuizFinished = step >= questions.length;

  useEffect(() => {
    if (isQuizFinished) {
      const timer = setTimeout(() => {
        nextStep();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isQuizFinished, nextStep]);

  return (
    <div className="romantic-card text-center space-y-16 max-w-3xl mx-auto page-container">
      <h2 className="text-6xl md:text-8xl text-rose-600 font-extrabold drop-shadow-lg">
        💌 Our Love Quiz 💌
      </h2>

      {!isQuizFinished && (
        <div className="space-y-8">
          <p className="text-xl md:text-2xl text-gray-500 font-sans font-bold">
            Question {step + 1} of {questions.length}
          </p>

          <div className="w-full bg-rose-200 rounded-full h-4">
            <motion.div
              className="bg-rose-500 h-4 rounded-full"
              animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      )}

      {feedback && (
        <motion.div
          initial={{ scale: 0, y: 0, opacity: 0 }}
          animate={{ scale: 1.5, y: -100, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className={`absolute text-6xl font-bold ${
            feedback.type === "wrong" ? "text-gray-600" : "text-rose-500"
          }`}
        >
          {feedback.message}
        </motion.div>
      )}

      {!isQuizFinished ? (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <p className="text-4xl md:text-5xl text-gray-700 font-extrabold leading-relaxed">
            {questions[step].q}
          </p>
          <input
            type="text"
            value={answer}
            disabled={isLocked}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAnswer(answer)}
            className="romantic-input text-center text-3xl py-4 disabled:opacity-50"
            placeholder="Type your sweet answer..."
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="text-center space-y-10"
        >
          <h3 className="text-5xl md:text-7xl text-rose-600 font-extrabold">
            You got {score}/{questions.length} right!
          </h3>
          <p className="text-3xl md:text-4xl text-gray-700 font-extrabold leading-relaxed">
            {score === questions.length
              ? "You know me perfectly! My heart is all yours! 💑"
              : "aww !! Every day we learn more about each other, and I fall deeper in love! 💕"}
          </p>
        </motion.div>
      )}
    </div>
  );
}
