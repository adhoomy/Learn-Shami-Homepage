import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex space-x-1">
                <div className="w-2 h-6 bg-black rounded-sm"></div>
                <div className="w-2 h-6 bg-white rounded-sm"></div>
                <div className="w-2 h-6 bg-emerald-600 rounded-sm"></div>
                <div className="w-2 h-6 bg-red-600 rounded-sm"></div>
              </div>
              <span className="font-bold text-xl">تعلّم العربية الفلسطينية</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Discover the beautiful Palestinian Arabic dialect and connect with the rich 
              culture and traditions of Palestine through language learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/lessons" className="text-gray-400 hover:text-white transition-colors">الدروس - Lessons</a></li>
              <li><a href="/culture" className="text-gray-400 hover:text-white transition-colors">الثقافة - Culture</a></li>
              <li><a href="/practice" className="text-gray-400 hover:text-white transition-colors">التدريب - Practice</a></li>
              <li><a href="/resources" className="text-gray-400 hover:text-white transition-colors">الموارد - Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-emerald-400">Support</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/community" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Learn Palestinian Arabic. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Cultural Quote */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 italic">
            "اللغة العربية هي لغة القرآن الكريم" - "Arabic is the language of the Holy Quran"
          </p>
        </div>
      </div>
    </footer>
  );
};
