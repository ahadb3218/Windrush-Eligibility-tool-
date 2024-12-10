import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-6">
            Welcome to Windrush Support
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're here to help you understand your rights and guide you through the Windrush compensation scheme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80"
              alt="Community Support"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              Your Journey Matters
            </h2>
            <p className="text-lg mb-6">
              We understand the challenges you've faced and are committed to helping you get the support and compensation you deserve.
            </p>
            <Link
              to="/quiz"
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition-colors"
            >
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Free Consultation
            </h3>
            <p>
              Get expert advice from our team of specialists who understand the Windrush scheme inside and out.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Document Support
            </h3>
            <p>
              We'll help you gather and organize the documentation needed for your compensation claim.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Ongoing Assistance
            </h3>
            <p>
              Our support doesn't end with your application. We're here for you throughout the entire process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};