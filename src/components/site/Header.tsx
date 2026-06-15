import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

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
  const [shopOpenMobile, setShopOpenMobile] = useState(false);
  const [arabicOpenMobile, setArabicOpenMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-border">
      <div className="container-px grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
        
        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setOpen(true)} aria-label="Menu" className="p-2 -ml-2">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:justify-self-start min-w-0">
          <div className="h-10 w-10 rounded-full bg-gold-deep grid place-items-center text-white font-serif text-lg shrink-0">JS</div>
          <div className="leading-tight min-w-0">
            <div className="font-serif text-xl truncate">JS Perfumes</div>
            <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase truncate">Essence of Luxury</div>
          </div>
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
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm mobile-drawer shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="font-serif text-xl">Menu</div>
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex flex-col p-2">
              <Link to="/" onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-md text-foreground font-serif text-[15px] hover:bg-secondary">
                Home
              </Link>
              
              {/* Collapsible Shop Submenu */}
              <div>
                <button onClick={() => setShopOpenMobile(!shopOpenMobile)} className="w-full flex items-center justify-between px-4 py-2.5 text-left text-foreground font-serif text-[15px] hover:bg-secondary rounded-md">
                  <span>Shop</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${shopOpenMobile ? "rotate-180 text-gold" : ""}`} />
                </button>
                {shopOpenMobile && (
                  <div className="pl-6 pr-2 py-1 flex flex-col gap-1.5 border-l-2 border-gold/30 ml-4 mt-1">
                    {shopCategories.map((cat) => (
                      <Link key={cat.slug} to="/category/$slug" params={{ slug: cat.slug }} onClick={() => setOpen(false)} className="px-3 py-1.5 text-[13px] text-muted-foreground hover:text-gold-deep transition-colors">
                        {cat.name}
                      </Link>
                    ))}
                    <Link to="/shop" onClick={() => setOpen(false)} className="px-3 py-1.5 text-[13px] font-semibold text-gold-deep hover:underline">
                      Shop All Collection
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/category/$slug" params={{ slug: "new-arrivals" }} onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-md text-foreground font-serif text-[15px] hover:bg-secondary">
                New Arrivals
              </Link>
              
              <Link to="/category/$slug" params={{ slug: "best-sellers" }} onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-md text-foreground font-serif text-[15px] hover:bg-secondary">
                Best Sellers
              </Link>
              
              <Link to="/category/$slug" params={{ slug: "men" }} onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-md text-foreground font-serif text-[15px] hover:bg-secondary">
                Men
              </Link>
              
              <Link to="/category/$slug" params={{ slug: "women" }} onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-md text-foreground font-serif text-[15px] hover:bg-secondary">
                Women
              </Link>

              {/* Collapsible Arabic Collection Submenu */}
              <div>
                <button onClick={() => setArabicOpenMobile(!arabicOpenMobile)} className="w-full flex items-center justify-between px-4 py-2.5 text-left text-foreground font-serif text-[15px] hover:bg-secondary rounded-md">
                  <span>Arabic Collection</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${arabicOpenMobile ? "rotate-180 text-gold" : ""}`} />
                </button>
                {arabicOpenMobile && (
                  <div className="pl-6 pr-2 py-1 flex flex-col gap-1.5 border-l-2 border-gold/30 ml-4 mt-1">
                    {arabicCollection.map((cat, i) => (
                      <Link key={`${cat.slug}-${i}`} to="/category/$slug" params={{ slug: cat.slug }} onClick={() => setOpen(false)} className="px-3 py-1.5 text-[13px] text-muted-foreground hover:text-gold-deep transition-colors">
                        {cat.name}
                      </Link>
                    ))}
                    <Link to="/category/$slug" params={{ slug: "arabic-collection" }} onClick={() => setOpen(false)} className="px-3 py-1.5 text-[13px] font-semibold text-gold-deep hover:underline">
                      View Arabic Collection
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/brands" onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-md text-foreground font-serif text-[15px] hover:bg-secondary">
                Brands
              </Link>
              
              <Link to="/about" onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-md text-foreground font-serif text-[15px] hover:bg-secondary">
                About
              </Link>
              
              <Link to="/contact" onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-md text-foreground font-serif text-[15px] hover:bg-secondary">
                Contact
              </Link>

              <div className="border-t border-border mt-3 pt-3">
                <Link to="/matcher" onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-md text-foreground font-serif text-[15px] hover:bg-secondary flex items-center gap-1.5">
                  Fragrance Finder
                </Link>
                <Link to="/blog" onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-md text-foreground font-serif text-[15px] hover:bg-secondary">Blog</Link>
                <Link to="/faq" onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-md text-foreground font-serif text-[15px] hover:bg-secondary">FAQ</Link>
              </div>
            </nav>
            <div className="mt-auto p-6 border-t border-border text-sm text-muted-foreground">
              <div className="font-semibold text-foreground mb-1">Store Helpline</div>
              <div>Nairobi: 0799 517 888</div>
              <div>Mombasa: 0740 069 588</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
