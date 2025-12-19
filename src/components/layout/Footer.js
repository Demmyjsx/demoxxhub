import Link from "next/link";
import { footerContent, siteInfo } from "@/constants/siteData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
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

      <div className="border-t border-white/10 py-6 text-center text-sm">
        {footerContent.copyright}
      </div>
    </footer>
  );
}
