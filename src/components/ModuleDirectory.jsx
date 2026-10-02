"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ModuleDirectory() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-grid-light w-full pt-16 pb-24">
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        
        <motion.h2 
          custom={4} 
          initial="hidden" 
          animate="visible" 
          variants={fadeIn}
          className="text-3xl md:text-4xl font-serif font-medium text-black text-center mb-12"
        >
          System Modules
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <motion.div custom={5} initial="hidden" animate="visible" variants={fadeIn}>
            <a 
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="group flex flex-col justify-between h-40 md:h-48 border border-neutral-300 rounded-sm p-6 bg-transparent shadow-sm hover:border-black hover:bg-white transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="font-sans text-[10px] text-neutral-400 tracking-widest font-medium transition-colors group-hover:text-black">
                  DIR.01
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-sans font-medium text-xl text-black uppercase tracking-widest">
                About
              </h3>
            </a>
          </motion.div>

          <motion.div custom={6} initial="hidden" animate="visible" variants={fadeIn}>
            <a 
              href="#experience"
              onClick={(e) => handleScroll(e, "experience")}
              className="group flex flex-col justify-between h-40 md:h-48 border border-neutral-300 rounded-sm p-6 bg-transparent shadow-sm hover:border-black hover:bg-white transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="font-sans text-[10px] text-neutral-400 tracking-widest font-medium transition-colors group-hover:text-black">
                  DIR.02
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-sans font-medium text-xl text-black uppercase tracking-widest">
                Experience
              </h3>
            </a>
          </motion.div>

          <motion.div custom={7} initial="hidden" animate="visible" variants={fadeIn}>
            <a 
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="group flex flex-col justify-between h-40 md:h-48 border border-neutral-300 rounded-sm p-6 bg-transparent shadow-sm hover:border-black hover:bg-white transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="font-sans text-[10px] text-neutral-400 tracking-widest font-medium transition-colors group-hover:text-black">
                  DIR.03
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-sans font-medium text-xl text-black uppercase tracking-widest">
                Projects
              </h3>
            </a>
          </motion.div>

          <motion.div custom={8} initial="hidden" animate="visible" variants={fadeIn}>
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="group flex flex-col justify-between h-40 md:h-48 border border-neutral-300 rounded-sm p-6 bg-transparent shadow-sm hover:border-black hover:bg-white transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="font-sans text-[10px] text-neutral-400 tracking-widest font-medium transition-colors group-hover:text-black">
                  DIR.04
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-sans font-medium text-xl text-black uppercase tracking-widest">
                Contact
              </h3>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}