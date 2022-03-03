import React from "react";
import ToDoList from "./componets/ToDoList";
import "./App.css";
import AddToDo from "./componets/AddToDo";

function App() {
  return (
    <div className="App">
      <h1>ToDos</h1>
      <AddToDo />
      <ToDoList />
    </div>
  );
}

export default App;
