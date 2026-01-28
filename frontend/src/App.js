import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Placeholder routes */}
          <Route path="/aliados" element={<ComingSoon page="Aliados" />} />
          <Route path="/voluntarios" element={<ComingSoon page="Voluntarios" />} />
          <Route path="/suenos-cumplidos" element={<ComingSoon page="Sueños Cumplidos" />} />
          <Route path="/donaciones" element={<ComingSoon page="Donaciones" />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

// Temporary Coming Soon component
const ComingSoon = ({ page }) => (
  <div className="min-h-screen bg-[#F5F7F7] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#0F5E63] mb-4">{page}</h1>
      <p className="text-lg text-[#7A7A7A]">Esta página estará disponible próximamente</p>
    </div>
  </div>
);

export default App;