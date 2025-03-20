import { createBrowserRouter, Navigate } from "react-router-dom";
import { SigninPage } from "@/pages/SigninPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
]);

export default router;
