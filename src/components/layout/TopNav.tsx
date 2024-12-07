import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FileText, HeartHandshake, User } from 'lucide-react';

export const TopNav = () => {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/contracts', icon: FileText, label: 'Contracts' },
    { to: '/support', icon: HeartHandshake, label: 'Support' },
    { to: '/admin', icon: User, label: 'Admin' },
  ];

  return (
    <nav className="bg-black border-b border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-yellow-500 text-xl font-bold">Windrush Support</span>
          </div>
          <div className="flex space-x-8">
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