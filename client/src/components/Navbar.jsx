import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  //TO-DO Add Game Link and NavLink functionality
  return (
    <nav className="rounded-md bg-yellow-400  text-black-700 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold ">PokéApp</div>
        <div>
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
          <NavLink
            to="/leaderboard"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 text-gray-800 hover:text-gray-500 text-xl font-bold bg-slate-50 opacity-80 rounded-lg"
                : "px-4 py-2 text-gray-800 hover:text-gray-500 text-xl font-bold"
            }
          >
            Leaderboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
