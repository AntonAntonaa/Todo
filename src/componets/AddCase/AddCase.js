import { useEffect, useState } from "react";

export const AddCase = () => {
  const [value, setValue] = useState('');
  const [arrList, setArrList] = useState([]);
  const handleSetValue = (event) => {
    setValue (event.target.value)
  };

  const handAddToDo = () => {
    setArrList (prevState => [...prevState, value])
  }

  useEffect (()=>{
    console.log(arrList)
  },[arrList] )

  
  return (
    <div>
      <input
        value={value}
        onChange={handleSetValue}
        type="text"
        placeholder="Что нужно сделать?"
      />
      <button class="save" onClick={ handAddToDo}>Добавить</button>
      <button class="clear">Очистить</button>
      <button class="filter">Фильтр</button>
    </div>
  );
};
