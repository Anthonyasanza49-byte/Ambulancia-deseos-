import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Calendar, MapPin, Heart } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const SuenosCumplidos = () => {
  const [filter, setFilter] = useState('todos');

  const suenos = [
    {
      id: 1,
      title: 'Vuelo en Avión',
      child: 'Santiago, 8 años',
      description: 'Santiago siempre soñó con volar en un avión y conocer la cabina del piloto. Gracias a nuestros aliados, pudimos hacer realidad su sueño. Voló en un avión comercial, conoció a los pilotos y hasta pudo sentarse en los controles.',
      image: 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/emmwnbg9_WhatsApp%20Image%202024-11-01%20at%2013.00.33.jpeg',
      date: 'Octubre 2024',
      location: 'Quito - Guayaquil',
      category: 'viajes',
    },
    {
      id: 2,
      title: 'Visita a la Universidad',
      child: 'María, 12 años',
      description: 'María quería conocer la Universidad Católica y compartir su historia con los estudiantes. Fue un día inolvidable donde inspiró a cientos de jóvenes con su valentía y determinación.',
      image: 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/zpemo73s_IMG_9556.HEIC',
      date: 'Septiembre 2024',
      location: 'Quito',
      category: 'educacion',
    },
    {
      id: 3,
      title: 'Día Especial con la Familia',
      child: 'Carlos, 10 años',
      description: 'Carlos deseaba pasar un día especial con toda su familia. Organizamos un día lleno de actividades, juegos y momentos inolvidables que quedaron grabados en sus corazones.',
      image: 'https://customer-assets.emergentagent.com/job_deseo-web/artifacts/m3y6h3yf_IMG_4180.HEIC',
      date: 'Agosto 2024',
      location: 'Quito',
      category: 'familia',
    },
    {
      id: 4,
      title: 'Encuentro con su Ídolo',
      child: 'Luis, 9 años',
      description: 'Luis soñaba con conocer a su futbolista favorito. Coordinamos un encuentro especial donde pudo conversar, jugar y recibir un jersey autografiado de su ídolo.',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop',
      date: 'Julio 2024',
      location: 'Guayaquil',
      category: 'deportes',
    },
    {
      id: 5,
      title: 'Día en el Zoológico',
      child: 'Ana, 7 años',
      description: 'Ana amaba los animales y soñaba con visitar el zoológico. Organizamos una visita privada donde pudo alimentar a los animales y aprender sobre cada especie.',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=600&fit=crop',
      date: 'Junio 2024',
      location: 'Quito',
      category: 'naturaleza',
    },
    {
      id: 6,
      title: 'Concierto Especial',
      child: 'Sofía, 11 años',
      description: 'Sofía quería asistir a un concierto de su banda favorita. No solo asistió, sino que conoció a los músicos y cantó con ellos en el escenario.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
      date: 'Mayo 2024',
      location: 'Guayaquil',
      category: 'entretenimiento',
    },
  ];

  const categories = [
    { value: 'todos', label: 'Todos los Sueños' },
    { value: 'viajes', label: 'Viajes' },
    { value: 'educacion', label: 'Educación' },
    { value: 'familia', label: 'Familia' },
    { value: 'deportes', label: 'Deportes' },
    { value: 'naturaleza', label: 'Naturaleza' },
    { value: 'entretenimiento', label: 'Entretenimiento' },
  ];

  const filteredSuenos = filter === 'todos' ? suenos : suenos.filter(s => s.category === filter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F5E63] to-[#1FA8A1] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sueños Cumplidos
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Cada sueño cumplido es una historia de esperanza, valentía y amor que transforma vidas
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm opacity-90">Sueños Cumplidos</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold">15</div>
              <div className="text-sm opacity-90">Años Cambiando Vidas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#F5F7F7] sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.value
                    ? 'bg-[#1FA8A1] text-white shadow-lg scale-105'
                    : 'bg-white text-[#7A7A7A] hover:bg-[#6FD3C8]/10 hover:text-[#1FA8A1]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sueños Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSuenos.map((sueno) => (
              <Card key={sueno.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative group">
                  <img
                    src={sueno.image}
                    alt={sueno.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-[#6FD3C8] text-[#0F5E63] hover:bg-[#6FD3C8] mb-3">
                    <Heart className="w-3 h-3 mr-1" fill="currentColor" />
                    {sueno.child}
                  </Badge>
                  <h3 className="text-2xl font-bold text-[#0F5E63] mb-3">{sueno.title}</h3>
                  <p className="text-[#7A7A7A] mb-4 line-clamp-3">{sueno.description}</p>
                  <div className="flex items-center gap-4 text-sm text-[#7A7A7A]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {sueno.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {sueno.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F7F7]">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0F5E63] to-[#1FA8A1] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ayúdanos a Cumplir Más Sueños
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Cada donación nos acerca más a hacer realidad los sueños de niños con enfermedades graves
            </p>
            <a
              href="/donaciones"
              className="inline-block bg-white text-[#1FA8A1] hover:bg-[#F5F7F7] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Dona Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuenosCumplidos;