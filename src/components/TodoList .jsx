import React, { useState } from 'react';

const TodoList = () => {
  
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React Props" },
    { id: 2, task: "Master useState Hook" },
    { id: 3, task: "Understand Lists and Keys" }
  ]);

  const addTaskAtStart = () => {
    const newTask = {
      id: Date.now(),
      task: `New Task (${new Date().toLocaleTimeString()})`
    };
    
    setTodos([newTask, ...todos]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>My Todo List</h2>
      
      <button 
        onClick={addTaskAtStart}
        style={{ marginBottom: '20px', padding: '10px', cursor: 'pointer' }}
      >
        Add Task to Start
      </button>

      <ul>
        
        {todos.map((todo) => (
          
          <li key={todo.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee' }}>
            <strong>ID:</strong> {todo.id} :- <strong>Task:</strong> {todo.task}
            <input type="text" placeholder="Type notes here..." style={{ marginLeft: '10px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;