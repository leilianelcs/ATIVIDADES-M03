import React from 'react';
import { ThemeProvider } from './components/ThemeContext'; // Atualize o caminho conforme necessário
import Formulario from './components/formulario';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeToggle />
        <Formulario />
      </div>
    </ThemeProvider>
  );
}

export default App;
