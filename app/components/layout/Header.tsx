import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            {/* Palestinian Flag Colors Accent */}
            <div className="flex space-x-1">
              <div className="w-2 h-6 bg-black rounded-sm"></div>
              <div className="w-2 h-6 bg-white rounded-sm"></div>
              <div className="w-2 h-6 bg-emerald-600 rounded-sm"></div>
              <div className="w-2 h-6 bg-red-600 rounded-sm"></div>
            </div>
            <span className="font-bold text-xl text-gray-900">
              تعلّم العربية
            </span>
            <span className="text-sm text-gray-600 hidden sm:block">
              Learn Arabic
            </span>
          </Link>
        </div>
        
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/lessons" className="nav-link hover:text-emerald-600 transition-colors">
            الدروس
          </Link>
          <Link href="/culture" className="nav-link hover:text-emerald-600 transition-colors">
            الثقافة
          </Link>
          <Link href="/practice" className="nav-link hover:text-emerald-600 transition-colors">
            التدريب
          </Link>
          <Link href="/about" className="nav-link hover:text-emerald-600 transition-colors">
            About
          </Link>
          <Link 
            href="/start" 
            className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
          >
            ابدأ الآن
          </Link>
        </nav>
      </div>
    </header>
  );
};
