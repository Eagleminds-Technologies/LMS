import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Header component with proper Link elements for React Router
const Header = () => (
  <header className="bg-white shadow-sm py-4">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-primary">LMS Platform</div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
        <Link to="/features" className="text-gray-700 hover:text-primary">Features</Link>
        <Link to="/pricing" className="text-gray-700 hover:text-primary">Pricing</Link>
        <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
        <Link to="/login" className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-md">Login</Link>
      </nav>
      <button className="md:hidden text-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
);

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
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;