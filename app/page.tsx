import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Now from "@/components/sections/now";
import PageWrapper from "@/components/layout/page-wrapper";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen flex-col">
        <TracingBeam>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          {/* <Now /> */}
          <Contact />
        </TracingBeam>
      </main>
    </PageWrapper>
  );
}
