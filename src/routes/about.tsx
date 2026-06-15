import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  ShieldCheck,
  Award,
  MapPin,
  Truck,
  Sparkles,
  Phone,
  MessageCircle,
  Gift,
  Instagram,
  Users
} from "lucide-react";

const imgStoreInterior = "/lifestyle/about-store-interior.png";
const imgDarkPerfume = "/lifestyle/hero-2.jpg";
const imgBranchNairobi = "/lifestyle/hero-1.jpg";
const imgBranchMombasa = "/lifestyle/about-store-interior.png";
const imgDailyWear = "/categories/cat-men.jpg";
const imgOffice = "/products/armaf-cdn-intense.jpg";
const imgDateNight = "/categories/cat-niche.jpg";
const imgWeddings = "/categories/cat-women.jpg";
const imgGifting = "/products/luxury-gift-set.jpg";
const imgLuxuryColl = "/lifestyle/hero-3.jpg";

const imgIg1 = "/products/lattafa-asad.jpg";
const imgIg2 = "/products/armaf-cdn-intense.jpg";
const imgIg3 = "/products/dior-sauvage.jpg";
const imgIg4 = "/products/ysl-libre.jpg";
const imgIg5 = "/products/lattafa-yara.jpg";
const imgIg6 = "/products/creed-aventus.jpg";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story - JS Perfumes Kenya | Essence of Luxury" },
      { name: "description", content: "Learn about JS Perfumes Kenya, our boutiques in Nairobi and Mombasa, and our commitment to authentic luxury fragrances." }
    ]
  }),
  component: About
});

