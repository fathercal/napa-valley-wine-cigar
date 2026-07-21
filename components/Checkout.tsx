'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cartStore';

const Checkout = () => {
  const { getTotalPrice, getTotalItems } = useCartStore();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Create payment intent
      const response = await fetch('/api/payments/create-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: getTotalPrice() + 10 + (getTotalPrice() * 0.1),
          metadata: { formData },
        }),
      });

      const data = await response.json();
      
      if (data.clientSecret) {
        // Redirect to payment page
        window.location.href = `/payment?clientSecret=${data.clientSecret}`;
      }
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen pt-32 bg-dark-black">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-playfair font-bold text-gold mb-12">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-burgundy to-dark-brown rounded-lg p-8">
              <h2 className="text-2xl font-playfair font-bold text-gold mb-6">
                Shipping Information
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-dark-black text-warm-beige border border-gold/30 rounded focus:border-gold focus:outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-dark-black text-warm-beige border border-gold/30 rounded focus:border-gold focus:outline-none"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-black text-warm-beige border border-gold/30 rounded focus:border-gold focus:outline-none mb-4"
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-black text-warm-beige border border-gold/30 rounded focus:border-gold focus:outline-none mb-4"
              />

              <div className="grid grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-dark-black text-warm-beige border border-gold/30 rounded focus:border-gold focus:outline-none"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-dark-black text-warm-beige border border-gold/30 rounded focus:border-gold focus:outline-none"
                />
              </div>

              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={formData.zip}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-black text-warm-beige border border-gold/30 rounded focus:border-gold focus:outline-none mb-8"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gold text-dark-black hover:bg-warm-beige transition font-montserrat font-semibold rounded disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Continue to Payment'}
              </button>
            </div>
          </motion.form>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-burgundy to-dark-brown rounded-lg p-8 h-fit"
          >
            <h2 className="text-2xl font-playfair font-bold text-gold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-warm-beige">
                <span>Items ({getTotalItems()}):</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-warm-beige">
                <span>Shipping:</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between text-warm-beige">
                <span>Tax (10%):</span>
                <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gold/30 pt-4">
              <div className="flex justify-between text-gold text-xl font-bold">
                <span>Total:</span>
                <span>${(getTotalPrice() + 10 + getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
