import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            scrolled 
            ? "bg-black/80 backdrop-blur-xl py-4 border-b border-white/5" 
            : "bg-transparent py-8"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex flex-col cursor-pointer group">
            <span className="text-2xl font-display text-white tracking-[0.2em] uppercase group-hover:text-primary transition-colors duration-300">
              Ghar Ka Chulha
            </span>
            <span className="text-[10px] font-sans tracking-[0.6em] text-primary uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mt-1">
              Royal Kitchen
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {["Home", "Menu", "About Us", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-sans tracking-widest uppercase text-white/70 hover:text-primary transition-all duration-300 hover:tracking-[0.2em]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop Only */}
        <div className="hidden md:block">
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-black font-bold text-xs tracking-widest uppercase px-8 py-5 rounded-none transition-all duration-300">
                Reserve Table
            </Button>
        </div>
        
        {/* Mobile: Just Logo is shown here, Nav is at bottom */}
      </div>
    </nav>
  );
}
