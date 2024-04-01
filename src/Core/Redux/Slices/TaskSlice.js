import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskData: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const { task, type } = action.payload;
      const existingTypeIndex = state.taskData.findIndex(
        (item) => item.type === type
      );

      if (existingTypeIndex !== -1) {
        // Type exists, push task to its tasks array
        state.taskData[existingTypeIndex].tasks.push({ ...task });
      } else {
        // Type doesn't exist, create new type entry
        state.taskData.push({ type, tasks: [{ ...task }] });
      }
    },
    removeTask(state, action) {
      const { taskIdToRemove, taskType } = action.payload;

      // Check if the task type is 'Completed' and prevent deletion if it is
      if (taskType === "Completed") {
        // Show an alert or dispatch an action to handle this case
        alert("Completed Task can not be deleted");
        return state;
      }

      state.taskData.forEach((type) => {
        type.tasks = type.tasks.filter((task) => task.id !== taskIdToRemove);
      });
    },
    editTask(state, action) {
      const { id, updatedTask, updatedType } = action.payload;

      // Find the task and update its details
      state.taskData.forEach((type) => {
        type.tasks = type.tasks.map((task) => {
          if (task.id === id) {
            // If task ID matches, update the task with updatedTask
            return { ...task, ...updatedTask };
          }
          return task;
        });
      });

      if (updatedType) {
        const previousTypeIndex = state.taskData.findIndex((item) =>
          item.tasks.some((task) => task.id === id)
        );
        if (previousTypeIndex !== -1) {
          state.taskData[previousTypeIndex].tasks = state.taskData[
            previousTypeIndex
          ].tasks.filter((task) => task.id !== id);

          const updatedTypeIndex = state.taskData.findIndex(
            (item) => item.type === updatedType
          );
          if (updatedTypeIndex !== -1) {
            state.taskData[updatedTypeIndex].tasks.push({ ...updatedTask, id });
          } else {
            state.taskData.push({
              type: updatedType,
              tasks: [{ ...updatedTask, id }],
            });
          }
        }
      }
    },
  },
});

export const { addTask, removeTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
