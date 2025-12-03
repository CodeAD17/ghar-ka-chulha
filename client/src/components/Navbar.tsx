import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl md:text-3xl font-display font-bold text-primary cursor-pointer tracking-widest">
            GHAR KA CHULHA
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Menu", "About Us", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-foreground/80 hover:text-primary transition-colors font-sans text-sm tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6">
            ORDER NOW
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <Button variant="ghost" size="icon" className="text-foreground">
              <ShoppingBag className="h-5 w-5" />
           </Button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4 shadow-2xl"
        >
          {["Home", "Menu", "About Us", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsOpen(false)}
              className="text-foreground/80 hover:text-primary text-lg font-sans"
            >
              {item}
            </a>
          ))}
          <Button className="w-full bg-primary text-primary-foreground">ORDER NOW</Button>
        </motion.div>
      )}
    </nav>
  );
}
