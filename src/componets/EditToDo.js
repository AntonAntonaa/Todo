import { useState } from "react";

function EditToDo(props) {
  const [value, setValue] = useState(props.edit.value);
  

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

  

  return (
    <form className="editToDo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Что нужно сделать?"
        value={value}
        className="input"
        onChange={handleSetValue}
      />
      <button className="save" type="submit">
        Изменить 
      </button>
  
    </form>
  );
}

export default EditToDo;
