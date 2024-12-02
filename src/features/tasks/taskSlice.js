import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Complete React Project",
      description: "Finish the task management dashboard.",
      dueDate: "2024-12-10",
      completed: false,
    },
    {
      id: 2,
      title: "Prepare Presentation",
      description: "Create slides for the upcoming meeting.",
      dueDate: "2024-12-05",
      completed: false,
    },
  ],
  filter: "all", // Default filter
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload); // action.payload should be the new task object
    },

    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updatedTask };
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload; // Set the current filter
    },
    markTaskAsCompleted: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex].completed = true;
      }
    },
    reorderTasks: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const [movedTask] = state.tasks.splice(sourceIndex, 1);
      state.tasks.splice(destinationIndex, 0, movedTask);
    },
  },
});

// Export actions for use in components
export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskStatus,
  setFilter,
  markTaskAsCompleted,
  reorderTasks,
} = taskSlice.actions;

// Export the reducer to be used in the store
export default taskSlice.reducer;
