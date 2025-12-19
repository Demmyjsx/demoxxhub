import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Expertise from "@/components/about/Expertise";
import WorkProcess from "@/components/about/Workprocess";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <MissionVision />
       <WorkProcess />
      <CoreValues />
      <Expertise />
     
    </main>
  );
}