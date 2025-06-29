import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // Add more routes here as needed
]);
export default router;
