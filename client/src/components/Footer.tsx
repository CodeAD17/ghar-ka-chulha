import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display text-primary mb-6 tracking-widest">GHAR KA CHULHA</h2>
            <p className="text-muted-foreground max-w-md mb-8 font-sans">
                Authentic flavors delivered with love. Experience the richness of Indian culinary heritage in every bite.
            </p>
            <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all">
                        <Icon size={18} />
                    </a>
                ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif text-xl mb-6">Contact Us</h3>
            <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>32, Modi Society Colony, Near St. Paul's School, Bareilly Road, Rampur</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <span>+91 84493 06111</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <span>hello@gharkachulha.com</span>
                </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-serif text-xl mb-6">Opening Hours</h3>
            <ul className="space-y-2 text-muted-foreground font-sans">
                <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">11:00 - 23:00</span>
                </li>
                <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">10:00 - 00:00</span>
                </li>
                <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">10:00 - 23:00</span>
                </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
            <p>&copy; 2025 Ghar Ka Chulha. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
