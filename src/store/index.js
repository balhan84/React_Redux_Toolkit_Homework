import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./slices/toDoListSlice";

const store = configureStore({
  reducer: {
    tasksList: ToDoReducer,
  },
});

export default store;
