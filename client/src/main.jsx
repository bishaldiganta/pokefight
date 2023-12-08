import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
// Pages and components
import RootLayout from "./layout/RootLayout";
import PokeList from "./pages/PokeList";
import PokeDetails from "./pages/PokeDetails";

//Helper functions for the APIS
import { getPokemons, getAllPokemons } from "./api/pokemon";
import getSinglePokemon from "./api/pokeapi";
import { getPokeCards } from "./api/tcgapi.js";
import GameTest from "./components/GameTest.jsx";
import Modal from "react-modal";
import WinningPage from "./pages/WinningPage";
import LosingPage from "./pages/LosingPage";
import Leaderboard from "./pages/Leaderboard";

Modal.setAppElement("#root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        path: "/",
        element: <PokeList />,
        index: true,
        loader: getPokemons,
      },
      {
        path: "/pokemon/:name",
        element: <PokeDetails />,
        loader: getPokeCards,
      },
      {
        path: "/game",
        element: <GameTest />,
      },
      {
        path: "/game/win",
        element: <WinningPage />,
      },
      {
        path: "/game/lose",
        element: <LosingPage />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
        loader: getAllPokemons,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
