import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search"

const NavBar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="./">
          <p className="text-2xl hover:text-gray-700 font-bold text-gray-600 py-2 px-2 rounded  dark:text-gray-300">
            Google Search
          </p>
        </Link>
        <button
        className="text-xl dark:bg-gray-500 dark:text-gray-900 bg-white border rounded-lg px-2 py-2 hover:shadow-lg"
          type="button"
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
        >
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
        <Search />
    </div>
  );
};

export default NavBar;
