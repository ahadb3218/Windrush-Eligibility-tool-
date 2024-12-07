import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Support = () => {
  const supportCenters = [
    {
      city: 'London',
      organization: 'Windrush Justice Center',
      address: '123 Brixton Road, London SW9 1AB',
      phone: '020 7123 4567',
      email: 'london@windrushsupport.org',
    },
    {
      city: 'Birmingham',
      organization: 'Midlands Windrush Alliance',
      address: '45 Corporation Street, Birmingham B4 6AF',
      phone: '0121 234 5678',
      email: 'birmingham@windrushsupport.org',
    },
    {
      city: 'Manchester',
      organization: 'Northern Support Network',
      address: '78 Oxford Road, Manchester M1 5NH',
      phone: '0161 345 6789',
      email: 'manchester@windrushsupport.org',
    },
    {
      city: 'Bristol',
      organization: 'Southwest Advocacy Group',
      address: '90 Baldwin Street, Bristol BS1 1RU',
      phone: '0117 456 7890',
      email: 'bristol@windrushsupport.org',
    },
    {
      city: 'Leeds',
      organization: 'Yorkshire Windrush Support',
      address: '34 The Headrow, Leeds LS1 8EQ',
      phone: '0113 567 8901',
      email: 'leeds@windrushsupport.org',
    },
    {
      city: 'Liverpool',
      organization: 'Merseyside Community Support',
      address: '56 Bold Street, Liverpool L1 4EA',
      phone: '0151 678 9012',
      email: 'liverpool@windrushsupport.org',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-yellow-500 mb-6">
            Support Centers
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find your nearest Windrush support center for personalized assistance and guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportCenters.map((center) => (
            <div
              key={center.city}
              className="bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">
                {center.city}
              </h2>
              <div className="space-y-4">
                <p className="font-semibold text-lg">{center.organization}</p>
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-1" />
                  {center.address}
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                  {center.phone}
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                  {center.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};