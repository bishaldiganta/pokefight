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
            className="px-4 hover:text-gray-200 text-lg font-bold"
          >
            Pokédex
          </NavLink>
          <NavLink to="/game" className="px-4 hover:text-gray-200 text-lg font-bold">
            Game
          </NavLink>
          <NavLink to="" className="px-4 hover:text-gray-200 text-lg font-bold">
            Leaderboard
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
