import { useState } from "react";
import { useSelector } from "react-redux";
import { selecEditToDo } from "./../selector/selector";
import { useDispatch } from "react-redux";
import { updateToDoRedux } from "../action/action";

function EditToDo() {
  const edit = useSelector(selecEditToDo);
  const [value, setValue] = useState(edit.text);
  const dispatch = useDispatch();

  const handleSetValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateToDoRedux(value, edit.id));

    setValue("");
  };

  return (
    <form className="editToDo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Что нужно сделать?"
        value={value}
        className="input" 
        onBlur={handleSubmit}
        onChange={handleSetValue}
      />
      <button className="save" type="submit">
        Изменить
      </button>
    </form>
  );
}

export default EditToDo;
