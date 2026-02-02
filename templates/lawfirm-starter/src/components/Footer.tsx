"use client";

import Link from "next/link";
import { firmInfo, practiceAreas, officeLocations } from "@/data/mockData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-charcoal-300 mb-8 max-w-2xl mx-auto">
            Get the experienced legal representation you deserve. Contact us
            today for a free, confidential consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-3 rounded font-semibold transition-all hover:shadow-lg hover:shadow-gold-500/25"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-950 px-8 py-3 rounded font-semibold transition-all"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Firm Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-500 rounded flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-navy-950"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-serif font-bold">
                  {firmInfo.name}
                </span>
              </div>
            </div>
            <p className="text-charcoal-400 mb-6 leading-relaxed">
              Providing exceptional legal representation and trusted counsel
              since {firmInfo.founded}.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-navy-800 hover:bg-gold-500 hover:text-navy-950 rounded flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-800 hover:bg-gold-500 hover:text-navy-950 rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-800 hover:bg-gold-500 hover:text-navy-950 rounded flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-gold-400">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {practiceAreas.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-charcoal-400 hover:text-gold-400 transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-gold-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-charcoal-400 hover:text-gold-400 transition-colors"
                >
                  About Our Firm
                </Link>
              </li>
              <li>
                <Link
                  href="/attorneys"
                  className="text-charcoal-400 hover:text-gold-400 transition-colors"
                >
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="text-charcoal-400 hover:text-gold-400 transition-colors"
                >
                  Case Results
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-charcoal-400 hover:text-gold-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-charcoal-400 hover:text-gold-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-charcoal-400 hover:text-gold-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-gold-400">
              Contact Us
            </h3>
            <div className="space-y-4">
              {officeLocations.slice(0, 2).map((office) => (
                <div key={office.id} className="text-charcoal-400">
                  <p className="font-medium text-white">{office.name}</p>
                  <p className="text-sm">{office.address}</p>
                  <p className="text-sm">
                    {office.city}, {office.state} {office.zip}
                  </p>
                </div>
              ))}
              <div className="pt-2">
                <a
                  href="tel:+15551234567"
                  className="text-gold-400 hover:text-gold-300 font-medium"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-charcoal-500">
            <p>
              © {currentYear} {firmInfo.name}. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Attorney advertising. Prior results do not guarantee a similar
              outcome.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
