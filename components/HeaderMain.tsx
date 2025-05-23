'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useUserStore } from '@/app/store/userStore';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, PlusCircle, LogIn } from 'lucide-react';
import { FaUser } from 'react-icons/fa';



export default function HeaderMain() {
  const { user, logout, login } = useUserStore();
const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');

    if (token && username) {
      try {
        const parsed = JSON.parse(username);
        login(parsed, token);
      } catch {
        login({ username: username }, token);
      }
    }
  }, [login]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-wide hover:text-gray-300 transition">
          GoEvents
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/events-page" className="hover:text-gray-300 transition">Events</Link>
          <Link href="/my-events" className="hover:text-gray-300 transition">My Events</Link>

          {/* Dropdown on Hover */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-300 transition focus:outline-none">
              Event Actions <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50 overflow-hidden"
                >
                  <Link
                    href="/create-event-page"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <PlusCircle size={16} /> Create Event
                  </Link>
                  <Link
                    href="/join-event"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <LogIn size={16} /> Join Event
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 rounded-md flex justify-between gap-1 items-center text-center text-white cursor-default">
              <FaUser
 className='text-l text-white' />
               Welcome, {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm text-white bg-red-500 px-4 py-2 rounded-xl hover:text-gray-200 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 rounded-md bg-white text-black hover:bg-gray-200 transition"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
