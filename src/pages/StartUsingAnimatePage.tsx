import { motion } from "framer-motion";
const StartUsingAnimatePage = () => {
  return (
    <div className="w-screen h-screen p-4 ">
      <motion.div
        animate={{
          x: 30,
          y: 30,
          fontSize: "40px",
          fontWeight: "bold",
          color: "#e50e0e",
          backgroundColor: "#f8bbbb",
          borderRadius: "50px",
        }}
        className="px-8 py-4 w-fit "
      >
        Start Using Animate
      </motion.div>
    </div>
  );
};

export default StartUsingAnimatePage;
