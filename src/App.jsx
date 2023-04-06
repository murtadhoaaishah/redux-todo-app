import React from "react";
// import { addtodo, toggletodo } from './redux/action'
// import { todoReducers } from './redux/reducers'
// import { deletetodo } from './redux/action'
// import { addTodo, deleteTodo, toggleTodo } from "./redux/action";
// import { toggletodo } from './redux/action'
// import {deleteTodo} from './redux'
// import { deletetodo, toggletodo, addtodo } from "./redux/reducers";
import { deletetodo, toggletodo, addtodo } from "./redux/action";
import { useDispatch } from "react-redux";

// const App = () => {
//   return (
//     <div>
//       <h1>todo</h1>
//       <form onSubmit={() => {addtodo}}>
//         <input type="text"
//         placeholder="Add todo"
//         onChange={toggletodo}
//         />
//         <button type='submit'>Add todo</button>
//         <button>delete</button>
//       </form>
//       {todoReducers.map((todo, index) => <div>
//         <span>{todo}</span>
//         <input
//         type="checked"
//         className={`${toggletodo ? checked : ''}`}
//         onClick={() => {deletetodo}} />
//       </div>)}
//     </div>
//   )
// }

// export default App

// import React from "react";
// import

function App({ id, text, completed }) {
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggletodo(id));
  }

  function handleDelete() {
    dispatch(deletetodo(id));
  }

  function addNewTodo() {
    dispatch(addtodo());
  }

  return (
    <div>
      <input checked={completed} onChange={handleToggle} />
      <span>{text}</span>
      <button onClick={addNewTodo}>add</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default App;
