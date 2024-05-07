import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      if (todo.text.length > 0)
     { state.todos.push(todo);}
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, data } = action.payload;
      state.todos = state.todos.map((todo) => (todo.id === id ? data : todo));
    },
  },
});

export const { addTodo, removeTodo ,updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
