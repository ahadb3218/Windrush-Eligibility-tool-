import React from 'react';
import { Veteran } from '../../data/veterans';

interface CarouselSlideProps {
  veteran: Veteran;
  isActive: boolean;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ veteran, isActive }) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? 'opacity-100 z-20' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-black">
        <img
          src={veteran.image}
          alt={veteran.name}
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4 drop-shadow-lg">
            {veteran.name}
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            {veteran.description}
          </p>
        </div>
      </div>
    </div>
  );
};