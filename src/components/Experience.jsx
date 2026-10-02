export default function Experience({ id }) {
  const experiences = [
    {
      sysId: "SYS.LOG.01",
      role: "UI/UX Designing Intern",
      company: "Brainchain MPI People",
      timeline: "JUL 2024 — JAN 2025",
      description: "Built a scalable Figma design system with 40+ reusable components and led user research that cut drop-offs by 28% and sped up dev handover by 35%.",
      tags: ["Internship"]
    },
    {
      sysId: "SYS.LOG.02",
      role: "Web & SEO Intern",
      company: "Recoversy",
      timeline: "FEB 2024 — APR 2024",
      description: "Engineered core web pages and technical SEO improvements that cut load times by 28%, pushed Lighthouse scores to 95+, and grew organic traffic by 40%.",
      tags: ["Internship"]
    },
    {
      sysId: "SYS.LOG.03",
      role: "Teaching Assistant",
      company: "Pimpri Chinchwad College of Engineering",
      timeline: "AUG 2023 — DEC 2023",
      description: "Mentored 250+ engineering students in full-stack web development, raising assignment completion rates by 25% and reviewing 500+ project submissions.",
      tags: ["Teaching"]
    },
    {
      sysId: "VOL.LOG.01",
      role: "Web & Design Director",
      company: "OWASP Student Chapter PCCoE",
      timeline: "JUL 2023 — JUN 2024",
      description: "Directed the frontend development social media design initiatives for the chapter. Designed platform architecture to support technical workshops and organizational growth.",
      tags: ["Volunteering"]
    },
    {
      sysId: "VOL.LOG.02",
      role: "Head of Marketing",
      company: "OWASP Student Chapter PCCoE",
      timeline: "NOV 2022 — JUN 2023",
      description: "Managed the digital presence and marketing assets for the student chapter. Executed outreach strategies and created visual assets to drive student engagement.",
      tags: ["Volunteering"]
    }
  ];

  return (
    <section id={id} className="bg-grid-light w-full pt-24 pb-32 border-t border-neutral-300">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase mb-4">
          DIR.02 // EXPERIENCE
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-black mb-16">
          Professional Timeline
        </h2>

        <div className="flex flex-col gap-16 relative">
          {/* Subtle vertical connecting line */}
          <div className="absolute left-[3.5px] top-2 bottom-0 w-px bg-neutral-200 hidden md:block z-0"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 relative z-10">
              
              {/* Left Column: Timeline & System ID */}
              <div className="md:col-span-3 flex md:flex-col items-baseline md:items-start justify-between md:justify-start gap-2">
                <div className="flex items-center gap-4 md:gap-6 bg-transparent">
                  {/* Node Dot */}
                  <div className="w-2 h-2 rounded-full bg-black hidden md:block shrink-0"></div>
                  <div className="text-black font-sans uppercase tracking-widest text-sm font-medium">
                    {exp.timeline}
                  </div>
                </div>
                <div className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase md:pl-8">
                  {exp.sysId}
                </div>
              </div>

              {/* Right Column: Role & Specs */}
              <div className="md:col-span-9 flex flex-col gap-4 bg-white/50 border border-neutral-200 p-6 sm:p-8 rounded-sm backdrop-blur-sm shadow-sm hover:border-black transition-colors group">
                <div className="flex flex-col gap-1">
                  <h3 className="font-sans font-medium text-xl text-black uppercase tracking-widest group-hover:text-black transition-colors">
                    {exp.role}
                  </h3>
                  <div className="font-serif text-lg text-neutral-600">
                    {exp.company}
                  </div>
                </div>
                
                <p className="font-serif text-neutral-600 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-neutral-100 border border-neutral-200 font-sans text-[9px] tracking-widest text-neutral-500 uppercase rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}