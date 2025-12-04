import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-32 md:pb-12 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start mb-20">
          
          {/* Brand */}
          <div className="md:text-right order-2 md:order-1">
            <h3 className="text-lg font-display text-white uppercase tracking-widest mb-6">Contact</h3>
            <p className="text-white/50 font-sans font-light leading-loose mb-2">
                hello@gharkachulha.com
            </p>
            <p className="text-white/50 font-sans font-light leading-loose">
                +91 84493 06111
            </p>
          </div>

          {/* Center Logo */}
          <div className="text-center order-1 md:order-2">
             <h2 className="text-3xl md:text-4xl font-display text-gold-gradient tracking-[0.2em] mb-4">GHAR KA CHULHA</h2>
             <div className="w-24 h-1 bg-primary mx-auto mb-6" />
             <p className="text-white/40 font-sans text-xs tracking-[0.3em] uppercase">
                Authentic Indian Cuisine
             </p>
          </div>

          {/* Address */}
          <div className="md:text-left order-3">
            <h3 className="text-lg font-display text-white uppercase tracking-widest mb-6">Location</h3>
            <p className="text-white/50 font-sans font-light leading-loose">
                32, Modi Society Colony,<br/>
                Near St. Paul's School,<br/>
                Bareilly Road, Rampur
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 font-sans tracking-widest uppercase">
            <p>&copy; 2025 Ghar Ka Chulha.</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                <a href="#" className="hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
