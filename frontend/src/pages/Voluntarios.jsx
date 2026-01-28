import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Heart, Users, Clock, Award } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Voluntarios = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudad: '',
    disponibilidad: '',
    experiencia: '',
    motivacion: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '¡Solicitud Enviada!',
      description: 'Gracias por tu interés. Te contactaremos pronto.',
    });
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      ciudad: '',
      disponibilidad: '',
      experiencia: '',
      motivacion: '',
    });
  };

  const beneficios = [
    {
      icon: Heart,
      title: 'Impacto Real',
      description: 'Cambia vidas directamente al ayudar a cumplir sueños de niños',
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Únete a una red de más de 300 voluntarios comprometidos',
    },
    {
      icon: Clock,
      title: 'Flexibilidad',
      description: 'Elige tu disponibilidad y participa según tu tiempo',
    },
    {
      icon: Award,
      title: 'Certificación',
      description: 'Recibe certificados de voluntariado por tu participación',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F5E63]/90 to-[#1FA8A1]/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop')`,
          }}
        ></div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sé Parte del Cambio
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Únete a nuestra red de voluntarios y ayuda a cumplir sueños que transforman vidas
          </p>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-[#F5F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F5E63] mb-4">
              ¿Por Qué Ser Voluntario?
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Descubre los beneficios de formar parte de nuestra comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1FA8A1] to-[#6FD3C8] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F5E63] mb-3">{beneficio.title}</h3>
                    <p className="text-[#7A7A7A] text-sm">{beneficio.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulario Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0F5E63] mb-4">
                Solicitud de Voluntariado
              </h2>
              <p className="text-lg text-[#7A7A7A]">
                Completa el formulario y nos pondremos en contacto contigo
              </p>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-[#2E2E2E] font-medium">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="nombre"
                        type="text"
                        placeholder="Juan Pérez"
                        className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#2E2E2E] font-medium">
                        Correo Electrónico *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-[#2E2E2E] font-medium">
                        Teléfono *
                      </Label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="+593 123 456 789"
                        className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ciudad" className="text-[#2E2E2E] font-medium">
                        Ciudad *
                      </Label>
                      <Input
                        id="ciudad"
                        type="text"
                        placeholder="Quito"
                        className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                        value={formData.ciudad}
                        onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="disponibilidad" className="text-[#2E2E2E] font-medium">
                      Disponibilidad *
                    </Label>
                    <Select value={formData.disponibilidad} onValueChange={(value) => setFormData({ ...formData, disponibilidad: value })}>
                      <SelectTrigger className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]">
                        <SelectValue placeholder="Selecciona tu disponibilidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tiempo-completo">Tiempo Completo</SelectItem>
                        <SelectItem value="medio-tiempo">Medio Tiempo</SelectItem>
                        <SelectItem value="fines-semana">Fines de Semana</SelectItem>
                        <SelectItem value="ocasional">Ocasional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experiencia" className="text-[#2E2E2E] font-medium">
                      Experiencia Previa (opcional)
                    </Label>
                    <Textarea
                      id="experiencia"
                      placeholder="Cuéntanos sobre tu experiencia en voluntariado o trabajo con niños..."
                      className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1] min-h-[100px]"
                      value={formData.experiencia}
                      onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivacion" className="text-[#2E2E2E] font-medium">
                      ¿Por qué quieres ser voluntario? *
                    </Label>
                    <Textarea
                      id="motivacion"
                      placeholder="Comparte tu motivación para unirte a Ambulancia Deseo..."
                      className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1] min-h-[120px]"
                      value={formData.motivacion}
                      onChange={(e) => setFormData({ ...formData, motivacion: e.target.value })}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Voluntarios;