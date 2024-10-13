import { useState } from 'react'
import './App.css'
import ListaTarefas from './components/ListaTarefas'
import Formulario from './components/formulario'


function App() {
  const [tarefas, setTarefas] = useState([])

  const handleSubmit = (data) => {
  tarefas.push([...tarefas, data])
  setTarefas(tarefas)
  }

  return (
    <>
    <h1>Lista de Tarefas</h1>
      <ListaTarefas tarefas = {tarefas}/>

      <h1>Formulário</h1>
      <Formulario submit={handleSubmit} />
    </>
  )
}

export default App
