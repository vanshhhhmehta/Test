'use client';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">GoEvents</h2>
          <p className="text-sm leading-6">
            Empowering artists and creators with seamless event hosting and ticketing solutions. Connecting audiences to unforgettable experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/events" className="hover:text-white transition">Events</a></li>
            <li><a href="/create" className="hover:text-white transition">Host Event</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
            <li><a href="/support" className="hover:text-white transition">Support</a></li>
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@urbanrizz.com" className="hover:text-white">info@urbanrizz.com</a></li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Dynasty Business Park, Mumbai</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Urban Rizz Events. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
