import * as React from "react";
import { motion } from "framer-motion";

export const SquareMotion = () => {
  return (
    <motion.div
      animate={{
        scale: [0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
        rotate: [90, 180, 0, 0, 90, 90, 180, 360, 0, 90],
        borderRadius: ["5%", "25%", "50%", "25%", "0%", "5%", "0%", "25%", "0%", "5%"],
        // borderTop: ['20px solid hsla(283, 79%, 17%, 1)', '20px solid hsla(283, 79%, 17%, 1)', '20px solid hsla(283, 79%, 17%, 1)', '20px solid hsla(274, 6%, 18%, 1)', '20px solid hsla(274, 6%, 18%, 1)', '20px solid hsla(274, 6%, 70%,1)', '20px solid hsla(274, 6%, 18%, 1)', '20px solid hsla(186, 81%, 22%, 1)', '5px solid hsla(186, 81%, 22%, 1)', '20px solid hsla(283, 79%, 17%, 1)'],
        // borderRight: ['20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent'],
        // borderLeft: ['20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent', '20px solid transparent'],
      }}
      transition={{
        duration: 30,
        ease: "easeInOut",
        times: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        loop: Infinity,
        repeatDelay: 1
      }}
    />
  );
};