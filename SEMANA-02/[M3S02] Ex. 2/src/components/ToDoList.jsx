import React, { useState, useEffect } from "react";
import "./toDoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Carregar tarefas do localStorage quando o componente for montado
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Salvar tarefas no localStorage toda vez que a lista de tarefas mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
