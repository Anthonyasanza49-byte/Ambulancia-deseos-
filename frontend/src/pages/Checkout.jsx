import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CreditCard, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  
  const [donationAmount, setDonationAmount] = useState(searchParams.get('amount') || 'custom');
  const [customAmount, setCustomAmount] = useState('');
  const [shippingData, setShippingData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Ecuador',
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const getFinalAmount = () => {
    if (donationAmount === 'custom') {
      return parseFloat(customAmount) || 0;
    }
    return parseFloat(donationAmount) || 0;
  };

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (donationAmount === 'custom' && (!customAmount || parseFloat(customAmount) < 5)) {
      toast({
        title: 'Monto Inválido',
        description: 'El monto mínimo de donación es $5',
        variant: 'destructive',
      });
      return;
    }
    setStep(2);
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleStep3Submit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    toast({
      title: '¡Procesando Pago!',
      description: 'Por favor espera...',
    });
    
    setTimeout(() => {
      setStep(4);
      toast({
        title: '¡Donación Exitosa!',
        description: 'Gracias por tu generosidad',
      });
    }, 2000);
  };

  if (step === 4) {
    return (
      <div className="min-h-screen bg-[#F5F7F7] flex items-center justify-center py-12 px-4">
        <Card className="max-w-2xl w-full border-none shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#1FA8A1] to-[#6FD3C8] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-[#0F5E63] mb-4">
              ¡Gracias por Tu Donación!
            </h1>
            <p className="text-xl text-[#7A7A7A] mb-6">
              Tu generosa donación de <span className="font-bold text-[#1FA8A1]">${getFinalAmount().toFixed(2)}</span> ayudará a cumplir los sueños de niños con enfermedades graves.
            </p>
            <div className="bg-[#6FD3C8]/10 rounded-lg p-6 mb-8">
              <p className="text-[#7A7A7A]">
                Hemos enviado un recibo a <span className="font-semibold text-[#0F5E63]">{shippingData.email}</span>
              </p>
              <p className="text-sm text-[#7A7A7A] mt-2">
                Número de confirmación: <span className="font-mono font-semibold">AD-{Date.now()}</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/home')}
                className="bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold rounded-full px-8"
              >
                Volver al Inicio
              </Button>
              <Button
                onClick={() => navigate('/suenos-cumplidos')}
                variant="outline"
                className="border-2 border-[#1FA8A1] text-[#1FA8A1] hover:bg-[#1FA8A1] hover:text-white font-semibold rounded-full px-8"
              >
                Ver Sueños Cumplidos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7F7] py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      step >= stepNumber
                        ? 'bg-[#1FA8A1] text-white scale-110'
                        : 'bg-white text-[#7A7A7A] border-2 border-[#7A7A7A]/30'
                    }`}
                  >
                    {step > stepNumber ? <CheckCircle className="w-6 h-6" /> : stepNumber}
                  </div>
                  <div className="text-xs md:text-sm font-medium text-[#7A7A7A] mt-2 text-center">
                    {stepNumber === 1 && 'Monto'}
                    {stepNumber === 2 && 'Datos'}
                    {stepNumber === 3 && 'Pago'}
                  </div>
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-16 md:w-32 h-1 mx-2 transition-all duration-300 ${
                      step > stepNumber ? 'bg-[#1FA8A1]' : 'bg-[#7A7A7A]/30'
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step 1: Amount Selection */}
        {step === 1 && (
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-[#0F5E63] text-center">
                Selecciona el Monto de Donación
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleStep1Submit} className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[25, 50, 100, 200].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setDonationAmount(amount.toString())}
                      className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                        donationAmount === amount.toString()
                          ? 'border-[#1FA8A1] bg-[#1FA8A1]/10 scale-105'
                          : 'border-[#7A7A7A]/30 hover:border-[#1FA8A1] hover:bg-[#F5F7F7]'
                      }`}
                    >
                      <div className="text-3xl font-bold text-[#1FA8A1]">${amount}</div>
                    </button>
                  ))}
                </div>

                <div className="text-center text-[#7A7A7A] font-medium">o</div>

                <div className="space-y-2">
                  <Label htmlFor="customAmount" className="text-[#2E2E2E] font-medium">
                    Monto Personalizado (mínimo $5)
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A7A7A] text-lg">$</span>
                    <Input
                      id="customAmount"
                      type="number"
                      min="5"
                      step="0.01"
                      placeholder="Ingresa el monto"
                      className="pl-8 text-lg border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setDonationAmount('custom');
                      }}
                      onFocus={() => setDonationAmount('custom')}
                    />
                  </div>
                </div>

                <div className="bg-[#6FD3C8]/10 rounded-lg p-6 text-center">
                  <div className="text-[#7A7A7A] mb-2">Total a Donar:</div>
                  <div className="text-4xl font-bold text-[#1FA8A1]">${getFinalAmount().toFixed(2)}</div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Continuar
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Shipping Information */}
        {step === 2 && (
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-[#0F5E63] text-center flex items-center justify-center gap-2">
                <MapPin className="w-8 h-8" />
                Información de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleStep2Submit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-[#2E2E2E] font-medium">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Juan Pérez"
                      className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                      value={shippingData.fullName}
                      onChange={(e) => setShippingData({ ...shippingData, fullName: e.target.value })}
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
                      value={shippingData.email}
                      onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#2E2E2E] font-medium">
                      Teléfono *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+593 123 456 789"
                      className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                      value={shippingData.phone}
                      onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-[#2E2E2E] font-medium">
                      Ciudad *
                    </Label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="Quito"
                      className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                      value={shippingData.city}
                      onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-[#2E2E2E] font-medium">
                    Dirección *
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Calle Principal #123"
                    className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                    value={shippingData.address}
                    onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-[#7A7A7A]/30 text-[#7A7A7A] hover:bg-[#F5F7F7]"
                  >
                    Atrás
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold"
                  >
                    Continuar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-[#0F5E63] text-center flex items-center justify-center gap-2">
                <CreditCard className="w-8 h-8" />
                Información de Pago
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleStep3Submit} className="space-y-6">
                <div className="bg-[#6FD3C8]/10 rounded-lg p-6 mb-6">
                  <div className="text-[#7A7A7A] mb-2">Resumen de Donación:</div>
                  <div className="text-3xl font-bold text-[#1FA8A1]">${getFinalAmount().toFixed(2)}</div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-[#2E2E2E] font-medium">
                    Número de Tarjeta *
                  </Label>
                  <Input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                    value={paymentData.cardNumber}
                    onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardName" className="text-[#2E2E2E] font-medium">
                    Nombre en la Tarjeta *
                  </Label>
                  <Input
                    id="cardName"
                    type="text"
                    placeholder="JUAN PEREZ"
                    className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                    value={paymentData.cardName}
                    onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate" className="text-[#2E2E2E] font-medium">
                      Fecha de Expiración *
                    </Label>
                    <Input
                      id="expiryDate"
                      type="text"
                      placeholder="MM/AA"
                      maxLength="5"
                      className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                      value={paymentData.expiryDate}
                      onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cvv" className="text-[#2E2E2E] font-medium">
                      CVV *
                    </Label>
                    <Input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      maxLength="4"
                      className="border-[#7A7A7A]/30 focus:border-[#1FA8A1] focus:ring-[#1FA8A1]"
                      value={paymentData.cvv}
                      onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="bg-[#6FD3C8]/10 rounded-lg p-4 text-sm text-[#7A7A7A]">
                  <p>🔒 Tu pago es 100% seguro. Usamos encriptación SSL para proteger tu información.</p>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1 border-2 border-[#7A7A7A]/30 text-[#7A7A7A] hover:bg-[#F5F7F7]"
                  >
                    Atrás
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-[#1FA8A1] hover:bg-[#17A2A4] text-white font-semibold"
                  >
                    Completar Donación
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Checkout;
