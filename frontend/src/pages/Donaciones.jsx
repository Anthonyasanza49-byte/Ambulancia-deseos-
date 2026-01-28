import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Heart, Zap, Gift, Users } from 'lucide-react';

const Donaciones = () => {
  const donationOptions = [
    {
      amount: 25,
      title: 'Apoyo Básico',
      description: 'Ayuda con materiales básicos para un sueño',
      icon: Heart,
    },
    {
      amount: 50,
      title: 'Apoyo Intermedio',
      description: 'Contribuye al transporte y logística',
      icon: Zap,
    },
    {
      amount: 100,
      title: 'Apoyo Avanzado',
      description: 'Financia un sueño completo',
      icon: Gift,
    },
    {
      amount: 'custom',
      title: 'Monto Personalizado',
      description: 'Elige el monto que desees donar',
      icon: Users,
    },
  ];

  const impactStats = [
    { value: '$125,000', label: 'Recaudado este año' },
    { value: '500+', label: 'Sueños cumplidos' },
    { value: '1,200', label: 'Donantes activos' },
    { value: '98%', label: 'Transparencia' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F5E63]/90 to-[#1FA8A1]/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_deseo-web/artifacts/ufgd71t8_Disen%CC%83o%20sin%20ti%CC%81tulo.zip%20-%201.png')`,
          }}
        ></div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="mb-8">
            <img 
              src="https://customer-assets.emergentagent.com/job_deseo-web/artifacts/ufgd71t8_Disen%CC%83o%20sin%20ti%CC%81tulo.zip%20-%201.png" 
              alt="Oso Voluntario" 
              className="w-48 h-48 mx-auto mb-6 drop-shadow-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tu Donación Transforma Vidas
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Con tu apoyo, podemos seguir cumpliendo los sueños más profundos de niños con enfermedades graves
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[#F5F7F7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1FA8A1] mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-[#7A7A7A]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F5E63] mb-4">
              Elige Tu Forma de Ayudar
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Cada aporte cuenta y hace la diferencia en la vida de un niño
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {donationOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="border-2 border-[#6FD3C8]/30 hover:border-[#1FA8A1] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1FA8A1] to-[#6FD3C8] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {option.amount !== 'custom' ? (
                      <div className="text-4xl font-bold text-[#1FA8A1] mb-2">${option.amount}</div>
                    ) : (
                      <div className="text-2xl font-bold text-[#1FA8A1] mb-2">Tu Monto</div>
                    )}
                    <h3 className="text-xl font-bold text-[#0F5E63] mb-2">{option.title}</h3>
                    <p className="text-sm text-[#7A7A7A] mb-6">{option.description}</p>
                    <Button 
                      asChild
                      className="w-full bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <Link to={`/checkout?amount=${option.amount}`}>
                        Donar Ahora
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Oso Voluntario Section */}
      <section className="py-20 bg-gradient-to-br from-[#6FD3C8]/10 to-[#1FA8A1]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_deseo-web/artifacts/ufgd71t8_Disen%CC%83o%20sin%20ti%CC%81tulo.zip%20-%201.png" 
              alt="Oso Voluntario" 
              className="w-64 h-64 mx-auto mb-8 drop-shadow-2xl"
            />
            <h2 className="text-4xl font-bold text-[#0F5E63] mb-6">
              Conoce al Oso Voluntario
            </h2>
            <p className="text-lg text-[#7A7A7A] mb-8">
              Nuestro Oso Voluntario es el símbolo de esperanza y alegría para todos los niños. Con cada donación, ayudas a que más niños puedan recibir su propio Oso Voluntario como compañero en su viaje de cumplir sueños.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#0F5E63] mb-4">
                Adopta un Oso Voluntario
              </h3>
              <p className="text-[#7A7A7A] mb-6">
                Con una donación de $30 o más, puedes adoptar un Oso Voluntario que será entregado a un niño que cumple su sueño.
              </p>
              <Button 
                asChild
                size="lg"
                className="bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold rounded-full px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Link to="/checkout?amount=30&item=oso">
                  Adoptar Oso Voluntario
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0F5E63] mb-8 text-center">
              Transparencia Total
            </h2>
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1FA8A1] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F5E63] mb-2">Uso Directo</h3>
                      <p className="text-[#7A7A7A]">El 85% de tu donación va directamente a cumplir sueños de niños</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1FA8A1] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F5E63] mb-2">Reportes Anuales</h3>
                      <p className="text-[#7A7A7A]">Publicamos informes detallados del uso de cada donación</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1FA8A1] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F5E63] mb-2">Certificación</h3>
                      <p className="text-[#7A7A7A]">Somos una fundación certificada y auditada anualmente</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#F5F7F7]">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0F5E63] to-[#1FA8A1] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Cada Donación es un Sueño Cumplido
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Únete a nuestra comunidad de donantes y sé parte del cambio
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-[#1FA8A1] hover:bg-[#F5F7F7] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Link to="/checkout?amount=custom">
                Hacer una Donación
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donaciones;