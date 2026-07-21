'use client';

import { motion } from 'framer-motion';

export default function AdminOrders() {
  return (
    <section className="min-h-screen pt-32 bg-dark-black">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-playfair font-bold text-gold mb-12">
          Order Management
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-burgundy to-dark-brown rounded-lg p-8"
        >
          <table className="w-full text-warm-beige">
            <thead>
              <tr className="border-b border-gold/30">
                <th className="text-left py-4 px-4">Order ID</th>
                <th className="text-left py-4 px-4">Customer</th>
                <th className="text-left py-4 px-4">Total</th>
                <th className="text-left py-4 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gold/30 hover:bg-dark-black/50">
                <td className="py-4 px-4">#001</td>
                <td className="py-4 px-4">John Doe</td>
                <td className="py-4 px-4">$145.00</td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
