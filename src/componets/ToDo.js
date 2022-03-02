import { RiCloseCircleFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import EditToDo from "./EditToDo";
import { useSelector } from "react-redux";
import { getTodo, getSelectEditingId } from "./../selector/selector";
import { useDispatch } from "react-redux";
import { comleteTodoRedux } from "../action/action";
import { enableEditingRedux } from "./../action/action";
import { removeToDoRedux } from "../action/action";

function ToDo() {
  const toDos = useSelector(getTodo);
  const editingId = useSelector(getSelectEditingId);
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

  const editTemp = (todo) => <EditToDo key={todo.id} />;
  const viewTemp = (todo) => (
    <div
      className={todo.status ? "todo-row complete" : "todo-row"}
      key={todo.id}
    >
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
    </div>
  );

  return toDos.map((todo) =>
    editingId == todo.id ? editTemp(todo) : viewTemp(todo)
  );
}

export default ToDo;
