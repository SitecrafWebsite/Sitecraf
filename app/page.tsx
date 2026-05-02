import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ServicesOverview from '@/components/sections/ServicesOverview';
import PlatformPicker from '@/components/sections/PlatformPicker';
import OurPortfolio from '@/components/sections/OurPortfolio';
import HowWeBuild from '@/components/sections/HowWeBuild';
import ComparisonTable from '@/components/sections/ComparisonTable';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Sitecraf — Website Development, AI Chatbot & Image Generation',
  alternates: { canonical: 'https://sitecraf.com' }
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <PlatformPicker />
      <OurPortfolio />
      <HowWeBuild />
      <ComparisonTable />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
