import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-32 md:pb-24">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-primary font-sans text-xs tracking-[0.4em] uppercase block mb-4">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-display text-white mb-6">Contact Us</h1>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-display text-white mb-8">Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Location</h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    32, Modi Society Colony,<br/>
                    Near St. Paul's School,<br/>
                    Bareilly Road, Rampur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Phone</h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    +91 84493 06111<br/>
                    +91 84679 32423
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Email</h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    hello@gharkachulha.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 border border-white/10 rounded-2xl bg-white/[0.02]">
              <h3 className="text-lg font-display text-white mb-4">Opening Hours</h3>
              <div className="space-y-3 text-sm font-sans text-white/60">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Mon - Fri</span>
                  <span className="text-white">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Sat - Sun</span>
                  <span className="text-white">10:00 AM - 12:00 AM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-[#111] border border-white/5 p-8 md:p-10 rounded-2xl"
          >
            <h2 className="text-2xl font-display text-white mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">First Name</label>
                  <Input className="bg-white/5 border-white/10 text-white focus:border-primary/50 h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40">Last Name</label>
                  <Input className="bg-white/5 border-white/10 text-white focus:border-primary/50 h-12" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Email</label>
                <Input type="email" className="bg-white/5 border-white/10 text-white focus:border-primary/50 h-12" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40">Message</label>
                <Textarea className="bg-white/5 border-white/10 text-white focus:border-primary/50 min-h-[150px]" />
              </div>

              <Button className="w-full bg-primary text-black hover:bg-white font-bold tracking-widest uppercase h-12">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
