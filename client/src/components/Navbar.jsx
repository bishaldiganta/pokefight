import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="rounded-md bg-yellow-300 text-black-700 p-3">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-xl font-bold mb-3 md:mb-0">PokéApp</div>
        <div className="flex justify-between w-full md:w-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 text-gray-800 hover:text-gray-500 text-xl font-bold bg-slate-50 opacity-80 rounded-lg "
                : "px-4 py-2 text-gray-800 hover:text-gray-500 text-xl font-bold"
            }
          >
            Pokédex
          </NavLink>
          <NavLink
            to="/game"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 text-gray-800 hover:text-gray-500 text-xl font-bold bg-slate-50 opacity-80 rounded-lg"
                : "px-4 py-2 text-gray-800 hover:text-gray-500 text-xl font-bold"
            }
          >
            Game
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
