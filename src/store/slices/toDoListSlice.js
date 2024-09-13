import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      isDone: false,
      taskName: "Read 20 pages",
    },
    {
      id: uuidv4(),
      isDone: false,
      taskName: "Walk 10000 steps",
    },
  ],
};

const toDoListSlice = createSlice({
  initialState,
  name: "tasks",
  reducers: {},
});

const { reducer } = toDoListSlice;

export default reducer;
