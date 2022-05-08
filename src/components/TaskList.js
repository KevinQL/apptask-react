import React,{ useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import '../css/TaskList.css';


function TaskList() {

  const [ tasks, setTasks ] = useState([]);

  const addTask = task => {
    console.log("task to add");
    console.log(task);

    if(task.texto.trim()){
      task.texto = task.texto.trim();
      const tasksUpdate = [task, ...tasks];
      setTasks(tasksUpdate);
      console.log("task to added success");
    }
  }

  const deleteTask = id => {
    const tasksUpdate = tasks.filter(task => task.id !== id);
    setTasks(tasksUpdate);
  }

  const completeTask = id => {
    console.log(id);
    tasks.forEach(task => {
      if(task.id === id){
        console.log(task)
        task.completed = !task.completed;
      }
    })
    const tasksUpdate = [...tasks]
    setTasks(tasksUpdate);
  }


  return (
    <>
      <TaskForm onSubmit={addTask} />

      <div className="tasks-list-conteiner">
        LISTA DE TAREA

        {
          tasks.map(task =>
            <Task 
              key={task.id}
              id={task.id}
              texto={task.texto}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        }

      </div>
    </>
  );
}

export default TaskList;