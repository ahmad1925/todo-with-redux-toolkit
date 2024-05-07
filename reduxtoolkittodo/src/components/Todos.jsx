import React,{useEffect , useState} from "react";
import { useSelector, useDispatch  } from "react-redux";
import { removeTodo , updateTodo} from "../features/todo/todoSlice";
const Todos = () => {
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.todos);
  const [data, setdata] = useState('')
  
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const todosItems = JSON.parse(localStorage.getItem("todos"));
//     if (todosItems && todosItems.length > 0) {
//         dispatch(setTodos(todosItems));
//     }
//   }, [dispatch])
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todosList));
//   }, [todosList]);
  
  return (
    <>
      <h4 className="text-blue-500 text-center mb-4 mt-4">todos list</h4>
      <div className="border border-gray-300 p-3">
        {todosList.map((todo) => (
          <div key={todo.id} className="flex items-center mb-2">
            <div className="flex-grow">{todo.text}</div>
            <button
              className="mx-3 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              x
            </button>
            <button
              className="mx-3 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={()=>dispatch(updateTodo(todo.id,data))}
            >
              edit
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;
