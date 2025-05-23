'use client';

import Link from 'next/link';

const navItems = [
  { label: 'IPL', href: '/events-page/ipl' },
  { label: 'Movies', href: '/events/movies' },
  { label: 'Concerts', href: '/category/concerts' },
  { label: 'Workshops', href: '/events/workshops' },
  { label: 'Others', href: '/otherevents' },
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md text-gray-800 px-10 py-5 z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div className="flex space-x-8 items-center text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
