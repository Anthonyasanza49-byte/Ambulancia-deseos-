import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Heart, Users, Sparkles, Plane, Award, HandHeart } from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '500+', label: 'Sueños Cumplidos', icon: Sparkles },
    { number: '300+', label: 'Voluntarios Activos', icon: Users },
    { number: '50+', label: 'Aliados Estratégicos', icon: HandHeart },
    { number: '15', label: 'Años de Experiencia', icon: Award },
  ];

  const dreamsCumplidos = [
    {
      id: 1,
      title: 'Vuelo en Avión',
      description: 'Santiago cumplió su sueño de volar y conocer la cabina del piloto',
      image: 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/emmwnbg9_WhatsApp%20Image%202024-11-01%20at%2013.00.33.jpeg',
      date: 'Octubre 2024'
    },
    {
      id: 2,
      title: 'Conocer la Universidad',
      description: 'María visitó la Universidad Católica y compartió su historia',
      image: 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/zpemo73s_IMG_9556.HEIC',
      date: 'Septiembre 2024'
    },
    {
      id: 3,
      title: 'Día Especial',
      description: 'Un día inolvidable para cumplir sueños',
      image: 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/m3y6h3yf_IMG_4180.HEIC',
      date: 'Agosto 2024'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F5E63]/90 to-[#1FA8A1]/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_deseo-web/artifacts/emmwnbg9_WhatsApp%20Image%202024-11-01%20at%2013.00.33.jpeg')`,
          }}
        ></div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Cumplimos Sueños que
            <br />
            <span className="text-[#6FD3C8]">Transforman Vidas</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-medium">
            Hacemos posible que niños con enfermedades graves cumplan sus sueños más profundos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg" 
              className="bg-[#1FA8A1] hover:bg-[#17A2A4] text-white text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link to="/donaciones">Dona Ahora</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="bg-white text-[#0F5E63] border-2 border-white hover:bg-[#F5F7F7] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link to="/voluntarios">Sé Voluntario</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ¿Qué Hacemos? Section */}
      <section className="py-20 bg-[#F5F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F5E63] mb-4">
              ¿Qué Hacemos?
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Ambulancia Deseo es una fundación que cumple los deseos más profundos de niños y jóvenes con enfermedades graves, brindándoles momentos de alegría y esperanza.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1FA8A1] to-[#6FD3C8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F5E63] mb-4">Cumplimos Sueños</h3>
                <p className="text-[#7A7A7A]">
                  Hacemos realidad los deseos de niños con enfermedades terminales o crónicas, creando momentos inolvidables.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1FA8A1] to-[#6FD3C8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F5E63] mb-4">Red de Voluntarios</h3>
                <p className="text-[#7A7A7A]">
                  Contamos con un equipo de voluntarios capacitados y comprometidos que hacen posible cada sueño.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1FA8A1] to-[#6FD3C8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F5E63] mb-4">Transporte Seguro</h3>
                <p className="text-[#7A7A7A]">
                  Ambulancias equipadas y personal médico capacitado garantizan viajes seguros para cumplir cada deseo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#1FA8A1] to-[#17A2A4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <Icon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg md:text-xl font-medium opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sueños Cumplidos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F5E63] mb-4">
              Sueños Cumplidos
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Cada sueño cumplido es una historia de esperanza, valentía y amor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dreamsCumplidos.map((dream) => (
              <Card key={dream.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={dream.image} 
                    alt={dream.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-[#1FA8A1] font-semibold mb-2">{dream.date}</div>
                  <h3 className="text-xl font-bold text-[#0F5E63] mb-3">{dream.title}</h3>
                  <p className="text-[#7A7A7A]">{dream.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg"
              className="bg-[#1FA8A1] hover:bg-[#17A2A4] text-white text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link to="/suenos-cumplidos">Ver Más Historias</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#F5F7F7]">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0F5E63] to-[#1FA8A1] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Únete a Nuestra Misión
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Tu apoyo puede transformar la vida de un niño. Cada donación cuenta, cada voluntario suma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-[#1FA8A1] hover:bg-[#F5F7F7] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Link to="/donaciones">Hacer una Donación</Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1FA8A1] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link to="/voluntarios">Ser Voluntario</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;