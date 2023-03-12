import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AccountsPage } from "@pages/Accounts";
import { CategoriesPage } from "@pages/Categories";
import { RootPage } from "@pages/Root";
import { SettingsPage } from "@pages/Settings";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "accounts",
        element: <AccountsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
