import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Mudar para {theme === 'light' ? 'Escuro' : 'Claro'}
    </button>
  );
};

export default ThemeToggle;
