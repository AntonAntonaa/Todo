

import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { writeToState } from './action/action';
import { ToDoList } from './componets/ToDoList/ToDoList';
import { AddCase } from './componets/AddCase/AddCase';
function App() {

  const dispatch = useDispatch() //вызываем диспатч для того что бы через него вызвать экшн writeToState
  const value = useSelector(store => store.value) //забираем значение из глобального хранилища 

  const addNumber = () => {
    console.log(value)
    dispatch(writeToState(1))
  }

  return (
      <div > 
        <AddCase /> 
        <ToDoList /> 
      </div>
  );
}

export default App;
