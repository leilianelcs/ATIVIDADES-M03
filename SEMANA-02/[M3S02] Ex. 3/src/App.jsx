import { useState } from 'react'
import './App.css'
import Formulario from './formulario/formulario'

function App() {
  const [form, setForm] = useState(0)

  return (
    <>
      <Formulario/>
    </>
  )
}

export default App
