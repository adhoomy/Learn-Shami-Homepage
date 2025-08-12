import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-200 group">
            {/* Palestinian Flag Logo */}
            <div className="flex space-x-1 group-hover:scale-105 transition-all duration-200">
              <div className="w-3 h-6 bg-black rounded-lg"></div>
              <div className="w-3 h-6 bg-white rounded-lg border border-gray-200"></div>
              <div className="w-3 h-6 bg-emerald-500 rounded-lg"></div>
              <div className="w-3 h-6 bg-red-500 rounded-lg"></div>
            </div>
            <span className="font-bold text-xl text-emerald-600">
              Learn Palestinian
            </span>
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/lessons" className="text-gray-700 hover:text-emerald-600 transition-all duration-200 py-2 px-4 rounded-xl hover:bg-emerald-50 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">
            Lessons
          </Link>
          <Link href="/practice" className="text-gray-700 hover:text-emerald-600 transition-all duration-200 py-2 px-4 rounded-xl hover:bg-emerald-50 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">
            Practice
          </Link>
          <Link href="/culture" className="text-gray-700 hover:text-emerald-600 transition-all duration-200 py-2 px-4 rounded-xl hover:bg-emerald-50 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">
            Culture
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-all duration-200 py-2 px-4 rounded-xl hover:bg-emerald-50 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">
            About
          </Link>
        </nav>
        
        {/* Right Side - Sign In Button */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/signin" 
            className="hidden md:block px-6 py-2 text-emerald-600 border border-emerald-600 rounded-xl hover:bg-emerald-50 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Sign In
          </Link>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden w-8 h-8 bg-emerald-600 text-white rounded-xl flex items-center justify-center hover:bg-emerald-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};
