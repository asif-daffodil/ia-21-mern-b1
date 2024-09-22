import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import User from "./Pages/User";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
          path: "/about/:name",
          element: <About />
        },
        {
          path: "/user",
          element: <User />
        }
      ],
    },
  ]);

export default router;