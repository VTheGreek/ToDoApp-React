import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [input, setInput] = useState("")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  function addTodo(){
    setTodos([...todos, {text: input, done: false}]);
    setInput("")
  }

  function toggleTodo(index) {
    setTodos(
      todos.map((todo, i) => 
        i === index
          ? { ...todo, done: !todo.done }
          : todo
      )
    );  
  }

  function deleteTodo(index) {
    setTodos(
      todos.filter((todo, i) => i !== index)
    );
  }

  return (
    <div>
      <div className="app">
      <h1>To Do App</h1>
    <div className="input-row">
      <input 
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Write a task..."
      />

      <button 
      onClick={addTodo}>
        Add  
      </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li 
          key={index}
          onClick={() => toggleTodo(index)}
          style={{
            textDecoration: todo.done ? "line-through" : "none"
          }} >
            {todo.text} 
          <button onClick={(e) => {
            e.stopPropagation();
            deleteTodo(index);
          }}
          >
            Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;