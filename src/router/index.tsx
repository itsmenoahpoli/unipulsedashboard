import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/layouts";
import { SigninPage } from "@/pages/SigninPage";
import { Homepage } from "@/pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/home",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
