import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

import dish1 from "@assets/generated_images/butter_chicken_in_clay_pot.png";
import dish2 from "@assets/generated_images/mutton_rogan_josh_in_brass_bowl.png";

export default function Home() {
  return (
    <>
        <Hero />
        
        {/* Featured Preview Section - Replaces full sections for mobile-first multi-page approach */}
        <section className="py-20 container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <span className="text-primary text-xs tracking-[0.3em] uppercase font-bold">Taste of Home</span>
                    <h2 className="text-3xl md:text-5xl font-display text-white mt-2">Signature Dishes</h2>
                </div>
                <Link href="/menu">
                    <span className="text-white/60 hover:text-primary text-sm uppercase tracking-widest cursor-pointer flex items-center gap-2 transition-colors">
                        View Full Menu <ChevronRight size={14} />
                    </span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { name: "Chulha Chicken", img: dish1, desc: "Slow-cooked perfection" },
                    { name: "Mutton Rogan Josh", img: dish2, desc: "Rich aromatic gravy" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer"
                    >
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 md:p-8">
                            <h3 className="text-2xl font-display text-white mb-1">{item.name}</h3>
                            <p className="text-white/60 text-sm">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        <section className="py-20 bg-[#111] border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-display text-white mb-6">Ready to Order?</h2>
                 <p className="text-white/60 max-w-lg mx-auto mb-8 font-light">
                    We deliver authentic flavors straight to your doorstep. Freshly prepared, hygienically packed.
                 </p>
                 <Link href="/menu">
                    <button className="bg-white text-black hover:bg-primary px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase transition-colors">
                        Start Your Order
                    </button>
                 </Link>
            </div>
        </section>
    </>
  );
}
