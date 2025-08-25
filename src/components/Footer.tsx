import React from 'react';
import { Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 mb-4 md:mb-0 hover:opacity-80 transition-opacity duration-200">
            <div className="flex items-center justify-center w-8 h-8 bg-amber-700 rounded-lg">
              <Scale className="w-5 h-5 text-amber-50" />
            </div>
            <span className="text-xl font-bold">LegalClarify</span>
          </Link>
          <div className="flex space-x-8 text-sm">
            <Link to="/privacy" className="hover:text-amber-200 transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-200 transition-colors duration-200">Terms of Service</Link>
            <Link to="/support" className="hover:text-amber-200 transition-colors duration-200">Support</Link>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
          <p>&copy; 2025 LegalClarify. All rights reserved. Empowering legal understanding through AI.</p>
        </div>
      </div>
    </footer>
  );
}