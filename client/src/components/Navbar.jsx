import React from "react";

function Navbar() { //TO-DO Add Game Link and NavLink functionality
  return (
    <nav className="rounded-md bg-yellow-400  text-black-700 p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold ">PokéApp</div>
        <div>
          <a
            href="/home"
            className="px-4 hover:text-gray-200 text-lg font-bold"
          >
            Home
          </a>
          <a href="" className="px-4 hover:text-gray-200 text-lg font-bold">
            Pokédex
          </a>
          <a href="" className="px-4 hover:text-gray-200 text-lg font-bold">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
