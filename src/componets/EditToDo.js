import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getEdittingTodo } from "./../selector/selector";
import { useDispatch } from "react-redux";
import { updateToDoRedux } from "../action/action";
import { removeToDoRedux } from "../action/action";

function EditToDo() {
  let inputRef = null;
  const edit = useSelector(getEdittingTodo);
  const [value, setValue] = useState(edit.text);
  const dispatch = useDispatch();

  const handleSetValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      dispatch(removeToDoRedux(edit.id));
    } else {
      dispatch(updateToDoRedux(value.trim(), edit.id));
      setValue("");
    }
  };

  useEffect(() => {
    inputRef.focus();
  });

  return (
    <form className="editToDo" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        className="inputred"
        onBlur={handleSubmit}
        onChange={handleSetValue}
        ref={(input) => {
          inputRef = input;
        }}
      />
      <button className="savered" type="submit">
        Изменить
      </button>
    </form>
  );
}

export default EditToDo;
