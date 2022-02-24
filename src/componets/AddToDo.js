import { useState } from "react";

function AddToDo(props) {
  const [value, setValue] = useState("");

  const handleSetValue = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: value,
      status: true,
    });
    setValue("");
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
      <button className="save">Добавить</button>
    </form>
  );
}

export default AddToDo;
