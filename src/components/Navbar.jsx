"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "EXPERIENCE", path: "/experience" },
  { name: "PROJECTS", path: "/projects" },
  { name: "SKILLS", path: "/skills" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-6"
    >
      <div className="w-full max-w-5xl relative">
        <nav className="w-full md:w-auto md:mx-auto flex items-center justify-between bg-black/90 backdrop-blur-md border border-neutral-800 p-1.5 rounded-full shadow-sm relative z-50">
          
          {/* Brand Logo - Far Left on Mobile */}
          <Link 
            href="/" 
            className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-white text-black font-sans font-bold text-xs tracking-widest transition-transform active:scale-95"
          >
            K
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 ml-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative px-4 py-2 text-[11px] font-sans font-medium tracking-wider transition-colors duration-200 uppercase ${
                    isActive ? "text-black" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Status Indicator - Desktop Only */}
          <div className="hidden md:flex items-center gap-2 pl-3 pr-4 py-1 text-[10px] font-sans font-semibold text-neutral-400 border-l border-neutral-800 ml-1 shrink-0 uppercase tracking-widest">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600"></span>
            </span>
            <span>Sys.Active</span>
          </div>

          {/* Hamburger Menu - Far Right on Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-neutral-900 text-white transition-colors shrink-0 hover:bg-neutral-800"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-[120%] inset-x-0 bg-black/95 backdrop-blur-xl border border-neutral-800 rounded-xl shadow-xl overflow-hidden z-40"
            >
              <div className="flex flex-col p-2 gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`px-4 py-3 text-sm font-sans font-medium tracking-wider rounded-lg transition-colors duration-200 uppercase ${
                        isActive 
                          ? "bg-white text-black" 
                          : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}