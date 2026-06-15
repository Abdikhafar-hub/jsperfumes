import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import catMen from "@/assets/cat-men.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catNiche from "@/assets/cat-niche.jpg";
import aboutStoreInterior from "@/assets/about-store-interior.png";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import { ArrowRight, Award, MapPin, ShieldCheck, Truck, Sparkles, Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

// Brand Logo Imports
import logoLattafa from "@/assets/lattafa-logo-png_seeklogo-619588.png";
import logoArmaf from "@/assets/armaf_logo.webp";
import logoRasasi from "@/assets/rasasi.jpg";
import logoDior from "@/assets/dior.jpg";
import logoChanel from "@/assets/chanel.webp";
import logoCreed from "@/assets/logo-creed.png";
import logoTomFord from "@/assets/tomford.jpg";
import logoYsl from "@/assets/ysl.jpg";
import logoVersace from "@/assets/verseace.png";

const brandList = [
  { name: "Lattafa", logo: logoLattafa },
  { name: "Armaf", logo: logoArmaf },
  { name: "Rasasi", logo: logoRasasi },
  { name: "Dior", logo: logoDior },
  { name: "Chanel", logo: logoChanel },
  { name: "Creed", logo: logoCreed },
  { name: "Tom Ford", logo: logoTomFord },
  { name: "YSL", logo: logoYsl },
  { name: "Versace", logo: logoVersace },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JS Perfumes Kenya | Authentic Perfumes, Ouds & Bukhoors" },
      { name: "description", content: "Shop authentic designer perfumes, Arabic fragrances, ouds, bukhoors and gift sets from JS Perfumes Kenya. Visit our Nairobi and Mombasa branches or order online." },
      { property: "og:title", content: "JS Perfumes Kenya | Essence of Luxury" },
      { property: "og:description", content: "Authentic designer, niche and Arabic fragrances delivered across Kenya." },
    ],
  }),
  component: Home,
});

const slides = [
  { 
    image: hero1, 
    eyebrow: "DESIGNER FRAGRANCES • NICHE PERFUMES • ARABIC LUXURY", 
    title: "Discover Your Signature Scent", 
    sub: "Discover authentic designer fragrances,\nluxury ouds and niche perfumes curated\nfor those who appreciate distinction." 
  },
  { 
    image: hero2, 
    eyebrow: "DESIGNER FRAGRANCES • NICHE PERFUMES • ARABIC LUXURY", 
    title: "Ouds, Bukhoors & Oils", 
    sub: "Discover authentic designer fragrances,\nluxury ouds and niche perfumes curated\nfor those who appreciate distinction." 
  },
  { 
    image: hero3, 
    eyebrow: "DESIGNER FRAGRANCES • NICHE PERFUMES • ARABIC LUXURY", 
    title: "Luxury Gift Sets", 
    sub: "Discover authentic designer fragrances,\nluxury ouds and niche perfumes curated\nfor those who appreciate distinction." 
  },
];

