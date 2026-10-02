import { ArrowUpRight } from "lucide-react";

export default function Projects({ id }) {
  const projects = [
    {
      sysId: "SYS.PRJ.01",
      title: "Shilpa Plast Technologies",
      tech: "React.js // Tailwind CSS // Figma",
      description: "Designed and engineered a production-ready web application for an industrial client to establish their digital presence. Translated low-fidelity Figma prototypes into a highly responsive, performance-optimized frontend.",
      links: [
        { label: "Live System", url: "https://www.shilpaplasttech.com/" }
      ]
    },
    {
      sysId: "SYS.PRJ.02",
      title: "Fitness First Festival",
      tech: "React.js // Node.js // Firebase",
      description: "Developed a centralized event discovery and registration portal built for high-volume campus traffic. Implemented a serverless backend for real-time data synchronization, secure user authentication, and dynamic event state management.",
      links: [
        { label: "Repository", url: "https://github.com/khussh3105/FitnessFirstFestival" }
      ]
    },
    {
      sysId: "SYS.PRJ.03",
      title: "Cafe Creamy Nuts",
      tech: "JavaScript // PHP // WhatsApp API",
      description: "Built a lightweight, end-to-end digital ordering platform featuring dynamic shopping cart states. Integrated a PHP backend to the WhatsApp API to automate real-time order notifications directly to business owners.",
      links: [
        { label: "Repository", url: "https://github.com/khussh3105/CafeWeb" }
      ]
    }
  ];

  return (
    <section id={id} className="bg-grid-dark w-full pt-24 pb-32 border-t border-neutral-900">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase mb-4">
          DIR.03 // PROJECTS
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-16">
          System Architecture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col justify-between border border-neutral-800 bg-black p-8 rounded-sm hover:border-neutral-500 transition-colors"
            >
              <div className="flex flex-col gap-6">
                
                {/* Header block */}
                <div className="flex justify-between items-start border-b border-neutral-900 pb-4">
                  <div className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase">
                    {project.sysId}
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-neutral-500 transition-colors"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-neutral-500 transition-colors"></div>
                  </div>
                </div>

                {/* Title & Tech Stack */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-sans font-medium text-xl text-white uppercase tracking-widest">
                    {project.title}
                  </h3>
                  <div className="font-sans text-[10px] tracking-widest text-neutral-400 uppercase">
                    {project.tech}
                  </div>
                </div>

                {/* Description */}
                <p className="font-serif text-sm text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Links Footer */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-neutral-900">
                {project.links.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-sans text-[10px] tracking-widest text-white uppercase hover:text-neutral-500 transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}