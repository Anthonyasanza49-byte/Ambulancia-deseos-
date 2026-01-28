import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import Home from './pages/Home';
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
                  <ComingSoon page="Aliados" />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/voluntarios"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <ComingSoon page="Voluntarios" />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/suenos-cumplidos"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <ComingSoon page="Sueños Cumplidos" />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/donaciones"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <ComingSoon page="Donaciones" />
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