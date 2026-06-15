import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X, ChevronDown, ChevronRight, Sparkles, ArrowRight, Instagram, Facebook, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

// Brand Logo Imports
import logoLattafa from "@/assets/lattafa-logo-png_seeklogo-619588.png";
import logoArmaf from "@/assets/logo-armaf.png";
import logoRasasi from "@/assets/logo-rasasi.png";
import logoAhmedAlMaghribi from "@/assets/logo-ahmedalmaghribi.png";
import jslogo from "@/assets/jslogo.png";


const shopCategories = [
  { slug: "perfumes", name: "Perfumes", desc: "Premium designer & niche scents" },
  { slug: "ouds", name: "Ouds", desc: "Rich Arabic agarwood blends" },
  { slug: "bukhoors", name: "Bukhoors", desc: "Traditional home incense tablets" },
  { slug: "incense-burners", name: "Burners", desc: "Luxury wood & gold Mabkharas" },
  { slug: "air-fresheners", name: "Fresheners", desc: "Refreshing room & linen sprays" },
  { slug: "creams", name: "Creams", desc: "Luxurious perfumed body creams" },
  { slug: "gift-sets", name: "Gift Sets", desc: "Curated sets for special moments" },
  { slug: "perfume-oils", name: "Perfume Oils / Attars", desc: "Pure, long-lasting concentrated oils" },
  { slug: "car-fragrances", name: "Car Fragrances", desc: "Scent diffusers for your journey" },
  { slug: "home-fragrance", name: "Home Fragrance", desc: "Elegant ambient scent essentials" },
];

