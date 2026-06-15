import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { products, brands } from "@/data/products";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import catMen from "@/assets/cat-men.jpg";
import catWomen from "@/assets/cat-women.jpg";
import catNiche from "@/assets/cat-niche.jpg";
import { ArrowRight, Award, MapPin, ShieldCheck, Truck, Sparkles, Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

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
  { image: hero1, eyebrow: "Designer & Niche", title: "Discover Your Signature Scent", sub: "Authentic designer, niche and Arabic fragrances delivered across Kenya." },
  { image: hero2, eyebrow: "Arabic Luxury", title: "Ouds, Bukhoors & Oils", sub: "Deep, lasting elegance crafted from the heart of Arabia." },
  { image: hero3, eyebrow: "Gifting Made Memorable", title: "Luxury Gift Sets", sub: "Thoughtful curations for every occasion, beautifully wrapped." },
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
      <section className="container-px pt-6">
        <div className="relative overflow-hidden rounded-3xl">
          {slides.map((s, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === slide ? 1 : 0 }}
              aria-hidden={i !== slide}
            >
              <img src={s.image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
            </div>
          ))}
          <div className="relative aspect-[16/9] md:aspect-[21/9] min-h-[420px] flex items-center">
            <div className="container-px max-w-2xl text-white">
              <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-4">{slides[slide].eyebrow}</div>
              <h1 className="font-serif text-4xl md:text-6xl leading-[1.05]">{slides[slide].title}</h1>
              <p className="mt-5 text-base md:text-lg text-white/85 max-w-lg">{slides[slide].sub}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/shop" className="btn-gold">Shop Collection <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/matcher" className="btn-ghost-white"><Sparkles className="h-4 w-4" /> Find My Scent</Link>
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

      {/* CATEGORY QUICK BLOCKS */}
      <section className="container-px mt-12 grid gap-5 md:grid-cols-3">
        {[
          { t: "Men", s: "Strength. Presence. Distinction.", to: "/category/men" },
          { t: "Women", s: "Elegance in every note.", to: "/category/women" },
          { t: "Gift Sets", s: "Thoughtful luxury, ready to gift.", to: "/category/gift-sets" },
        ].map((c) => (
          <div key={c.t} className="bg-white border border-border rounded-2xl p-6">
            <div className="eyebrow">{c.t.toUpperCase()}</div>
            <div className="mt-2 font-serif text-2xl">{c.s}</div>
            <Link to={c.to} className="mt-4 inline-flex text-sm border border-border rounded-full px-4 py-2 hover:border-gold hover:text-gold-deep">Shop Now</Link>
          </div>
        ))}
      </section>

      {/* TRUST STRIP */}
      <section className="container-px mt-12 text-center text-sm text-muted-foreground">
        <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> <span className="font-serif italic">100% Authentic</span></span>
          <span className="opacity-50">·</span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Trusted in Nairobi &amp; Mombasa</span>
          <span className="opacity-50">·</span>
          <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4 text-gold" /> Fast Delivery &amp; Pickup</span>
          <span className="opacity-50">·</span>
          <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> Secure Checkout</span>
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
            <Link to="/category/niche" className="btn-ghost-white mt-6">Shop Now</Link>
          </div>
        </div>
        <div className="grid gap-5">
          {[
            { img: catMen, title: "MEN", sub: "Strength. Presence. Distinction.", to: "/category/men" },
            { img: catWomen, title: "WOMEN", sub: "Elegance in every note.", to: "/category/women" },
          ].map((b) => (
            <div key={b.title} className="relative overflow-hidden rounded-2xl min-h-[220px]">
              <img src={b.img} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6">
                <h3 className="font-serif text-2xl md:text-3xl tracking-wide">{b.title}</h3>
                <p className="text-sm text-white/85 mt-1">{b.sub}</p>
                <Link to={b.to} className="btn-ghost-white mt-4">Shop Now</Link>
              </div>
            </div>
          ))}
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

      {/* ON OFFER */}
      <section className="container-px mt-20">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <div>
            <h2 className="eyebrow !text-foreground">On Offer</h2>
            <p className="text-sm text-muted-foreground mt-1">Exceptional fragrances. Exceptional value.</p>
          </div>
          <Link to="/category/offers" className="text-sm text-gold-deep inline-flex items-center gap-1 hover:text-gold">Show All <ArrowRight className="h-3.5 w-3.5" /></Link>
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
        <div className="text-center"><h2 className="eyebrow">Shop By Brand</h2></div>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {brands.map((b) => (
            <div key={b} className="bg-white border border-border rounded-xl py-5 px-3 text-center text-sm font-serif hover:border-gold hover:text-gold-deep transition">{b}</div>
          ))}
        </div>
      </section>

      {/* FRAGRANCE FINDER CTA */}
      <section className="container-px mt-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#2a2218] via-[#3a2e1f] to-[#1a1410] text-white px-6 py-14 md:px-16 md:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 40%)" }} />
          <div className="relative">
            <div className="eyebrow text-gold">Personal Consultation</div>
            <h2 className="font-serif text-3xl md:text-5xl mt-3">Not Sure What To Choose?</h2>
            <p className="mt-4 max-w-xl mx-auto text-white/80">Answer a few quick questions and let us guide you to the perfect scent.</p>
            <Link to="/matcher" className="btn-gold mt-7"><Sparkles className="h-4 w-4" /> Find My Scent</Link>
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

      {/* ABOUT */}
      <section className="container-px mt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow">About JS Perfumes</div>
            <h2 className="font-serif text-4xl md:text-5xl mt-2">JS Perfumes Kenya</h2>
            <div className="text-gold font-serif italic mt-1">Essence of Luxury</div>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              JS Perfumes is a premium fragrance retailer offering authentic designer perfumes, Arabic fragrances, ouds, bukhoors, gift sets and luxury scent products across Kenya. Visit us in Nairobi or Mombasa, or shop online with nationwide delivery.
            </p>
            <Link to="/about" className="btn-outline mt-6">Our Story <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "2", l: "Branches" },
              { n: "500+", l: "Products" },
              { n: "47", l: "Counties Delivered" },
              { n: "100%", l: "Authentic" },
            ].map((s) => (
              <div key={s.l} className="bg-white border border-border rounded-2xl p-6">
                <div className="font-serif text-4xl text-gold-deep">{s.n}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORE LOCATIONS */}
      <section className="container-px mt-20">
        <div className="text-center">
          <div className="eyebrow">Visit Us</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">Our Branches</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {[
            { city: "Nairobi", addr: "BBS Mall, GFB090", phone: "+254799517888", display: "0799 517 888" },
            { city: "Mombasa", addr: "Makadara Road", phone: "+254740069569", display: "0740 069 569" },
          ].map((b) => (
            <div key={b.city} className="bg-white border border-border rounded-2xl p-8">
              <div className="eyebrow">{b.city} Branch</div>
              <div className="font-serif text-2xl mt-2">{b.addr}</div>
              <div className="mt-1 text-muted-foreground text-sm">Mon–Sat: 9am – 8pm · Sun: 10am – 6pm</div>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={`tel:${b.phone}`} className="btn-outline"><Phone className="h-4 w-4" /> Call {b.display}</a>
                <a href={`https://wa.me/${b.phone.replace("+", "")}`} target="_blank" rel="noreferrer" className="btn-outline"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
                <a href="#" className="btn-outline"><MapPin className="h-4 w-4" /> Directions</a>
              </div>
            </div>
          ))}
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
