import React from 'react';
import { Car, Send, Phone, Mail, MapPin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Car className="text-blue-600" size={28} />
              <span className="text-2xl font-bold tracking-tight">AVTOBOZOR</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              O'zbekistondagi eng ishonchli avtomobil platformasi. Biz bilan orzuingizdagi mashinani toping.
            </p>
            <div className="flex gap-4">
              
              <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-blue-600 transition">
                <Send size={20} />
              </a>
             
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Xizmatlar</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition">Sotib olish</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">E'lon berish</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Avtosalonlar</a></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Markalar</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition">BYD</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Chevrolet</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Kia</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Aloqa</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li className="flex items-center gap-3"><Phone size={16} /> +998 71 123 45 67</li>
              <li className="flex items-center gap-3"><Mail size={16} /> info@avtobozor.uz</li>
              <li className="flex items-start gap-3"><MapPin size={16} /> Toshkent sh., Yunusobod</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} AVTOBOZOR. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;