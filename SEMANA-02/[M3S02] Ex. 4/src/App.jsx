import React from 'react';
import { FormProvider } from './context/FormContext';
import Formulario from './components/Formulario';


function App() {
  return (
    <FormProvider>
      <div>
        <Formulario />
      </div>
    </FormProvider>
  );
}

export default App;
