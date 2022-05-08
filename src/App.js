import './App.css';
import mylogo from './img/mylogo1.png';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="content-logo">
        <img 
          src={mylogo}
          className="my-logo"
          alt=""
        />
      </div>

      <div className='content-task-main'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>

    </div>
  );
}

export default App;
