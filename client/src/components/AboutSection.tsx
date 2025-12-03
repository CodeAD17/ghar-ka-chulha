import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/dark_cinematic_wooden_background_with_smoke_and_embers.png"; 

// Reusing the texture for about section background to keep theme consistent

export default function AboutSection() {
  return (
    <section id="about-us" className="py-24 relative overflow-hidden">
        {/* Subtle texture background */}
        <div 
            className="absolute inset-0 opacity-10 bg-repeat pointer-events-none"
            style={{ backgroundImage: `url(${heroBg})`, backgroundSize: '400px' }}
        />
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2">
             <div className="relative p-4 border border-primary/20">
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary" />
                <img 
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" 
                    alt="Restaurant Interior" 
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span className="text-primary font-sans tracking-[0.3em] uppercase text-sm">Our Story</span>
                <h2 className="text-4xl md:text-6xl font-display text-foreground mt-4 mb-8">
                    Tradition in <br/> Every Bite
                </h2>
                <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-6">
                    "Ghar Ka Chulha" isn't just a name; it's a promise. Born from the desire to bring authentic, 
                    slow-cooked rustic flavors back to the modern dining table, we source our spices from heritage markets 
                    and cook our meats in traditional clay pots over open flames.
                </p>
                <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-8">
                    Every Sunday, our kitchen fills with the aroma of nostalgia. 
                    We invite you to be part of our family tradition.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                        <h4 className="text-3xl font-serif text-primary mb-2">100%</h4>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider">Authentic Recipes</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-serif text-primary mb-2">50+</h4>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider">Years of Heritage</p>
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
