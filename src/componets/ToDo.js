import { RiCloseCircleFill } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { comleteTodoRedux } from "../action/action";
import { enableEditingRedux } from "./../action/action";
import { removeToDoRedux } from "../action/action";

function ToDo(props) {
  const todo = props.todo;
  const dispatch = useDispatch();
  const comleteTodo = (id) => {
    dispatch(comleteTodoRedux(id));
  };
  const removeToDo = (id) => {
    dispatch(removeToDoRedux(id));
  };

  const setEdit = (id) => {
    dispatch(enableEditingRedux(id));
  };

  return (
    <div className={todo.status ? "todo-row complete" : "todo-row"}>
      <div className="check-circle" onClick={() => comleteTodo(todo.id)}>
        <AiOutlineCheck className="check" />
      </div>
      <div className="text" onDoubleClick={() => setEdit(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <RiCloseCircleFill
          onClick={() => removeToDo(todo.id)}
          className="deletIcon"
        />
      </div>
    </div>
  );
}

export default ToDo;
