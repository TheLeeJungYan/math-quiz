import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import Layout from "@/components/Layout";
import Quiz from "./pages/Quiz";
export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
]);
