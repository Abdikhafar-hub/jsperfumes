import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/category/men", label: "Men" },
  { to: "/category/women", label: "Women" },
  { to: "/category/ouds", label: "Ouds" },
  { to: "/category/bukhoors", label: "Bukhoors" },
  { to: "/category/gift-sets", label: "Gift Sets" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur border-b border-border">
      <div className="container-px grid grid-cols-[auto_1fr_auto] md:grid-cols-3 items-center gap-4 py-4">
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setOpen(true)} aria-label="Menu" className="p-2 -ml-2">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <Link to="/" className="flex items-center gap-2 md:justify-self-start min-w-0">
          <div className="h-10 w-10 rounded-full bg-gold-deep grid place-items-center text-white font-serif text-lg shrink-0">JS</div>
          <div className="leading-tight min-w-0">
            <div className="font-serif text-xl truncate">JS Perfumes</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase truncate">Essence of Luxury</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/80 hover:text-gold-deep transition-colors"
              activeProps={{ className: "text-gold-deep" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4 justify-self-end">
          <button aria-label="Search" className="p-2 hover:text-gold-deep"><Search className="h-5 w-5" /></button>
          <Link to="/wishlist" aria-label="Wishlist" className="p-2 hidden sm:inline-flex hover:text-gold-deep"><Heart className="h-5 w-5" /></Link>
          <Link to="/cart" aria-label="Cart" className="relative p-2 hover:text-gold-deep">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] h-4 min-w-4 px-1 rounded-full grid place-items-center">0</span>
          </Link>
          <Link to="/account" aria-label="Account" className="p-2 hidden sm:inline-flex hover:text-gold-deep"><User className="h-5 w-5" /></Link>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[82%] max-w-sm bg-ivory shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="font-serif text-xl">Menu</div>
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex flex-col p-2">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-md text-foreground hover:bg-secondary"
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/matcher" onClick={() => setOpen(false)} className="px-4 py-3 rounded-md text-foreground hover:bg-secondary">Fragrance Finder</Link>
              <Link to="/blog" onClick={() => setOpen(false)} className="px-4 py-3 rounded-md text-foreground hover:bg-secondary">Blog</Link>
              <Link to="/faq" onClick={() => setOpen(false)} className="px-4 py-3 rounded-md text-foreground hover:bg-secondary">FAQ</Link>
            </nav>
            <div className="mt-auto p-4 border-t border-border text-sm text-muted-foreground">
              <div>Nairobi: 0799 517 888</div>
              <div>Mombasa: 0740 069 569</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
