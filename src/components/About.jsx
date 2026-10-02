export default function About({ id }) {
  return (
    <section id={id} className="bg-grid-dark w-full pt-24 pb-32 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase mb-4">
          DIR.01 // ABOUT
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-16">
          Identity & Core Specs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Main Bio Stream */}
          <div className="md:col-span-7 flex flex-col gap-6 font-serif text-lg text-neutral-300 leading-relaxed">
            <p>
              I’m a Full-Stack Developer and UI/UX Designer with a Master of Computer Science from the University of Sydney, passionate about building scalable, reliable, and user-centric digital experiences. My work bridges thoughtful design and robust engineering, transforming complex ideas into intuitive interfaces and high-performance web applications.
            </p>
            <p>
              Specializing in the MERN stack, React, Next.js, and modern backend technologies, I work across the entire product lifecycle—from user research and interface design to backend architecture, database management, and cloud deployment. I believe great software should not only function seamlessly but also feel intuitive, consistent, and dependable.
            </p>
            <p>
              Whether I’m crafting pixel-perfect interfaces, architecting scalable systems, or optimizing application performance, my focus remains the same: building digital products that are purposeful, maintainable, and built to scale.
            </p>
          </div>

          {/* Academic & Hardware Specs */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-2 border-l border-neutral-800 pl-4">
              <div className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase">
                Current Operation
              </div>
              <div className="text-white font-sans uppercase tracking-widest text-sm">
                Masters of Computer Science
              </div>
              <div className="text-neutral-400 font-sans text-xs uppercase tracking-widest leading-relaxed">
                University of Sydney, Australia <br/>
                <span className="text-[10px] text-neutral-500">FEB 2025 — DEC 2026</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-l border-neutral-800 pl-4">
              <div className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase">
                Foundation
              </div>
              <div className="text-white font-sans uppercase tracking-widest text-sm">
                B.Tech in Computer Engineering
              </div>
              <div className="text-neutral-400 font-sans text-xs uppercase tracking-widest leading-relaxed">
                Pimpri Chinchwad College of Engineering, India <br/>
                <span className="text-[10px] text-neutral-500">JUN 2020 — MAY 2024</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}