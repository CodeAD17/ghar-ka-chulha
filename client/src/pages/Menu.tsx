import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cartContext";
import { Plus } from "lucide-react";

import dish1 from "@assets/generated_images/butter_chicken_in_clay_pot.png";
import dish2 from "@assets/generated_images/mutton_rogan_josh_in_brass_bowl.png";
import dish3 from "@assets/generated_images/tandoori_roti_basket.png";

const menuItems = [
  {
    id: 1,
    name: "Chulha Chicken",
    description: "Tender chicken slow-cooked in clay pot.",
    price: 649,
    halfPrice: 349,
    image: dish1,
    tag: "Bestseller",
    category: "Curries"
  },
  {
    id: 2,
    name: "Chulha Mutton",
    description: "Rich spicy mutton curry in brassware.",
    price: 849,
    halfPrice: 549,
    image: dish2,
    tag: "Royal Choice",
    category: "Curries"
  },
  {
    id: 3,
    name: "Chulhe Ki Roti",
    description: "Freshly baked tandoori roti with butter.",
    price: 7,
    image: dish3,
    tag: "Classic",
    category: "Breads"
  },
  {
    id: 4,
    name: "Dal Makhani",
    description: "Black lentils cooked overnight with cream.",
    price: 399,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&w=800&q=80",
    tag: "Veg Delight",
    category: "Curries"
  },
  {
    id: 5,
    name: "Paneer Tikka",
    description: "Cottage cheese marinated in spices and grilled.",
    price: 449,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    category: "Starters"
  },
  {
    id: 6,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice with spiced chicken.",
    price: 599,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    category: "Rice"
  }
];

const categories = ["All", "Curries", "Breads", "Starters", "Rice"];

import { useState } from "react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-24 pb-32 md:pb-24">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display text-white mb-4">Our Menu</h1>
          <p className="text-white/60 font-sans text-sm md:text-base max-w-2xl mx-auto">
            Authentic flavors prepared with patience and passion.
          </p>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-4 mb-12 pb-4 justify-start md:justify-center px-2 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-primary text-black border-primary"
                  : "bg-transparent text-white/60 border-white/10 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-[#111] border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
                
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  {item.tag && (
                    <div className="absolute top-3 left-3 z-10 bg-black/80 backdrop-blur-sm border border-primary/20 px-3 py-1 rounded-full">
                      <span className="text-[10px] font-bold tracking-widest text-primary uppercase">{item.tag}</span>
                    </div>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-display text-white group-hover:text-primary transition-colors">{item.name}</h3>
                    <span className="text-lg font-serif text-primary">₹{item.price}</span>
                  </div>
                  
                  <p className="text-white/50 text-sm font-light mb-6 flex-grow">{item.description}</p>

                  <div className="space-y-3">
                    {/* Full Portion Button */}
                    <Button 
                      onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image, variant: 'Full' })}
                      className="w-full bg-white/5 hover:bg-primary hover:text-black text-white border border-white/10 hover:border-primary transition-all uppercase text-[10px] tracking-widest h-10"
                    >
                      <Plus className="w-3 h-3 mr-2" /> Add {item.halfPrice ? "Full" : "to Cart"}
                    </Button>

                    {/* Half Portion Button if available */}
                    {item.halfPrice && (
                      <Button 
                        onClick={() => addToCart({ id: item.id, name: item.name, price: item.halfPrice!, image: item.image, variant: 'Half' })}
                        variant="outline"
                        className="w-full border-white/10 text-white/70 hover:text-white hover:border-white/30 hover:bg-transparent uppercase text-[10px] tracking-widest h-8"
                      >
                        <Plus className="w-3 h-3 mr-2" /> Add Half (₹{item.halfPrice})
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
