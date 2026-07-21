'use client';

import { motion } from 'framer-motion';
import { useCartStore } from '@/lib/store/cartStore';
import Link from 'next/link';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <section className="min-h-screen pt-32 bg-dark-black">
        <div className="max-w-4xl mx-auto px-6 text-center py-20">
          <h1 className="text-4xl font-playfair font-bold text-gold mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-warm-beige mb-8">
            Explore our wine and cigar collections to add items to your cart.
          </p>
          <Link
            href="/#wine"
            className="px-8 py-3 bg-gold text-dark-black hover:bg-warm-beige transition font-montserrat font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-32 bg-dark-black">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-playfair font-bold text-gold mb-12">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-br from-burgundy to-dark-brown rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-gold mb-2">
                      {item.name}
                    </h3>
                    <p className="text-warm-beige text-lg">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>

                  <div className="flex gap-4 items-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 px-2 py-1 bg-dark-black text-warm-beige border border-gold/30 rounded text-center"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-4 py-2 bg-burgundy text-warm-beige hover:bg-red-700 transition"
                    >
                      Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

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
                <span>Subtotal:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-warm-beige">
                <span>Shipping:</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between text-warm-beige">
                <span>Tax:</span>
                <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gold/30 pt-4 mb-6">
              <div className="flex justify-between text-gold text-xl font-bold">
                <span>Total:</span>
                <span>${(getTotalPrice() + 10 + getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full py-3 bg-gold text-dark-black hover:bg-warm-beige transition font-montserrat font-semibold text-center rounded mb-4"
            >
              Proceed to Checkout
            </Link>

            <button
              onClick={() => clearCart()}
              className="w-full py-3 border border-gold text-gold hover:bg-gold hover:text-dark-black transition font-montserrat font-semibold rounded"
            >
              Clear Cart
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
