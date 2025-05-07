import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PublicHeader from '../components/layout/PublicHeader';

// Footer component with proper Link elements for React Router
const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">LMS Platform</h3>
          <p className="text-gray-400">
            Empowering education through technology.
            Our platform helps institutions deliver quality learning experiences.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            <li><Link to="/docs" className="text-gray-400 hover:text-white">Documentation</Link></li>
            <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} LMS Platform. All rights reserved.
      </div>
    </div>
  </footer>
);

const MainLayout = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to change header styles on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;