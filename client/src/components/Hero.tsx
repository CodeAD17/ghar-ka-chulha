import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/dark_luxury_marble_texture_with_gold_veins.png";
import feastImage from "@assets/generated_images/cinematic_indian_feast_spread.png";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 pb-12 md:pt-0">

      {/* Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          y: y1
        }}
      />

      <div className="absolute inset-0 z-10 bg-black/50" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container mx-auto px-6 z-20 relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* Text Content */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-primary" />
            <span className="text-primary tracking-[0.3em] uppercase text-[10px] md:text-sm font-sans font-bold">Est. Nov 2025</span>
            <div className="h-[1px] w-8 md:w-0 bg-primary lg:hidden" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-display text-white mb-6 md:mb-8 leading-tight">
            GHAR KA <br />
            <span className="text-gold-gradient font-serif italic">Chulha</span>
          </h1>

          <p className="text-white/70 text-base md:text-xl font-sans font-light leading-relaxed max-w-md md:max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 px-4 lg:px-0">
            Authentic flavors delivered to your doorstep. Experience the "Ghar Ka Chulha" nostalgia with our slow-cooked delicacies.
          </p>

          <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/menu">
              <Button className="w-full sm:w-auto bg-primary text-black hover:bg-white hover:text-black rounded-none px-10 py-6 md:py-7 text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                Order Online
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="relative z-10 rounded-2xl md:rounded-t-[200px] overflow-hidden border border-white/10 shadow-2xl mx-4 md:mx-0 aspect-[4/3] md:aspect-auto">
            <img src={feastImage} alt="Royal Feast" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-overlay" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-full h-full border border-primary/20 rounded-2xl md:rounded-t-[200px] z-0 animate-pulse duration-[5000ms] hidden md:block" />
        </motion.div>
      </div>
    </section>
  );
}
