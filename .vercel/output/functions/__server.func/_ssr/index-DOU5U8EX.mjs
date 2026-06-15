import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./SiteLayout-cARi-MUI.mjs";
import { P as ProductCard } from "./ProductCard-0Ke3ivgn.mjs";
import { p as products } from "./router-CohxNK-b.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { h as logoLattafa, g as logoArmaf, f as logoRasasi, e as logoDior, d as logoChanel, c as logoCreed, b as logoTomFord, a as logoYsl, l as logoVersace } from "./verseace-CZbEU1ig.mjs";
import { k as ArrowRight, S as Sparkles, d as MessageCircle, Q as Quote, g as MapPin, o as ArrowLeft } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const onSelect = reactExports.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = reactExports.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = reactExports.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  reactExports.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  reactExports.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const hero1 = "/lifestyle/hero-1.jpg";
const hero2 = "/lifestyle/hero-2.jpg";
const hero3 = "/lifestyle/hero-3.jpg";
const catMen = "/categories/cat-men.jpg";
const catWomen = "/categories/cat-women.jpg";
const catNiche = "/categories/cat-niche.jpg";
const aboutStoreInterior = "/lifestyle/about-store-interior.png";
const brandList = [{
  name: "Lattafa",
  logo: logoLattafa
}, {
  name: "Armaf",
  logo: logoArmaf
}, {
  name: "Rasasi",
  logo: logoRasasi
}, {
  name: "Dior",
  logo: logoDior
}, {
  name: "Chanel",
  logo: logoChanel
}, {
  name: "Creed",
  logo: logoCreed
}, {
  name: "Tom Ford",
  logo: logoTomFord
}, {
  name: "YSL",
  logo: logoYsl
}, {
  name: "Versace",
  logo: logoVersace
}];
const campaignImages = [hero1, hero2, hero3];
function Home() {
  const [slide, setSlide] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % campaignImages.length), 6e3);
    return () => clearInterval(t);
  }, []);
  const [api, setApi] = reactExports.useState();
  const [current, setCurrent] = reactExports.useState(0);
  const [count, setCount] = reactExports.useState(0);
  const [isHovered, setIsHovered] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    if (!api || isHovered) return;
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5e3);
    return () => clearInterval(interval);
  }, [api, isHovered]);
  const newIn = products.slice(0, 8);
  const onOffer = products.filter((p) => p.oldPrice).slice(0, 4);
  const bestSellers = [...products].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "w-full pt-0 md:pt-6 md:container-px", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-none md:rounded-3xl h-[80vh] md:h-[calc(100vh-140px)] min-h-[550px] md:min-h-[700px] border border-border/20 shadow-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden", children: campaignImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 transition-opacity duration-1000", style: {
        opacity: i === slide ? 1 : 0
      }, "aria-hidden": i !== slide, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: "JS Perfumes Luxury Campaign", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] md:text-[11px] tracking-[0.25em] font-semibold text-gold mb-4 md:mb-6 block uppercase", children: "EST. NAIROBI & MOMBASA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-[42px] sm:text-[52px] md:text-[60px] lg:text-[76px] xl:text-[86px] font-medium leading-[0.96] tracking-tight text-white", children: [
          "Fragrance,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Refined."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 md:mt-8 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.7] text-white/80 max-w-[360px] whitespace-pre-line", children: [
          "Authentic designer fragrances,",
          "\n",
          "rare niche perfumes,",
          "\n",
          "and timeless Arabic luxury."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 md:mt-8 flex flex-row gap-3 max-w-[340px] md:max-w-[380px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "flex-1 h-[42px] md:h-[52px] px-4 bg-[#C9A227] hover:bg-[#B08D20] text-white font-semibold text-[10px] md:text-xs tracking-widest uppercase rounded-[8px] flex items-center justify-center transition-all duration-300", children: "SHOP COLLECTION" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "flex-1 h-[42px] md:h-[52px] px-4 bg-transparent border border-white/40 hover:border-white text-white font-semibold text-[10px] md:text-xs tracking-widest uppercase rounded-[8px] flex items-center justify-center transition-all duration-300", children: "VISIT OUR STORES" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 right-6 flex gap-2.5 z-10", children: campaignImages.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSlide(i), "aria-label": `Campaign Slide ${i + 1}`, className: `h-1.5 rounded-full transition-all duration-300 ${i === slide ? "w-8 bg-white" : "w-2.5 bg-white/40"}` }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hidden md:block container-px mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-border rounded-2xl overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 divide-y md:grid-cols-3 md:divide-y-0 md:divide-x divide-border", children: [{
        t: "Unisex",
        s: "Scents without boundaries.",
        to: "/category/unisex"
      }, {
        t: "Niche",
        s: "Rare. Artistic. Distinct.",
        to: "/category/niche"
      }, {
        t: "Gift Sets",
        s: "Thoughtful. Ready to Gift.",
        to: "/category/gift-sets"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10 flex flex-col items-start justify-between min-h-[190px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.25em] uppercase font-semibold text-muted-foreground", children: c.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[15px] text-foreground font-sans", children: c.s })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: c.to, className: "mt-6 inline-flex text-[11px] uppercase tracking-wider font-semibold bg-secondary hover:bg-gold/15 hover:text-gold-deep text-foreground border border-border/60 px-5 py-2.5 rounded-md transition-all duration-200", children: "Shop Now" })
      ] }, c.t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#FAF8F2]/30 py-4 px-6 text-center text-[11px] tracking-[0.15em] uppercase font-medium text-muted-foreground/95", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "100% Authentic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline opacity-40", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trusted in Nairobi & Mombasa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline opacity-40", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Fast Delivery & Pickup" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline opacity-40", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Secure Checkout" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between border-b border-border pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "eyebrow !text-foreground", children: "New In Store" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Fresh arrivals. Just landed." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "text-sm text-gold-deep inline-flex items-center gap-1 hover:text-gold", children: [
          "Show All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", children: newIn.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mt-20 grid gap-5 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl min-h-[460px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: catNiche, alt: "", className: "absolute inset-0 h-full w-full object-cover", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/45" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full flex flex-col items-center justify-center text-center text-white p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow text-gold", children: "Curated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-3xl md:text-4xl mt-2 tracking-wide", children: "NICHE FRAGRANCES" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-md text-white/85 text-sm", children: "Rare. Artistic. Unforgettable. Discover unique scent creations crafted for true connoisseurs." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: {
            slug: "niche"
          }, className: "btn-ghost-white mt-6", children: "Shop Now" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5", children: [{
        img: catMen,
        title: "MEN",
        sub: "Strength. Presence. Distinction.",
        slug: "men"
      }, {
        img: catWomen,
        title: "WOMEN",
        sub: "Elegance in every note.",
        slug: "women"
      }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl min-h-[220px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.img, alt: "", className: "absolute inset-0 h-full w-full object-cover", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full flex flex-col items-center justify-center text-center text-white p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl md:text-3xl tracking-wide", children: b.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/85 mt-1", children: b.sub }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: {
            slug: b.slug
          }, className: "btn-ghost-white mt-4", children: "Shop Now" })
        ] })
      ] }, b.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory border-y border-border/40 py-20 mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.25em] uppercase font-semibold text-gold mb-3", children: "Ritual & Heritage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4.5xl tracking-wide", children: "Discover The World Of Oud & Bukhoor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: "Explore rich Arabic fragrance rituals, from premium ouds and traditional bukhoors to elegant burners and concentrated perfume oils." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
        title: "Premium Ouds",
        desc: "Deep, mysterious woody notes crafted from rich agarwood.",
        img: hero2,
        slug: "ouds"
      }, {
        title: "Traditional Bukhoors",
        desc: "Fine woodchips soaked in fragrant oils to scent your home.",
        img: "/categories/bukhoors.jpg",
        slug: "bukhoors"
      }, {
        title: "Luxury Burners",
        desc: "Exquisite metal and wood Mabkharas for incense burning.",
        img: "/categories/incense-burners.jpg",
        slug: "incense-burners"
      }, {
        title: "Perfume Oils & Attars",
        desc: "Concentrated, alcohol-free perfume oils that last all day.",
        img: "/categories/perfume-oils.jpg",
        slug: "perfume-oils"
      }].map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-2xl aspect-[3/4] border border-border shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: card.img, alt: card.title, className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-6 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl sm:text-2xl tracking-wide mb-2", children: card.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12.5px] text-white/80 line-clamp-2 mb-4 font-sans leading-relaxed", children: card.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/category/$slug", params: {
            slug: card.slug
          }, className: "inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-gold hover:text-white transition-colors duration-200", children: [
            "Shop Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Arabic Luxury Collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl mt-2", children: "Ouds, Bukhoors & Oils" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl mx-auto text-muted-foreground text-sm", children: "Crafted for deep, lasting elegance — sourced from heritage perfumers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: [{
        t: "Ouds",
        s: "ouds"
      }, {
        t: "Bukhoors",
        s: "bukhoors"
      }, {
        t: "Perfume Oils",
        s: "perfume-oils"
      }, {
        t: "Incense Burners",
        s: "incense-burners"
      }, {
        t: "Home Fragrance",
        s: "air-fresheners"
      }, {
        t: "Aqua Perfumes",
        s: "aqua"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/category/$slug", params: {
        slug: c.s
      }, className: "bg-white border border-border rounded-xl p-5 text-center hover:border-gold hover:-translate-y-0.5 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 mx-auto rounded-full bg-secondary grid place-items-center text-gold-deep font-serif text-lg", children: c.t[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif mt-3", children: c.t })
      ] }, c.s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white border-b border-border/40 mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.25em] uppercase font-semibold text-gold mb-3", children: "Scents For Every Space" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4.5xl tracking-wide", children: "Scents For Every Space" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: "Elevate your home, car and daily routine with long-lasting fragrance essentials." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5", children: [{
        title: "Air Fresheners",
        desc: "Long lasting sprays",
        img: "/categories/air-fresheners.jpg",
        slug: "air-fresheners"
      }, {
        title: "Room Sprays",
        desc: "Instant scent refresh",
        img: "/categories/room-sprays.jpg",
        slug: "air-fresheners"
      }, {
        title: "Linen Sprays",
        desc: "For fabrics & sheets",
        img: "/categories/linen-sprays.jpg",
        slug: "air-fresheners"
      }, {
        title: "Car Fragrances",
        desc: "Sensory journey",
        img: "/categories/car-fragrances.jpg",
        slug: "car-fragrances"
      }, {
        title: "Creams",
        desc: "Perfumed body hydration",
        img: "/categories/creams.jpg",
        slug: "creams"
      }, {
        title: "Home Scents",
        desc: "Rich ambient aromas",
        img: "/categories/home-fragrance.jpg",
        slug: "home-fragrance"
      }].map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/category/$slug", params: {
        slug: card.slug
      }, className: "group bg-ivory border border-border/60 hover:border-gold hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden flex flex-col p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] rounded-lg overflow-hidden relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: card.img, alt: card.title, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300", loading: "lazy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-200" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex-grow flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-[15px] font-semibold text-foreground leading-tight group-hover:text-gold-deep", children: card.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10.5px] text-muted-foreground mt-1 line-clamp-1", children: card.desc })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between border-b border-border pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "eyebrow !text-foreground", children: "On Offer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Exceptional fragrances. Exceptional value." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/category/$slug", params: {
          slug: "offers"
        }, className: "text-sm text-gold-deep inline-flex items-center gap-1 hover:text-gold", children: [
          "Show All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", children: onOffer.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between border-b border-border pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "eyebrow !text-foreground", children: "Best Sellers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Loved by our community." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "text-sm text-gold-deep inline-flex items-center gap-1 hover:text-gold", children: [
          "Show All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", children: bestSellers.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "eyebrow !text-foreground tracking-[0.2em] uppercase font-semibold", children: "SHOP BY BRAND" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 relative w-full overflow-hidden py-4 border-y border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "marquee hover:[animation-play-state:paused]", children: [
        brandList.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: {
          brand: b.name
        }, className: "group flex items-center justify-center h-16 md:h-20 w-32 md:w-40 shrink-0 hover:-translate-y-1 transition-transform duration-300 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.logo, alt: `${b.name} perfumes Kenya`, className: "max-h-full max-w-full object-contain", loading: "lazy" }) }, `b1-${b.name}`)),
        brandList.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: {
          brand: b.name
        }, className: "group flex items-center justify-center h-16 md:h-20 w-32 md:w-40 shrink-0 hover:-translate-y-1 transition-transform duration-300 cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.logo, alt: `${b.name} perfumes Kenya`, className: "max-h-full max-w-full object-contain", loading: "lazy" }) }, `b2-${b.name}`))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "inline-flex items-center justify-center border border-border/80 hover:border-gold hover:text-gold-deep text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full bg-white transition-all duration-200", children: "View All Brands" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-[#FAF8F2] border border-gold/30 px-6 py-12 md:p-12 lg:p-16 relative overflow-hidden shadow-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10 pointer-events-none", style: {
        backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 40%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid grid-cols-1 lg:grid-cols-[58%_42%] gap-10 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center order-2 lg:order-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold/10 text-gold-deep text-[10px] md:text-[11px] font-semibold tracking-wider uppercase", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-gold" }),
            "Personal Fragrance Concierge"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4.5xl mt-5 tracking-wide text-foreground font-medium leading-tight", children: "Find Your Signature Scent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl", children: "Answer a few quick questions and our team will recommend perfumes, ouds, oils or gift sets that match your style and budget." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden absolute top-5 bottom-5 left-5 w-[1px] bg-[#E7DEC8]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-5 left-[12%] right-[12%] h-[1px] bg-[#E7DEC8]" }),
            [{
              step: "1",
              title: "Who It's For",
              desc: "Select men, women, or unisex"
            }, {
              step: "2",
              title: "Scent Family",
              desc: "Choose floral, woody, oud, spicy..."
            }, {
              step: "3",
              title: "Share Budget",
              desc: "Specify price range preference"
            }, {
              step: "4",
              title: "Recommendations",
              desc: "Receive curations on WhatsApp"
            }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-2.5 relative z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-10 h-10 rounded-full bg-gold text-white font-serif font-semibold text-sm grid place-items-center border-4 border-[#FAF8F2] shadow-xs", children: s.step }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-grow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-[15px] font-semibold text-foreground leading-tight md:mt-2", children: s.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] md:text-[13px] text-muted-foreground mt-1 leading-relaxed md:max-w-[130px] md:mx-auto", children: s.desc })
              ] })
            ] }, i))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/matcher", className: "btn-gold justify-center h-[52px] sm:h-auto font-semibold uppercase tracking-wider text-xs px-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
              " Find My Scent"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/254799517888", target: "_blank", rel: "noreferrer", className: "btn-outline justify-center h-[52px] sm:h-auto bg-white font-semibold uppercase tracking-wider text-xs px-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
              " Chat With Us"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] lg:aspect-[4/5] xl:aspect-[3/4] overflow-hidden rounded-2xl border border-[#E7DEC8]/50 shadow-xs order-1 lg:order-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/lifestyle/hero-1.jpg", alt: "JS Perfumes Luxury Concierge Experience", className: "w-full h-full object-cover hover:scale-102 transition-transform duration-700", loading: "lazy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/5" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Shop By Occasion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl mt-2", children: "A Scent For Every Moment" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3", children: ["Daily Wear", "Office", "Wedding", "Eid Gifts", "Date Night", "Corporate Gifts", "Luxury Gifting"].map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-border rounded-xl py-6 text-center text-sm font-serif hover:border-gold hover:text-gold-deep transition", children: o }, o)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory py-20 border-y border-border/40 mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-px", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.25em] uppercase font-semibold text-gold mb-3", children: "Exquisite Presents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4.5xl tracking-wide", children: "Luxury Gifts For Every Occasion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: "Curated fragrance gifts for weddings, Eid, birthdays, corporate gifting and special moments." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10", children: [{
        title: "Wedding Gifts",
        desc: "Bridal scent boxes",
        img: catWomen
      }, {
        title: "Eid Gifts",
        desc: "Celebration gift sets",
        img: hero3
      }, {
        title: "Birthday Gifts",
        desc: "Personalized perfumes",
        img: "/products/luxury-gift-set.jpg"
      }, {
        title: "Corporate Gifts",
        desc: "Luxury business gifts",
        img: "/products/gift-voucher.jpg"
      }, {
        title: "Premium Gift Boxes",
        desc: "Custom leather wrapping",
        img: "/products/eid-mubarak-gift-box.jpg"
      }, {
        title: "Gift Vouchers",
        desc: "Give the gift of choice",
        img: "/products/gift-voucher.jpg"
      }].map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-xl aspect-[3/4] border border-border shadow-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: card.img, alt: card.title, className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/45" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-4 text-white text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-[15px] sm:text-[17px] tracking-wide mb-1 leading-snug", children: card.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/75 font-sans mt-0.5 line-clamp-1", children: card.desc })
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: {
          slug: "gift-sets"
        }, className: "btn-gold px-8 py-3.5 text-xs tracking-widest font-semibold uppercase", children: "Shop Gift Sets" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/254799517888?text=Hi%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20corporate%20gifting%20sets.", target: "_blank", rel: "noreferrer", className: "btn-outline px-8 py-3.5 text-xs tracking-widest font-semibold uppercase bg-white", children: "Request Corporate Gift Quote" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white border-b border-border/40 mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-px", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 lg:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-3 aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutStoreInterior, alt: "JS Perfumes Boutique Interior", className: "w-full h-full object-cover hover:scale-102 transition-transform duration-500", loading: "lazy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-xs flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: catNiche, alt: "Product Shelves", className: "w-full h-[75%] object-cover", loading: "lazy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[25%] flex items-center justify-center bg-[#FAF8F2] text-[10px] tracking-wider uppercase font-semibold border-t border-border", children: "Shelves" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-xs flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/categories/bukhoors.jpg", alt: "Oud & Bukhoor Display", className: "w-full h-[75%] object-cover", loading: "lazy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[25%] flex items-center justify-center bg-[#FAF8F2] text-[10px] tracking-wider uppercase font-semibold border-t border-border", children: "Displays" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-xs flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: catWomen, alt: "Consultation", className: "w-full h-[75%] object-cover", loading: "lazy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[25%] flex items-center justify-center bg-[#FAF8F2] text-[10px] tracking-wider uppercase font-semibold border-t border-border", children: "Consultation" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center lg:order-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] tracking-[0.25em] uppercase font-semibold text-gold mb-3", children: "Bespoke Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4.5xl tracking-wide mb-6", children: "Experience Fragrance In Person" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[14px] leading-relaxed mb-8 font-sans", children: "Visit JS Perfumes in Nairobi or Mombasa for personal fragrance guidance, product testing and luxury gifting advice. Our stores showcase a complete array of authentic designer fragrances, rare niche creations, traditional Arabic ouds and smoking bukhoors." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about#stores", className: "btn-gold px-7 py-3 text-xs uppercase tracking-widest font-semibold", children: "Visit Our Stores" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/254799517888", target: "_blank", rel: "noreferrer", className: "btn-outline px-7 py-3 text-xs uppercase tracking-widest font-semibold bg-white", children: "Chat On WhatsApp" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "@jsperfumeske" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl mt-2", children: "Follow JS Perfumes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "See our latest arrivals, reviews and fragrance recommendations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3", children: products.slice(0, 6).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/jsperfumeske", target: "_blank", rel: "noreferrer", className: "aspect-square overflow-hidden rounded-xl border border-border bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: "", loading: "lazy", className: "h-full w-full object-cover hover:scale-105 transition-transform duration-500" }) }, p.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-px mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "What Our Clients Say" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl mt-2", children: "Trusted Across Kenya" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 relative", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { opts: {
        align: "start",
        loop: true
      }, setApi, className: "w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-4 md:-ml-6", children: [{
          n: "Amina H.",
          c: "Mombasa",
          r: "Authentic oud, fast delivery, and beautiful packaging.",
          i: "AH"
        }, {
          n: "Kevin O.",
          c: "Nairobi",
          r: "Bought Sauvage from the BBS Mall branch. Genuine product and lovely staff.",
          i: "KO"
        }, {
          n: "Faith W.",
          c: "Kisumu",
          r: "Ordered a gift set for my sister. It arrived beautifully wrapped.",
          i: "FW"
        }, {
          n: "Farhana Y.",
          c: "Mombasa",
          r: "The bukhoor quality is amazing. My home smells luxurious.",
          i: "FY"
        }, {
          n: "Brian K.",
          c: "Nairobi",
          r: "Customer service helped me pick the perfect scent.",
          i: "BK"
        }].map((t, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3 flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full p-1 flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#FAF8F2] border border-gold/30 rounded-2xl p-8 shadow-sm flex flex-col justify-between w-full relative overflow-hidden group hover:border-gold hover:shadow-md transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-6 text-gold/10 group-hover:text-gold/20 transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-12 w-12 transform scale-x-[-1]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-gold text-sm", children: Array.from({
              length: 5
            }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-foreground/95 text-[15px] italic leading-relaxed font-serif", children: [
              "“",
              t.r,
              "”"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-3.5 border-t border-[#E7DEC8]/40 pt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-gold-deep text-xs font-semibold tracking-wider", children: t.i }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-[15px] font-semibold text-foreground leading-none", children: t.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-1 flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-gold/70" }),
                t.c
              ] })
            ] })
          ] })
        ] }) }) }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-6 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "static translate-y-0 h-10 w-10 border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold-deep hover:text-gold transition-all duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: Array.from({
            length: count
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => api?.scrollTo(i), className: `h-1.5 rounded-full transition-all duration-300 ${current === i ? "w-8 bg-gold" : "w-2.5 bg-[#E7DEC8] hover:bg-gold/50"}`, "aria-label": `Go to slide ${i + 1}` }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "static translate-y-0 h-10 w-10 border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold-deep hover:text-gold transition-all duration-300" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-px mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white border border-border p-10 md:p-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Join The Community" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl mt-2", children: "Get First Access To New Arrivals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xl mx-auto text-muted-foreground", children: "Offers, restocks and personal fragrance recommendations." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/254799517888", className: "btn-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
          " Join WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/jsperfumeske", className: "btn-outline", children: "Follow Instagram" })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
