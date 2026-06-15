import { Link } from "@tanstack/react-router";
import { MessageCircle, Award } from "lucide-react";

export function StickyButtons() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3 items-end">
      <Link
        to="/about"
        className="flex items-center justify-center bg-gold text-white rounded-full shadow-lg hover:bg-gold-deep transition-colors text-sm font-medium w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3 gap-0 md:gap-2"
        title="About JS Perfumes"
      >
        <Award className="h-5 w-5 md:h-4 md:w-4 shrink-0" />
        <span className="hidden md:inline">About JS Perfumes</span>
      </Link>
      <a
        href="https://wa.me/254799517888"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg hover:brightness-95 transition text-sm font-medium w-12 h-12 md:w-auto md:h-auto md:px-5 md:py-3 gap-0 md:gap-2"
        title="Chat With Us"
      >
        <MessageCircle className="h-5 w-5 md:h-4 md:w-4 shrink-0" />
        <span className="hidden md:inline">Chat With Us</span>
      </a>
    </div>
  );
}
