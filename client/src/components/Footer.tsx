import { MapPin, Phone } from "lucide-react";
import qrCode from "@assets/generated_images/dark_wooden_board_with_raw_ingredients_and_clay_pot.png"; // Using generic image as placeholder for QR

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 text-[#C4A484]">
      
      {/* Top Border Gradient/Divider */}
      <div className="max-w-6xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#C4A484]/30 to-transparent mb-16" />

      <div className="container mx-auto px-8 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: About & Address */}
        <div>
            <div className="mb-12">
                <h3 className="text-xl font-display uppercase tracking-widest mb-6 text-[#C4A484]">About Us</h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed max-w-md">
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ex ea commodo consequat.
                </p>
            </div>

            <div>
                <h3 className="text-xl font-display uppercase tracking-widest mb-6 text-[#C4A484]">Address</h3>
                <div className="flex items-start gap-3 text-white/70 font-sans text-sm mb-4">
                    <MapPin className="w-4 h-4 mt-1 shrink-0 text-[#C4A484]" />
                    <p>32, Modi Society Colony, Near St.<br/>Paul's School, Bareilly Road,<br/>Rampur</p>
                </div>
                <div className="flex items-center gap-3 text-white/70 font-sans text-sm">
                    <Phone className="w-4 h-4 shrink-0 text-[#C4A484]" />
                    <p>84679 32423, 84493 06111</p>
                </div>
            </div>
        </div>

        {/* Right Column: Delivery Info & Contact */}
        <div className="flex flex-col md:items-end text-left md:text-right">
            
            <div className="mb-12 flex flex-col md:items-end">
                <h3 className="text-xl font-display uppercase tracking-widest mb-6 text-[#C4A484]">Delivery Info</h3>
                <div className="bg-white p-2 w-32 h-32 rounded-lg mb-2">
                    {/* QR Code Placeholder */}
                    <div className="w-full h-full bg-black/10 flex items-center justify-center">
                        <span className="text-black text-[10px]">QR CODE</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:items-end">
                <h3 className="text-xl font-display uppercase tracking-widest mb-6 text-[#C4A484]">Contact</h3>
                <div className="text-white/70 font-sans text-sm md:text-right">
                    <p className="mb-1">32, Modi Society Colony, Near St.</p>
                    <p className="mb-1">Paul's School, Bareilly Road,</p>
                    <p className="mb-4">Rampur</p>
                    <p>84679 32423, 84493 06111</p>
                </div>
            </div>

        </div>
      </div>
      
      {/* Smoke Effect Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </footer>
  );
}
