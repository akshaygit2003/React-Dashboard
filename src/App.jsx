import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskDashboard from "./pages/TaskDashboard";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tasks" element={<TaskDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
