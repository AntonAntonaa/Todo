export const initialState = { // глобальное хранилище редакса
  value: 0, 
  ToDo: []
};

export const addReducer = (state = initialState, action) => {
  console.log(action)
  switch(action.type) { //получаем и смотрим на тип экшена который был вызван
    case 'ADD_NUMBER':
      return { ...state, value: state.value + 1 };
      case 'ADD_TODO':
        return { ...state, ToDo: action.ToDoList};
    default:
      return state;
  }
}