function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const newIn = products.slice(0, 8);
  const onOffer = products.filter((p) => p.oldPrice).slice(0, 4);
  const bestSellers = [...products].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 4);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="w-full pt-0 md:pt-6 md:container-px">
        <div className="relative overflow-hidden rounded-none md:rounded-3xl h-[calc(100vh-108px)] md:h-auto">
          {slides.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === slide ? 1 : 0 }}
              aria-hidden={i !== slide}
            >
              <img src={s.image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent md:bg-gradient-to-r md:from-black/70 md:via-black/35 md:to-transparent" />
            </div>
          ))}
          <div className="relative h-full md:aspect-[21/9] md:min-h-[500px] flex items-center -translate-y-3 md:-translate-y-6">
            <div className="container-px max-w-3xl text-white py-12 md:py-0">
              <div className="text-[12px] md:text-[13px] tracking-[0.05em] font-semibold text-gold mb-6">{slides[slide].eyebrow}</div>
              <h1 className="font-serif text-[42px] sm:text-[48px] md:text-[60px] lg:text-[78px] font-medium leading-[1.02] tracking-normal">{slides[slide].title}</h1>
              <p className="mt-7 text-[17px] md:text-[20px] leading-[1.7] text-white/90 max-w-[500px] whitespace-pre-line">{slides[slide].sub}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/shop" className="h-[56px] px-8 bg-gold hover:bg-gold-deep text-white font-semibold text-xs tracking-widest uppercase rounded-[12px] flex items-center justify-center transition-all duration-300">
                  SHOP COLLECTION
                </Link>
                <Link to="/about" className="h-[56px] px-8 bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold text-xs tracking-widest uppercase rounded-[12px] flex items-center justify-center transition-all duration-300">
                  DISCOVER OUR STORY
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-gold" : "w-3 bg-white/50"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY QUICK BLOCKS & TRUST STRIP (PERFUME PLUG STYLE) */}
      <section className="hidden md:block container-px mt-12">
        <div className="bg-white border border-border rounded-2xl overflow-hidden">
          {/* Categories Grid */}
          <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-y-0 md:divide-x divide-border">
            {[
              { t: "Unisex", s: "Scents without boundaries.", to: "/category/unisex" },
              { t: "Niche", s: "Rare. Artistic. Distinct.", to: "/category/niche" },
              { t: "Gift Sets", s: "Thoughtful. Ready to Gift.", to: "/category/gift-sets" },
            ].map((c) => (
              <div key={c.t} className="p-8 md:p-10 flex flex-col items-start justify-between min-h-[190px]">
                <div>
                  <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-muted-foreground">{c.t}</div>
                  <div className="mt-3 text-[15px] text-foreground font-sans">{c.s}</div>
                </div>
                <Link
                  to={c.to}
                  className="mt-6 inline-flex text-[11px] uppercase tracking-wider font-semibold bg-secondary hover:bg-gold/15 hover:text-gold-deep text-foreground border border-border/60 px-5 py-2.5 rounded-md transition-all duration-200"
                >
                  Shop Now
                </Link>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Trust Strip */}
          <div className="bg-[#FAF8F2]/30 py-4 px-6 text-center text-[11px] tracking-[0.15em] uppercase font-medium text-muted-foreground/95">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span>100% Authentic</span>
              <span className="hidden sm:inline opacity-40">·</span>
              <span>Trusted in Nairobi &amp; Mombasa</span>
              <span className="hidden sm:inline opacity-40">·</span>
              <span>Fast Delivery &amp; Pickup</span>
              <span className="hidden sm:inline opacity-40">·</span>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEW IN STORE */}
      <section className="container-px mt-16">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <div>
            <h2 className="eyebrow !text-foreground">New In Store</h2>
            <p className="text-sm text-muted-foreground mt-1">Fresh arrivals. Just landed.</p>
          </div>
          <Link to="/shop" className="text-sm text-gold-deep inline-flex items-center gap-1 hover:text-gold">Show All <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {newIn.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="container-px mt-20 grid gap-5 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl min-h-[460px]">
          <img src={catNiche} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-10">
            <div className="eyebrow text-gold">Curated</div>
            <h3 className="font-serif text-3xl md:text-4xl mt-2 tracking-wide">NICHE FRAGRANCES</h3>
            <p className="mt-3 max-w-md text-white/85 text-sm">Rare. Artistic. Unforgettable. Discover unique scent creations crafted for true connoisseurs.</p>
            <Link to="/category/$slug" params={{ slug: "niche" }} className="btn-ghost-white mt-6">Shop Now</Link>
          </div>
        </div>
        <div className="grid gap-5">
          {[
            { img: catMen, title: "MEN", sub: "Strength. Presence. Distinction.", slug: "men" },
            { img: catWomen, title: "WOMEN", sub: "Elegance in every note.", slug: "women" },
          ].map((b) => (
            <div key={b.title} className="relative overflow-hidden rounded-2xl min-h-[220px]">
              <img src={b.img} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6">
                <h3 className="font-serif text-2xl md:text-3xl tracking-wide">{b.title}</h3>
                <p className="text-sm text-white/85 mt-1">{b.sub}</p>
                <Link to="/category/$slug" params={{ slug: b.slug }} className="btn-ghost-white mt-4">Shop Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DISCOVER THE WORLD OF OUD & BUKHOOR */}
      <section className="bg-ivory border-y border-border/40 py-20 mt-20">
        <div className="container-px">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold mb-3">Ritual & Heritage</div>
            <h2 className="font-serif text-3xl md:text-4.5xl tracking-wide">Discover The World Of Oud & Bukhoor</h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">Explore rich Arabic fragrance rituals, from premium ouds and traditional bukhoors to elegant burners and concentrated perfume oils.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Premium Ouds", desc: "Deep, mysterious woody notes crafted from rich agarwood.", img: hero2, slug: "ouds" },
              { title: "Traditional Bukhoors", desc: "Fine woodchips soaked in fragrant oils to scent your home.", img: p5, slug: "bukhoors" },
              { title: "Luxury Burners", desc: "Exquisite metal and wood Mabkharas for incense burning.", img: p5, slug: "incense-burners" },
              { title: "Perfume Oils & Attars", desc: "Concentrated, alcohol-free perfume oils that last all day.", img: p8, slug: "perfume-oils" }
            ].map((card, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[3/4] border border-border shadow-sm">
                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="font-serif text-xl sm:text-2xl tracking-wide mb-2">{card.title}</h3>
                  <p className="text-[12.5px] text-white/80 line-clamp-2 mb-4 font-sans leading-relaxed">{card.desc}</p>
                  <Link to="/category/$slug" params={{ slug: card.slug }} className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-gold hover:text-white transition-colors duration-200">
                    Shop Now <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARABIC LUXURY COLLECTION */}
      <section className="container-px mt-20">
        <div className="text-center">
          <div className="eyebrow">Arabic Luxury Collection</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">Ouds, Bukhoors &amp; Oils</h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground text-sm">Crafted for deep, lasting elegance — sourced from heritage perfumers.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { t: "Ouds", s: "ouds" },
            { t: "Bukhoors", s: "bukhoors" },
            { t: "Perfume Oils", s: "perfume-oils" },
            { t: "Incense Burners", s: "incense-burners" },
            { t: "Home Fragrance", s: "air-fresheners" },
            { t: "Aqua Perfumes", s: "aqua" },
          ].map((c) => (
            <Link key={c.s} to="/category/$slug" params={{ slug: c.s }} className="bg-white border border-border rounded-xl p-5 text-center hover:border-gold hover:-translate-y-0.5 transition">
              <div className="h-12 w-12 mx-auto rounded-full bg-secondary grid place-items-center text-gold-deep font-serif text-lg">{c.t[0]}</div>
              <div className="font-serif mt-3">{c.t}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOME & LIFESTYLE FRAGRANCE */}
      <section className="py-20 bg-white border-b border-border/40 mt-20">
        <div className="container-px">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold mb-3">Scents For Every Space</div>
            <h2 className="font-serif text-3xl md:text-4.5xl tracking-wide">Scents For Every Space</h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">Elevate your home, car and daily routine with long-lasting fragrance essentials.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {[
              { title: "Air Fresheners", desc: "Long lasting sprays", img: p7, slug: "air-fresheners" },
              { title: "Room Sprays", desc: "Instant scent refresh", img: p7, slug: "air-fresheners" },
              { title: "Linen Sprays", desc: "For fabrics & sheets", img: p7, slug: "air-fresheners" },
              { title: "Car Fragrances", desc: "Sensory journey", img: p1, slug: "car-fragrances" },
              { title: "Creams", desc: "Perfumed body hydration", img: p3, slug: "creams" },
              { title: "Home Scents", desc: "Rich ambient aromas", img: p5, slug: "home-fragrance" }
            ].map((card, i) => (
              <Link key={i} to="/category/$slug" params={{ slug: card.slug }} className="group bg-ivory border border-border/60 hover:border-gold hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden flex flex-col p-3">
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-200" />
                </div>
                <div className="mt-3 flex-grow flex flex-col justify-between">
                  <h3 className="font-serif text-[15px] font-semibold text-foreground leading-tight group-hover:text-gold-deep">{card.title}</h3>
                  <p className="text-[10.5px] text-muted-foreground mt-1 line-clamp-1">{card.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ON OFFER */}
      <section className="container-px mt-20">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <div>
            <h2 className="eyebrow !text-foreground">On Offer</h2>
            <p className="text-sm text-muted-foreground mt-1">Exceptional fragrances. Exceptional value.</p>
          </div>
          <Link to="/category/$slug" params={{ slug: "offers" }} className="text-sm text-gold-deep inline-flex items-center gap-1 hover:text-gold">Show All <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {onOffer.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="container-px mt-20">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <div>
            <h2 className="eyebrow !text-foreground">Best Sellers</h2>
            <p className="text-sm text-muted-foreground mt-1">Loved by our community.</p>
          </div>
          <Link to="/shop" className="text-sm text-gold-deep inline-flex items-center gap-1 hover:text-gold">Show All <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* SHOP BY BRAND */}
      <section className="container-px mt-20">
        <div className="text-center">
          <h2 className="eyebrow !text-foreground tracking-[0.2em] uppercase font-semibold">SHOP BY BRAND</h2>
        </div>
        <div className="mt-8 relative w-full overflow-hidden py-4 border-y border-border/40">
          <div className="marquee hover:[animation-play-state:paused]">
            {/* First Copy */}
            {brandList.map((b) => (
              <Link
                key={`b1-${b.name}`}
                to="/shop"
                search={{ brand: b.name }}
                className="group flex items-center justify-center h-16 md:h-20 w-32 md:w-40 shrink-0 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={b.logo}
                  alt={`${b.name} perfumes Kenya`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </Link>
            ))}
            {/* Second Copy (Seamless loop boundary) */}
            {brandList.map((b) => (
              <Link
                key={`b2-${b.name}`}
                to="/shop"
                search={{ brand: b.name }}
                className="group flex items-center justify-center h-16 md:h-20 w-32 md:w-40 shrink-0 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={b.logo}
                  alt={`${b.name} perfumes Kenya`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center border border-border/80 hover:border-gold hover:text-gold-deep text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full bg-white transition-all duration-200"
          >
            View All Brands
          </Link>
        </div>
      </section>

      {/* FRAGRANCE CONSULTATION */}
      <section className="container-px mt-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#120F0B] via-[#211A13] to-[#0A0806] text-white px-6 py-16 md:px-16 md:py-20 relative overflow-hidden border border-gold/25 shadow-2xl">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 40%)" }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="eyebrow text-gold">Scent Matcher</div>
            <h2 className="font-serif text-3xl md:text-5xl mt-3 tracking-wide">Need Help Choosing The Right Scent?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/80 text-sm md:text-base leading-relaxed">Tell us your style, occasion and budget. Our fragrance experts will recommend the perfect perfume, oud or gift set.</p>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-left border-t border-white/10 pt-10">
              {[
                { step: "1", title: "Who It's For", desc: "Select men, women, or unisex" },
                { step: "2", title: "Scent Family", desc: "Choose floral, woody, oud, spicy..." },
                { step: "3", title: "Share Budget", desc: "Specify price range preference" },
                { step: "4", title: "Recommendations", desc: "Receive curations on WhatsApp" }
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-2 bg-white/5 border border-white/10 rounded-xl p-4 md:p-5">
                  <div className="h-7 w-7 rounded-full bg-gold text-white font-serif font-semibold text-sm grid place-items-center">{s.step}</div>
                  <h3 className="font-serif text-[15px] font-semibold text-white/95 mt-1 leading-tight">{s.title}</h3>
                  <p className="text-[11px] text-white/60 leading-normal">{s.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link to="/matcher" className="btn-gold"><Sparkles className="h-4 w-4" /> Find My Scent</Link>
              <a href="https://wa.me/254799517888" target="_blank" rel="noreferrer" className="btn-outline !text-white border-white/35 hover:border-gold hover:text-gold"><MessageCircle className="h-4 w-4" /> Chat With Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP BY OCCASION */}
      <section className="container-px mt-20">
        <div className="text-center">
          <div className="eyebrow">Shop By Occasion</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">A Scent For Every Moment</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {["Daily Wear", "Office", "Wedding", "Eid Gifts", "Date Night", "Corporate Gifts", "Luxury Gifting"].map((o) => (
            <div key={o} className="bg-white border border-border rounded-xl py-6 text-center text-sm font-serif hover:border-gold hover:text-gold-deep transition">{o}</div>
          ))}
        </div>
      </section>

      {/* LUXURY GIFTING */}
      <section className="bg-ivory py-20 border-y border-border/40 mt-20">
        <div className="container-px">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold mb-3">Exquisite Presents</div>
            <h2 className="font-serif text-3xl md:text-4.5xl tracking-wide">Luxury Gifts For Every Occasion</h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">Curated fragrance gifts for weddings, Eid, birthdays, corporate gifting and special moments.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {[
              { title: "Wedding Gifts", desc: "Bridal scent boxes", img: catWomen },
              { title: "Eid Gifts", desc: "Celebration gift sets", img: hero3 },
              { title: "Birthday Gifts", desc: "Personalized perfumes", img: p6 },
              { title: "Corporate Gifts", desc: "Luxury business gifts", img: p2 },
              { title: "Premium Gift Boxes", desc: "Custom leather wrapping", img: p6 },
              { title: "Gift Vouchers", desc: "Give the gift of choice", img: p6 }
            ].map((card, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-[3/4] border border-border shadow-xs">
                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white text-center">
                  <h3 className="font-serif text-[15px] sm:text-[17px] tracking-wide mb-1 leading-snug">{card.title}</h3>
                  <p className="text-[10px] text-white/75 font-sans mt-0.5 line-clamp-1">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/category/$slug" params={{ slug: "gift-sets" }} className="btn-gold px-8 py-3.5 text-xs tracking-widest font-semibold uppercase">
              Shop Gift Sets
            </Link>
            <a href="https://wa.me/254799517888?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20corporate%20gifting%20sets." target="_blank" rel="noreferrer" className="btn-outline px-8 py-3.5 text-xs tracking-widest font-semibold uppercase bg-white">
              Request Corporate Gift Quote
            </a>
          </div>
        </div>
      </section>

      {/* STORE EXPERIENCE */}
      <section className="py-20 bg-white border-b border-border/40 mt-20">
        <div className="container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Images Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:order-2">
              <div className="sm:col-span-3 aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-xs">
                <img src={aboutStoreInterior} alt="JS Perfumes Boutique Interior" className="w-full h-full object-cover hover:scale-102 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-xs flex flex-col">
                <img src={catNiche} alt="Product Shelves" className="w-full h-[75%] object-cover" loading="lazy" />
                <div className="h-[25%] flex items-center justify-center bg-[#FAF8F2] text-[10px] tracking-wider uppercase font-semibold border-t border-border">Shelves</div>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-xs flex flex-col">
                <img src={p5} alt="Oud & Bukhoor Display" className="w-full h-[75%] object-cover" loading="lazy" />
                <div className="h-[25%] flex items-center justify-center bg-[#FAF8F2] text-[10px] tracking-wider uppercase font-semibold border-t border-border">Displays</div>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-xs flex flex-col">
                <img src={catWomen} alt="Consultation" className="w-full h-[75%] object-cover" loading="lazy" />
                <div className="h-[25%] flex items-center justify-center bg-[#FAF8F2] text-[10px] tracking-wider uppercase font-semibold border-t border-border">Consultation</div>
              </div>
            </div>

            {/* Text Details */}
            <div className="flex flex-col justify-center lg:order-1">
              <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-gold mb-3">Bespoke Experience</div>
              <h2 className="font-serif text-3xl md:text-4.5xl tracking-wide mb-6">Experience Fragrance In Person</h2>
              <p className="text-muted-foreground text-[14px] leading-relaxed mb-8 font-sans">
                Visit JS Perfumes in Nairobi or Mombasa for personal fragrance guidance, product testing and luxury gifting advice. Our stores showcase a complete array of authentic designer fragrances, rare niche creations, traditional Arabic ouds and smoking bukhoors.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/about#stores" className="btn-gold px-7 py-3 text-xs uppercase tracking-widest font-semibold">
                  Visit Our Stores
                </a>
                <a href="https://wa.me/254799517888" target="_blank" rel="noreferrer" className="btn-outline px-7 py-3 text-xs uppercase tracking-widest font-semibold bg-white">
                  Chat On WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* INSTAGRAM */}
      <section className="container-px mt-20">
        <div className="text-center">
          <div className="eyebrow">@jsperfumeske</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">Follow JS Perfumes</h2>
          <p className="mt-2 text-sm text-muted-foreground">See our latest arrivals, reviews and fragrance recommendations.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.slice(0, 6).map((p) => (
            <a key={p.id} href="https://instagram.com/jsperfumeske" target="_blank" rel="noreferrer" className="aspect-square overflow-hidden rounded-xl border border-border bg-white">
              <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
            </a>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-px mt-20">
        <div className="text-center">
          <div className="eyebrow">What Our Clients Say</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">Trusted Across Kenya</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {[
            { n: "Amina H.", c: "Mombasa", r: "Authentic, fast delivery and the oud is divine. JS Perfumes is now my go-to." },
            { n: "Kevin O.", c: "Nairobi", r: "Bought Sauvage from the BBS Mall branch. Genuine product and lovely staff." },
            { n: "Faith W.", c: "Kisumu", r: "Ordered a gift set for my sister. Beautifully wrapped and arrived in two days." },
          ].map((t) => (
            <div key={t.n} className="bg-white border border-border rounded-2xl p-6">
              <div className="text-gold">★★★★★</div>
              <p className="mt-3 text-sm leading-relaxed">{t.r}</p>
              <div className="mt-4 font-serif">{t.n}</div>
              <div className="text-xs text-muted-foreground">{t.c}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-px mt-20">
        <div className="rounded-3xl bg-white border border-border p-10 md:p-16 text-center">
          <div className="eyebrow">Join The Community</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">Get First Access To New Arrivals</h2>
          <p className="mt-3 max-w-xl mx-auto text-muted-foreground">Offers, restocks and personal fragrance recommendations.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/254799517888" className="btn-gold"><MessageCircle className="h-4 w-4" /> Join WhatsApp</a>
            <a href="https://instagram.com/jsperfumeske" className="btn-outline">Follow Instagram</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
