import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
const hero1 = "/lifestyle/hero-1.jpg";
const hero2 = "/lifestyle/hero-2.jpg";
const hero3 = "/lifestyle/hero-3.jpg";
const catMen = "/categories/cat-men.jpg";
const catWomen = "/categories/cat-women.jpg";
const catNiche = "/categories/cat-niche.jpg";
const aboutStoreInterior = "/lifestyle/about-store-interior.png";
import { ArrowRight, Award, MapPin, ShieldCheck, Truck, Sparkles, Phone, MessageCircle, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

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

const campaignImages = [hero1, hero2, hero3];

function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % campaignImages.length), 6000);
    return () => clearInterval(t);
  }, []);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) return;
    
    const updateStates = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };
    
    updateStates();
    api.on("select", updateStates);
    api.on("reInit", updateStates);
    
    return () => {
      api.off("select", updateStates);
      api.off("reInit", updateStates);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isHovered) return;
    
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api, isHovered]);

  const newIn = products.slice(0, 8);
  const onOffer = products.filter((p) => p.oldPrice).slice(0, 4);
  const bestSellers = [...products].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 4);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="w-full pt-0 md:pt-6 md:container-px">
        <div className="relative overflow-hidden rounded-none md:rounded-3xl h-[80vh] md:h-[calc(100vh-140px)] min-h-[550px] md:min-h-[700px] border border-border/20 shadow-xs">
          
          {/* Background Image Slider Panel */}
          <div className="absolute inset-0 overflow-hidden">
            {campaignImages.map((img, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: i === slide ? 1 : 0 }}
                aria-hidden={i !== slide}
              >
                <img src={img} alt="JS Perfumes Luxury Campaign" className="h-full w-full object-cover" />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
              </div>
            ))}
          </div>

          {/* Editorial Text Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] font-semibold text-gold mb-4 md:mb-6 block uppercase">
              EST. NAIROBI & MOMBASA
            </span>
            
            <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[60px] lg:text-[76px] xl:text-[86px] font-medium leading-[0.96] tracking-tight text-white">
              Fragrance,<br />Refined.
            </h1>
            
            <p className="mt-6 md:mt-8 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.7] text-white/80 max-w-[360px] whitespace-pre-line">
              Authentic designer fragrances,{"\n"}
              rare niche perfumes,{"\n"}
              and timeless Arabic luxury.
            </p>
            <div className="mt-6 md:mt-8 flex flex-row gap-3 max-w-[340px] md:max-w-[380px]">
              <Link 
                to="/shop" 
                className="flex-1 h-[42px] md:h-[52px] px-4 bg-[#C9A227] hover:bg-[#B08D20] text-white font-semibold text-[10px] md:text-xs tracking-widest uppercase rounded-[8px] flex items-center justify-center transition-all duration-300"
              >
                SHOP COLLECTION
              </Link>
              <Link 
                to="/about" 
                className="flex-1 h-[42px] md:h-[52px] px-4 bg-transparent border border-white/40 hover:border-white text-white font-semibold text-[10px] md:text-xs tracking-widest uppercase rounded-[8px] flex items-center justify-center transition-all duration-300"
              >
                VISIT OUR STORES
              </Link>
            </div>
          </div>

          {/* Slider Dots Indicator */}
          <div className="absolute bottom-6 right-6 flex gap-2.5 z-10">
            {campaignImages.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setSlide(i)} 
                aria-label={`Campaign Slide ${i + 1}`} 
                className={`h-1.5 rounded-full transition-all duration-300 ${i === slide ? "w-8 bg-white" : "w-2.5 bg-white/40"}`} 
              />
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
              { title: "Traditional Bukhoors", desc: "Fine woodchips soaked in fragrant oils to scent your home.", img: "/categories/bukhoors.jpg", slug: "bukhoors" },
              { title: "Luxury Burners", desc: "Exquisite metal and wood Mabkharas for incense burning.", img: "/categories/incense-burners.jpg", slug: "incense-burners" },
              { title: "Perfume Oils & Attars", desc: "Concentrated, alcohol-free perfume oils that last all day.", img: "/categories/perfume-oils.jpg", slug: "perfume-oils" }
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
              { title: "Air Fresheners", desc: "Long lasting sprays", img: "/categories/air-fresheners.jpg", slug: "air-fresheners" },
              { title: "Room Sprays", desc: "Instant scent refresh", img: "/categories/room-sprays.jpg", slug: "air-fresheners" },
              { title: "Linen Sprays", desc: "For fabrics & sheets", img: "/categories/linen-sprays.jpg", slug: "air-fresheners" },
              { title: "Car Fragrances", desc: "Sensory journey", img: "/categories/car-fragrances.jpg", slug: "car-fragrances" },
              { title: "Creams", desc: "Perfumed body hydration", img: "/categories/creams.jpg", slug: "creams" },
              { title: "Home Scents", desc: "Rich ambient aromas", img: "/categories/home-fragrance.jpg", slug: "home-fragrance" }
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
        <div className="rounded-3xl bg-[#FAF8F2] border border-gold/30 px-6 py-12 md:p-12 lg:p-16 relative overflow-hidden shadow-xs">
          
          {/* Decorative subtle background radial glow */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 40%)" }} />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-[58%_42%] gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Text & Timeline & Actions */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              
              {/* Badge */}
              <div className="flex">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/10 text-gold-deep text-[10px] md:text-[11px] font-semibold tracking-wider uppercase">
                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                  Personal Fragrance Concierge
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl md:text-4.5xl mt-5 tracking-wide text-foreground font-medium leading-tight">
                Find Your Signature Scent
              </h2>
              
              {/* Subtext */}
              <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
                Answer a few quick questions and our team will recommend perfumes, ouds, oils or gift sets that match your style and budget.
              </p>

              {/* Steps Timeline */}
              <div className="relative mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                {/* Connecting Line for Mobile (Vertical) */}
                <div className="md:hidden absolute top-5 bottom-5 left-5 w-[1px] bg-[#E7DEC8]" />
                
                {/* Connecting Line for Desktop (Horizontal) */}
                <div className="hidden md:block absolute top-5 left-[12%] right-[12%] h-[1px] bg-[#E7DEC8]" />

                {[
                  { step: "1", title: "Who It's For", desc: "Select men, women, or unisex" },
                  { step: "2", title: "Scent Family", desc: "Choose floral, woody, oud, spicy..." },
                  { step: "3", title: "Share Budget", desc: "Specify price range preference" },
                  { step: "4", title: "Recommendations", desc: "Receive curations on WhatsApp" }
                ].map((s, i) => (
                  <div key={i} className="flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-2.5 relative z-10">
                    {/* Number Circle */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold text-white font-serif font-semibold text-sm grid place-items-center border-4 border-[#FAF8F2] shadow-xs">
                      {s.step}
                    </div>
                    {/* Text Details */}
                    <div className="flex-grow">
                      <h3 className="font-serif text-[15px] font-semibold text-foreground leading-tight md:mt-2">
                        {s.title}
                      </h3>
                      <p className="text-[12px] md:text-[13px] text-muted-foreground mt-1 leading-relaxed md:max-w-[130px] md:mx-auto">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/matcher" 
                  className="btn-gold justify-center h-[52px] sm:h-auto font-semibold uppercase tracking-wider text-xs px-8"
                >
                  <Sparkles className="h-4 w-4" /> Find My Scent
                </Link>
                <a 
                  href="https://wa.me/254799517888" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-outline justify-center h-[52px] sm:h-auto bg-white font-semibold uppercase tracking-wider text-xs px-8"
                >
                  <MessageCircle className="h-4 w-4" /> Chat With Us
                </a>
              </div>

            </div>

            {/* Right Column: Visual Image */}
            <div className="relative aspect-[4/3] lg:aspect-[4/5] xl:aspect-[3/4] overflow-hidden rounded-2xl border border-[#E7DEC8]/50 shadow-xs order-1 lg:order-2">
              <img 
                src="/lifestyle/hero-1.jpg" 
                alt="JS Perfumes Luxury Concierge Experience" 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-700" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-black/5" />
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
              { title: "Birthday Gifts", desc: "Personalized perfumes", img: "/products/luxury-gift-set.jpg" },
              { title: "Corporate Gifts", desc: "Luxury business gifts", img: "/products/gift-voucher.jpg" },
              { title: "Premium Gift Boxes", desc: "Custom leather wrapping", img: "/products/eid-mubarak-gift-box.jpg" },
              { title: "Gift Vouchers", desc: "Give the gift of choice", img: "/products/gift-voucher.jpg" }
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
                <img src={"/categories/bukhoors.jpg"} alt="Oud & Bukhoor Display" className="w-full h-[75%] object-cover" loading="lazy" />
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
        
        <div 
          className="mt-8 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {[
                { 
                  n: "Amina H.", 
                  c: "Mombasa", 
                  r: "Authentic oud, fast delivery, and beautiful packaging.",
                  i: "AH"
                },
                { 
                  n: "Kevin O.", 
                  c: "Nairobi", 
                  r: "Bought Sauvage from the BBS Mall branch. Genuine product and lovely staff.",
                  i: "KO"
                },
                { 
                  n: "Faith W.", 
                  c: "Kisumu", 
                  r: "Ordered a gift set for my sister. It arrived beautifully wrapped.",
                  i: "FW"
                },
                { 
                  n: "Farhana Y.", 
                  c: "Mombasa", 
                  r: "The bukhoor quality is amazing. My home smells luxurious.",
                  i: "FY"
                },
                { 
                  n: "Brian K.", 
                  c: "Nairobi", 
                  r: "Customer service helped me pick the perfect scent.",
                  i: "BK"
                },
              ].map((t, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3 flex">
                  <div className="w-full p-1 flex">
                    <div className="bg-[#FAF8F2] border border-gold/30 rounded-2xl p-8 shadow-sm flex flex-col justify-between w-full relative overflow-hidden group hover:border-gold hover:shadow-md transition-all duration-300">
                      {/* Top Right Decorative Quote Icon */}
                      <div className="absolute top-6 right-6 text-gold/10 group-hover:text-gold/20 transition-colors duration-300">
                        <Quote className="h-12 w-12 transform scale-x-[-1]" />
                      </div>

                      <div>
                        {/* Star Rating */}
                        <div className="flex gap-1 text-gold text-sm">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>

                        {/* Review text */}
                        <p className="mt-5 text-foreground/95 text-[15px] italic leading-relaxed font-serif">
                          “{t.r}”
                        </p>
                      </div>

                      {/* Client Info with Avatar */}
                      <div className="mt-8 flex items-center gap-3.5 border-t border-[#E7DEC8]/40 pt-5">
                        {/* Avatar initials badge */}
                        <div className="h-10 w-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-gold-deep text-xs font-semibold tracking-wider">
                          {t.i}
                        </div>
                        
                        <div>
                          <div className="font-serif text-[15px] font-semibold text-foreground leading-none">{t.n}</div>
                          <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-gold/70" />
                            {t.c}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Centered Controls: Arrows and Dots */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold-deep hover:text-gold transition-all duration-300" />
              
              {/* Dots */}
              <div className="flex gap-2">
                {Array.from({ length: count }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      current === i ? "w-8 bg-gold" : "w-2.5 bg-[#E7DEC8] hover:bg-gold/50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              
              <CarouselNext className="static translate-y-0 h-10 w-10 border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold-deep hover:text-gold transition-all duration-300" />
            </div>
          </Carousel>
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
