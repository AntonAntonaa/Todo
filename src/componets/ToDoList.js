import React from "react";
import { useSelector } from "react-redux";
import { getSelectFilter, getLeft } from "./../selector/selector";
import EditToDo from "./EditToDo";
import { getTodo, getSelectEditingId } from "./../selector/selector";
import ToDo from "./ToDo";

function ToDoList() {
  const filter = useSelector(getSelectFilter);
  const left = useSelector(getLeft);
  const editingId = useSelector(getSelectEditingId);

  const toDos = useSelector(getTodo);

  return (
    <div className={filter ? "list-filter" : ""}>
      <div className="left">{left} Осталось</div>
      <div className="list">
        {toDos.map((todo) =>
          editingId === todo.id ? (
            <EditToDo key={todo.id} />
          ) : (
            <ToDo key={todo.id} todo={todo} />
          )
        )}
      </div>
    </div>
  );
}

export default ToDoList;
