import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Heart, Users, Clock, Award } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const Voluntarios = () => {
  const { toast } = useToast();
  const { ref: beneficiosRef, isVisible: beneficiosVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: formularioRef, isVisible: formularioVisible } = useScrollAnimation({ threshold: 0.2 });
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
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop')`,
          }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: 'easeOut' }}
        ></motion.div>

        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Sé Parte del Cambio
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            Únete a nuestra red de voluntarios y ayuda a cumplir sueños que transforman vidas
          </motion.p>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-[#F5F7F7]" ref={beneficiosRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={beneficiosVisible ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-[#0F5E63] mb-4">
              ¿Por Qué Ser Voluntario?
            </h2>
            <p className="text-lg text-[#7A7A7A] max-w-3xl mx-auto">
              Descubre los beneficios de formar parte de nuestra comunidad
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={beneficiosVisible ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-[#1FA8A1] to-[#6FD3C8] rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 5, scale: 1.06 }}
                        transition={{ duration: 0.25 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-[#0F5E63] mb-3">{beneficio.title}</h3>
                      <p className="text-[#7A7A7A] text-sm">{beneficio.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Formulario Section */}
      <section className="py-20 bg-white" ref={formularioRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              animate={formularioVisible ? 'visible' : 'hidden'}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-[#0F5E63] mb-4">
                Solicitud de Voluntariado
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={formularioVisible ? 'visible' : 'hidden'}
              variants={scaleIn}
            >
              <Card className="border-none shadow-xl">
                <CardContent className="p-8 text-center">
                  <motion.a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSecLpbMTbN5IoIylXCepyJUATDyl7IXbU5hjRqrHu0wGJkfWA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold py-6 px-12 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enviar Solicitud
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Voluntarios;
