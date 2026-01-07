import Link from "next/link";
import { footerContent, siteInfo } from "@/constants/siteData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300" id="contact">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        
        {/* Brand & Address Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            {siteInfo.name}
          </h3>
          <p className="text-sm mb-6 leading-relaxed">
            {siteInfo.description}
          </p>
          
          <div className="space-y-3">
            {/* Highly Visible Address */}
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-lg font-extrabold text-white tracking-tight">
               21 adepeju Street, Idi-Mangoro Ikeja Lagos
              </p>
            </div>

            {/* Contact Details */}
            <div className="text-sm pt-2">
              <p className="font-bold text-slate-100">
                <span className="text-blue-400 mr-2">Phone:</span> {siteInfo.phone}
              </p>
              <p className="font-bold text-slate-100">
                <span className="text-blue-400 mr-2">Email:</span> {siteInfo.email}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {footerContent.quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-blue-400 transition font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">
            Get Started
          </h4>
          <p className="text-sm mb-6 font-bold leading-snug">
            {footerContent.cta.text}
          </p>
          <Link
            href={footerContent.cta.href}
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-black text-white hover:bg-blue-700 transition shadow-xl"
          >
            {footerContent.cta.button}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-8 text-center text-xs font-bold uppercase tracking-widest text-gray-500">
        {footerContent.copyright}
      </div>
    </footer>
  );
}