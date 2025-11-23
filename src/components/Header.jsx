import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-amber-300">Symposium</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-700 text-amber-300'
                    : 'text-gray-200 hover:bg-green-700 hover:text-white'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-700 text-amber-300'
                    : 'text-gray-200 hover:bg-green-700 hover:text-white'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/abstract"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-700 text-amber-300'
                    : 'text-gray-200 hover:bg-green-700 hover:text-white'
                }`
              }
            >
              Abstract
            </NavLink>
            <NavLink
              to="/speakers"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-700 text-amber-300'
                    : 'text-gray-200 hover:bg-green-700 hover:text-white'
                }`
              }
            >
              Speakers
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-md mt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-700 text-white'
                    : 'text-gray-200 hover:bg-green-700 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-700 text-white'
                    : 'text-gray-200 hover:bg-green-700 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/abstract"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-700 text-white'
                    : 'text-gray-200 hover:bg-green-700 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Abstract
            </NavLink>
            <NavLink
              to="/speakers"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-700 text-white'
                    : 'text-gray-200 hover:bg-green-700 hover:text-white'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Speakers
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
