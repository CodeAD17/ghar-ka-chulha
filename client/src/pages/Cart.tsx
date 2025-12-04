import { useCart } from "@/lib/cartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, CreditCard, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import LocationPicker from "@/components/LocationPicker";

export default function Cart() {
    const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [locationLink, setLocationLink] = useState("");

    const handleLocationSelect = (lat: number, lng: number) => {
        setLocationLink(`https://www.google.com/maps?q=${lat},${lng}`);
    };

    const handleCheckout = () => {
        if (!name || !phone || !address) {
            alert("Please fill in all details to place your order.");
            return;
        }

        const orderDetails = items
            .map((item) => `- ${item.name} (${item.variant || "Standard"}) x ${item.quantity} = ₹${item.price * item.quantity}`)
            .join("\n");

        const totalAmount = cartTotal + 40 + Math.round(cartTotal * 0.05);

        let message = `*New Order Request* 🍽️\n\n*Customer Details:*\nName: ${name}\nPhone: ${phone}\nAddress: ${address}\n`;

        if (locationLink) {
            message += `Location: ${locationLink}\n`;
        }

        message += `\n*Order Summary:*\n${orderDetails}\n\n*Total Amount:* ₹${totalAmount}\n\nPlease confirm my order!`;

        const whatsappUrl = `https://wa.me/8467932423?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-32 md:pb-24">
            <div className="container mx-auto px-6 max-w-4xl">

                <h1 className="text-3xl md:text-4xl font-display text-white mb-8">Your Order</h1>

                {items.length === 0 ? (
                    <div className="text-center py-20 border border-white/5 rounded-2xl bg-[#111]">
                        <div className="mb-6 text-white/20">
                            <div className="w-20 h-20 mx-auto border-2 border-current rounded-full flex items-center justify-center">
                                <span className="text-4xl">0</span>
                            </div>
                        </div>
                        <h2 className="text-xl text-white mb-2 font-display">Your cart is empty</h2>
                        <p className="text-white/50 mb-8 text-sm">Looks like you haven't added any delicious items yet.</p>
                        <Link href="/menu">
                            <Button className="bg-primary text-black hover:bg-white uppercase tracking-widest text-xs px-8 py-6">
                                Browse Menu
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <motion.div
                                    key={`${item.id}-${item.variant}`}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-4 bg-[#111] p-4 rounded-xl border border-white/5 items-center"
                                >
                                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex-grow min-w-0">
                                        <h3 className="text-white font-display text-lg truncate">{item.name}</h3>
                                        {item.variant && <p className="text-primary text-xs uppercase tracking-wider mb-2">{item.variant}</p>}
                                        <p className="text-white/70 font-serif">₹{item.price * item.quantity}</p>
                                    </div>

                                    <div className="flex flex-col items-end gap-3">
                                        <div className="flex items-center gap-3 bg-white/5 rounded-full px-2 py-1">
                                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-primary text-white/50 transition-colors">
                                                <Minus size={14} />
                                            </button>
                                            <span className="text-sm font-bold text-white w-4 text-center">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-primary text-white/50 transition-colors">
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-xs text-red-400/60 hover:text-red-400 flex items-center gap-1 transition-colors"
                                        >
                                            <Trash2 size={12} /> Remove
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Checkout Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#111] border border-white/5 rounded-xl p-6 sticky top-24">
                                <h3 className="text-xl font-display text-white mb-6">Summary</h3>

                                <div className="space-y-3 text-sm text-white/60 mb-6 border-b border-white/10 pb-6">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span className="text-white">₹{cartTotal}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Delivery Fee</span>
                                        <span className="text-white">₹40</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Taxes</span>
                                        <span className="text-white">₹{Math.round(cartTotal * 0.05)}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-lg font-bold text-white uppercase tracking-widest">Total</span>
                                    <span className="text-2xl font-serif text-primary">₹{cartTotal + 40 + Math.round(cartTotal * 0.05)}</span>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <h4 className="text-white font-display text-sm">Delivery Details</h4>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 text-sm"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 text-sm"
                                    />
                                    <textarea
                                        placeholder="Delivery Address (House No, Building, Landmark)"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 text-sm min-h-[80px]"
                                    />

                                    <div className="space-y-2">
                                        <label className="text-xs text-white/50 uppercase tracking-wider">Pin Location on Map</label>
                                        <LocationPicker onLocationSelect={handleLocationSelect} />
                                    </div>
                                </div>

                                <Button
                                    onClick={handleCheckout}
                                    className="w-full bg-primary text-black hover:bg-white font-bold tracking-widest uppercase h-14 mb-4 text-xs"
                                >
                                    Checkout via WhatsApp <ChevronRight className="ml-2 w-4 h-4" />
                                </Button>

                                <p className="text-[10px] text-white/30 text-center flex items-center justify-center gap-2">
                                    <CreditCard size={12} /> Secure Payment
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
