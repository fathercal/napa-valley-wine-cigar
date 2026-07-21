'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const wines = [
  {
    id: 1,
    name: 'Cabernet Sauvignon Reserve',
    region: 'Napa Valley',
    type: 'Red Wine',
    price: '$85',
    description: 'Full-bodied with notes of blackberry and oak',
  },
  {
    id: 2,
    name: 'Pinot Noir Estate',
    region: 'Sonoma Coast',
    type: 'Red Wine',
    price: '$65',
    description: 'Elegant complexity with red fruit notes',
  },
  {
    id: 3,
    name: 'Chardonnay Vineyard Select',
    region: 'Napa Valley',
    type: 'White Wine',
    price: '$55',
    description: 'Crisp with hints of vanilla and apple',
  },
  {
    id: 4,
    name: 'Sauvignon Blanc Premium',
    region: 'Napa Valley',
    type: 'White Wine',
    price: '$48',
    description: 'Refreshing citrus and herbal notes',
  },
  {
    id: 5,
    name: 'Sparkling Reserve Brut',
    region: 'Napa Valley',
    type: 'Sparkling',
    price: '$95',
    description: 'Celebratory excellence in every bottle',
  },
  {
    id: 6,
    name: 'Limited Edition Merlot',
    region: 'Rutherford',
    type: 'Red Wine',
    price: '$120',
    description: 'Rare vintage with exceptional depth',
  },
];

const WineCollection = () => {
  return (
    <section id="wine" className="py-20 bg-dark-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-playfair font-bold text-gold mb-4">
            Wine Collection
          </h2>
          <p className="text-lg text-warm-beige max-w-2xl mx-auto">
            Explore our carefully curated selection of premium wines from Napa Valley and beyond
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wines.map((wine, index) => (
            <ProductCard key={wine.id} product={wine} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WineCollection;
