import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  function addTodo(){
    setTodos([...todos, input]);
    setInput("")
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
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;