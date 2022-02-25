
export function addToDoRedux(ToDoList) {
  //экшен который вренет тип и значение которое вызовется в редюсере
  return {
    type: "ADD_TODO",
    ToDoList,
  };
}
