import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";

import Foods from "./routes/Foods";
import Meals from "./routes/Meals";
import Progress from "./routes/Progress";
import Options from "./routes/Options";
import Dashboard from "./routes/Dashboard";

const router = createBrowserRouter([
  {
    path: "/escale-app/",
    element: <Root />,
    errorElement: <div>error</div>,
    children: [
      { path: "Dashboard", element: <Dashboard /> },
      { path: "foods", element: <Foods /> },
      { path: "meals", element: <Meals /> },
      { path: "progress", element: <Progress /> },
      { path: "options", element: <Options /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
