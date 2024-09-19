import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";

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
            element: <h1>About</h1>
        }
      ],
    },
  ]);

export default router;