export const initialState = { // глобальное хранилище редакса 
  ToDo: []
};

export const addReducer = (state = initialState, action) => {
  console.log(action)
  switch(action.type) { //получаем и смотрим на тип экшена который был вызван
      case 'ADD_TODO':
        return { ...state, ToDo: action.ToDoList};
    default:
      return state;
  }
}
