import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressTop() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return <motion.div style={{ scaleX }} className="fixed top-0 left-0 w-full h-2 bg-sky-500 origin-right z-50"> </motion.div>;
}
