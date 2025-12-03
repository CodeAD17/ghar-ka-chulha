import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 py-8 px-8">
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl md:text-2xl font-display text-[#C4A484] tracking-[0.1em] uppercase cursor-pointer">
            GHAR KA CHULHA
          </span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "Menu", "About Us", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm tracking-widest uppercase transition-colors ${
                item === "Home" 
                    ? "text-[#C4A484] underline underline-offset-8 decoration-[#C4A484]" 
                    : "text-white/80 hover:text-[#C4A484]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
            <Button className="bg-[#C4A484] hover:bg-[#B08E6B] text-[#1a1a1a] font-bold text-xs tracking-widest uppercase px-6 py-5 rounded-full">
                Order Now
            </Button>
        </div>
      </div>
    </nav>
  );
}
