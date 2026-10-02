"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const rotatingTitles = [
  "Full-Stack Developer",
  "UI / UX Designer",
  "Software Engineer"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateClock(); 
    const clockInterval = setInterval(updateClock, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  return (
    <section id="hero" className="bg-grid-dark w-full pt-8 pb-24 border-b border-neutral-900 min-h-[60vh] flex flex-col">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        <motion.header 
          custom={0} 
          initial="hidden" 
          animate="visible" 
          variants={fadeIn}
          className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-16"
        >
          <div className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase">
            Term.01 // Root Access
          </div>
          <div className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase">
            <span className="hidden sm:inline">SYS.TIME: </span>{time || "00:00:00"}
          </div>
        </motion.header>

        <div className="space-y-8">
          <motion.div 
            custom={1} 
            initial="hidden" 
            animate="visible" 
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-neutral-800 bg-transparent text-[10px] font-sans tracking-widest text-neutral-300 shadow-sm uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
            <span>SYS.STATUS // OPEN TO WORK</span>
          </motion.div>

          <motion.div custom={2} initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col gap-2">
            <h1 className="text-5xl sm:text-7xl font-serif font-medium tracking-tight text-white leading-none">
              Khush Kothari
            </h1>
            
            <div className="flex items-center min-h-8 sm:min-h-10 mt-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={titleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="text-lg sm:text-2xl font-sans text-neutral-400 uppercase tracking-widest leading-none font-medium"
                >
                  {rotatingTitles[titleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeIn} className="text-lg sm:text-xl font-serif text-neutral-200 max-w-2xl leading-relaxed">
            <p>
              Master of Computer Science from the University of Sydney, with a focus on creating responsive frontends, robust backends, and reliable, maintainable applications.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}