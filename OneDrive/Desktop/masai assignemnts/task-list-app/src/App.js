import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, toggleTask } from './features/tasks/taskSlice';

function App() {
  const [text, setText] = useState('');
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Task List</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              onClick={() => dispatch(toggleTask(task.id))}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {task.text}
            </span>
            <button onClick={() => dispatch(removeTask(task.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
