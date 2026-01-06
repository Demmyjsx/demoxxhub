import ServicesHero from "@/components/services/ServiceHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import Testimonials from "@/components/services/Testimnials";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceGrid />
      <ServiceProcess />
      <ServiceCTA />
      <Testimonials />
    </main>
  );
}