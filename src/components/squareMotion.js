import * as React from "react";
import { motion } from "framer-motion";

export const SquareMotion = () => {
  return (
    <motion.div
      animate={{
        scale: [0, 1, 1, 1, 0],
        rotate: [0, 360, 360, 360, 0],
        borderRadius: ["5%", "50%", "50%", "50%", "5%"]
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1
      }}
    />
  );
};