import "./formulario.css";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from '../context/FormContext';

const Formulario = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { formData, updateFormData } = useFormContext();
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    // Preenche os campos com os dados do contexto
    reset(formData);
  }, [formData, reset]);

  const onSubmit = (data) => {
    updateFormData(data); // Atualiza os dados no contexto
    setConfirmationMessage(`Cadastro realizado com sucesso! Nome: ${data.name}, Email: ${data.email}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Formulário</h1>
        
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: "Nome é obrigatório!" })}
        />
        {errors.name && <span>{errors.name.message}</span>}
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: "Email é obrigatório!",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Email inválido!"
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          {...register('password', { 
            required: "Senha é obrigatória",
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 caracteres"
            }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        
        <button type="submit">Cadastrar</button>

        {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
      </div>
    </form>
  );
};

export default Formulario;
