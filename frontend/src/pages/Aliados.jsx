import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Building2, HandHeart, CheckCircle } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const Aliados = () => {
  const aliados = [
    {
      id: 1,
      name: 'Hospital General',
      category: 'Salud',
      description: 'Apoyo médico y logístico para el traslado de pacientes',
      logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Fundación Esperanza',
      category: 'ONG',
      description: 'Colaboración en programas de apoyo familiar y psicológico',
      logo: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Aerolínea Nacional',
      category: 'Transporte',
      description: 'Facilitación de vuelos para cumplimiento de sueños',
      logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Universidad Católica',
      category: 'Educación',
      description: 'Apoyo académico y voluntariado estudiantil',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      name: 'Corporación de Seguros',
      category: 'Seguros',
      description: 'Cobertura y protección para traslados especiales',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      name: 'Cadena Hotelera',
      category: 'Hospedaje',
      description: 'Alojamiento gratuito para familias durante los sueños',
      logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    },
  ];

  const beneficios = [
    {
      icon: HandHeart,
      title: 'Impacto Social',
      description: 'Contribuye a cambiar vidas y cumplir sueños de niños con enfermedades graves',
    },
    {
      icon: Building2,
      title: 'Visibilidad',
      description: 'Tu marca se asocia con una causa noble y obtiene reconocimiento público',
    },
    {
      icon: CheckCircle,
      title: 'Certificación',
      description: 'Recibe certificación como aliado oficial de Ambulancia Deseo',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F5E63] to-[#1FA8A1] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestros Aliados Estratégicos
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Gracias a nuestros aliados, podemos hacer realidad los sueños de cientos de niños cada año
          </p>
        </div>
      </section>

      {/* Aliados Grid */}
      <section className="py-20 bg-[#F5F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F5E63] mb-4">
              Empresas e Instituciones Aliadas
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Más de 50 organizaciones confían en nuestra misión y nos apoyan activamente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aliados.map((aliado) => (
              <Card key={aliado.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img
                    src={aliado.logo}
                    alt={aliado.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#6FD3C8]/20 text-[#1FA8A1] rounded-full text-sm font-semibold mb-3">
                    {aliado.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F5E63] mb-3">{aliado.name}</h3>
                  <p className="text-[#7A7A7A]">{aliado.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F5E63] mb-4">
              Beneficios de Ser Aliado
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Únete a nuestra red de aliados y sé parte de algo extraordinario
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1FA8A1] to-[#6FD3C8] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F5E63] mb-4">{beneficio.title}</h3>
                    <p className="text-[#7A7A7A]">{beneficio.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F7F7]">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0F5E63] to-[#1FA8A1] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Quieres Ser Nuestro Aliado?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contacta con nosotros y descubre cómo tu organización puede marcar la diferencia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:aliados@ambulanciadeseo.org"
                className="inline-block bg-white text-[#1FA8A1] hover:bg-[#F5F7F7] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aliados;