import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-20 py-4 bg-white drop-shadow">
      <Link to="/"><h2 className="text-xl font-medium hover:text-slate-500">Task Manager</h2></Link>
      <ul className="flex gap-10 text-xl font-medium">
        <Link to="/users"> <li className="hover:text-slate-500">Users</li></Link>
        <Link to="/tasks"> <li className="hover:text-slate-500">Tasks</li></Link>
      </ul>
    </nav>
  );
};

export default Header;
