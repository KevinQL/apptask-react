import React, { useState } from "react";
import '../css/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value)
  }

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto:input,
      completed:false
    }
    props.onSubmit(tareaNueva);
  }

  return (
    <form 
      className="task-form"
      onSubmit={manejarEnvio} >
      <input 
        className="task-input"
        type="text"
        placeholder="Write a task"
        name="text"
        onChange={manejarCambio}
      />
      <button className="task-button">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;