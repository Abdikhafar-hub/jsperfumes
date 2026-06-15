import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { products } from "@/data/products";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart | JS Perfumes Kenya" }] }),
  component: Cart,
});

function Cart() {
  const [items, setItems] = useState(() => products.slice(0, 3).map((p) => ({ ...p, qty: 1 })));
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 10000 ? 0 : 350;

  return (
    <SiteLayout>
      <div className="container-px py-10">
        <h1 className="font-serif text-4xl">Your Cart</h1>
        <p className="text-muted-foreground text-sm mt-1">{items.length} items</p>

        <div className="mt-8 grid lg:grid-cols-[1fr_360px] gap-8">
          <div className="space-y-4">
            {items.map((i) => (
              <div key={i.id} className="bg-white border border-border rounded-2xl p-4 grid grid-cols-[80px_1fr_auto] sm:grid-cols-[110px_1fr_auto_auto] items-center gap-4">
                <img src={i.image} alt="" className="w-20 sm:w-[110px] aspect-square rounded-lg object-cover" />
                <div className="min-w-0">
                  <div className="font-serif truncate">{i.name}</div>
                  <div className="text-xs text-muted-foreground">{i.brand} · 100ml</div>
                  <div className="mt-2 inline-flex items-center border border-border rounded-full">
                    <button onClick={() => setItems((arr) => arr.map((x) => x.id === i.id ? { ...x, qty: Math.max(1, x.qty - 1) } : x))} className="p-2"><Minus className="h-3.5 w-3.5" /></button>
                    <span className="px-3 text-sm">{i.qty}</span>
                    <button onClick={() => setItems((arr) => arr.map((x) => x.id === i.id ? { ...x, qty: x.qty + 1 } : x))} className="p-2"><Plus className="h-3.5 w-3.5" /></button>
                  </div>
                </div>
                <div className="font-serif text-gold-deep text-right whitespace-nowrap">KSh {(i.price * i.qty).toLocaleString()}</div>
                <button onClick={() => setItems((arr) => arr.filter((x) => x.id !== i.id))} aria-label="Remove" className="p-2 text-muted-foreground hover:text-destructive col-start-3 sm:col-start-auto"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
            <Link to="/shop" className="btn-outline mt-2">Continue Shopping</Link>
          </div>
          <aside className="bg-white border border-border rounded-2xl p-6 h-fit lg:sticky lg:top-24">
            <div className="font-serif text-xl">Order Summary</div>
            <div className="mt-4 flex items-center gap-2">
              <input placeholder="Coupon / gift card" className="flex-1 border border-border rounded-full px-4 py-2 text-sm bg-ivory" />
              <button className="btn-outline !py-2 !px-4 text-xs">Apply</button>
            </div>
            <div className="mt-5 space-y-2 text-sm border-t border-border pt-4">
              <div className="flex justify-between"><span>Subtotal</span><span>KSh {subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : `KSh ${shipping}`}</span></div>
              <div className="flex justify-between font-serif text-lg pt-3 border-t border-border"><span>Total</span><span className="text-gold-deep">KSh {(subtotal + shipping).toLocaleString()}</span></div>
            </div>
            <Link to="/checkout" className="btn-gold w-full justify-center mt-5">Proceed to Checkout</Link>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}
