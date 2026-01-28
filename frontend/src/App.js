import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Aliados from './pages/Aliados';
import Voluntarios from './pages/Voluntarios';
import SuenosCumplidos from './pages/SuenosCumplidos';
import Donaciones from './pages/Donaciones';
import Checkout from './pages/Checkout';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Redirect root to home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          
          {/* Public routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/aliados" element={<Aliados />} />
          <Route path="/voluntarios" element={<Voluntarios />} />
          <Route path="/suenos-cumplidos" element={<SuenosCumplidos />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;