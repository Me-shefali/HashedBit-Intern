import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    const trimmed = task.trim();
    if (trimmed !== '') {
      const updatedList = [...todoList, trimmed].sort((a, b) => a.localeCompare(b));
      setTodoList(updatedList);
      setTask('');
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList.sort((a, b) => a.localeCompare(b)));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="todo-container">
      <h2>React To-Do App</h2>
      <input
        type="text"
        className="todo-input"
        value={task}
        placeholder="Enter new task"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="todo-add-btn" onClick={addTask}>Add</button>

      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}
            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
