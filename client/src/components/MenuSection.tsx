import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import dish1 from "@assets/generated_images/butter_chicken_in_clay_pot.png";
import dish2 from "@assets/generated_images/mutton_rogan_josh_in_brass_bowl.png";
import dish3 from "@assets/generated_images/tandoori_roti_basket.png";

const menuItems = [
  {
    id: 1,
    name: "Chulha Chicken",
    description: "Tender chicken slow-cooked in clay pot.",
    prices: { half: "₹349", full: "₹649" },
    image: dish1,
    tag: "Chef's Special"
  },
  {
    id: 2,
    name: "Chulha Mutton",
    description: "Rich spicy mutton curry in brassware.",
    prices: { half: "₹549", full: "₹849" },
    image: dish2,
    tag: "Royal Choice"
  },
  {
    id: 3,
    name: "Chulhe Ki Roti",
    description: "Freshly baked tandoori roti with butter.",
    prices: { single: "₹7" },
    image: dish3,
    tag: "Classic"
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-32 bg-background relative overflow-hidden">
      
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <span className="text-[20vw] font-display text-white leading-none whitespace-nowrap">
            SIGNATURE DISHES
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
             <span className="text-primary font-sans text-xs tracking-[0.4em] uppercase block mb-4">Culinary Masterpieces</span>
             <h2 className="text-4xl md:text-5xl font-display text-white mb-6">Our Specialties</h2>
             <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/5 p-6 hover:border-primary/30 transition-all duration-500 hover:bg-white/[0.04]">
                
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden mb-8 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700">
                    <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10">
                        <span className="text-[10px] font-sans tracking-widest text-primary uppercase">{item.tag}</span>
                    </div>
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="text-center">
                    <h3 className="text-2xl font-display text-white mb-2 group-hover:text-primary transition-colors duration-300">{item.name}</h3>
                    <p className="text-white/40 font-sans text-sm mb-6 font-light">{item.description}</p>
                    
                    {/* Pricing Divider */}
                    <div className="flex items-center justify-center gap-6 mb-8">
                        {item.prices.full ? (
                            <>
                                <div className="text-center">
                                    <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Half</div>
                                    <div className="text-lg font-serif text-white">{item.prices.half}</div>
                                </div>
                                <div className="w-px h-8 bg-white/10" />
                                <div className="text-center">
                                    <div className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Full</div>
                                    <div className="text-lg font-serif text-primary">{item.prices.full}</div>
                                </div>
                            </>
                        ) : (
                            <div className="text-xl font-serif text-primary">{item.prices.single}</div>
                        )}
                    </div>

                    <Button className="w-full bg-transparent border border-white/20 text-white hover:bg-primary hover:border-primary hover:text-black transition-all duration-300 uppercase text-[10px] tracking-[0.2em] py-6 rounded-none">
                        Add to Order
                    </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
