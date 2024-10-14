import React, { createContext, useContext, useState } from 'react';

// Cria o contexto
const ThemeContext = createContext();

// Provider do tema
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar o contexto
export const useTheme = () => {
  return useContext(ThemeContext);
};
