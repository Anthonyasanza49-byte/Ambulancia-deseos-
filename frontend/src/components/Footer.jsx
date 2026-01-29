import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F5E63] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="https://customer-assets.emergentagent.com/job_deseo-web/artifacts/3xcqgn2q_image.png" 
                alt="Ambulancia Deseo Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-white/80">
              Cumplimos sueños que transforman vidas. Hacemos posible que niños con enfermedades graves cumplan sus sueños más profundos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/80 hover:text-[#6FD3C8] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/aliados" className="text-sm text-white/80 hover:text-[#6FD3C8] transition-colors">
                  Aliados
                </Link>
              </li>
              <li>
                <Link to="/voluntarios" className="text-sm text-white/80 hover:text-[#6FD3C8] transition-colors">
                  Voluntarios
                </Link>
              </li>
              <li>
                <Link to="/suenos-cumplidos" className="text-sm text-white/80 hover:text-[#6FD3C8] transition-colors">
                  Sueños Cumplidos
                </Link>
              </li>
              <li>
                <Link to="/donaciones" className="text-sm text-white/80 hover:text-[#6FD3C8] transition-colors">
                  Donaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#6FD3C8] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">
                  Calle Principal #123<br />
                  Quito, Ecuador
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#6FD3C8] flex-shrink-0" />
                <span className="text-sm text-white/80">+593 99 447 8414</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#6FD3C8] flex-shrink-0" />
                <span className="text-sm text-white/80">ambulanciadeseoecuador@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6FD3C8] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6FD3C8] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#6FD3C8] transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-white/80 mt-4">
              Únete a nuestra comunidad y sé parte del cambio.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {currentYear} Ambulancia Deseo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;