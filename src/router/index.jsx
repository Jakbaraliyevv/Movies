// import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/home";
// import MovieDetail from "../components/MovieDetail";

// const root = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },

//   {
//     // path: "/movies",
//     path: "/movies/:id",
//     element: <MovieDetail />,
//   },
// ]);

// export default root;

import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout"; // Layout yaratgan bo'lishingiz kerak
import Home from "../pages/home";
import MovieDetail from "../components/MovieDetail";
import AllCard_movie from "../components/all-movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/movies/:id",
    element: (
      <Layout>
        <MovieDetail />
      </Layout>
    ),
  },
  {
    path: "/all-movies",
    element: (
      <Layout>
        <AllCard_movie />
      </Layout>
    ),
  },
]);

export default router;
