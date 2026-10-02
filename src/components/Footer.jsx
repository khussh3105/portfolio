"use client";

export default function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black border-t border-neutral-900 py-10 md:py-6 px-6 md:px-8">
      <div className="w-full flex flex-row justify-between">
        
        {/* Left Side: Navigation Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 shrink-0">
          <a 
            href="#hero" 
            onClick={(e) => handleScroll(e, "hero")}
            className="text-white text-[10px] font-sans tracking-[0.2em] uppercase hover:text-neutral-500 transition-colors"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, "about")}
            className="text-white text-[10px] font-sans tracking-[0.2em] uppercase hover:text-neutral-500 transition-colors"
          >
            About
          </a>
          <a 
            href="#experience" 
            onClick={(e) => handleScroll(e, "experience")}
            className="text-white text-[10px] font-sans tracking-[0.2em] uppercase hover:text-neutral-500 transition-colors"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, "projects")}
            className="text-white text-[10px] font-sans tracking-[0.2em] uppercase hover:text-neutral-500 transition-colors"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, "contact")}
            className="text-white text-[10px] font-sans tracking-[0.2em] uppercase hover:text-neutral-500 transition-colors md:hidden"
          >
            Contact
          </a>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex flex-col md:flex-row items-end md:items-center gap-6 md:gap-10 shrink-0">
          <a href="https://www.linkedin.com/in/khushkothari" target="_blank" rel="noopener noreferrer" className="text-white text-[10px] font-sans tracking-[0.2em] uppercase hover:text-neutral-500 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/khussh3105" target="_blank" rel="noopener noreferrer" className="text-white text-[10px] font-sans tracking-[0.2em] uppercase hover:text-neutral-500 transition-colors">
            GitHub
          </a>
          <a href="https://leetcode.com/u/khussh3105/" target="_blank" rel="noopener noreferrer" className="text-white text-[10px] font-sans tracking-[0.2em] uppercase hover:text-neutral-500 transition-colors">
            LeetCode
          </a>
          <a href="mailto:kotkhussh@gmail.com" className="text-white text-[10px] font-sans tracking-[0.2em] uppercase hover:text-neutral-500 transition-colors">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}