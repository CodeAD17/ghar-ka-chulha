import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import heroBg from "@assets/generated_images/dark_cinematic_wooden_background_with_smoke_and_embers.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#120C08] overflow-x-hidden relative">
        {/* Global Background Texture */}
        <div 
            className="fixed inset-0 z-0 opacity-40 pointer-events-none"
            style={{ 
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'contrast(1.2) brightness(0.5)'
            }}
        />
        
        {/* Smoke overlay effect */}
        <div className="fixed inset-0 z-0 opacity-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />

        <div className="relative z-10">
            <Navbar />
            <Hero />
            <MenuSection />
            <Footer />
        </div>
    </div>
  );
}
