"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Riya Sharma",
    quote: "Booking events has never been this smooth. Love the UI!",
    location: "Mumbai",
    image: "",
  },
  {
    name: "Aman Verma",
    quote: "Attended 3 concerts through this app. Flawless experience!",
    location: "Delhi",
    image: "",
  },
  {
    name: "Sneha Kapoor",
    quote: "Finally an event platform that looks and works great!",
    location: "Bangalore",
    image: "",
  },
  {
    name: "Kunal Joshi",
    quote: "Super easy to find and book events in my city.",
    location: "Pune",
    image: "",
  },
  {
    name: "Meera Nair",
    quote: "Love how fast and secure the booking process is!",
    location: "Chennai",
    image: "",
  },
  {
    name: "Rahul Deshmukh",
    quote: "I recommend this platform to all my friends. Awesome experience!",
    location: "Hyderabad",
    image: "",
  },
];

export default function Testimonies() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Users Say
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Real stories from people who love our platform
        </motion.p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => {
            const avatar = t.image
              ? t.image
              : `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0D8ABC&color=fff&size=128`;

            return (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gray-300"
                  />
                  <div>
                    <p className="font-semibold text-lg">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>
                <p className="italic text-gray-700">“{t.quote}”</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
