import React from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="bg-amber-50 border-b border-amber-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <div className="flex items-center justify-center w-10 h-10 bg-amber-800 rounded-lg">
              <Scale className="w-6 h-6 text-amber-50" />
            </div>
            <span className="text-2xl font-bold text-amber-900">LegalClarify</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/help" className="text-amber-700 hover:text-amber-900 transition-colors duration-200 font-medium">
              Help
            </Link>
            <Link to="/contact" className="text-amber-700 hover:text-amber-900 transition-colors duration-200 font-medium">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/signin" className="text-amber-700 hover:text-amber-900 transition-colors duration-200 px-4 py-2 font-medium">
                Sign In
              </Link>
              <Link to="/signup" className="bg-amber-800 text-amber-50 px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors duration-200 font-medium shadow-md">
                Sign Up
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-amber-800 hover:text-amber-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-200">
            <div className="flex flex-col space-y-4">
              <Link to="/help" className="text-amber-700 hover:text-amber-900 transition-colors duration-200 font-medium">
                Help
              </Link>
              <Link to="/contact" className="text-amber-700 hover:text-amber-900 transition-colors duration-200 font-medium">
                Contact
              </Link>
              <Link to="/signin" className="text-left text-amber-700 hover:text-amber-900 transition-colors duration-200 font-medium">
                Sign In
              </Link>
              <Link to="/signup" className="bg-amber-800 text-amber-50 px-6 py-2 rounded-lg hover:bg-amber-900 transition-colors duration-200 font-medium w-fit shadow-md">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}