import Hero from '@/components/sections/Hero';
import Benefits from '@/components/sections/Benefits';
import ServicesOverview from '@/components/sections/ServicesOverview';
import PlatformPicker from '@/components/sections/PlatformPicker';
import OurWork from '@/components/sections/OurWork';
import Testimonials from '@/components/sections/Testimonials';
import BlogSection from '@/components/sections/BlogSection';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Benefits />
      <ServicesOverview />
      <PlatformPicker />
      <OurWork />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <Contact />
    </main>
  );
}
