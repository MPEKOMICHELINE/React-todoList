import React, { useState } from "react";
import './App.css'

function App() {
  const [todos, setTodos] = useState ([]);
  const [newTodo, setNewTodo] = useState ("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== ""){
      setTodos([...todos, {text: newTodo.trim(), checked: false}]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);

  };
  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };



  return (
    <>
    <div>
      <h1>Todo List APP</h1>
      <input type="text" placeholder= " text" value = {newTodo} onChange = {(e) => setNewTodo(e.target.value)}/>
      <button onClick = {handleAddTodo}>Ajouter</button>
      <ul>
        {todos.map((todo, index) => (
          <li key = {index} >
            <div style = {{ display: "flex", alignItems: "center"}}>
            <input id="bnt"
            type ="checkbox" 
            checked = {todo.checked} 
            onChange = {() => handleToggleTodo(index)}
            />
            <span 
              style={{
                marginRight: "10px",
                textDecoration: todo.checked ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button  style = {{marginTop: "5px", marginBottom: "5px"}}  onClick = {() => handleDeleteTodo(index)}>Supprimer</button>

            </div>
            
          </li>
          
        ))}
      </ul>
    </div>
    </>
  );
};

export default App;
