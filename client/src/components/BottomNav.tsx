import { Link, useLocation } from "wouter";
import { Home, UtensilsCrossed, Info, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
  const [location] = useLocation();

  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "Menu", icon: UtensilsCrossed, href: "#menu" },
    { name: "About", icon: Info, href: "#about-us" },
    { name: "Contact", icon: Phone, href: "#contact" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
      <div className="bg-black/80 backdrop-blur-lg border-t border-white/10 px-6 py-4 pb-8">
        <div className="flex justify-between items-center">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="relative flex flex-col items-center group">
              <div className="p-2 rounded-full transition-colors duration-300 hover:bg-white/5">
                <item.icon 
                  size={24} 
                  className="text-white/60 group-hover:text-[#D4AF37] transition-colors duration-300" 
                />
              </div>
              <span className="text-[10px] font-sans tracking-widest text-white/40 group-hover:text-[#D4AF37] mt-1 uppercase">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
