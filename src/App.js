import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FavoritesProvider } from "./Contexts/FavoritesContext.jsx";
import Root from "./Routes/Root.jsx";
import ErrorPage from "./Routes/Error.jsx";
import Home from "./Pages/Home.jsx";
import Search from "./Pages/Search.jsx";
import SongPage from "./Pages/SongPage.jsx";
import ArtistPage from "./Pages/ArtistPage.jsx";
import Favorites from "./Pages/Favorites.jsx";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "search",
          element: <Search />,
          children: [
          ]
        },
        {
          path: "artist",
          children : [
            {
              path: ":artistID",
              element: <ArtistPage />,
            },
          ]
        },
        {
          path: "song",
          children : [
            {
              path: ":songID",
              element: <SongPage/>,
            },
          ]
        },
        {
          path: "favorites",
          element: <Favorites/>
        },
      ],
    },
  ]);

  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  );
}

export default App;
