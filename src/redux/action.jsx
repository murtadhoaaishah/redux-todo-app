export function addtodo(text) {
  return {
    type: "ADD_TODO",
    payload: {
      todo: text,
      completed: false,
    },
  };
}

export function toggletodo(id) {
  return {
    type: "TOGGLE_TODO",
    payload: id,
  };
}

export function deletetodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
}
