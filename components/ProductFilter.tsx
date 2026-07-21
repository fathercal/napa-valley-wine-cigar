'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ProductFilter = ({ onFilterChange }: { onFilterChange: (filters: any) => void }) => {
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: [0, 500],
    search: '',
  });

  const handleFilterChange = (newFilters: any) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onFilterChange(updated);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gradient-to-br from-burgundy to-dark-brown rounded-lg p-6 h-fit"
    >
      <h2 className="text-xl font-playfair font-bold text-gold mb-6">
        Filters
      </h2>

      {/* Search */}
      <div className="mb-6">
        <label className="text-warm-beige text-sm block mb-2">Search</label>
        <input
          type="text"
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) => handleFilterChange({ search: e.target.value })}
          className="w-full px-3 py-2 bg-dark-black text-warm-beige border border-gold/30 rounded focus:border-gold focus:outline-none"
        />
      </div>

      {/* Type Filter */}
      <div className="mb-6">
        <label className="text-warm-beige text-sm block mb-2">Type</label>
        <select
          value={filters.type}
          onChange={(e) => handleFilterChange({ type: e.target.value })}
          className="w-full px-3 py-2 bg-dark-black text-warm-beige border border-gold/30 rounded focus:border-gold focus:outline-none"
        >
          <option value="all">All Products</option>
          <option value="wine">Wine</option>
          <option value="cigar">Cigars</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="text-warm-beige text-sm block mb-2">
          Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </label>
        <input
          type="range"
          min="0"
          max="500"
          value={filters.priceRange[1]}
          onChange={(e) =>
            handleFilterChange({
              priceRange: [filters.priceRange[0], parseInt(e.target.value)],
            })
          }
          className="w-full accent-gold"
        />
      </div>
    </motion.div>
  );
};

export default ProductFilter;
