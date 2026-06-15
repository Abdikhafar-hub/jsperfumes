import { Facebook, Instagram, Phone } from "lucide-react";

const items = [
  "CAN YOU RESIST…?",
  "AUTHENTIC FRAGRANCES",
  "NAIROBI & MOMBASA",
  "DELIVERY ACROSS KENYA",
];

export function AnnouncementBar() {
  return (
    <div className="bg-gold-deep text-white text-xs">
      <div className="container-px flex items-center justify-between gap-4 py-2">
        <a href="tel:+254799517888" className="hidden md:inline-flex items-center gap-2 shrink-0 opacity-90 hover:opacity-100">
          <Phone className="h-3.5 w-3.5" /> +254 799 517 888
        </a>
        <div className="flex-1 overflow-hidden min-w-0">
          <div className="marquee tracking-[0.25em]">
            {[...items, ...items, ...items].map((t, i) => (
              <span key={i} className="opacity-90">✦ {t}</span>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a href="https://instagram.com/jsperfumeske" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
          <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
  );
}
