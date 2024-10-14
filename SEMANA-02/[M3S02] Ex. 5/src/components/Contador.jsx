import React, { useState, useEffect } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  // Atualiza o título da página sempre que o contador mudar
  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar} style={{ marginRight: '10px' }}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};

export default Contador;
