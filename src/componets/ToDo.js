import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import EditToDo from './EditToDo';

function ToDo({ todos, comleteTodo, updateTodo, removeToDo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <EditToDo edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.status ? "todo-row complete" : "todo-row"} key={index}>
      <div className="text" key={todo.id} onClick={() => comleteTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
      <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="editIcon"
        />
        <RiCloseCircleFill
          onClick={() => removeToDo(todo.id)}
          className="deletIcon"
        />
        
      </div>
    </div>
  ));
}

export default ToDo;
