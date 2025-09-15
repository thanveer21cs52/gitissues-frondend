import React from "react";
import { Link } from "react-router-dom";

interface NavProps {
  active: "home" | "create" | "login";
}

const Nav: React.FC<NavProps> = ({ active }) => {
  return (
    <aside className="w-64 h-screen bg-white shadow-md p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Git Issues</h2>

      <Link
        to="/"
        className={`mb-2 p-2 rounded ${active === "home" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
      >
        Home
      </Link>

      <Link
        to="/create"
        className={`mb-2 p-2 rounded ${active === "create" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
      >
        Create Issue
      </Link>

      <Link
        to="/login"
        className={`mb-2 p-2 rounded ${active === "login" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
      >
        Login
      </Link>
    </aside>
  );
};

export default Nav;
