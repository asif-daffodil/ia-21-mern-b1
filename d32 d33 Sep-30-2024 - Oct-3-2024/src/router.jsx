import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import AllPost from "./Pages/Post/AllPost";
import SinglePost from "./Pages/Post/SinglePost";
import EditPost from "./Pages/Post/EditPost";
import DeletePost from "./Pages/Post/DeletePost";
import AddNewPost from "./Pages/Post/AddNewPost";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/posts",
                element: <AllPost />,
            },
            {
                path: "/post/:id",
                element: <SinglePost />,
            },
            {
                path: "/add-post",
                element: <AddNewPost />,
            },
            {
                path: "/edit-post/:id",
                element: <EditPost />,
            },
            {
                path: "/delete-post/:id",
                element: <DeletePost />,
            }
        ],
    },
  ]);

export default router;