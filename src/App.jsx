import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import Landing from "./components/Landing";
import ComplimentGenerator from "./components/ComplimentGenerator";
import PhotoGallery from "./components/PhotoGallery";
import Poem from "./components/Poem";
import MiniQuiz from "./components/MiniQuiz";
import MilestoneCounter from "./components/MilestoneCounter";
import Surprise from "./components/Surprise";
import ProposalPreview from "./components/ProposalPreview";
import WhyILoveYou from "./components/WhyILoveYou";
import FloatingHearts from "./components/FloatingHearts";
import BackgroundMusic from "./components/BackgroundMusic";
import Footer from "./components/Footer";

const steps = [
  { id: 0, component: Landing },
  {
    id: 1,
    component: ComplimentGenerator,
    prompt: "Ready for a sweet memory?",
  },
  { id: 2, component: PhotoGallery, prompt: "A little something for you..." },
  { id: 3, component: Poem, prompt: "Think you know me well?" },
  { id: 4, component: MiniQuiz, prompt: null },
  {
    id: 5,
    component: Surprise,
    prompt: "Wanna see how long we've been together?",
  },
  {
    id: 6,
    component: MilestoneCounter,
    prompt: "Wanna see a preview of our future?",
  },
  { id: 7, component: ProposalPreview, prompt: "Now… why do I love you? 😍" },
  { id: 8, component: WhyILoveYou, prompt: "Done? Wanna relive it again? ↩" },
];

function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prevStep) =>
      prevStep < steps.length - 1 ? prevStep + 1 : prevStep
    );
  };


  const CurrentComponent = steps[step].component;
  const nextPrompt = steps[step].prompt;


  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 overflow-x-hidden relative">
      {/* ✅ Global music only if not in step 7 (ProposalPreview) */}
      {step !== 7 && <BackgroundMusic />}
      <FloatingHearts />

      {/* AnimatePresence for main components */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="flex-grow flex justify-center items-center p-4"
        >
          <div className="w-full max-w-4xl space-y-12 text-center">
            <CurrentComponent nextStep={nextStep} />
            {nextPrompt && (
              <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <button
                  onClick={nextStep}
                  className="romantic-button text-2xl md:text-3xl px-12 py-5 font-bold shadow-xl"
                >
                  {nextPrompt} &rarr;
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer stays at bottom because of flex + justify-between */}
      <Footer />
    </div>
  );
}

export default App;
