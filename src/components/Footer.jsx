import { X, ShieldCheck, FileText, Compass } from "lucide-react";

export default function Footer({ homeRef }) {
  const footerLinks = [
    { label: "Company", icon: Compass, action: () => homeRef?.current?.scrollToHero() },
    { label: "Swap", icon: Compass, action: () => homeRef?.current?.scrollToSwap() },
    { label: "Growth", icon: FileText, action: () => homeRef?.current?.scrollToChart() },
    { label: "Roadmap", icon: ShieldCheck, action: () => homeRef?.current?.scrollToRoadmap() },
    { label: "FAQ", icon: FileText, action: () => homeRef?.current?.scrollToFAQ() },
    { label: "Contact", icon: ShieldCheck, action: () => homeRef?.current?.scrollToContact() },
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 text-white/70 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
            <span className="text-white font-semibold text-lg">Lubox</span>
          </div>
          <p className="text-white/50">
            Powering financial intelligence across the 402x ecosystem. Built on ERC-8004.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-medium mb-3">Explore</h4>
          <ul className="space-y-2">
            {footerLinks.map(({ label, icon: Icon, action }) => (
              <li key={label}>
                <button
                  onClick={action}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Icon size={16} /> {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social / Legal */}
        <div>
          <h4 className="text-white font-medium mb-3">Connect</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-white">
              <X size={16} />{" "}
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <FileText size={16} />{" "}
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <ShieldCheck size={16} />{" "}
              <a href="#terms">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Lubox. All rights reserved.
      </div>
    </footer>
  );
}
