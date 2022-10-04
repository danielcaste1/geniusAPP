import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./Routes/Root.jsx";
import ErrorPage from "./Routes/Error.jsx";
import Home from "./Pages/Home.jsx";
import Search from "./Pages/Search.jsx";
import SongPage from "./Pages/SongPage.jsx";
import ArtistPage from "./Pages/ArtistPage.jsx";

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
      ],
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
