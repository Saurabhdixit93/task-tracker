import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Slices/TaskSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
