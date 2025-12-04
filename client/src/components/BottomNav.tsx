import { Link, useLocation } from "wouter";
import { Home, UtensilsCrossed, Phone, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cartContext";

export default function BottomNav() {
  const [location] = useLocation();
  const { cartCount } = useCart();

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Menu", icon: UtensilsCrossed, href: "/menu" },
    { name: "Cart", icon: ShoppingBag, href: "/cart", badge: cartCount },
    { name: "Contact", icon: Phone, href: "/contact" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
      <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 px-6 py-3 pb-safe-area-inset-bottom shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <div className={`relative flex flex-col items-center group p-2 cursor-pointer ${
                  location === item.href ? "text-[#D4AF37]" : "text-white/40"
              }`}>
                <div className="relative p-1 mb-1">
                  <item.icon 
                    size={20} 
                    className={`transition-colors duration-300 ${
                      location === item.href ? "text-[#D4AF37]" : "text-white/60 group-hover:text-[#D4AF37]"
                    }`} 
                  />
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-black text-[9px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full animate-in zoom-in">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className={`text-[9px] font-sans tracking-widest uppercase transition-colors duration-300 ${
                    location === item.href ? "text-[#D4AF37]" : "text-white/40 group-hover:text-[#D4AF37]"
                }`}>
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
