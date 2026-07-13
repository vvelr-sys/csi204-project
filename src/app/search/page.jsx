"use client";

import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search as SearchIcon } from 'lucide-react';
import { mockProducts } from '../../data/products';
import QuickViewModal from '../../components/home/QuickViewModal';
import { useCart } from '../../context/CartContext';
import { useCurrentUser } from '../../context/UserContext';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const { addToCart } = useCart();
  const { currentUser } = useCurrentUser();

  const searchResults = useMemo(() => {
    if (!query) return [];
    return mockProducts.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.brandCategory.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="py-12 md:py-24 max-w-7xl mx-auto px-6 sm:px-8 font-sans">
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#2D2D2A] mb-4">
          Search Results
        </h1>
        <p className="text-[#8B8B88] text-sm md:text-base">
          {searchResults.length} {searchResults.length === 1 ? 'piece' : 'pieces'} found for "{query}"
        </p>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResults.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-none bg-[#EAE5DB]/40 border border-[#EAE5DB]">
                <Link href={`/product/${product.id}`} className="block relative overflow-hidden h-full w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                {product.badge && (
                  <span
                    className="absolute top-4 left-4 text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase"
                    style={{
                      backgroundColor: product.badgeStyle.background,
                      color: product.badgeStyle.color,
                    }}
                  >
                    {product.badge}
                  </span>
                )}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white text-[#2D2D2A]"
                >
                  <SearchIcon className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8B8B88]">
                  {product.brandCategory}
                </span>
                <div className="flex justify-between items-start pt-1">
                  <Link href={`/product/${product.id}`} className="group-hover:opacity-75 transition-opacity">
                    <h3 className="font-serif text-lg font-bold text-[#2D2D2A] leading-tight">
                      {product.title}
                    </h3>
                  </Link>
                  <span className="font-serif text-lg font-bold text-[#8B6B57]">
                    ${product.price}
                  </span>
                </div>
              </div>

              {currentUser?.role === 'customer' && (
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-transparent text-[#8B8B88] border border-[#EAE5DB] hover:border-[#5F6B4E] hover:text-[#5F6B4E] font-semibold text-[10px] py-3 rounded-none uppercase tracking-wider transition-colors mt-4"
                >
                  ADD TO CART
                </button>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="w-16 h-16 bg-[#F2E9DC] rounded-full flex items-center justify-center mx-auto text-[#8B8B88] mb-4">
            <SearchIcon className="h-6 w-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-[#2D2D2A] mb-2">No pieces found</h3>
          <p className="text-[#8B8B88] text-sm">
            We couldn't find any items matching "{query}". Try searching for something else.
          </p>
        </div>
      )}

      {selectedProduct && (
        <QuickViewModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-[#8B8B88]">Loading search results...</div>}>
      <SearchContent />
    </Suspense>
  );
}
