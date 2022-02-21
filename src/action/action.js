export function writeToState(index) {
  //экшен который вренет тип и значение которое вызовется в редюсере

  return {
    type: "ADD_NUMBER",
    index,
  };
}
export function addToDoRedux(ToDoList) {
  //экшен который вренет тип и значение которое вызовется в редюсере
  return {
    type: "ADD_TODO",
    ToDoList,
  };
}
