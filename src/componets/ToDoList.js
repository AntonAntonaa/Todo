import React from "react";
import { useSelector } from "react-redux";
import AddToDo from "./AddToDo";
import ToDo from "./ToDo";
import { getFilter, getLeft } from "./../selector/selector";

function ToDoList() {
  const filter = useSelector(getFilter);
  const left = useSelector(getLeft);

  return (
    <div className={filter ? "list-filter" : ""}>
      <h1>ToDos</h1>
      <AddToDo />
      <div className="left">{left} Осталось</div>
      <ToDo />
    </div>
  );
}

export default ToDoList;
