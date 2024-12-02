import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import TaskFilters from "../Components/TaskFilters";

const TaskDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div
      className={`${isDarkMode ? "bg-gray-900" : "bg-gray-100"} min-h-screen`}
    >
      <Navbar onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />
      <div className="p-4 md:p-10">
        <h1 className="text-3xl font-bold  text-center mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... ">
          Task Management Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Panel */}
          <div className="md:col-span-1">
            <TaskForm />
          </div>
          {/* Right Panel */}
          <div className="md:col-span-2">
            <TaskFilters />
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;
