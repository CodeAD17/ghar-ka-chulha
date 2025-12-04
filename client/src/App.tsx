import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/lib/cartContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import Contact from "@/pages/Contact";
import Cart from "@/pages/Cart";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import { useEffect } from "react";

function ScrollToTop() {
  const [pathname] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden relative selection:bg-primary/30">
      {/* Global Grain Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[60]" 
             style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} 
      />
      
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer />
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
