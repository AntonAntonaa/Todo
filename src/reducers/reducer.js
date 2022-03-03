export const initialState = {
  // глобальное хранилище редакса
  toDo: [],
  filter: false,
  editingId: null,
};

export const Reducers = (state = initialState, action) => {
  switch (
    action.type //получаем и смотрим на тип экшена который был вызван
  ) {
    case "ADD_TODO":
      return {
        ...state,
        toDo: [
          ...state.toDo,
          { id: Date.now(), text: action.todoText, status: false },
        ],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        toDo: state.toDo.map((item) =>
          item.id === action.id
            ? { id: item.id, status: item.status, text: action.text }
            : item
        ),
        editingId: null,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        toDo: state.toDo.filter((item) => item.id !== action.id),
      };
    case "COMLETE_TODO":
      return {
        ...state,
        toDo: state.toDo.map((item) =>
          item.id === action.id
            ? { id: item.id, status: !item.status, text: item.text }
            : item
        ),
      };
    case "CLEAR_LIST":
      return {
        ...state,
        toDo: [],
      };
    case "SWITCH_FILTER":
      return {
        ...state,
        filter: !state.filter,
      };
    case "ENABLE_EDTITING":
      return {
        ...state,
        editingId: action.id,
      };
    default:
      return state;
  }
};
