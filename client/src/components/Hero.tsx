import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_cinematic_wooden_background_with_smoke_and_embers.png";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax-like feel via fixed attachment or generic styling */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
            backgroundImage: `url(${heroBg})`,
            filter: "brightness(0.6)"
        }} 
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center md:text-left pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-primary font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-4 block">
            Authentic Indian Cuisine
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground mb-6 leading-tight">
            The Authentic Taste <br />
            <span className="text-primary italic font-serif">of Ghar Ka Chulha</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 font-sans leading-relaxed">
            Desi Chicken & Mutton, cooked to perfection in traditional clay pots. 
            Experience the nostalgia of home-cooked meals every Sunday.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-none font-serif tracking-wider">
              VIEW MENU
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-6 rounded-none font-serif tracking-wider backdrop-blur-sm">
              BOOK A TABLE
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
