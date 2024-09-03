import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProductDetail from "./pages/ProductDetail";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/mainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
