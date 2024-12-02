import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/tasks/taskSlice";

const TaskFilters = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filter); // Get the current filter from the Redux store

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="flex gap-2 mb-4">
      {["all", "completed", "pending", "overdue"].map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterChange(filter)}
          className={`px-4 py-2 rounded transition duration-200 ${
            currentFilter === filter
              ? "bg-indigo-500 text-white"
              : "bg-gray-800 hover:bg-indigo-500 text-gray-200"
          }`}
        
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