function About() {
  return (
    <SiteLayout>
      {/* 1. FULL WIDTH TOP STORY SPLIT SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-ivory">
        {/* Left Side: Store Interior Image */}
        <div className="relative w-full h-[320px] sm:h-[450px] lg:h-auto min-h-[320px] lg:min-h-[650px] overflow-hidden">
          <img
            src={imgStoreInterior}
            alt="JS Perfumes store interior"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center px-6 py-12 sm:py-16 md:p-16 lg:p-24 bg-ivory">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#8B7330] mb-4">
            OUR STORY
          </div>
          <h1 className="font-serif font-light text-3xl sm:text-4.5xl lg:text-5xl text-[#171717] leading-[1.15] mb-6">
            More Than Perfumes.<br />
            A Destination For<br />
            Fragrance Lovers.
          </h1>
          
          {/* Gold Divider Line */}
          <div className="w-20 h-[1.5px] bg-[#C9A227] mb-8" />
          
          <div className="text-[13.5px] sm:text-[14.5px] text-[#4F4A40] leading-relaxed space-y-5 font-sans">
            <p>
              Since opening our doors in Nairobi and Mombasa, JS Perfumes has become
              one of Kenya's trusted destinations for authentic designer fragrances,
              Arabic perfumes, luxury ouds, and bukhoors.
            </p>
            <p>
              We believe fragrance is personal. It tells your story before you speak.
              Whether you are searching for your signature scent, a luxury gift,
              or a rare oud, our mission is to help you discover fragrances that
              leave a lasting impression.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#stores"
              className="bg-[#C9A227] hover:bg-[#6B5A24] text-white text-[11px] font-semibold uppercase tracking-[0.2em] px-7 py-3.5 transition duration-200"
            >
              VISIT OUR STORES
            </a>
            <Link
              to="/shop"
              className="border border-[#E7DEC8] hover:border-[#C9A227] text-[#171717] hover:text-[#C9A227] text-[11px] font-semibold uppercase tracking-[0.2em] px-7 py-3.5 bg-transparent transition duration-200"
            >
              SHOP COLLECTION
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PROMISE SPLIT SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white border-y border-border/40">
        {/* Left Side: Content block */}
        <div className="flex flex-col justify-center px-6 py-12 sm:py-16 md:p-16 lg:p-24 order-2 lg:order-1 bg-white">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#8B7330] mb-4">
            OUR PROMISE
          </div>
          <h2 className="font-serif font-light text-3xl sm:text-4.5xl lg:text-5xl text-[#171717] leading-[1.15] mb-10">
            The Art Of<br />
            Authentic Fragrance
          </h2>

          <div className="space-y-8 max-w-xl">
            {/* Row 1 */}
            <div className="flex gap-4">
              <ShieldCheck className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-[16px] sm:text-[18px] text-[#171717] font-medium leading-none">
                  100% Authentic Products
                </h3>
                <p className="text-[12.5px] sm:text-[13.5px] text-[#6F6A60] leading-relaxed mt-1.5 font-sans">
                  We source only genuine fragrances from trusted distributors and global brands.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-4">
              <Award className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-[16px] sm:text-[18px] text-[#171717] font-medium leading-none">
                  Curated Global Brands
                </h3>
                <p className="text-[12.5px] sm:text-[13.5px] text-[#6F6A60] leading-relaxed mt-1.5 font-sans">
                  From world-renowned designers to niche and Arabic perfumers, all in one place.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-4">
              <Users className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-[16px] sm:text-[18px] text-[#171717] font-medium leading-none">
                  Expert Fragrance Guidance
                </h3>
                <p className="text-[12.5px] sm:text-[13.5px] text-[#6F6A60] leading-relaxed mt-1.5 font-sans">
                  Our team helps you find the perfect scent that matches your personality and style.
                </p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex gap-4">
              <Truck className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-[16px] sm:text-[18px] text-[#171717] font-medium leading-none">
                  Nationwide Delivery
                </h3>
                <p className="text-[12.5px] sm:text-[13.5px] text-[#6F6A60] leading-relaxed mt-1.5 font-sans">
                  Fast, secure and reliable delivery across Kenya to your doorstep.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/about"
              className="border border-[#E7DEC8] hover:border-[#C9A227] text-[#171717] hover:text-[#C9A227] text-[11px] font-semibold uppercase tracking-[0.2em] px-7 py-3.5 bg-transparent transition duration-200"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>

        {/* Right Side: Large Dark Luxury Perfume Image */}
        <div className="relative w-full h-[320px] sm:h-[450px] lg:h-auto min-h-[320px] lg:min-h-[650px] overflow-hidden order-1 lg:order-2">
          <img
            src={imgDarkPerfume}
            alt="Authentic luxury fragrance promise"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* 3. STORE VISIT SECTION */}
      <section id="stores" className="py-16 md:py-24 container-px bg-ivory scroll-mt-20">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#8B7330] mb-3">
            OUR STORES
          </div>
          <h2 className="font-serif font-light text-3xl sm:text-4.5xl text-[#171717] leading-tight">
            Visit Us In Nairobi &amp; Mombasa
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Nairobi Branch */}
          <div className="flex flex-col md:flex-row bg-white border border-[#E7DEC8]/50 overflow-hidden shadow-sm">
            <div className="w-full md:w-1/2 h-[260px] md:h-auto min-h-[260px] relative">
              <img
                src={imgBranchNairobi}
                alt="JS Perfumes BBS Mall boutique Nairobi"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="text-[9px] tracking-[0.25em] uppercase font-semibold text-muted-foreground mb-2">
                  NAIROBI BRANCH
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#171717] mb-3">
                  BBS Mall, GFB090
                </h3>
                <p className="text-[12.5px] text-[#6F6A60] mb-4 font-sans">
                  Nairobi, Kenya
                </p>
                <div className="border-t border-[#E7DEC8]/40 pt-4 text-[12px] text-[#4F4A40] space-y-1 font-sans">
                  <div className="font-semibold text-muted-foreground uppercase text-[10px] tracking-wide">OPENING HOURS</div>
                  <div>Mon - Sat: 9:00am - 8:00pm</div>
                  <div>Sun: 10:00am - 6:00pm</div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <a
                  href="tel:+254799517888"
                  className="flex items-center justify-center gap-2 border border-border hover:border-gold hover:text-gold-deep text-[10px] tracking-widest uppercase font-semibold py-2.5 px-4 bg-white transition duration-200"
                >
                  <Phone className="w-3.5 h-3.5" /> Call 0799 517 888
                </a>
                <a
                  href="https://wa.me/254799517888"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-border hover:border-[#25D366] hover:text-[#25D366] text-[10px] tracking-widest uppercase font-semibold py-2.5 px-4 bg-white transition duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=BBS+Mall+Eastleigh+Nairobi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-border hover:border-gold hover:text-gold-deep text-[10px] tracking-widest uppercase font-semibold py-2.5 px-4 bg-white transition duration-200"
                >
                  <MapPin className="w-3.5 h-3.5" /> Directions
                </a>
              </div>
            </div>
          </div>

          {/* Mombasa Branch */}
          <div className="flex flex-col md:flex-row bg-white border border-[#E7DEC8]/50 overflow-hidden shadow-sm">
            <div className="w-full md:w-1/2 h-[260px] md:h-auto min-h-[260px] relative">
              <img
                src={imgBranchMombasa}
                alt="JS Perfumes Makadara Road boutique Mombasa"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="text-[9px] tracking-[0.25em] uppercase font-semibold text-muted-foreground mb-2">
                  MOMBASA BRANCH
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#171717] mb-3">
                  Makadara Road
                </h3>
                <p className="text-[12.5px] text-[#6F6A60] mb-4 font-sans">
                  Mombasa, Kenya
                </p>
                <div className="border-t border-[#E7DEC8]/40 pt-4 text-[12px] text-[#4F4A40] space-y-1 font-sans">
                  <div className="font-semibold text-muted-foreground uppercase text-[10px] tracking-wide">OPENING HOURS</div>
                  <div>Mon - Sat: 9:00am - 8:00pm</div>
                  <div>Sun: 10:00am - 6:00pm</div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <a
                  href="tel:+254740069588"
                  className="flex items-center justify-center gap-2 border border-border hover:border-gold hover:text-gold-deep text-[10px] tracking-widest uppercase font-semibold py-2.5 px-4 bg-white transition duration-200"
                >
                  <Phone className="w-3.5 h-3.5" /> Call 0740 069 588
                </a>
                <a
                  href="https://wa.me/254740069588"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-border hover:border-[#25D366] hover:text-[#25D366] text-[10px] tracking-widest uppercase font-semibold py-2.5 px-4 bg-white transition duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=Makadara+Road+Mombasa"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-border hover:border-gold hover:text-gold-deep text-[10px] tracking-widest uppercase font-semibold py-2.5 px-4 bg-white transition duration-200"
                >
                  <MapPin className="w-3.5 h-3.5" /> Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DARK TRUST STRIP */}
      <section className="bg-[#0b0a09] text-white py-14 md:py-20 border-y border-[#201b15]">
        <div className="container-px max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {/* Col 1 */}
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 text-[#C9A227] mb-4" />
            <div className="font-serif text-lg sm:text-xl font-medium tracking-wide">
              100% Authentic
            </div>
            <p className="text-[11px] sm:text-[12px] text-[#A69C8A] leading-relaxed mt-2 max-w-[180px] font-sans">
              Only genuine products from trusted sources
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col items-center">
            <Award className="w-8 h-8 text-[#C9A227] mb-4" />
            <div className="font-serif text-lg sm:text-xl font-medium tracking-wide">
              500+ Premium Products
            </div>
            <p className="text-[11px] sm:text-[12px] text-[#A69C8A] leading-relaxed mt-2 max-w-[180px] font-sans">
              Wide selection of designer, niche &amp; Arabic fragrances
            </p>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 text-[#C9A227] mb-4" />
            <div className="font-serif text-lg sm:text-xl font-medium tracking-wide">
              2 Branches
            </div>
            <p className="text-[11px] sm:text-[12px] text-[#A69C8A] leading-relaxed mt-2 max-w-[180px] font-sans">
              Nairobi &amp; Mombasa boutiques to serve you better
            </p>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col items-center">
            <Truck className="w-8 h-8 text-[#C9A227] mb-4" />
            <div className="font-serif text-lg sm:text-xl font-medium tracking-wide">
              Nationwide Delivery
            </div>
            <p className="text-[11px] sm:text-[12px] text-[#A69C8A] leading-relaxed mt-2 max-w-[180px] font-sans">
              Fast &amp; secure delivery across all counties in Kenya
            </p>
          </div>
        </div>
      </section>

      {/* 5. LIFESTYLE SECTION */}
      <section className="py-16 md:py-24 container-px bg-white">
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#8B7330] mb-2">
            A FRAGRANCE FOR EVERY STORY
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {[
            { label: "Daily Wear", img: imgDailyWear },
            { label: "Office", img: imgOffice },
            { label: "Date Night", img: imgDateNight },
            { label: "Weddings", img: imgWeddings },
            { label: "Gifting", img: imgGifting },
            { label: "Luxury Collection", img: imgLuxuryColl }
          ].map((c) => (
            <Link
              key={c.label}
              to="/shop"
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={c.img}
                alt={c.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end justify-center p-4 pb-6 text-center">
                <span className="text-white font-serif text-[15px] sm:text-[17px] font-medium tracking-wide drop-shadow-sm">
                  {c.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. INSTAGRAM PROOF SECTION */}
      <section className="py-16 md:py-24 container-px bg-[#FAF8F2] border-t border-border/40">
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-12">
          <div className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#8B7330] mb-3">
            FOLLOW @JSPERFUMESKE
          </div>
          <h2 className="font-serif font-light text-3xl sm:text-4.5xl text-[#171717]">
            Join 28,000+ Fragrance Lovers
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-7xl mx-auto">
          {[imgIg1, imgIg2, imgIg3, imgIg4, imgIg5, imgIg6].map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/jsperfumeske/"
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square overflow-hidden group rounded-lg shadow-sm"
            >
              <img
                src={img}
                alt={`JS Perfumes Instagram Post ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white w-6 h-6" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/jsperfumeske/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-border/80 hover:border-gold hover:text-gold-deep text-[11px] font-semibold uppercase tracking-widest px-6 py-3.5 rounded-full bg-white transition duration-200"
          >
            FOLLOW US ON INSTAGRAM
          </a>
        </div>
      </section>

      {/* 7. BOTTOM CTA STRIP */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-t border-border bg-white">
        {/* Left CTA */}
        <div className="p-10 sm:p-14 lg:p-16 flex flex-col items-center text-center justify-center border-b md:border-b-0 md:border-r border-border">
          <Gift className="w-8 h-8 text-[#C9A227] mb-4" />
          <h3 className="font-serif text-xl sm:text-2xl text-[#171717] mb-4 font-light">
            Looking For The Perfect Gift?
          </h3>
          <Link
            to="/category/$slug"
            params={{ slug: "gift-sets" }}
            className="border border-[#E7DEC8] hover:border-gold hover:text-gold-deep text-[11px] tracking-widest uppercase font-semibold py-3 px-6 bg-white transition duration-200"
          >
            SHOP GIFT SETS
          </Link>
        </div>

        {/* Right CTA */}
        <div className="p-10 sm:p-14 lg:p-16 flex flex-col items-center text-center justify-center">
          <MessageCircle className="w-8 h-8 text-[#C9A227] mb-4" />
          <h3 className="font-serif text-xl sm:text-2xl text-[#171717] mb-4 font-light">
            Need Help Choosing?
          </h3>
          <a
            href="https://wa.me/254799517888"
            target="_blank"
            rel="noreferrer"
            className="border border-[#E7DEC8] hover:border-[#25D366] hover:text-[#25D366] text-[11px] tracking-widest uppercase font-semibold py-3 px-6 bg-white transition duration-200"
          >
            CHAT WITH US
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
