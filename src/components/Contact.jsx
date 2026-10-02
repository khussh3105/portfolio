"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const terminalScript = `> init_comm_link --target khush_kothari
[SYS] Secure channel established.
[SYS] Routing via Mumbai, IN data center...
[SYS] Decrypting payload...

--------------------------------------------------
  NAME     :: Khush Kothari
  ROLE     :: Full-Stack Engineer / UI/UX
  LOCATION :: India
--------------------------------------------------
  EMAIL    :: hello@khushkothari.com
  LINKEDIN :: linkedin.com/in/khushkothari
  GITHUB   :: github.com/khushkothari
--------------------------------------------------

> End of transmission. Standing by... `;

export default function Contact({ id }) {
  const [displayedText, setDisplayedText] = useState("");
  const containerRef = useRef(null);
  
  // Triggers when 20% of the component is visible on screen
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  useEffect(() => {
    if (!isInView) return;

    let typingInterval;
    let pauseTimeout;

    const runTerminalSequence = () => {
      let currentIndex = 0;
      setDisplayedText(""); // Clear the terminal for the new loop
      
      // Typing speed (15ms per character)
      typingInterval = setInterval(() => {
        setDisplayedText(terminalScript.slice(0, currentIndex));
        currentIndex++;

        if (currentIndex > terminalScript.length) {
          clearInterval(typingInterval);
          
          // Wait 5 seconds after finishing, then restart
          pauseTimeout = setTimeout(() => {
            runTerminalSequence();
          }, 5000);
        }
      }, 15);
    };

    runTerminalSequence();

    // Cleanup intervals and timeouts if the component unmounts
    return () => {
      clearInterval(typingInterval);
      clearTimeout(pauseTimeout);
    };
  }, [isInView]);

  return (
    <section id={id} className="bg-grid-dark w-full pt-24 pb-16 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-6" ref={containerRef}>
        
        <div className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase mb-4">
          DIR.04 // CONTACT
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-12">
          System Connection
        </h2>

        {/* The Terminal UI Container */}
        <div className="w-full max-w-3xl mx-auto border border-neutral-800 rounded-sm bg-black overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          
          {/* Terminal Header (Hardware dots) */}
          <div className="flex items-center px-4 py-3 border-b border-neutral-800 bg-neutral-950">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
            </div>
            <div className="mx-auto font-sans text-[10px] text-neutral-500 tracking-widest uppercase">
              terminal // root@khush-sys
            </div>
            <div className="w-10"></div> 
          </div>

          {/* Terminal Output Body */}
          <div className="p-6 md:p-8 min-h-[320px]">
            <pre className="font-mono text-[11px] sm:text-[13px] text-neutral-300 whitespace-pre-wrap leading-relaxed">
              {displayedText}
              {/* Blinking block cursor */}
              <span className="inline-block w-2 sm:w-2.5 h-3.5 sm:h-4 bg-white animate-pulse ml-1 align-middle"></span>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
}