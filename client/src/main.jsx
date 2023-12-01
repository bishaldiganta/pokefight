import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
// Pages and components
import RootLayout from "./layout/RootLayout";
import PokeList from "./pages/PokeList";
import PokeDetails from "./pages/PokeDetails";

//Helper functions for the APIS
import getPokemons from "./api/pokemon";
import getSinglePokemon from "./api/pokeapi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PokeList />,
        index: true,
        loader: () => getPokemons(), // QUESTION do we even need to define the function in a seperate file?
      },
      {
        path: "/pokemon/:name",
        element: <PokeDetails />,
        index: true,
        loader: () => getSinglePokemon("charizard"), // QUESTION: how can I pass the name params to the loader function?
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
