import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import EditToDo from "./EditToDo";
import { useSelector } from "react-redux";
import { selectToDo, selectEditingId } from "./../selector/selector";
import { useDispatch } from "react-redux";
import { comleteTodoRedux } from "../action/action";
import { enableEditingRedux } from "./../action/action";
import { removeToDoRedux } from "../action/action";

function ToDo() {
  const ToDos = useSelector(selectToDo);
  const EditingId = useSelector(selectEditingId);
  const dispatch = useDispatch();

  const comleteTodo = (id) => {
    dispatch(comleteTodoRedux(id));
  };

  const setEdit = (id) => {
    dispatch(enableEditingRedux(id));
  };

  const removeToDo = (id) => {
    dispatch(removeToDoRedux(id));
  };

  const EditTemp = <EditToDo/>
  const ViewTemp = (todo, index) =>( <div className={todo.status ? "todo-row complete" : "todo-row"} key={index}>
  <div className="text" key={todo.id} onClick={() => comleteTodo(todo.id)}>
    {todo.text}
  </div>
  <div className="icons">
    <TiEdit onClick={() => setEdit(todo.id)} className="editIcon" />
    <RiCloseCircleFill
      onClick={() => removeToDo(todo.id)}
      className="deletIcon"
    />
  </div>
</div>)

  return ToDos.map((todo, index) => ( 
    EditingId==todo.id ? EditTemp: ViewTemp (todo, index)
  ));
}

export default ToDo;
