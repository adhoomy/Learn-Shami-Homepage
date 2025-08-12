import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="flex space-x-1 group-hover:scale-105 transition-all duration-200">
                <div className="w-3 h-6 bg-black rounded-lg"></div>
                <div className="w-3 h-6 bg-white rounded-lg border border-gray-200"></div>
                <div className="w-3 h-6 bg-emerald-500 rounded-lg"></div>
                <div className="w-3 h-6 bg-red-500 rounded-lg"></div>
              </div>
              <span className="font-bold text-xl text-emerald-600">
                Learn Palestinian
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Discover the beautiful Palestinian Arabic dialect and connect with the rich 
              culture and traditions of Palestine through language learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Learning</h3>
            <ul className="space-y-2">
              <li><a href="/lessons" className="text-gray-600 hover:text-emerald-600 transition-all duration-200 hover:translate-x-1 inline-block py-1 px-2 rounded-lg hover:bg-emerald-50 cursor-pointer">Lessons</a></li>
              <li><a href="/practice" className="text-gray-600 hover:text-emerald-600 transition-all duration-200 hover:translate-x-1 inline-block py-1 px-2 rounded-lg hover:bg-emerald-50 cursor-pointer">Practice</a></li>
              <li><a href="/culture" className="text-gray-600 hover:text-emerald-600 transition-all duration-200 hover:translate-x-1 inline-block py-1 px-2 rounded-lg hover:bg-emerald-50 cursor-pointer">Culture</a></li>
              <li><a href="/leaderboard" className="text-gray-600 hover:text-emerald-600 transition-all duration-200 hover:translate-x-1 inline-block py-1 px-2 rounded-lg hover:bg-emerald-50 cursor-pointer">Leaderboard</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 Learn Palestinian. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-600 transition-all duration-200 hover:translate-x-1 inline-block py-1 px-2 rounded-lg hover:bg-emerald-50 cursor-pointer">Privacy</a>
            <a href="#" className="hover:text-emerald-600 transition-all duration-200 hover:translate-x-1 inline-block py-1 px-2 rounded-lg hover:bg-emerald-50 cursor-pointer">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
