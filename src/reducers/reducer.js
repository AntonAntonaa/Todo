export const initialState = {
  // глобальное хранилище редакса
  ToDo: [],
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
        ToDo: [
          ...state.ToDo,
          { id: Date.now(), text: action.todoText, status: false },
        ],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        ToDo: state.ToDo.map((item) =>
          item.id === action.id
            ? { id: item.id, status: item.status, text: action.text }
            : item
        ),
        editingId: null,
      };
    case "REMOVE_TODO":
      return {
        ...state,
        ToDo: state.ToDo.filter((item) => item.id !== action.id),
      };
    case "COMLETE_TODO":
      return {
        ...state,
        ToDo: state.ToDo.map((item) =>
          item.id === action.id
            ? { id: item.id, status: !item.status, text: item.text }
            : item
        ),
      };
    case "CLEAR_LIST":
      return {
        ...state,
        ToDo: [],
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
