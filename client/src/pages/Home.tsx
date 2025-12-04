import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import heroBg from "@assets/generated_images/dark_luxury_marble_texture_with_gold_veins.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative selection:bg-primary/30">
        
        {/* Global Grain Texture for that "Film" look */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[60]" 
             style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} 
        />

        <Navbar />
        <Hero />
        <MenuSection />
        <AboutSection />
        <Footer />
        <BottomNav />
    </div>
  );
}
