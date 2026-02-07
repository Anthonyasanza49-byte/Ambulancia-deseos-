import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Heart, Users, Sparkles, Plane, Award, HandHeart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AnimatedCounter } from '../components/AnimatedCounter';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const Home = () => {
  const stats = [
    { number: 500, suffix: '+', label: 'Sueños Cumplidos', icon: Sparkles },
    { number: 300, suffix: '+', label: 'Voluntarios Activos', icon: Users },
    { number: 50, suffix: '+', label: 'Aliados Estratégicos', icon: HandHeart },
    { number: 15, suffix: '', label: 'Años de Experiencia', icon: Award },
  ];

  const dreamsCumplidos = [
    {
      id: 1,
      title: 'Vuelo en Avión',
      description: 'Santiago cumplió su sueño de volar y conocer la cabina del piloto',
      image: '/img/vueloenavion.png',
      date: 'Octubre 2024'
    },
    {
      id: 2,
      title: 'Conocí a mi ídolo',
      description: 'Adriana: “Mi sueño es conocer al artista Paulo Londra, poder conversar con él, poder abrazarlo y asistir a su concierto.”',
      image: '/img/paulolondra.png',  //
      date: 'Agosto 2025'
    },
    {
      id: 3,
      title: 'Almorzar con mis referentes',
      description: 'Mi sueño es conocer a Dayanara Peralta y a Jonathan Estrada y almorzar con ellos ya que siempre he deseado conocerlos.',
      image: '/img/estrada.png',  //
      date: 'Febrero 2022'
    },
  ];
  const aliados = [
  { name: 'Ministerio de Salud Pública', logo: '/img/aliados/Saludpu.png' },
  { name: 'Junta de Beneficencia', logo: '/img/aliados/Juntade.png' },
  { name: 'Albergue Jefferson Rescata', logo: '/img/aliados/1.png' },
  { name: 'Bio Amayu', logo: '/img/aliados/2.png' },
  { name: 'Bubbleton.ec', logo: '/img/aliados/3.png' },
  { name: 'Colegio Menor', logo: '/img/aliados/4.png' },
  { name: 'Delta', logo: '/img/aliados/5.png' },
  { name: 'Escuela de Aviación Grandaviation', logo: '/img/aliados/6.png' },
  { name: 'ESPECTRAVEL', logo: '/img/aliados/7.png' },
  { name: 'Esperanza de Vida', logo: '/img/aliados/8.png' },
  { name: 'Funtástico', logo: '/img/aliados/9.png' },
  { name: 'IHOP', logo: '/img/aliados/10.png' },
  { name: 'La Porteñita', logo: '/img/aliados/11.png' },
  { name: 'Mr. Joy', logo: '/img/aliados/12.png' },
  { name: 'Ocean Club', logo: '/img/aliados/13.png' },
  { name: 'Pixie Dust Shows', logo: '/img/aliados/14.png' },
  { name: 'Policía Nacional del Ecuador', logo: '/img/aliados/15.png' },
  { name: 'Yeka Eventos', logo: '/img/aliados/16.png' },
  { name: 'Zoológico el Pantanal', logo: '/img/aliados/17.png' },
];

  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: queHacemosRef, isVisible: queHacemosVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: suenosRef, isVisible: suenosVisible } = useScrollAnimation({ threshold: 0.15 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F5E63]/90 to-[#1FA8A1]/80 z-10"></div>
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_deseo-web/artifacts/emmwnbg9_WhatsApp%20Image%202024-11-01%20at%2013.00.33.jpeg')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
        ></motion.div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Cumplimos Sueños que
            <br />
            <span className="text-[#6FD3C8]">Transforman Vidas</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            Hacemos posible que niños con enfermedades graves cumplan sus sueños más profundos
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
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
          </motion.div>
        </div>
      </section>
    {/* Carrusel Aliados */}
<div className="mb-10">
  {/* Título centrado y más grande */}
  <motion.div 
    className="flex justify-center mb-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur border border-black/5 text-[#0F5E63] font-bold shadow-md text-lg md:text-xl">
      <HandHeart className="w-6 h-6 text-[#1FA8A1]" />
      Reconocimiento a nuestros aliados
    </div>
  </motion.div>

  {/* Contenedor carrusel */}
  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-black/5">
    {/* Gradientes laterales */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

    <div className="py-6">
      {/* Track infinito */}
      <div className="aliados-track flex items-center gap-10 px-8 w-max">
        {[...aliados, ...aliados].map((a, idx) => (
          <motion.div
            key={`${a.name}-${idx}`}
            className="group flex items-center gap-3 bg-[#F5F7F7] border border-black/5 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300"
            title={a.name}
            whileHover={{ scale: 1.03, y: -2 }}
          >
            <div className="w-[96px] h-[96px] rounded-lg bg-white border border-black/5 overflow-hidden flex items-center justify-center">
              <img
                src={a.logo}
                alt={a.name}
                className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-[#0F5E63] leading-tight">
                {a.name}
              </div>
              <div className="text-xs text-[#7A7A7A] leading-tight">
                
                Aliado estratégico
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>

  {/* CSS local */}
  <style>{`
    .aliados-track{
      animation: aliados-marquee 45s linear infinite;
    }
    .aliados-track:hover{
      animation-play-state: paused;
    }
    @keyframes aliados-marquee{
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @media (max-width: 768px){
      .aliados-track{
        animation-duration: 32s;
        gap: 16px;
      }
    }
    @media (prefers-reduced-motion: reduce){
      .aliados-track{
        animation: none;
      }
    }
  `}</style>
</div>

      {/* ¿Qué Hacemos? Section */}
      <section className="py-20 bg-[#F5F7F7]" ref={queHacemosRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={queHacemosVisible ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F5E63] mb-4">
              ¿Qué Hacemos?
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Ambulancia Deseo es una fundación que cumple los deseos más profundos de niños y jóvenes con enfermedades graves, brindándoles momentos de alegría y esperanza.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={queHacemosVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              { 
                icon: Heart, 
                title: 'Cumplimos Sueños', 
                desc: 'Hacemos realidad los deseos de niños con enfermedades terminales o crónicas, creando momentos inolvidables.' 
              },
              { 
                icon: Users, 
                title: 'Red de Voluntarios', 
                desc: 'Contamos con un equipo de voluntarios capacitados y comprometidos que hacen posible cada sueño.' 
              },
              { 
                icon: Plane, 
                title: 'Transporte Seguro', 
                desc: 'Ambulancias equipadas y personal médico capacitado garantizan viajes seguros para cumplir cada deseo.' 
              },
            ].map((item, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-br from-[#1FA8A1] to-[#6FD3C8] rounded-full flex items-center justify-center mx-auto mb-6"
                      whileHover={{ rotate: 5 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#0F5E63] mb-4">{item.title}</h3>
                    <p className="text-[#7A7A7A]">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#1FA8A1] to-[#17A2A4]" ref={statsRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={statsVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} className="text-center text-white" variants={fadeInUp}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  </motion.div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <AnimatedCounter 
                      end={stat.number} 
                      suffix={stat.suffix}
                      isVisible={statsVisible}
                      duration={2000}
                    />
                  </div>
                  <div className="text-lg md:text-xl font-medium opacity-90">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Sueños Cumplidos Section */}
      <section className="py-20 bg-white" ref={suenosRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={suenosVisible ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F5E63] mb-4">
              Sueños Cumplidos
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Cada sueño cumplido es una historia de esperanza, valentía y amor.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={suenosVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {dreamsCumplidos.map((dream) => (
              <motion.div key={dream.id} variants={slideInLeft}>
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
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
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button 
              asChild
              size="lg"
              className="bg-[#1FA8A1] hover:bg-[#17A2A4] text-white text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link to="/suenos-cumplidos">Ver Más Historias</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#F5F7F7]" ref={ctaRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-[#0F5E63] to-[#1FA8A1] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl"
            initial="hidden"
            animate={ctaVisible ? "visible" : "hidden"}
            variants={scaleIn}
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
