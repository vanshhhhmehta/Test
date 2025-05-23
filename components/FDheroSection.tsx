"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MovieHero() {
  return (
    <section className="relative h-[90vh] w-full bg-black">
      {/* Background Poster */}
      <div className="absolute inset-0 overflow-hidden">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover object-top opacity-100"
  >
    <source src="/assets/videoplayback.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
</div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center text-white">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Final Destination
        </motion.h1>
        <motion.p
          className="text-lg text-gray-200 max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          After a terrifying premonition saves a group of teenagers from a fatal plane crash,
          Death comes hunting to correct its course. Can anyone truly escape fate?
        </motion.p>

        <motion.div
          className="flex gap-4 text-sm text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span>🗓️ Release: june 17, 2025</span>
          <span>🎬 Genre: Horror, Thriller</span>
          <span>⏱️ Runtime: 98 min</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="#"
            className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
