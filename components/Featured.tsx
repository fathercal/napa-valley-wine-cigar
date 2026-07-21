'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featured = [
    {
      id: 1,
      title: 'Cabernet Sauvignon Reserve 2019',
      category: 'Best Seller Wine',
      price: '$85',
      rating: '★★★★★',
    },
    {
      id: 2,
      title: 'Montecristo No. 2',
      category: 'Best Seller Cigar',
      price: '$24',
      rating: '★★★★★',
    },
    {
      id: 3,
      title: 'Premium Cigar Humidor',
      category: 'Accessories',
      price: '$180',
      rating: '★★★★★',
    },
  ];

  return (
    <section className="py-20 bg-gradient-burgundy">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-playfair font-bold text-gold text-center mb-12"
        >
          Customer Favorites
        </motion.h2>

        <div className="relative">
          {/* Carousel */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-black rounded-lg p-12 text-center min-h-96 flex flex-col justify-center items-center"
          >
            <p className="text-gold font-montserrat font-semibold mb-4">
              {featured[currentIndex].category}
            </p>
            <h3 className="text-4xl font-playfair font-bold text-gold mb-6">
              {featured[currentIndex].title}
            </h3>
            <p className="text-xl text-warm-beige mb-6">
              {featured[currentIndex].rating}
            </p>
            <p className="text-3xl font-playfair font-bold text-gold mb-8">
              {featured[currentIndex].price}
            </p>
            <button className="px-8 py-3 bg-gold text-dark-black hover:bg-warm-beige transition font-montserrat font-semibold">
              Add to Cart
            </button>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1))}
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-dark-black transition"
            >
              ← Previous
            </button>
            <div className="flex gap-2 items-center">
              {featured.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentIndex ? 'bg-gold' : 'bg-gold/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1))}
              className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-dark-black transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
