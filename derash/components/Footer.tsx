import { Twitter, Linkedin, Github, Mail, MapPin, Phone, Icon } from "lucide-react";

function DerashLogo({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.18}
      viewBox="0 0 100 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Map pin shape */}
      <path
        d="M50 2C27.9 2 10 19.9 10 42C10 64.1 50 116 50 116C50 116 90 64.1 90 42C90 19.9 72.1 2 50 2Z"
        fill="#E8182A"
      />
      {/* White horizontal divider line */}
      <line x1="14" y1="48" x2="86" y2="48" stroke="white" strokeWidth="4" />
      {/* Heartbeat / ECG line */}
      <polyline
        points="18,48 30,48 36,30 42,62 48,38 54,58 58,48 82,48"
        fill="none"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const footerLinks = {
  Navigate: [
    { label: "Features",     href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Everyone", href: "#for-everyone" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact",      href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-gray-950 dark:bg-black border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand col */}
          <div className="md:col-span-2">
            {/* Logo — map pin style matching reference */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 drop-shadow-md">
                <DerashLogo size={40} />
              </div>
              <div className="flex flex-col leading-none gap-1">
                <span className="font-extrabold text-xl text-white tracking-tight leading-none">
                  Derash
                </span>
                <span className="text-sm font-semibold text-[#1a7a4a] leading-none">
                  ደራሽ
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
              Ethiopia&apos;s emergency response and healthcare coordination platform. Someone who is there for you in your hardest times.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                Bole, Addis Ababa, Ethiopia
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-500">
                <Phone className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                Emergency: 911 · DerashCare: +251 11 000 0000
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-500">
                <Mail className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                hello@derashcare.com
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.Navigate.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} DerashCare Technologies PLC. All rights reserved. Registered in Ethiopia.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-600">🇪🇹 Made with care in Addis Ababa</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-600">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}