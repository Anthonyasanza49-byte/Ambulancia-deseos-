import React, { useState, useRef } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { Calendar, MapPin, Heart } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const HoverCard = ({ children, className = '' }) => (
  <motion.div
    className={className}
    whileHover={{ y: -8 }}
    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
  >
    {children}
  </motion.div>
);

const TiltCard = ({ children, className = '' }) => (
  <motion.div
    className={className}
    whileHover={{ y: -5, scale: 1.01 }}
    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
  >
    {children}
  </motion.div>
);

const FloatingParticles = () => {
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 12 + 10,
    opacity: Math.random() * 0.5 + 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            background: `radial-gradient(circle, rgba(111, 211, 200, ${p.opacity}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${p.size * 2}px rgba(111, 211, 200, ${p.opacity * 0.5})`,
          }}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '-10%', opacity: [0, p.opacity, p.opacity, 0], x: [0, Math.sin(p.id) * 40, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
        />
      ))}
    </div>
  );
};

const SuenosCumplidos = () => {
  const [filter, setFilter] = useState('todos');
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const suenosDestacados = [
    {
      id: 1,
      title: 'Mi graduación',
      child: 'Mathius',
      description: ' "Mi enfermedad no me dejo terminar la universidad, aun asi logre cumplir mis sueños gracias a mis seres queridos es un orgullo para mi "',
      image: '/img/graduacion.png',
      date: 'Febrero 2024',
      location: 'Guayaquil',
      category: 'educacion',
      impact: 'Inspiró a más de 200 estudiantes '
    },
    {
      id: 2,
      title: 'Conocer la Perla del pacifico',
      child: 'Cristian Erwin ',
      description: 'Un viaje de Santa Elena a Guayaquil para conocer el Malecón 2000 y disfrutar de la vista al río Guayas.',
       image: '/img/maleconperla.png',
      date: 'Septiembre 2023',
      location: 'Guayaquil',
      category: 'viajes',
      impact: 'Primera experiencia de la perla del pacifico para Cristian',
    },
    {
      id: 3,
      title: 'Ir al estadio Monumental y ver a mi equipo jugar',
      child: 'Anthony',
      description: 'Anthony cumplió su sueño de asistir a un partido de fútbol en el estadio Monumental y ver a su equipo favorito jugar en vivo.',
      image: '/img/estadibarcelona.png',
      date: 'Septiembre 2024',
      location: 'Guayaquil',
      category: 'deportes',
      impact: 'Vivió la emoción del fútbol en vivo junto a su familia',
    }
  ];

  const suenos = [
    {
      id: 1,
      title: 'Visitar el Zoologico',
      child: '',
      description: 'Un dia lleno de aventuras en el zoológico, donde pudo ver y aprender sobre sus animales favoritos',
      image: '/img/idaalzoo.png',
      date: 'Marzo 2024',
      location: 'Guayaquil',
      category: 'viajes',
    },
    {
      id: 2,
      title: 'Mi cumpleaños con Rapunzel',
      child: '',
      description: 'María quería conocer la Universidad Católica y compartir su historia con los estudiantes. Fue un día inolvidable donde inspiró a cientos de jóvenes con su valentía y determinación.',
      image: '/img/cumpleanosrapu.png',
      date: 'Septiembre 2024',
      location: 'Guayaquil',
      category: 'familia',
    },
    {
      id: 3,
      title: 'Conocer la playa ',
      child: '',
      description: 'Ir a la playa con su familia y disfrutar de las olas y el sol.',
      image: '/img/conocer la playa.png',
      date: 'Agosto 2024',
      location: 'Guayaquil',
      category: 'familia',
    },
    {
      id: 4,
      title: 'Una pelicula inolvidable',
      child: '',
      description: 'Ver su pelicula favorita en el cine con sus amigos y familiares.',
      image: '/img/cinefamilia.png',
      date: 'Julio 2024', 
      location: 'Guayaquil',
      category: 'entretenimiento',
    },
    {
      id: 5,
      title: 'Mi cumpleaños de Minecraft',
      child: '',
      description: 'Cumpleaños en el mall con una tortita de Minecraft',
      image: '/img/micumpleminecraft.png',
      date: 'Junio 2024',
      location: 'Guayaquil',
      category: 'familia',
    },
    {
      id: 6,
      title: 'Conocer a la Santa Narcisa de Jesus',
      child: '',
      description: 'Un viaje espiritual para conocer la vida y obra de la Santa Narcisa de Jesus en Nobol.',
      image: '/img/santanarcisadejesus.png',
      date: 'Mayo 2024',
      location: 'Nobol',
      category: 'viajes',
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
      <section className="relative bg-gradient-to-r from-[#0F5E63] to-[#1FA8A1] py-20 text-white overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Sueños Cumplidos
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            Cada sueño cumplido es una historia de esperanza, valentía y amor que transforma vidas
          </motion.p>
          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm opacity-90">Sueños Cumplidos</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold">15</div>
              <div className="text-sm opacity-90">Años Cambiando Vidas</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#F5F7F7] sticky top-20 z-40">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
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
        </motion.div>
      </section>

      {/* Carrusel de Sueños Destacados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-[#0F5E63] mb-4">
              Historias que Nos Inspiran
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Cada sueño cumplido es una historia única de esperanza, valentía y amor incondicional
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {suenosDestacados.map((sueno) => (
                  <CarouselItem key={sueno.id}>
                    <div className="p-4">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={scaleIn}
                      >
                      <TiltCard>
                      <Card className="overflow-hidden border-none shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-0">
                          {/* Image Side */}
                          <div className="h-[400px] md:h-auto relative overflow-hidden">
                            <img
                              src={sueno.image}
                              alt={sueno.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <Badge className="absolute top-4 left-4 bg-[#1FA8A1] text-white hover:bg-[#1FA8A1] px-4 py-2 text-base">
                              <Heart className="w-4 h-4 mr-2" fill="currentColor" />
                              {sueno.child}
                            </Badge>
                          </div>
                          
                          {/* Content Side */}
                          <CardContent className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-[#F5F7F7]">
                            <h3 className="text-3xl md:text-4xl font-bold text-[#0F5E63] mb-4">
                              {sueno.title}
                            </h3>
                            <p className="text-[#7A7A7A] text-base md:text-lg mb-6 leading-relaxed">
                              {sueno.description}
                            </p>
                            
                            <div className="space-y-3 mb-6">
                              <div className="flex items-center gap-2 text-[#7A7A7A]">
                                <Calendar className="w-5 h-5 text-[#1FA8A1]" />
                                <span className="font-medium">{sueno.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-[#7A7A7A]">
                                <MapPin className="w-5 h-5 text-[#1FA8A1]" />
                                <span className="font-medium">{sueno.location}</span>
                              </div>
                            </div>

                            <div className="bg-[#6FD3C8]/10 rounded-lg p-4 border-l-4 border-[#1FA8A1]">
                              <p className="text-sm font-semibold text-[#0F5E63]">
                                💫 Impacto: <span className="font-normal text-[#7A7A7A]">{sueno.impact}</span>
                              </p>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                      </TiltCard>
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Sueños Grid */}
      <section className="py-20 bg-[#F5F7F7]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-[#0F5E63] mb-4">
              Más Sueños Cumplidos
            </h2>
            <p className="text-[#7A7A7A]">
              Descubre todas las historias de esperanza que hemos creado juntos
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {filteredSuenos.map((sueno) => (
              <motion.div key={sueno.id} variants={scaleIn}>
              <HoverCard>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
              </HoverCard>
              </motion.div>
            ))}
          </motion.div>
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
