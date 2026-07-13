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
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
      <div className="bg-[#5F6B4E] rounded-[2rem] p-10 md:p-16 text-[#FAF8F5] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-3 text-center md:text-left max-w-lg z-10 relative">
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Join the Archive.</h2>
          <p className="text-sm md:text-base text-[#FAF8F5]/85 leading-relaxed font-sans font-light">
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
            className="bg-[#A4B296]/30 border-none text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white rounded-lg px-5 py-3.5 text-sm w-full sm:w-72"
          />
          <button 
            type="submit"
            className={`text-white text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-lg transition-all flex-shrink-0 flex items-center justify-center gap-2 ${
              subscribed ? 'bg-[#3A422F]' : 'bg-[#4A543C] hover:bg-[#3A422F]'
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

