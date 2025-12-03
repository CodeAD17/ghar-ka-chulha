import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import dish1 from "@assets/generated_images/butter_chicken_in_clay_pot.png";
import dish2 from "@assets/generated_images/mutton_rogan_josh_in_brass_bowl.png";
import dish3 from "@assets/generated_images/tandoori_roti_basket.png";

const menuItems = [
  {
    id: 1,
    name: "Chulha Chicken",
    prices: { half: "₹349", full: "₹649" },
    image: dish1,
    type: "curry"
  },
  {
    id: 2,
    name: "Chulha Mutton",
    prices: { half: "₹549", full: "₹849" },
    image: dish2,
    type: "curry"
  },
  {
    id: 3,
    name: "Chulhe Ki Roti",
    prices: { single: "₹7" },
    image: dish3,
    type: "bread"
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-16 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
             <h2 className="text-3xl md:text-4xl font-display text-white tracking-widest uppercase mb-2">Our Specialties</h2>
             <div className="flex justify-center items-center gap-2 opacity-50">
                <div className="h-[1px] w-12 bg-[#8B6E4E]" />
                <div className="w-2 h-2 rotate-45 bg-[#8B6E4E]" />
                <div className="h-[1px] w-12 bg-[#8B6E4E]" />
             </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#FDF8F3] border-none rounded-xl overflow-hidden p-4 pb-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                
                {/* Image Container - Rectangular Look matching reference */}
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 mx-4 mt-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif text-[#2A1A11] mb-4 font-medium tracking-wide">{item.name}</h3>
                
                {/* Pricing */}
                <div className="flex items-center justify-center gap-8 w-full mb-6 font-sans text-[#2A1A11]">
                    {item.type === 'curry' ? (
                        <>
                            <div className="flex flex-col items-center">
                                <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">Half</span>
                                <span className="text-xl font-bold">{item.prices.half}</span>
                            </div>
                            <div className="w-[1px] h-8 bg-gray-300" />
                            <div className="flex flex-col items-center">
                                <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">Full</span>
                                <span className="text-xl font-bold">{item.prices.full}</span>
                            </div>
                        </>
                    ) : (
                         <div className="flex flex-col items-center">
                             <span className="text-2xl font-bold">{item.prices.single}</span>
                         </div>
                    )}
                </div>

                {/* Button */}
                <Button className="bg-[#8B6E4E] hover:bg-[#755C41] text-white text-xs font-bold uppercase tracking-[0.15em] px-8 py-2 rounded-full w-2/3">
                    Add to Cart
                </Button>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
