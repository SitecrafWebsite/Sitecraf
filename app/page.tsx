import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WebDevDeepDive from '@/components/sections/WebDevDeepDive';
import CaseStudies from '@/components/sections/CaseStudies';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Benefits from '@/components/sections/Benefits';
import HowWeBuild from '@/components/sections/HowWeBuild';
import ComparisonTable from '@/components/sections/ComparisonTable';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WebDevDeepDive />
      <CaseStudies />
      <BeforeAfter />
      <Benefits />
      <HowWeBuild />
      <ComparisonTable />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
