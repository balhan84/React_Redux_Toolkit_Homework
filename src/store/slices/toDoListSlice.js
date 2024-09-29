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
  reducers: {
    removeTask: (state, { payload }) => {
      const foundTaskIndex = state.tasks.findIndex((t) => t.id === payload);
      if (foundTaskIndex !== -1) {
        state.tasks.splice(foundTaskIndex, 1);
      }
    },
    createTask: (state, { payload }) => {
      state.tasks.push({
        ...payload,
        isDone: false,
        id: uuidv4(),
      });
    },
  },
});

const { reducer, actions } = toDoListSlice;

export const { removeTask, createTask } = actions;

export default reducer;
