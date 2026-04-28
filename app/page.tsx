import React from 'react';
import { Search, Car, User, PlusCircle } from 'lucide-react';
import { cars } from './data/cars'; // Ma'lumotlar faylingiz manzili
import Hero from './hero/page';
import Footer from './components/Footer'; // Yuqoridagi footerni import qildik

export default function Avtobozor() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Car className="text-blue-600" size={32} />
          <span className="text-2xl font-bold tracking-tight">AVTOBOZOR</span>
        </div>
        
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600 transition">Bosh sahifa</a>
          <a href="#" className="hover:text-blue-600 transition">Avtomobillar</a>
          <a href="#" className="hover:text-blue-600 transition">Markalar</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            <PlusCircle size={20} />
            <span className="hidden sm:inline">E'lon berish</span>
          </button>
          <button className="p-2 border rounded-full hover:bg-gray-50">
            <User size={20} />
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10 flex-grow w-full">
        
        {/* Search Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold mb-6 tracking-tight">Orzuingizdagi mashinani toping</h1>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Masalan: BYD Song Plus..." 
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <Search className="absolute left-4 top-4 text-gray-400" />
            <button className="absolute right-3 top-2.5 bg-gray-900 text-white px-6 py-2 rounded-xl hover:bg-black transition">
              Qidirish
            </button>
          </div>
        </section>

        <div className='mb-16'>
          <Hero/>
        </div>

        {/* Brands Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-gray-500">Ommabop markalar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['BYD', 'Chevrolet', 'Kia', 'Chery'].map((brand) => (
              <div key={brand} className="bg-white p-6 rounded-2xl border border-gray-100 text-center hover:shadow-md transition cursor-pointer group">
                <span className="text-2xl font-black text-gray-800 group-hover:text-blue-600 transition">{brand}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Cars Grid */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Oxirgi e'lonlar</h2>
            <button className="text-blue-600 font-semibold hover:underline">Hammasini ko'rish</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={car.image} 
                    alt={car.model} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg leading-tight">{car.brand} {car.model}</h3>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold">{car.year}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{car.color} • 0 km</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-extrabold text-blue-600">${car.price}</span>
                    <button className="px-4 py-2 bg-gray-50 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition">
                      Batafsil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Komponenti */}
      <Footer />
    </div>
  );
}