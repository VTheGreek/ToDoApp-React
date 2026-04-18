import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

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
      <h1>To Do App</h1>

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

      <ul>
        {todos.map((todo, index) => (
          <li 
          key={index}
          onClick={() => toggleTodo(index)}
          style={{
            textDecoration: todo.done ? "line-through" : "none"
          }} >
            {todo.text} 
          <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;