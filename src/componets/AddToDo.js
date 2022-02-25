import { useState } from "react";
import { addToDoRedux } from "../action.js/action";
import { useDispatch } from "react-redux";

function AddToDo(props) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSetValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: value,
      status: false,
    });
    setValue("");
    
  };

  const clearList = () => {
    props.setArrlist([]);
    dispatch(addToDoRedux([]))
  };

  return (
    <form className="addtodo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Что нужно сделать?"
        value={value}
        className="input"
        onChange={handleSetValue}
      />
      <button className="save" type="submit">
        Добавить
      </button>
      <div>
      <button class="clear" type="button" onClick={clearList}>
        Очистить
      </button>
      <button class="filter" type="button" onClick={props.swithcfilter}>
        Активные 
      </button>
      </div>
    </form>
  );
}

export default AddToDo;
