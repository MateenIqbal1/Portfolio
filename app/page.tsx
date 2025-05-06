import Skills from "@/components/main/Skills";
import Hero from "../components/main/Hero";
import Project from "@/components/main/Project";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero />
        <div id="skills" className="mt-[-50px] sm:mt-0 scroll-mt-[80px]">
          <Skills />

        </div>
        <div id="projects" className="mt-[-50px] sm:mt-0 scroll-mt-[80px]">
          <Project />
        </div>
          
      </div>
    </main>
  );
}
