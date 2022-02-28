export function addToDoRedux(todoText) {
  //экшен который вренет тип и значение которое вызовется в редюсере
  return {
    type: "ADD_TODO",
    todoText,
  };
}
// изменяет значение тудушки
export function updateToDoRedux(text, id) {
  return {
    type: "UPDATE_TODO",
    text,
    id,
  };
}
// удуляет тудуху
export function removeToDoRedux(id) {
  return {
    type: "REMOVE_TODO",
    id,
  };
}
// показывает, что задание выполнено
export function comleteTodoRedux(id) {
  return {
    type: "COMLETE_TODO",
    id,
  };
}
// очищает весь лист
export function clearListRedux() {
  return {
    type: "CLEAR_LIST",
  };
}

// активные задания показывает
export function switchfilterRedux() {
  return {
    type: "SWITCH_FILTER",
  };
}
// вход в редакции строки
export function enableEditingRedux(id) {
  return {
    type: "ENABLE_EDTITING",
    id,
  };
}
