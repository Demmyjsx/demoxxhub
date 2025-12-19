import ServicesHero from "@/components/services/ServiceHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceGrid />
      <ServiceProcess />
      <ServiceCTA />
    </main>
  );
}