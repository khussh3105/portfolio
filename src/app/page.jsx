import Hero from "../components/Hero";
import ModuleDirectory from "../components/ModuleDirectory";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ModuleDirectory />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
    </main>
  );
}