import { Link } from "@tanstack/react-router";
import { MessageCircle, Sparkles } from "lucide-react";

export function StickyButtons() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 items-end">
      <Link
        to="/matcher"
        className="inline-flex items-center gap-2 bg-gold text-white rounded-full px-5 py-3 shadow-lg hover:bg-gold-deep transition-colors text-sm font-medium"
      >
        <Sparkles className="h-4 w-4" /> Find My Scent
      </Link>
      <a
        href="https://wa.me/254799517888"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] text-white rounded-full px-5 py-3 shadow-lg hover:brightness-95 transition text-sm font-medium"
      >
        <MessageCircle className="h-4 w-4" /> Chat With Us
      </a>
    </div>
  );
}
