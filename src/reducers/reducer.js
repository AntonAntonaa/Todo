export const initialState = { // глобальное хранилище редакса
  value: 0,
};

export const addReducer = (state = initialState, action) => {
  switch(action.type) { //получаем и смотрим на тип экшена который был вызван
    case 'ADD_NUMBER':
      return { ...state, value: state.value + 1 };
    default:
      return state;
  }
}
