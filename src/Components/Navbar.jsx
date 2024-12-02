import React from "react";
import { FaSearch, FaBell, FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onThemeToggle, isDarkMode }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 px-4 py-2 flex items-center justify-between shadow-md">
      {/* Left Section - Logo */}
      <div className="flex items-center gap-4">
        <div
          className="bg-purple-600 p-2 rounded-full cursor-pointer"
          onClick={handleLogoClick}
        >
          <h1 className="text-white text-lg font-bold">Vuexy</h1>
        </div>
        <h2 className="text-white font-semibold text-lg hidden md:block">
          Dashboard
        </h2>
      </div>

      {/* Center Section - Search */}
      <div className="hidden md:flex items-center bg-gray-700 rounded-lg px-4 py-2 w-1/2">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
        />
      </div>

      {/* Right Section - Icons and User */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={onThemeToggle}
          className="text-gray-400 hover:text-white transition"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Notifications */}
        <button className="relative text-gray-400 hover:text-white transition">
          <FaBell />
        </button>

        {/* Profile Avatar */}
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold">AN</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
