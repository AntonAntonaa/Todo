export const selectToDo = (state) => {
  if (state.filter) {
    return state.ToDo.filter((item) => !item.status);
  }
  return state.ToDo;
};

export const selectFilter = (state) => state.filter;

export const selectEditingId = (state) => state.editingId;

export const selectLeft = (state) =>
  state.ToDo.filter((todo) => !todo.status).length;

export const selecEditToDo = (state) => {
  if (state.editingId == null) {
    return null;
  }
  return state.ToDo.find((item) => item.id === state.editingId);
};
