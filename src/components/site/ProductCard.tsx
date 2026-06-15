import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card group relative">
      {product.badge && (
        <span className="absolute z-10 top-3 left-3 bg-[#E2533A] text-white text-[10px] tracking-wider font-medium px-2 py-1 rounded">
          {product.badge}
        </span>
      )}
      <div className="absolute z-10 top-3 right-3 flex flex-col gap-2">
        <button aria-label="Wishlist" className="h-8 w-8 grid place-items-center rounded-full bg-white/90 border border-border text-foreground hover:text-gold-deep">
          <Heart className="h-4 w-4" />
        </button>
        <button aria-label="Add to cart" className="h-8 w-8 grid place-items-center rounded-full bg-white/90 border border-border text-foreground hover:text-gold-deep">
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="aspect-square bg-ivory overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col items-center text-center gap-1.5">
        {product.notes && <div className="text-[11px] text-muted-foreground">{product.notes}</div>}
        <Link to="/product/$id" params={{ id: product.id }} className="font-serif text-base sm:text-lg leading-snug line-clamp-2 hover:text-gold-deep">
          {product.name}
        </Link>
        <div className="mt-2 flex items-baseline gap-2">
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">KSh {product.oldPrice.toLocaleString()}</span>
          )}
          <span className="text-gold-deep font-serif text-lg">KSh {product.price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
