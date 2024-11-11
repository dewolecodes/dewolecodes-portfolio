import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Now from "@/components/now";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <TracingBeam>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        {/* <Now /> */}
        <Contact />
      </TracingBeam>
    </main>
  );
}
