import { createSelector } from "reselect";

export const getSelectToDo = (state) => state.toDo;

export const getSelectFilter = (state) => state.filter;

export const getSelectEditingId = (state) => state.editingId;

export const getTodo = createSelector(
  [getSelectToDo, getSelectFilter],
  (todos, filter) => {
    if (filter) {
      return todos.filter((item) => !item.status);
    }
    return todos;
  }
);

export const getLeft = createSelector(getSelectToDo, (todos) => {
  return todos.filter((todo) => !todo.status).length;
});

export const getEdittingTodo = createSelector(
  [getSelectToDo, getSelectEditingId],
  (todos, editingId) => {
    if (editingId == null) {
      return null;
    }
    return todos.find((item) => item.id === editingId);
  }
);
