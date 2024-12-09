import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FileText, HeartHandshake, User, Menu, X } from 'lucide-react';

export const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/contracts', icon: FileText, label: 'Contracts' },
    { to: '/support', icon: HeartHandshake, label: 'Support' },
    { to: '/admin', icon: User, label: 'Admin' },
  ];

  return (
    <nav className="bg-black border-b border-yellow-500 sticky top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex items-center">
            <span className="text-yellow-500 text-xl font-bold">Windrush Support</span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-yellow-500 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } flex-col lg:flex lg:flex-row lg:items-center lg:space-x-8 space-y-4 lg:space-y-0 mt-4 lg:mt-0`}
          >
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-yellow-500'
                      : 'text-gray-300 hover:text-yellow-500'
                  }`
                }
              >
                <Icon className="h-5 w-5 mr-1" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
