import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Building2, HandHeart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Aliados = () => {
  const aliados = [
    {
      id: 1,
      name: 'Ministerio de Salud P\u00fablica',
      category: 'Salud',
      description: 'Apoyo m\u00e9dico y log\u00edstico para el traslado de pacientes',
      logo: '/img/Aliados/Saludpu.png',
    },
    {
      id: 3,
      name: 'Banco de Alimentos Diakonia',
      category: 'Alimentaci\u00f3n',
      description: 'Apoyo nutricional y alimentario para las familias',
      logo: '/img/Aliados/Bancode.png',
    },
    {
      id: 5,
      name: 'Junta de Beneficencia de Guayaquil',
      category: 'Cobertura',
      description: 'Brindar asistencia social, salud, educaci\u00f3n y servicios funerarios a personas de escasos recursos en Ecuador.',
      logo: '/img/Aliados/Juntade.png',
    },
    {
      id: 6,
      name: 'Albergue Jefferson Rescata',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/1.png',
    },
    {
      id: 7,
      name: 'Bio Amayu',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/2.png',
    },
    {
      id: 8,
      name: 'Bubbleton.ec',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/3.png',
    },
    {
      id: 9,
      name: 'Colegio Menor',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/4.png',
    },
  
    {
      id: 11,
      name: 'Unidad Educativa Delta',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/5.png',
    },
    {
      id: 12,
      name: 'Escuela de Aviaci\u00f3n Grandaviation',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/6.png',
    },
    {
      id: 13,
      name: 'ESPECTRAVEL',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/7.png',
    },
    {
      id: 14,
      name: 'Esperanza de Vida',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/8.png',
    },
    {
      id: 15,
      name: 'Funt\u00e1stico',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/9.png',
    },
    {
      id: 16,
      name: 'IHOP',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/10.png',
    },
    {
      id: 17,
      name: 'La Porte\u00f1ita',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/11.png',
    },
    {
      id: 18,
      name: 'Mr. Joy',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/12.png',
    },
    {
      id: 19,
      name: 'Ocean Club',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/13.png',
    },
    {
      id: 20,
      name: 'Pixie Dust Shows',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/14.png',
    },
    {
      id: 21,
      name: 'Polic\u00eda Nacional del Ecuador',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/15.png',
    },
    {
      id: 22,
      name: 'Yeka Eventos',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/16.png',
    },
    {
      id: 23,
      name: 'Zool\u00f3gico el Pantanal',
      category: 'Aliado',
      description: 'Aliado estrat\u00e9gico que apoya la misi\u00f3n de Ambulancia Deseo.',
      logo: '/img/Aliados/17.png',
    },
  ];

  const [showAllAliados, setShowAllAliados] = useState(false);
  const aliadosVisible = showAllAliados ? aliados : aliados.slice(0, 6);
  const { ref: beneficiosRef, isVisible: beneficiosVisibleInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisibleInView } = useScrollAnimation({ threshold: 0.2 });

  const beneficios = [
    {
      icon: HandHeart,
      title: 'Impacto Social',
      description: 'Contribuye a cambiar vidas y cumplir sue\u00f1os de ni\u00f1os con enfermedades graves',
    },
    {
      icon: Building2,
      title: 'Visibilidad',
      description: 'Tu marca se asocia con una causa noble y obtiene reconocimiento p\u00fablico',
    },
    {
      icon: CheckCircle,
      title: 'Certificaci\u00f3n',
      description: 'Recibe certificaci\u00f3n como aliado oficial de Ambulancia Deseo',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0F5E63] to-[#1FA8A1] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Nuestros Aliados Estratégicos
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto opacity-90"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Gracias a nuestros aliados, podemos hacer realidad los sueños de cientos de niños cada año.
          </motion.p>
        </div>
      </section>

      {/* Aliados Grid */}
      <section className="py-20 bg-[#F5F7F7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F5E63] mb-4">
              Nuestros Aliados Estrategicos
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Organizaciones que confían en nuestra misión y nos apoyan activamente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aliadosVisible.map((aliado) => (
              <Card key={aliado.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-[400px] h-[400px] overflow-hidden mx-auto">
                  <img
                    src={aliado.logo}
                    alt={aliado.name}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
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
          <div className="flex justify-center mt-10">
            <button
              type="button"
              onClick={() => setShowAllAliados((v) => !v)}
              className="bg-[#1FA8A1] hover:bg-[#17A2A4] text-white text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {showAllAliados ? 'Ocultar aliados' : 'Ver todos los aliados'}
            </button>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-white" ref={beneficiosRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={beneficiosVisibleInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-[#0F5E63] mb-4">
              Beneficios de ser aliado
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Únete a nuestra red de aliados y sé parte de algo extraordinario
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={beneficiosVisibleInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <motion.div key={index} variants={scaleIn}>
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-[#1FA8A1] to-[#6FD3C8] rounded-full flex items-center justify-center mx-auto mb-6"
                      whileHover={{ rotate: 5, scale: 1.06 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#0F5E63] mb-4">{beneficio.title}</h3>
                    <p className="text-[#7A7A7A]">{beneficio.description}</p>
                  </CardContent>
                </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F7F7]" ref={ctaRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-r from-[#0F5E63] to-[#1FA8A1] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl"
            initial="hidden"
            animate={ctaVisibleInView ? 'visible' : 'hidden'}
            variants={scaleIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Quieres ser nuestro aliado?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contacta con nosotros y descubre como tu organización puede marcar la diferencia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfDSL1haTnNUN5xqWf2J4fpgDwD7VRW1_th8xR6cAulcjUArg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#1FA8A1] hover:bg-[#F5F7F7] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Rellena este formulario
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Aliados;
