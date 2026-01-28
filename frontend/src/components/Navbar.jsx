import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/home' },
    { name: 'Aliados', path: '/aliados' },
    { name: 'Voluntarios', path: '/voluntarios' },
    { name: 'Sueños Cumplidos', path: '/suenos-cumplidos' },
    { name: 'Donaciones', path: '/donaciones' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-3 group">
            <img 
              src="https://customer-assets.emergentagent.com/job_deseo-web/artifacts/3xcqgn2q_image.png" 
              alt="Ambulancia Deseo Logo" 
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-[#1FA8A1] bg-[#6FD3C8]/10'
                    : 'text-[#2E2E2E] hover:text-[#1FA8A1] hover:bg-[#F5F7F7]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              asChild
              className="bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold rounded-full px-6 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <Link to="/donaciones">Dona Ahora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#F5F7F7] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#0F5E63]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0F5E63]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#F5F7F7]">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-[#1FA8A1] bg-[#6FD3C8]/10'
                      : 'text-[#2E2E2E] hover:text-[#1FA8A1] hover:bg-[#F5F7F7]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  asChild
                  className="w-full bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold rounded-full"
                >
                  <Link to="/donaciones" onClick={() => setIsOpen(false)}>
                    Dona Ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;