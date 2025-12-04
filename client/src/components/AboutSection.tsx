import { motion } from "framer-motion";
import texture from "@assets/generated_images/dark_luxury_marble_texture_with_gold_veins.png"; 

export default function AboutSection() {
  return (
    <section id="about-us" className="py-32 relative overflow-hidden">
        {/* Background Texture */}
        <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none grayscale"
            style={{ backgroundImage: `url(${texture})` }}
        />
        
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
             <div className="relative">
                {/* Image Frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-primary/30 z-0" />
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/10 z-0" />
                
                <div className="relative z-10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                    <img 
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" 
                        alt="Restaurant Interior" 
                        className="w-full h-auto shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                    
                    <div className="absolute bottom-8 left-8 right-8 text-center">
                        <p className="text-white/80 font-serif italic text-xl">"Cooking is an art, but serving is a passion."</p>
                    </div>
                </div>
             </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[1px] bg-primary" />
                    <span className="text-primary font-sans tracking-[0.3em] uppercase text-xs">Our Heritage</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display text-white mb-8 leading-tight">
                    Tradition in <br/> 
                    <span className="text-white/20">Every Bite</span>
                </h2>
                
                <p className="text-white/60 font-sans text-lg leading-relaxed mb-6 font-light">
                    "Ghar Ka Chulha" isn't just a name; it's a promise. Born from the desire to bring authentic, 
                    slow-cooked rustic flavors back to the modern dining table.
                </p>
                <p className="text-white/60 font-sans text-lg leading-relaxed mb-10 font-light">
                    We source our spices from heritage markets and cook our meats in traditional clay pots over open flames.
                    Every Sunday, our kitchen fills with the aroma of nostalgia.
                </p>
                
                <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                    {[
                        { number: "50+", label: "Years Legacy" },
                        { number: "100%", label: "Authentic" },
                        { number: "4.9", label: "Rating" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <h4 className="text-2xl md:text-3xl font-display text-primary mb-2">{stat.number}</h4>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
