import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the task input
  const [task, setTask] = useState("");
  // State to store the list of tasks
  const [taskList, setTaskList] = useState([]);

  // Function to handle adding a new task
  const addTask = () => {
    if (task.trim()) {
      setTaskList([...taskList, task]);
      setTask(""); // Clear the input after adding
    }
  };

  // Function to handle deleting a task
  const deleteTask = (index) => {
    const newTaskList = taskList.filter((_, taskIndex) => taskIndex !== index);
    setTaskList(newTaskList);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter a task..." 
          value={task}
          onChange={(e) => setTask(e.target.value)} 
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {taskList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
