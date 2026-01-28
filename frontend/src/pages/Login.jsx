import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Login = () => {
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login
    toast({
      title: '¡Bienvenido!',
      description: 'Inicio de sesión exitoso',
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: 'Error',
        description: 'Las contraseñas no coinciden',
        variant: 'destructive',
      });
      return;
    }
    // Mock register
    toast({
      title: '¡Registro Exitoso!',
      description: 'Tu cuenta ha sido creada correctamente',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7F7] to-[#6FD3C8]/20 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center mb-8 group">
          <img 
            src="https://customer-assets.emergentagent.com/job_deseo-web/artifacts/3xcqgn2q_image.png" 
            alt="Ambulancia Deseo Logo" 
            className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login" className="data-[state=active]:bg-[#1FA8A1] data-[state=active]:text-white">
              Iniciar Sesión
            </TabsTrigger>
            <TabsTrigger value="register" className="data-[state=active]:bg-[#1FA8A1] data-[state=active]:text-white">
              Registrarse
            </TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <Card className="border-none shadow-xl">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-[#0F5E63]">Iniciar Sesión</CardTitle>
                <CardDescription className="text-[#7A7A7A]">
                  Ingresa tus credenciales para acceder a tu cuenta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#2E2E2E] font-medium">
                      Correo Electrónico
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="pl-10 border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-[#2E2E2E] font-medium">
                      Contraseña
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-[#7A7A7A]/30 text-[#1FA8A1] focus:ring-[#1FA8A1]" />
                      <span className="text-sm text-[#7A7A7A]">Recordarme</span>
                    </label>
                    <a href="#" className="text-sm text-[#1FA8A1] hover:text-[#17A2A4] font-medium">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Iniciar Sesión
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register">
            <Card className="border-none shadow-xl">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-[#0F5E63]">Crear Cuenta</CardTitle>
                <CardDescription className="text-[#7A7A7A]">
                  Únete a nuestra comunidad y comienza a hacer la diferencia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#2E2E2E] font-medium">
                      Nombre Completo
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Juan Pérez"
                        className="pl-10 border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-[#2E2E2E] font-medium">
                      Correo Electrónico
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="tu@email.com"
                        className="pl-10 border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#2E2E2E] font-medium">
                      Teléfono
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+593 123 456 789"
                        className="pl-10 border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                        value={registerData.phone}
                        onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-[#2E2E2E] font-medium">
                      Contraseña
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-[#2E2E2E] font-medium">
                      Confirmar Contraseña
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#7A7A7A]" />
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Crear Cuenta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <p className="text-center text-sm text-[#7A7A7A] mt-6">
          Al continuar, aceptas nuestros{' '}
          <a href="#" className="text-[#1FA8A1] hover:text-[#17A2A4] font-medium">
            Términos y Condiciones
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;