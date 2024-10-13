import { useState } from "react";

function Formulario({submit}) {
const [descricao, setDescricao] = useState('')
const [concluido, setConcluido] = useState(false)

const onSubmit = e => {
    e.preventDefault()
    const tarefas = { descricao, concluido}
    submit(tarefas)
}

return (
<> 
<h2>Cadastro de tarefas</h2>
<p>Preencha o campo abaixo para cadastrar a tarefa</p>
<form id='form-tarefas' onSubmit={onSubmit}>
    <fieldset>
        <label htmlFor="campo-descricao">Digite a descrição da tarefa</label>
        <input type="text" id="campo-descricao" onChange={e => setDescricao(e.target.value)} value={descricao} />
    </fieldset>
    <fieldset>
        <label> 
            Tarefa concluída
            <input type="checkbox" id="campo-concluida" onChange={e => setConcluido(e.target.checked)} checked={concluido} />
        </label>
    </fieldset>
    <button>Cadastrar</button>
</form>

</>)
}

export default Formulario