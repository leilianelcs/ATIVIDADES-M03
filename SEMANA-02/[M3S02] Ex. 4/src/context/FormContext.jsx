import React, { createContext, useContext, useState } from 'react';

// Cria o contexto
const FormContext = createContext();

// Provider do formulário
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Hook para usar o contexto
export const useFormContext = () => {
  return useContext(FormContext);
};
