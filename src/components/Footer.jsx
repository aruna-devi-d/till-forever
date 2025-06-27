// eslint-disable-next-line
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full z-20 p-4 text-center glass-effect rounded-none text-gray-700 font-sans text-xl font-semibold"
    >
      <motion.p
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        Made with 🫶🏻 by your Pasandida Aurat
      </motion.p>
    </motion.footer>
  );
}
