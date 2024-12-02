import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new task object with a unique ID
    const newTask = {
      id: Date.now(), // Using timestamp as a unique ID
      title,
      description,
      dueDate,
      completed: false, // Default value for completed
    };

    dispatch(addTask(newTask)); // Dispatch the new task
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-indigo-500 p-4 rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-3">Add New Task</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
          rows="3"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-lime-500 to-yellow-500 hover:from-pink-500 hover:to-orange-500 ... text-black border-black font-medium py-2 px-4 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
