"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const comedyEvents = [
  {
    id: "1",
    title: "Zakir Khan Stand-Up Special",
    date: "30 May 2025",
    location: "Delhi, India",
    image: "/assets/zakir.jpeg",
  },
  {
    id: "2",
    title: "Samay Raina Live",
    date: "15 June 2025",
    location: "Mumbai, India",
    image: "/assets/comedy/Samay.jpeg",
  },
  {
    id: "3",
    title: "Atul Khatri Comedy Night",
    date: "20 July 2025",
    location: "Bangalore, India",
    image: "/assets/comedy/Atul.jpeg",
  },
];

export default function ComedyPage() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold mb-12 text-center tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎤 Comedy Events
        </motion.h1>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {comedyEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-400 overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Link href={`/events/${event.id}`} className="block group">
                <div className="relative h-[400px] overflow-hidden rounded-t-2xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-48">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 truncate">{event.title}</h3>
                    <p className="text-sm text-gray-500 mb-1">
                      <time dateTime={new Date(event.date).toISOString()}>
                        {event.date}
                      </time>
                    </p>
                    <p className="text-sm text-gray-400">{event.location}</p>
                  </div>
                  <button
                    type="button"
                    className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium text-lg shadow-md hover:from-purple-700 hover:to-purple-600 transition"
                  >
                    Book Now
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
