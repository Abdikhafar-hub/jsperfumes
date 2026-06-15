import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#11100E] text-white/80 mt-24">
      <div className="container-px py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gold grid place-items-center text-[#11100E] font-serif text-lg">JS</div>
            <div>
              <div className="font-serif text-xl text-white">JS Perfumes</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Essence of Luxury</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Authentic designer perfumes, ouds, bukhoors, gift sets and luxury fragrance products across Kenya.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://instagram.com/jsperfumeske" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/20 hover:border-gold"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="p-2 rounded-full border border-white/20 hover:border-gold"><Facebook className="h-4 w-4" /></a>
            <a href="https://wa.me/254799517888" className="p-2 rounded-full border border-white/20 hover:border-gold"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <div className="eyebrow text-gold mb-4">Shop</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/category/men" className="hover:text-gold">Men</Link></li>
            <li><Link to="/category/women" className="hover:text-gold">Women</Link></li>
            <li><Link to="/category/ouds" className="hover:text-gold">Ouds</Link></li>
            <li><Link to="/category/bukhoors" className="hover:text-gold">Bukhoors</Link></li>
            <li><Link to="/category/gift-sets" className="hover:text-gold">Gift Sets</Link></li>
            <li><Link to="/shop" className="hover:text-gold">New Arrivals</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-gold mb-4">Support</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-gold">Delivery Information</Link></li>
            <li><Link to="/faq" className="hover:text-gold">Returns</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link to="/account" className="hover:text-gold">Track Order</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-gold mb-4">Branches</div>
          <ul className="space-y-3 text-sm">
            <li>
              <div className="text-white">Nairobi</div>
              <div className="opacity-80">BBS Mall, GFB090</div>
              <a href="tel:+254799517888" className="text-gold">0799 517 888</a>
            </li>
            <li>
              <div className="text-white">Mombasa</div>
              <div className="opacity-80">Makadara Road</div>
              <a href="tel:+254740069569" className="text-gold">0740 069 569</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} JS Perfumes Kenya. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <span>M-Pesa</span><span>·</span><span>Visa</span><span>·</span><span>Mastercard</span><span>·</span><span>Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
