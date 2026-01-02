import MissionVision from "@/components/home/MissionVision";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/Stats";
import Hero from "@/components/home/Hero";
import BlogListing from "@/components/home/BlogListing"; 

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionVision />
      <ServicesGrid />
      <BlogListing />
      <WhyChooseUs />
      <Stats />
      
    </>
  );
}