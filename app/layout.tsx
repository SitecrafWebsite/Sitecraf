import type { Metadata } from 'next';
import './globals.css'; // Global styles
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/ui/Chatbot';

export const metadata = {
  title: 'Sitecraf — Website Development, AI Chatbot & Image Generation for B2B Brands',
  description: 'Sitecraf builds custom websites, Shopify-to-Wix migrations, AI chatbots in Hindi/English, and AI image generation for Indian B2B businesses. Based in New Delhi. Transparent pricing. No GST. 100% ownership.',
  keywords: [
    'website developer New Delhi India',
    'Shopify to Wix Studio migration India',
    'AI chatbot for business website India',
    'website development home furnishing brand India',
    'affordable website development India freelancer',
    'AI image generation India',
    'B2B website development New Delhi',
    'Sitecraf'
  ],
  openGraph: {
    title: 'Sitecraf — Websites & AI Tools for Indian B2B Brands',
    description: 'Custom websites, Shopify migrations, AI chatbots, and image generation. Based in New Delhi. Transparent pricing.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sitecraf',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sitecraf",
              "description": "Freelance web developer offering custom websites, Shopify to Wix Studio migration, AI chatbots, and AI image generation for B2B brands.",
              "url": "https://sitecraf.com",
              "email": "support@sitecraf.com",
              "telephone": "+919599143235",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "South Extension Part-2",
                "addressLocality": "New Delhi",
                "postalCode": "110049",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "10:00",
                "closes": "19:00"
              },
              "priceRange": "₹₹",
              "areaServed": ["India", "United States", "United Kingdom", "Australia", "UAE"],
              "serviceType": [
                "Website Development",
                "Shopify to Wix Studio Migration",
                "AI Chatbot Development",
                "AI Image Generation",
                "Business Automation"
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[#000000] text-[#e8e8f0] font-[family-name:var(--font-body)] antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
