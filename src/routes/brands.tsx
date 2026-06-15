import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Sparkles, ArrowRight, Award } from "lucide-react";

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

const brandLogos: Record<string, string> = {
  Lattafa: logoLattafa,
  Armaf: logoArmaf,
  Rasasi: logoRasasi,
  Dior: logoDior,
  Chanel: logoChanel,
  Creed: logoCreed,
  "Tom Ford": logoTomFord,
  YSL: logoYsl,
  Versace: logoVersace,
};

const brandCategories = [
  {
    title: "Arabic Collection Brands",
    description: "Deep, mysterious woody and spicy heritage blends from renowned Middle-Eastern houses.",
    items: [
      { name: "Lattafa", desc: "Bold, modern ouds and sweet orientals" },
      { name: "Armaf", desc: "Iconic, high-performing signature blends" },
      { name: "Rasasi", desc: "Timeless traditional incense & oil legacy" },
      { name: "Ahmed Al Maghribi", desc: "Premium niche ouds and luxury rose sprays" },
      { name: "Swiss Arabian", desc: "The perfect fusion of East and West" },
      { name: "Afnan", desc: "Sophisticated modern Arabic craftsmanship" },
    ],
  },
  {
    title: "Designer Houses",
    description: "Sleek, universally adored masterpieces from Paris, Milan, and New York.",
    items: [
      { name: "Dior", desc: "French refinement, legendary couture scents" },
      { name: "Chanel", desc: "The gold standard of luxury and elegance" },
      { name: "YSL", desc: "Edgy, bold, and luxurious modern statement scents" },
      { name: "Versace", desc: "Vibrant, Mediterranean-inspired fresh classics" },
      { name: "Tom Ford", desc: "Private blends, rich woods, and high-fashion luxury" },
      { name: "Calvin Klein", desc: "Clean, minimalistic, and gender-neutral icons" },
      { name: "Carolina Herrera", desc: "Seductive, modern luxury from Good Girl to Bad Boy" },
    ],
  },
  {
    title: "Niche & Rare Creations",
    description: "Artisanal, high-concentration perfume creations crafted for true fragrance connoisseurs.",
    items: [
      { name: "Creed", desc: "Royal heritage, rich ingredients, and legendary quality" },
      { name: "Mancera", desc: "Intense, long-lasting Parisian sweet and woody scents" },
      { name: "Nishane", desc: "Extraits de Parfum showcasing Istanbul's rich culture" },
      { name: "Xerjoff", desc: "Italian artistic expression in crystal flacons" },
      { name: "Amouage", desc: "The Gift of Kings—royal Omani luxury incense" },
    ],
  },
];

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands - JS Perfumes Kenya | Official Fragrance Retailer" },
      { name: "description", content: "Shop authentic designer, Arabic, and niche perfume brands in Kenya. Genuine Dior, Chanel, Creed, Lattafa, Rasasi & more at Nairobi and Mombasa boutiques." }
    ]
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <SiteLayout>
      {/* Hero Header */}
      <section className="bg-ivory py-16 border-b border-border/40">
        <div className="container-px text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1 text-[11px] tracking-[0.25em] uppercase font-semibold text-gold mb-3">
            <Award className="h-4 w-4" /> Official Retailer
          </span>
          <h1 className="font-serif text-4xl md:text-6xl tracking-wide text-foreground">
            Our Luxury Brands
          </h1>
          <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
            Every bottle at JS Perfumes is 100% authentic, imported directly from source fragrance houses. Explore our curated portfolio of designer names, rare niche houses, and Arabic collection masterpieces.
          </p>
        </div>
      </section>

      {/* Brand Groups */}
      <section className="py-20 bg-white">
        <div className="container-px flex flex-col gap-20">
          {brandCategories.map((group, i) => (
            <div key={i} className="border-b border-border/30 pb-16 last:border-0 last:pb-0">
              <div className="max-w-2xl mb-10">
                <h2 className="font-serif text-2xl md:text-3.5xl tracking-wide text-foreground">
                  {group.title}
                </h2>
                <p className="text-muted-foreground text-sm mt-2">
                  {group.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {group.items.map((brand) => {
                  const logo = brandLogos[brand.name];
                  return (
                    <Link
                      key={brand.name}
                      to="/shop"
                      search={{ brand: brand.name }}
                      className="group bg-[#FAF8F2]/45 hover:bg-[#FAF8F2] border border-border/60 hover:border-gold hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4 flex flex-col items-center justify-between text-center min-h-[170px]"
                    >
                      <div className="h-20 w-full flex items-center justify-center relative">
                        {logo ? (
                          <img
                            src={logo}
                            alt={`${brand.name} Perfumes Kenya`}
                            className="max-h-full max-w-[85%] object-contain group-hover:scale-102 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <span className="font-serif text-lg md:text-xl text-gold-deep group-hover:text-gold transition-colors">
                            {brand.name}
                          </span>
                        )}
                      </div>

                      <div className="w-full mt-2 border-t border-border/40 pt-2.5 flex flex-col justify-end">
                        <span className="text-[11px] font-sans font-semibold tracking-wider text-foreground block truncate">
                          {brand.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground line-clamp-1 mt-0.5">
                          {brand.desc}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-ivory py-16 border-t border-border/40 text-center">
        <div className="container-px max-w-2xl mx-auto">
          <Sparkles className="h-6 w-6 text-gold mx-auto mb-4" />
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide">
            Looking for a specific fragrance?
          </h2>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Our catalogs are regularly updated. If you don't find your favorite scent, contact our scent consultants and we will source it for you.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://wa.me/254799517888?text=Hi%2C%20I%20am%20looking%20for%20a%20specific%20perfume%20not%20listed%20on%20your%20site."
              target="_blank"
              rel="noreferrer"
              className="btn-gold px-8 py-3.5 text-xs font-semibold tracking-widest uppercase inline-flex items-center gap-1.5"
            >
              Request Scent Sourcing <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
