import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Auth from './pages/Auth';
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
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public route - Auth page */}
            <Route path="/auth" element={<Auth />} />
            
            {/* Redirect root to auth */}
            <Route path="/" element={<Navigate to="/auth" replace />} />
            
            {/* Protected routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Home />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/aliados"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Aliados />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/voluntarios"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Voluntarios />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/suenos-cumplidos"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <SuenosCumplidos />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/donaciones"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Donaciones />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Checkout />
                  <Footer />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;