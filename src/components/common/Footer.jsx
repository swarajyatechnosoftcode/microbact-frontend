import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-green-500 via-emerald-600 to-green-600 text-white">

      {/* Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Microbact Bioculters</h3>
            <p className="text-white/85 leading-relaxed">
              Advancing biotech innovation with trusted, sustainable solutions.
            </p>

            <div className="flex gap-4 mt-6">
              {["F", "I", "L", "Y"].map((icon) => (
                <div
                  key={icon}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 ring-1 ring-white/25 flex items-center justify-center transition transform hover:scale-110"
                >
                  <span className="font-bold">{icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Products", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-white/85">
              <li>📍 Ground Floor, Shop No 1, Gat No 12/1/2, Kasarsai Road, Sumit Mens Parlour, Nere, Pune, Maharashtra - 410506, India</li>
              <li>
                ✉️{" "}
                <a href="mailto:Info.microbactbiocultures@gmail.com" className="hover:text-white">
                  Info.microbactbiocultures@gmail.com
                </a>
              </li>
              <li>
                📞{" "}
                <a href="tel:9518735229" className="hover:text-white">
                  9518735229 / 9665755442
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/25 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/75 text-sm">
            © {year} Microbact Bioculters. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/75">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
