import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

import dish1 from "@assets/generated_images/butter_chicken_in_clay_pot.png";
import dish2 from "@assets/generated_images/mutton_rogan_josh_in_brass_bowl.png";
import dish3 from "@assets/generated_images/tandoori_roti_basket.png";

const menuItems = [
  {
    id: 1,
    name: "Chulha Chicken",
    description: "Tender chicken slow-cooked in a clay pot with secret spices.",
    price: "₹349",
    image: dish1,
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Chulha Mutton",
    description: "Rich, spicy mutton curry prepared in traditional brassware.",
    price: "₹549",
    image: dish2,
    tag: "Spicy"
  },
  {
    id: 3,
    name: "Chulhe Ki Roti",
    description: "Freshly baked tandoori roti with a generous dollop of butter.",
    price: "₹7",
    image: dish3,
    tag: "Essential"
  }
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <span className="text-primary font-sans tracking-[0.3em] uppercase text-sm">Our Specialties</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3 mb-6">Curated for You</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                    <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                        {item.tag}
                    </div>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-display text-foreground mb-2">{item.name}</h3>
                  <p className="text-muted-foreground font-sans text-sm mb-6">{item.description}</p>
                  <div className="text-3xl font-serif text-primary">{item.price}</div>
                </CardContent>
                <CardFooter className="p-8 pt-0 flex justify-center">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded-none tracking-widest uppercase text-xs py-6">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <Button variant="link" className="text-muted-foreground hover:text-primary text-lg font-serif italic decoration-primary underline-offset-4">
                View Full Menu &rarr;
            </Button>
        </div>
      </div>
    </section>
  );
}
