import { motion } from "framer-motion";

const StartUsingTransition = () => {
  return (
    <main>
      <section id="start-using-transition" className="w-screen h-screen p-4 ">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 50, borderRadius: "50px" }}
          transition={{ delay: 1, duration: 2 }}
          className="flex items-center justify-center px-8 py-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Start Using Transition
        </motion.div>
      </section>
      <section id="delay" className="w-screen h-screen p-4 ">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 50, borderRadius: "50px" }}
          transition={{ delay: 2 }}
          className="flex items-center justify-center px-8 py-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition Delay
        </motion.div>
      </section>
      <section id="duration" className="w-screen h-screen p-4 ">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 50, borderRadius: "50px" }}
          transition={{ duration: 2 }}
          className="flex items-center justify-center px-8 py-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition Duration
        </motion.div>
      </section>
      <section id="ease" className="w-screen h-screen p-4 ">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: "anticipate" }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition anticipate
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: "backIn" }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition backIn
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: "backInOut" }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition backInOut
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: "backOut" }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition backOut
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: "circIn" }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition circIn
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: "circInOut" }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition circInOut
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: "circOut" }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition circOut
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: "easeIn" }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition easeIn
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition easeInOut
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition easeOut
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: "linear" }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition linear
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 300, borderRadius: "50px" }}
          transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}
          className="flex items-center justify-center px-8 py-4 mb-4 text-red-800 bg-red-200 w-80 h-80"
        >
          Using Transition Custom cubic-bezier values
        </motion.div>
      </section>
    </main>
  );
};

export default StartUsingTransition;
