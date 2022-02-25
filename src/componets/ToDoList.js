import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToDo from "./AddToDo";
import ToDo from "./ToDo";
import { addToDoRedux } from "../action.js/action";

function ToDoList() {
  const [filter, setFilter] = useState(false);
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const todosRedux= useSelector(state => state.ToDo )
  console.log(todosRedux)

  const addDo = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    dispatch(addToDoRedux(newTodos));
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
    const uodate = todosRedux.map((item) => (item.id === todoId ? newValue : item))
    dispatch(addToDoRedux(uodate))
  };

  const removeToDo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
    dispatch(addToDoRedux(removeArr))
  };

  const swithcfilter = () => {
    setFilter(!filter);
  };

  const comleteTodo = (id) => {
    let updateTodos = todosRedux.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status,
        };
      }
      return todo;
    });

    setTodos(updateTodos);
    dispatch(addToDoRedux(updateTodos))
  };

  const left = () => {
    return todosRedux.filter((todo) => !todo.status).length;
  };

  return (
    <div className={filter ? "list-filter" : ""}>
      <h1>ToDos</h1>
      <AddToDo
        onSubmit={addDo}
        setArrlist={setTodos}
        swithcfilter={swithcfilter}
      />
      <div className="left">{left()} Осталось</div>
      <ToDo
        todosRedux={todosRedux}
        comleteTodo={comleteTodo}
        removeToDo={removeToDo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default ToDoList;
