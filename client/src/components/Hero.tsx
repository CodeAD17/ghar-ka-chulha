import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/dark_luxury_marble_texture_with_gold_veins.png";
import feastImage from "@assets/generated_images/cinematic_indian_feast_spread.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 md:pt-0">
      
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
            backgroundImage: `url(${heroBg})`,
            y: y1
        }} 
      />
      
      <div className="absolute inset-0 z-10 bg-black/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container mx-auto px-6 z-20 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          style={{ opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
             <div className="h-[1px] w-12 bg-primary" />
             <span className="text-primary tracking-[0.3em] uppercase text-xs md:text-sm font-sans font-bold">Est. 1975</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-display text-white mb-8 leading-tight">
            ROYAL <br/>
            <span className="text-gold-gradient font-serif italic">Indian Heritage</span>
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl font-sans font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            Experience the authentic "Ghar Ka Chulha" flavors. Slow-cooked delicacies prepared in traditional clay pots, bringing the royal court directly to your plate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Button className="bg-primary text-black hover:bg-white hover:text-black rounded-none px-10 py-7 text-sm font-bold tracking-widest uppercase transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Explore Menu
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white rounded-none px-10 py-7 text-sm font-bold tracking-widest uppercase backdrop-blur-sm transition-all duration-500">
              Book a Table
            </Button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative hidden lg:block"
        >
            <div className="relative z-10 rounded-t-[200px] overflow-hidden border border-white/10 shadow-2xl">
                <img src={feastImage} alt="Royal Feast" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-overlay" />
            </div>
            
            {/* Decorative Circle behind */}
            <div className="absolute -top-10 -right-10 w-full h-full border border-primary/20 rounded-t-[200px] z-0 animate-pulse duration-[5000ms]" />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 hidden md:flex"
      >
        <span className="text-[10px] tracking-widest uppercase text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
