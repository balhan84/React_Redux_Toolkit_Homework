import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./slices/ToDoListSlice";

const store = configureStore({
  reducer: {
    tasksList: ToDoReducer,
  },
});

export default store;
