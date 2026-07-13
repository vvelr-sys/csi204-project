"use client";

import React, { useState } from 'react';
import { Leaf, CheckCircle2 } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 animate-fade-up delay-300">
      <div className="bg-primary rounded-[2.5rem] p-8 md:p-14 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-premium border border-primary-dark/20 relative overflow-hidden">
        {/* Background leaf graphic */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 pointer-events-none">
          <Leaf className="w-full h-full text-white" />
        </div>

        <div className="space-y-3 text-center md:text-left max-w-lg z-10 relative">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Join the Archive.</h2>
          <p className="text-xs text-[#FAF8F5]/85 leading-relaxed font-sans font-light">
            Get early access to weekly drops and exclusive sustainability reports. No spam, just heritage.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full md:w-auto gap-3 flex-shrink-0 z-10 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-white rounded-xl px-5 py-3.5 text-xs w-full sm:w-64 backdrop-blur-sm"
          />
          <button 
            type="submit"
            className={`text-white text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all active:scale-95 flex-shrink-0 shadow-md flex items-center justify-center gap-2 ${
              subscribed ? 'bg-sage-600 hover:bg-sage-700' : 'bg-neutral hover:bg-[#1A1A18]'
            }`}
          >
            {subscribed ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                SUBSCRIBED
              </>
            ) : (
              'SUBSCRIBE'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

