import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_wooden_board_with_raw_ingredients_and_clay_pot.png"; // Placeholder, will update with new generation

export default function Hero() {
  return (
    <section className="relative w-full px-4 md:px-8 pt-24 pb-12">
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden h-[500px] md:h-[600px] shadow-2xl border border-white/5 group">
        
        {/* Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ 
                backgroundImage: `url(${heroBg})`,
            }} 
        />
        
        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Content Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display text-white mb-6 leading-tight tracking-wide">
              THE AUTHENTIC TASTE <br/>
              <span className="font-light text-white/90">OF GHAR KA CHULHA</span>
            </h1>
            
            <p className="text-white/70 text-lg mb-8 font-sans max-w-md font-light leading-relaxed">
              Desi Chicken & Mutton, Every Sunday. <br/>
              Takeaway & Delivery.
            </p>
            
            <Button 
                className="bg-[#8B6E4E] hover:bg-[#A3825E] text-white rounded-full px-8 py-6 text-xs font-bold tracking-[0.15em] uppercase transition-all transform hover:translate-x-2"
            >
              View Menu
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