const arabicCollection = [
  { slug: "ouds", name: "Premium Ouds" },
  { slug: "bukhoors", name: "Bukhoors" },
  { slug: "incense-burners", name: "Luxury Burners" },
  { slug: "perfume-oils", name: "Perfume Oils" },
  { slug: "bukhoors", name: "Incense" }, // maps to bukhoors category
  { slug: "home-fragrance", name: "Home Fragrance" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-border">
        <div className="container-px grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center min-w-0">
            <img src={jslogo} alt="JS Perfumes Logo" className="h-[64px] md:h-[88px] w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-5 lg:gap-7 text-sm font-medium">
            {/* Home */}
            <Link to="/" className="text-foreground/80 hover:text-gold-deep transition-colors py-2" activeProps={{ className: "text-gold-deep font-semibold" }}>
              Home
            </Link>

            {/* Shop with Mega Menu */}
            <div className="relative group py-2">
              <Link to="/shop" className="text-foreground/80 hover:text-gold-deep transition-colors inline-flex items-center gap-0.5" activeProps={{ className: "text-gold-deep font-semibold" }}>
                Shop <ChevronDown className="h-3 w-3 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              {/* Mega Menu container */}
              <div className="absolute left-1/2 -translate-x-[45%] lg:-translate-x-1/2 top-full mt-0 w-[80vw] max-w-4xl bg-white border border-border rounded-2xl shadow-xl p-8 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-[11px] tracking-widest font-semibold uppercase text-gold mb-3">Shop Categories</div>
                    <div className="flex flex-col gap-2.5">
                      {shopCategories.slice(0, 5).map((cat) => (
                        <Link key={cat.slug} to="/category/$slug" params={{ slug: cat.slug }} className="group/item flex flex-col">
                          <span className="text-[13px] text-foreground font-serif hover:text-gold-deep transition-colors flex items-center gap-1">
                            {cat.name} <ChevronRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </span>
                          <span className="text-[10.5px] text-muted-foreground font-normal">{cat.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] tracking-widest font-semibold uppercase text-gold mb-3">Lifestyle & Gifting</div>
                    <div className="flex flex-col gap-2.5">
                      {shopCategories.slice(5).map((cat) => (
                        <Link key={cat.slug} to="/category/$slug" params={{ slug: cat.slug }} className="group/item flex flex-col">
                          <span className="text-[13px] text-foreground font-serif hover:text-gold-deep transition-colors flex items-center gap-1">
                            {cat.name} <ChevronRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </span>
                          <span className="text-[10.5px] text-muted-foreground font-normal">{cat.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#FAF8F2] p-5 rounded-xl border border-border/60 flex flex-col justify-between">
                    <div>
                      <span className="inline-flex items-center gap-1 text-[10px] tracking-widest font-semibold uppercase text-gold">
                        <Sparkles className="h-3.5 w-3.5" /> Gift Guide
                      </span>
                      <h4 className="font-serif text-base text-foreground mt-2 leading-tight">Find Their Scent</h4>
                      <p className="text-[11.5px] text-muted-foreground mt-1.5 leading-relaxed">Let our expert scent finder select the perfect fragrance style, budget and packaging for any occasion.</p>
                    </div>
                    <Link to="/matcher" className="mt-4 inline-flex items-center justify-center bg-gold hover:bg-gold-deep text-white text-[11px] font-semibold tracking-wider uppercase py-2.5 px-4 rounded-md transition duration-200">
                      Find My Scent
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* New Arrivals */}
            <Link to="/category/$slug" params={{ slug: "new-arrivals" }} className="text-foreground/80 hover:text-gold-deep transition-colors py-2" activeProps={{ className: "text-gold-deep font-semibold" }}>
              New Arrivals
            </Link>

            {/* Best Sellers */}
            <Link to="/category/$slug" params={{ slug: "best-sellers" }} className="text-foreground/80 hover:text-gold-deep transition-colors py-2" activeProps={{ className: "text-gold-deep font-semibold" }}>
              Best Sellers
            </Link>

            {/* Men */}
            <Link to="/category/$slug" params={{ slug: "men" }} className="text-foreground/80 hover:text-gold-deep transition-colors py-2" activeProps={{ className: "text-gold-deep font-semibold" }}>
              Men
            </Link>

            {/* Women */}
            <Link to="/category/$slug" params={{ slug: "women" }} className="text-foreground/80 hover:text-gold-deep transition-colors py-2" activeProps={{ className: "text-gold-deep font-semibold" }}>
              Women
            </Link>

            {/* Arabic Collection dropdown */}
            <div className="relative group py-2">
              <Link to="/category/$slug" params={{ slug: "arabic-collection" }} className="text-foreground/80 hover:text-gold-deep transition-colors inline-flex items-center gap-0.5" activeProps={{ className: "text-gold-deep font-semibold" }}>
                Arabic Collection <ChevronDown className="h-3 w-3 mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute left-0 top-full mt-0 w-56 bg-white border border-border rounded-xl shadow-lg py-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                {arabicCollection.map((cat, i) => (
                  <Link key={`${cat.slug}-${i}`} to="/category/$slug" params={{ slug: cat.slug }} className="block px-5 py-2 text-[13px] text-foreground hover:bg-secondary hover:text-gold-deep font-serif transition-colors">
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Brands */}
            <Link to="/brands" className="text-foreground/80 hover:text-gold-deep transition-colors py-2" activeProps={{ className: "text-gold-deep font-semibold" }}>
              Brands
            </Link>

            {/* About */}
            <Link to="/about" className="text-foreground/80 hover:text-gold-deep transition-colors py-2" activeProps={{ className: "text-gold-deep font-semibold" }}>
              About
            </Link>

            {/* Contact */}
            <Link to="/contact" className="text-foreground/80 hover:text-gold-deep transition-colors py-2" activeProps={{ className: "text-gold-deep font-semibold" }}>
              Contact
            </Link>
          </nav>

          {/* Right side utility icons */}
          <div className="flex items-center gap-2 md:gap-4 justify-self-end">
            <button aria-label="Search" className="p-2 hover:text-gold-deep"><Search className="h-5 w-5" /></button>
            <Link to="/wishlist" aria-label="Wishlist" className="p-2 hidden sm:inline-flex hover:text-gold-deep"><Heart className="h-5 w-5" /></Link>
            <Link to="/cart" aria-label="Cart" className="relative p-2 hover:text-gold-deep">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-gold text-white text-[10px] h-4 min-w-4 px-1 rounded-full grid place-items-center">0</span>
            </Link>
            <Link to="/account" aria-label="Account" className="p-2 hidden sm:inline-flex hover:text-gold-deep"><User className="h-5 w-5" /></Link>
            
            {/* Mobile menu trigger on the right */}
            <button onClick={() => setOpen(true)} aria-label="Menu" className="p-2 md:hidden hover:text-gold-deep -mr-2">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setOpen(false)}
          />

          {/* Full Height Fixed Drawer */}
          <aside className="absolute right-0 top-0 h-[100dvh] w-full max-w-[420px] bg-[#FAF8F4] text-[#111111] shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="shrink-0 flex items-center justify-between px-6 py-4 bg-white border-b border-[#EFEBE4]">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center min-w-0">
                <img src={jslogo} alt="JS Perfumes Logo" className="h-[56px] w-auto object-contain" />
              </Link>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="h-9 w-9 grid place-items-center rounded-full hover:bg-black/5 text-[#111111] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Small Navigation Label */}
            <div className="px-6 pt-6 shrink-0 flex items-center gap-2">
              <span className="h-[1px] w-4 bg-[#C9A227]"></span>
              <span className="text-[10px] font-sans font-bold tracking-[0.16em] text-[#C9A227] uppercase">
                Navigation
              </span>
            </div>

            {/* Main Menu */}
            <div className="flex-1 flex flex-col px-6 py-4">
              <nav className="flex flex-col border-t border-[#EFEBE4]/60">
                {[
                  { to: "/", label: "Home" },
                  { to: "/shop", label: "Shop" },
                  { to: "/category/$slug", label: "New Arrivals", params: { slug: "new-arrivals" } },
                  { to: "/category/$slug", label: "Best Sellers", params: { slug: "best-sellers" } },
                  { to: "/category/$slug", label: "Arabic Collection", params: { slug: "arabic-collection" } },
                  { to: "/brands", label: "Brands" },
                  { to: "/about", label: "About" },
                  { to: "/contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    params={item.params}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between h-[58px] border-b border-[#EFEBE4]/60 text-[#111111] hover:text-[#C9A227] transition-colors group"
                  >
                    <span className="font-serif text-[17px] tracking-wide font-medium">
                      {item.label}
                    </span>
                    <ChevronRight className="h-4 w-4 text-[#C9A227] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom CTA */}
            <div className="shrink-0 p-6 border-t border-[#EFEBE4]">
              <Link
                to="/shop"
                onClick={() => setOpen(false)}
                className="w-full h-[52px] bg-[#C9A227] hover:bg-[#B08D20] text-white font-sans font-semibold text-[13px] tracking-[0.2em] uppercase rounded-lg flex items-center justify-center shadow-sm transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}