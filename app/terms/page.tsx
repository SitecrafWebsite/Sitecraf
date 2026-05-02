import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Sitecraf',
  description:
    'Read our Terms of Service to understand the rights and responsibilities of using Sitecraf, our AI-powered website builder platform.',
  keywords: ['terms', 'service', 'agreement', 'user rights', 'acceptable use'],
  openGraph: {
    title: 'Terms of Service | Sitecraf',
    description:
      'Read our Terms of Service to understand the rights and responsibilities of using Sitecraf, our AI-powered website builder platform.',
    url: 'https://sitecraf.com/terms',
    type: 'website',
  },
  alternates: { canonical: 'https://sitecraf.com/terms' }
}

export default function Terms() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Header */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="mx-auto max-w-3xl">
          <h1
            className="heading-section mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Terms of Service
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
          {/* Legal Disclaimer */}
          <div>
            <p className="text-lg leading-relaxed">
              Welcome to Sitecraf. These Terms of Service govern your use of our
              website builder platform and services. By accessing or using
              Sitecraf, you agree to be bound by these terms.
            </p>
            <p className="mt-4 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <strong>Legal Disclaimer:</strong> These Terms of Service are
              provided for informational purposes only and should not be construed
              as legal advice. Please consult with a legal professional to ensure
              compliance with applicable laws in your jurisdiction.
            </p>
          </div>

          {/* 1. Acceptance of Terms */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Sitecraf, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service and our
              Privacy Policy. If you do not agree with any part of these terms, you
              may not use our services.
            </p>
          </div>

          {/* 2. Description of Service */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              2. Description of Service
            </h2>
            <p className="mb-3">
              Sitecraf is an AI-powered website builder platform that enables users
              to create websites and integrate AI-powered chatbots. Our service
              includes:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Website creation and hosting tools</li>
              <li>Drag-and-drop website builder interface</li>
              <li>AI chatbot integration and customization</li>
              <li>Content generation assistance</li>
              <li>Analytics and performance monitoring</li>
              <li>Customer support and documentation</li>
            </ul>
          </div>

          {/* 3. Account Registration and Security */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              3. Account Registration and Security
            </h2>
            <p className="mb-3">You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Providing accurate, complete, and up-to-date information during registration</li>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>Preventing unauthorized access to your account</li>
              <li>
                All activities that occur under your account, whether authorized or not
              </li>
              <li>
                Notifying us immediately of any unauthorized account access or
                security breaches
              </li>
            </ul>
            <p className="mt-3">
              We are not liable for any loss or damage to your account resulting
              from your failure to maintain proper security.
            </p>
          </div>

          {/* 4. Acceptable Use and Prohibited Activities */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              4. Acceptable Use and Prohibited Activities
            </h2>
            <p className="mb-3">You agree NOT to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Use Sitecraf for illegal, harmful, or abusive purposes</li>
              <li>
                Publish content that is defamatory, obscene, or infringes third-party
                rights
              </li>
              <li>Engage in hacking, phishing, or unauthorized system access</li>
              <li>Transmit malware, viruses, or malicious code</li>
              <li>Overload or interfere with our infrastructure or services</li>
              <li>Engage in spam, harassment, or unlawful activity</li>
              <li>Reverse engineer, decompile, or attempt to circumvent protections</li>
            </ul>
            <p className="mt-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              <strong>AI-Generated Content Disclaimer:</strong> Content generated by
              our AI tools is provided "as-is" and may contain inaccuracies, biases,
              or errors. You are solely responsible for reviewing, validating, and
              obtaining approval for any AI-generated content before publishing or
              using it. Sitecraf is not liable for errors or issues arising from
              AI-generated content.
            </p>
          </div>

          {/* 5. Intellectual Property Rights */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              5. Intellectual Property Rights
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">Sitecraf Platform Content</h3>
                <p>
                  All intellectual property rights in the Sitecraf platform,
                  including code, designs, algorithms, features, and documentation,
                  are owned by Sitecraf or our licensors. You are granted a limited,
                  non-exclusive, revocable license to use our platform for permitted
                  purposes only.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Your User Content</h3>
                <p>
                  You retain ownership of content you create using Sitecraf. By
                  uploading content to our platform, you grant Sitecraf a worldwide,
                  non-exclusive license to use, display, and process your content to
                  provide our services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">AI-Generated Content</h3>
                <p>
                  Content generated by our AI tools is provided to you for your use
                  under this license. You may not claim exclusive ownership of
                  AI-generated suggestions. You are responsible for ensuring
                  AI-generated content complies with all applicable laws and third-party rights.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Payment and Subscriptions */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              6. Payment and Subscriptions
            </h2>
            <p className="mb-3">
              If you purchase a paid subscription or service:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                You authorize us to charge your provided payment method for the
                subscription fee
              </li>
              <li>
                Fees are billed at the beginning of each billing period unless you
                cancel
              </li>
              <li>
                We may change pricing with 30 days' notice; changes take effect at
                your next renewal
              </li>
              <li>
                Refunds are issued per our refund policy; subscription fees are
                non-refundable except as required by law
              </li>
              <li>You are responsible for all taxes or fees related to your subscription</li>
            </ul>
          </div>

          {/* 7. Disclaimers and Limitation of Liability */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              7. Disclaimers and Limitation of Liability
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">AS-IS Disclaimer</h3>
                <p>
                  Sitecraf is provided "as-is" and "as available" without warranties
                  of any kind, express or implied. We do not warrant that our service
                  will be uninterrupted, error-free, or secure.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Liability Limitation</h3>
                <p>
                  To the maximum extent permitted by law, Sitecraf is not liable for
                  any indirect, incidental, special, consequential, or punitive
                  damages, including lost profits or data, arising from your use of
                  our services, even if we were advised of the possibility of such
                  damages.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">AI Content Liability</h3>
                <p>
                  We are not liable for any errors, inaccuracies, or issues arising
                  from AI-generated content. You acknowledge that AI tools may produce
                  biased, incomplete, or harmful output and assume full responsibility
                  for validating and using such content appropriately.
                </p>
              </div>
            </div>
          </div>

          {/* 8. Indemnification */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              8. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Sitecraf, its officers,
              directors, employees, and agents from any claims, damages, losses,
              liabilities, or expenses (including legal fees) arising from: (a) your
              use of Sitecraf; (b) content you publish using our platform; (c) your
              violation of these Terms; or (d) your infringement of any third-party
              rights.
            </p>
          </div>

          {/* 9. Termination */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              9. Termination
            </h2>
            <p className="mb-3">
              We may suspend or terminate your account if:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>You violate these Terms of Service</li>
              <li>You engage in illegal or harmful activity</li>
              <li>You have not accessed your account for more than 12 months</li>
              <li>We are required to do so by law or court order</li>
              <li>We discontinue our services entirely</li>
            </ul>
            <p className="mt-3">
              Upon termination, your right to use Sitecraf ceases immediately. We
              are not liable for any loss or inconvenience resulting from
              termination.
            </p>
          </div>

          {/* 10. Governing Law */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              10. Governing Law
            </h2>
            <p>
              These Terms of Service are governed by the laws of Delhi, India,
              without regard to its conflict of law principles. Any legal action or
              proceeding arising under these terms shall be subject to the exclusive
              jurisdiction of the courts located in Delhi, India.
            </p>
          </div>

          {/* 11. Changes to These Terms */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              11. Changes to These Terms
            </h2>
            <p>
              Sitecraf may update these Terms of Service at any time. Material
              changes will be communicated via email or prominent notice on our
              website. Your continued use of our services following the posting of
              changes constitutes your acceptance of the updated terms. It is your
              responsibility to review these terms periodically.
            </p>
          </div>

          {/* 12. Contact Us */}
          <div>
            <h2
              className="heading-sub mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              12. Contact Us
            </h2>
            <p className="mb-3">
              If you have questions about these Terms of Service, need clarification,
              or wish to report a violation, please contact us:
            </p>
            <div
              className="rounded-lg p-4"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <p>
                <strong>Sitecraf</strong>
              </p>
              <p>Email: info@sitecraf.com</p>
              <p>Website: sitecraf.com</p>
              <p>Location: India</p>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="border-t pt-8" style={{ borderColor: 'var(--color-border)' }}>
            <p className="mb-4">
              By using Sitecraf, you acknowledge that you have read and agree to
              these Terms of Service.
            </p>
            <div className="flex gap-3">
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
              <Link
                href="/privacy"
                className="inline-block rounded-lg px-6 py-3 font-semibold transition-all"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-primary)',
                  border: '1px solid var(--color-border)',
                }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
