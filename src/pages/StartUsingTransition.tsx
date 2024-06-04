import { motion } from "framer-motion";

const StartUsingTransition = () => {
  return (
    <div className="w-screen h-screen p-4 ">
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 50, borderRadius: "50px" }}
        transition={{ delay: 1, duration: 2 }}
        className="flex items-center justify-center px-8 py-4 text-red-800 bg-red-200 w-80 h-80"
      >
        Start Using Transition
      </motion.div>
    </div>
  );
};

export default StartUsingTransition;
