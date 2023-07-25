import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home/Home";
import BuilderLayout from "../../layouts/BuilderLayout/BuilderLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "resume/:id",
        element: <BuilderLayout />,
      },
    ],
  },
]);
export default router;
