import Link from "next/link";
import { footerContent, siteInfo } from "@/constants/siteData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            {siteInfo.name}
          </h3>
          <p className="text-sm mb-4">{siteInfo.description}</p>
          <p className="text-sm">{siteInfo.address}</p>
          <p className="text-sm mt-2">{siteInfo.phone}</p>
          <p className="text-sm">{siteInfo.email}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {footerContent.quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-semibold text-white mb-4">Get Started</h4>
          <p className="text-sm mb-6">{footerContent.cta.text}</p>
          <Link
            href={footerContent.cta.href}
            className="inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            {footerContent.cta.button}
          </Link>
        </div>
      </div>

      {/* Google Maps Section - Centered and Responsive */}
      <div className="border-t border-white/10 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h4 className="text-center text-lg font-semibold text-white mb-6">
            Find Us Here
          </h4>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl shadow-2xl rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3963.3268300290015!2d3.3243135!3d6.6062478!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103b919c23737aaf%3A0x12cdfac6538a4406!2s21%20Adepeju%20St%2C%20Idi%20Mangoro%2C%20Lagos%20101233%2C%20Lagos!3m2!1d6.606247799999999!2d3.3243134999999997!5e0!3m2!1sen!2sng!4v1767302860614!5m2!1sen!2sng"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location on Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t border-white/10 py-6 text-center text-sm">
        {footerContent.copyright}
      </div>
    </footer>
  );
}