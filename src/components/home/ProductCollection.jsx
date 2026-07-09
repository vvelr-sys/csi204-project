import React, { useState, useMemo } from 'react';
import { Eye, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mockProducts } from '../../data/products';
import QuickViewModal from './QuickViewModal';
import { useCart } from '../../context/CartContext';

const FILTERS = ['All Pieces', 'Vintage Denim', 'Y2K Shirts', 'Jackets'];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ProductCollection() {
  const [activeFilter, setActiveFilter] = useState('All Pieces');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const filteredProducts = useMemo(
    () =>
      activeFilter === 'All Pieces'
        ? mockProducts
        : mockProducts.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <>
      <section id="collection" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 space-y-12 animate-fade-up delay-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE5DB]/75 pb-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2D2D2A]">The Collection</h2>
            <p className="text-xs text-[#8B8B88] mt-2 font-sans font-light">Consciously sourced. Timelessly designed.</p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-xs font-semibold px-5 py-2.5 rounded-full transition-all border ${
                  activeFilter === filter
                    ? 'bg-primary border-primary text-white shadow-md'
                    : 'bg-white border-[#EAE5DB] text-[#2D2D2A] hover:bg-tertiary/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 && (
          <div className="col-span-3 text-center py-20 text-[#8B8B88] font-sans text-sm">
            ไม่มีสินค้าในหมวดหมู่นี้
          </div>
        )}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16"
        >
          {filteredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="flex flex-col space-y-4 group relative">
              <Link to={`/product/${product.id}`} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#FAF7F2] border border-[#EAE5DB]/60 shadow-premium block cursor-pointer">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.title} model view`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 scale-102 group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-5 left-5 text-[9px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#2D2D2A] border border-[#EAE5DB]/65 shadow-sm z-10">
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-5 right-5 text-[9px] font-bold px-3 py-1.5 rounded-full bg-[#5F6B4E] text-[#FAF8F5] border border-primary-dark/20 shadow-sm z-10 flex items-center gap-1">
                  <Leaf className="h-3 w-3 fill-current text-[#FAF8F5]" />
                  -{product.carbonSaved.split(' ')[0]} kg
                </span>
                <div className="absolute inset-0 bg-[#2D2D2A]/15 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-end justify-center pb-6">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedProduct(product);
                    }}
                    className="bg-[#FCFBF7] text-[#2D2D2A] text-xs font-semibold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:bg-primary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500"
                  >
                    <Eye className="h-4 w-4" />
                    Quick View
                  </button>
                </div>
              </Link>

              <div className="flex justify-between items-start pt-1 font-sans">
                <div className="space-y-1">
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="font-semibold text-base text-[#2D2D2A] leading-snug group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#8B8B88] font-light">
                    {product.brandCategory}
                  </p>
                </div>
                <span className="font-serif font-semibold text-base text-[#2D2D2A]">
                  ${product.price}
                </span>
              </div>

              <button
                onClick={() => {
                  addToCart(product);
                }}
                className="btn-slide-outline w-full bg-transparent text-[#2D2D2A] border border-[#2D2D2A] font-semibold text-xs py-3.5 rounded-xl uppercase tracking-wider hover:bg-[#2D2D2A] hover:text-[#FAF8F5] transition-colors"
              >
                ADD TO CART
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <QuickViewModal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </>
  );
}
