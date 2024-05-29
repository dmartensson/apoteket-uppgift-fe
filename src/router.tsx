import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import { InstructionsPage } from "./pages/instructions/Instructions";
import { ProductsPage } from "./pages/products/ProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/instructions",
    element: <InstructionsPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
]);
