import React from "react";
import { HERO_CONTENT } from "../assests/constant";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-32">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center text-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-8xl pb-8 lg:mt-8 font-thin tracking-tight flex"
            >
              <motion.div
                initial={{ y: 5 }}
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 2.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <p className="text-center mt-3">U</p>
              </motion.div>

              <motion.div
                initial={{ y: 5 }}
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 2.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <p className="text-center mt-3">z</p>
              </motion.div>

              <motion.div
                initial={{ y: 5 }}
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <p className="text-center mt-3">a</p>
              </motion.div>

              <motion.div
                initial={{ y: 5 }}
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 3.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <p className="text-center mt-3">i</p>
              </motion.div>

              <motion.div
                initial={{ y: 5 }}
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 4,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <p className="text-center mt-3">r</p>
              </motion.div>

              <motion.div
                initial={{ y: 5 }}
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 4.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <p className="text-center mt-3 ml-4">T</p>
              </motion.div>

              <motion.div
                initial={{ y: 5 }}
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 3.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <p className="text-center mt-3">a</p>
              </motion.div>

              <motion.div
                initial={{ y: 5 }}
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 3.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <p className="text-center mt-3">g</p>
              </motion.div>

              <motion.div
                initial={{ y: 5 }}
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 3.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <p className="text-center mt-3">a</p>
              </motion.div>

              <motion.div
                initial={{ y: 5 }}
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 2.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <p className="text-center mt-3">l</p>
              </motion.div>

              <motion.div
                initial={{ y: 5 }}
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 2.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <p className="text-center mt-3">a</p>
              </motion.div>
            </motion.h1>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl lg:text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>

            <motion.p
              initial={{ y: 5 }}
              animate={{ y: [5, -5] }}
              transition={{
                duration: 2.5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="py-6 my-2 max-w-xl font-light tracking-tighter leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
