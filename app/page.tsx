import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ServicesOverview from '@/components/sections/ServicesOverview';
import PlatformPicker from '@/components/sections/PlatformPicker';
import OurWork from '@/components/sections/OurWork';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Benefits from '@/components/sections/Benefits';
import HowWeBuild from '@/components/sections/HowWeBuild';
import HostingSection from '@/components/sections/HostingSection';
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
      <PlatformPicker />
      <OurWork />
      <BeforeAfter />
      <Benefits />
      <HowWeBuild />
      <HostingSection />
      <ComparisonTable />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
