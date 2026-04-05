import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#e8e8f0] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-[#8888a0] mb-4">Last updated: April 5, 2026</p>
        <div className="prose prose-invert">
          <p>Your privacy is important to us. It is Sitecraf&apos;s policy to respect your privacy regarding any information we may collect from you across our website.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information we collect</h2>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of information</h2>
          <p>We only retain collected information for as long as necessary to provide you with your requested service.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Contact Us</h2>
          <p>If you have any questions about how we handle user data and personal information, feel free to contact us at support@sitecraf.com.</p>
        </div>
      </div>
    </div>
  );
}
