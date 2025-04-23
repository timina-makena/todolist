import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); // initialize state

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json()) // fixed to call json()
      .then(data => setTodos(data)) // update state with fetched data
      .catch(e => console.log(e));
  }, []); // empty dependency array to only fetch data once when component mounts

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li> // fixed typo 'tittle' to 'title'
        ))}
      </ul>
    </div>
  );
}

export default App;
