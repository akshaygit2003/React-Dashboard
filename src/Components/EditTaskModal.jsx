import React, { useState, useEffect } from "react";

const EditTaskModal = ({ isOpen, onClose, task, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, dueDate });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-white">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              rows="3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Due Date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-lime-600 hover:bg-lime-500 text-white font-medium py-2 px-4 rounded"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 hover:bg-red-500 text-white font-medium py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
