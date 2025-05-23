"use client";

import Link from "next/link";
import { Music, Mic2, Lightbulb, Palette } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Concerts", icon: Music, slug: "concerts" },
  { name: "Comedy", icon: Mic2, slug: "comedy" },
  { name: "Tech Events", icon: Lightbulb, slug: "tech-events" },
  { name: "Workshops", icon: Palette, slug: "workshops" },
];

export default function Category() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Browse by Category
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Discover events that match your vibe
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link href={`/category/${cat.slug}`} key={cat.name} className="block">
                <motion.div
                  className="bg-gray-100 rounded-xl p-8 text-center shadow hover:shadow-xl transition duration-300 hover:bg-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex justify-center items-center mb-4">
                    <Icon className="w-12 h-12 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{cat.name}</h3>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
