import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { addToDoRedux } from "../../action/action";

export const AddCase = () => {
  const [value, setValue] = useState("");
  const [arrList, setArrList] = useState([]);
  const dispatch = useDispatch ()
  const handleSetValue = (event) => {
    setValue(event.target.value);
  };

  const handAddToDo = () => {
    setArrList((prevState) => [...prevState, value]);
  };

  useEffect(() => {
    dispatch (addToDoRedux(arrList))
  }, [arrList]);

  const clearList = () =>{
    setArrList ([]) 
  }

  return (
    <div>
      <input
        value={value}
        onChange={handleSetValue}
        type="text"
        placeholder="Что нужно сделать?"
      />
      <button class="save" onClick={handAddToDo}>
        Добавить
      </button>
      <button class="clear" onClick={clearList}>Очистить</button>
      <button class="filter">Фильтр</button>
    </div>
  );
};
