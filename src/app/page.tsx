import { Hero } from "@/components/hero/Hero";
import {
  NotWebsSection,
  PentagonExplainedSection,
  HowWeWorkSection,
  SectorsSection,
  FinalCTASection,
} from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NotWebsSection />
      <PentagonExplainedSection />
      <HowWeWorkSection />
      <SectorsSection />
      <FinalCTASection />
    </>
  );
}
