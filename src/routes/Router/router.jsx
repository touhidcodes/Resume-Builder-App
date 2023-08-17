import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home/Home";
import ResumeBuilder from "../../pages/ResumeBuilder/ResumeBuilder";
import Template2 from "../../utilities/Templates/Template2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "resume/:id",
    element: <ResumeBuilder />,
  },
  {
    path: "template",
    element: <Template2 />,
  },
]);
export default router;
