import React from 'react';
import '../css/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';


function Task({ id, texto, completed, completeTask, deleteTask }) {
  return (
    <div className={`content-task ${ completed? 'completed':''}`}>
      <div 
        className='text-task'
        onClick={ ()=> completeTask(id) } >
        {texto}
      </div>
      <div 
        className='icon-content-tasks'
        onClick={ () => deleteTask(id) } >
        <AiOutlineCloseCircle className='icon-task' />
      </div>
    </div>
  );
}

export default Task;