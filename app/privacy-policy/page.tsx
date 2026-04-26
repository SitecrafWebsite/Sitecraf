'use client'

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sitecraf',
  description:
    'Learn how Sitecraf collects, uses, and protects your personal information. Our commitment to privacy and data security.',
  keywords: ['privacy', 'data protection', 'security', 'user rights', 'cookies'],
  openGraph: {
    title: 'Privacy Policy | Sitecraf',
    description:
      'Learn how Sitecraf collects, uses, and protects your personal information. Our commitment to privacy and data security.',
    url: 'https://www.sitecraf.com/privacy-policy',
    type: 'website',
  },
  canonical: 'https://www.sitecraf.com/privacy-policy',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Header */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="mx-auto max-w-3xl">
          <h1
            className="heading-section mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-12">
        <div
          className="mx-auto max-w-3xl space-y-10"
          style={{ color: 'var(--color-text)' }}
        >
          {/* Introduction */}
          <div>
            <p className="text-lg leading-relaxed">
              At Sitecraf, we are committed to protecting your privacy and
              ensuring you understand how we collect, use, and safeguard your
              information. This Privacy Policy explains our data practices for
              our website and services.
            </p>
            <p className="mt-4 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <strong>Legal Disclaimer:</strong> This Privacy Policy is provided
              for informational purposes only and should not be construed as
              legal advice. Please consult with a legal professional to ensure
              compliance with applicable data protection laws in your
              jurisdiction.
            </p>
          </div>

          {/* Information Collection */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              1. Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Name, email address, and contact information</li>
                  <li>Account registration and profile details</li>
                  <li>Billing and payment information</li>
                  <li>
                    Website content, text, images, and files you upload or
                    create
                  </li>
                  <li>Chatbot configurations and AI training data you provide</li>
                  <li>Communications with our support team</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Browser type, operating system, and device information</li>
                  <li>
                    IP address, session tokens, and unique device identifiers
                  </li>
                  <li>Pages visited, links clicked, and time spent on site</li>
                  <li>Referral source and search queries used to find us</li>
                  <li>Interaction data with our AI chatbot services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>To create, maintain, and authenticate your account</li>
              <li>To deliver, maintain, and improve our services</li>
              <li>To process payments and handle billing inquiries</li>
              <li>To provide customer support and respond to your requests</li>
              <li>To send service updates, newsletters, and promotional offers</li>
              <li>To monitor service performance and detect fraud or abuse</li>
              <li>To analyze usage patterns and improve user experience</li>
              <li>
                To comply with legal obligations and enforce our Terms of
                Service
              </li>
            </ul>
          </div>

          {/* Cookies & Tracking */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              3. Cookies and Tracking Technologies
            </h2>
            <p className="mb-3">
              We use cookies and similar tracking technologies (pixels, beacons,
              local storage) to enhance your experience, remember preferences,
              and understand how you interact with our platform.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">Types of Cookies:</h3>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>Essential:</strong> Required for basic functionality
                  </li>
                  <li>
                    <strong>Performance:</strong> Help us understand site usage
                  </li>
                  <li>
                    <strong>Functional:</strong> Remember your preferences
                  </li>
                  <li>
                    <strong>Marketing:</strong> Track advertising effectiveness
                  </li>
                </ul>
              </div>
              <p>
                You can control cookie preferences through your browser settings
                or our consent management tool. Disabling cookies may limit
                certain service features.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              4. Data Security
            </h2>
            <p className="mb-3">
              We implement industry-standard security measures to protect your
              personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Encryption of data in transit (TLS/SSL) and at rest</li>
              <li>Secure authentication mechanisms and access controls</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Restricted employee access to sensitive data</li>
              <li>Intrusion detection and real-time monitoring</li>
            </ul>
            <p className="mt-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              While we strive to protect your data, no security system is
              completely secure. We encourage you to use strong passwords and
              enable two-factor authentication where available.
            </p>
          </div>

          {/* Third-Party Services */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              5. Third-Party Services
            </h2>
            <p className="mb-3">
              We may share or use your information with third-party service
              providers to operate our platform, including:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Cloud hosting and infrastructure providers</li>
              <li>Payment processors and financial institutions</li>
              <li>Analytics and monitoring services</li>
              <li>Customer support and communication platforms</li>
              <li>Email delivery and marketing automation services</li>
              <li>AI and machine learning service providers</li>
            </ul>
            <p className="mt-3">
              These providers are contractually obligated to use your data only
              as necessary to provide services to us and must maintain
              appropriate security standards.
            </p>
          </div>

          {/* Data Transfers */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              6. International Data Transfers
            </h2>
            <p>
              Sitecraf is based in India. Your information may be processed,
              stored, and transferred to countries other than where you reside,
              which may have different data protection laws. By using our
              services, you consent to such transfers. We implement safeguards
              such as standard contractual clauses and data protection
              agreements to ensure your information remains protected.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              7. Your Privacy Rights
            </h2>
            <p className="mb-3">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Access your personal information held by us</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Receive your data in a portable, machine-readable format</li>
              <li>Withdraw consent to processing</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at the address provided at
              the end of this policy. We will respond to requests within 30 days
              or as required by applicable law.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              8. Children's Privacy
            </h2>
            <p>
              Our services are not intended for children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13. If we become aware that a child under 13 has provided us
              with personal information, we will promptly delete such information
              and terminate the child's account. If you believe a child has
              provided us with information, please contact us immediately.
            </p>
          </div>

          {/* Policy Changes */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes
              in our practices, technology, legal requirements, and other
              factors. Material changes will be notified to you via email or
              through a prominent notice on our website. Your continued use of
              our services following the posting of changes constitutes your
              acceptance of the updated policy.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              10. Contact Us
            </h2>
            <p className="mb-3">
              If you have questions about this Privacy Policy, wish to exercise
              your rights, or need to report a data breach, please contact us:
            </p>
            <div
              className="rounded-lg p-4"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <p>
                <strong>Sitecraf</strong>
              </p>
              <p>Email: privacy@sitecraf.com</p>
              <p>Website: www.sitecraf.com</p>
              <p>Location: India</p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="border-t pt-8" style={{ borderColor: 'var(--color-border)' }}>
            <p className="mb-4">
              Thank you for trusting Sitecraf with your data. We are committed
              to protecting your privacy.
            </p>
            <Link
              href="/"
              className="inline-block rounded-lg px-6 py-3 font-semibold transition-all"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-text-inverse)',
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
