import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cartContext";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/#about-us" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || location !== "/"
        ? "bg-black/80 backdrop-blur-xl py-4 border-b border-white/5"
        : "bg-transparent py-6 md:py-8"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          {/* Mobile Logo (Text Only) */}
          <div className="flex flex-col cursor-pointer group md:hidden">
            <span className="text-xl font-display text-white tracking-[0.2em] uppercase group-hover:text-primary transition-colors duration-300">
              Ghar Ka Chulha
            </span>
            <span className="text-[8px] font-sans tracking-[0.4em] text-primary uppercase text-center opacity-100 transition-opacity duration-500 -mt-1">
              Cloud Kitchen
            </span>
          </div>

          {/* Desktop Logo (Image + Text) */}
          <div className="hidden md:flex items-center gap-3 cursor-pointer group">
            <img src={logo} alt="Ghar Ka Chulha" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-2xl font-display text-white tracking-[0.2em] uppercase group-hover:text-primary transition-colors duration-300">
                Ghar Ka Chulha
              </span>
              <span className="text-[10px] font-sans tracking-[0.6em] text-primary uppercase text-center opacity-100 transition-opacity duration-500 -mt-1">
                Authentic Taste
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className={`text-sm font-sans tracking-widest uppercase transition-all duration-300 hover:tracking-[0.2em] cursor-pointer ${location === item.href ? "text-primary" : "text-white/70 hover:text-primary"
                }`}>
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Cart Button */}
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" className="relative text-white hover:text-primary hover:bg-white/5 transition-colors p-2 rounded-full">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          <div className="hidden md:block">
            <Link href="/menu">
              <Button className="bg-primary text-black hover:bg-white hover:text-black font-bold text-xs tracking-widest uppercase px-6 py-5 rounded-none transition-all duration-300">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
