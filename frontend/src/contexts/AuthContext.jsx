import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const savedUser = localStorage.getItem('ambulancia_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    const user = {
      id: Date.now(),
      email: userData.email,
      name: userData.name || 'Usuario',
      createdAt: new Date().toISOString()
    };
    setUser(user);
    localStorage.setItem('ambulancia_user', JSON.stringify(user));
    return user;
  };

  const register = (userData) => {
    const user = {
      id: Date.now(),
      email: userData.email,
      name: userData.name,
      phone: userData.phone,
      createdAt: new Date().toISOString()
    };
    setUser(user);
    localStorage.setItem('ambulancia_user', JSON.stringify(user));
    return user;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ambulancia_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};