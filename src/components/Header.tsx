import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">ExamPro</span>
            </div>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
               <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? 'text-blue-600 font-medium border-b-2 border-blue-600'
        : 'text-gray-700 hover:text-blue-600'
    }
  >
    Home
  </NavLink>
               <NavLink
    to="/study-materials"
    className={({ isActive }) =>
      isActive
        ? 'text-blue-600 font-medium border-b-2 border-blue-600'
        : 'text-gray-700 hover:text-blue-600'
    }
  >
    Study Materials
  </NavLink>
  <NavLink
    to="/exams"
    className={({ isActive }) =>
      isActive
        ? 'text-blue-600 font-medium border-b-2 border-blue-600'
        : 'text-gray-700 hover:text-blue-600'
    }
  >
    Exams
  </NavLink>
  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive
        ? 'text-blue-600 font-medium border-b-2 border-blue-600'
        : 'text-gray-700 hover:text-blue-600'
    }
  >
    Contact Us
  </NavLink>
            </div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <select className="text-sm text-gray-700 border border-gray-300 rounded px-2 py-1">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? 'block px-3 py-2 text-blue-600 font-medium'
      : 'block px-3 py-2 text-gray-700 hover:text-blue-600'
  }
>
  Home
</NavLink>
<NavLink
  to="/study-materials"
  className={({ isActive }) =>
    isActive
      ? 'block px-3 py-2 text-blue-600 font-medium'
      : 'block px-3 py-2 text-gray-700 hover:text-blue-600'
  }
>
  Study Materials
</NavLink>
<NavLink
  to="/exams"
  className={({ isActive }) =>
    isActive
      ? 'block px-3 py-2 text-blue-600 font-medium'
      : 'block px-3 py-2 text-gray-700 hover:text-blue-600'
  }
>
  Exams
</NavLink>
<NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? 'block px-3 py-2 text-blue-600 font-medium'
      : 'block px-3 py-2 text-gray-700 hover:text-blue-600'
  }
>
  Contact Us
</NavLink>
              <div className="px-3 py-2">
                <select className="w-full text-sm text-gray-700 border border-gray-300 rounded px-2 py-1">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className="px-3 py-2 space-y-2">
                <Link to="/login" className="block w-full text-center text-gray-700 hover:text-blue-600 font-medium py-2">Login</Link>
                <Link to="/register" className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
                  Sign Up
                </Link>
              </div>    
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
