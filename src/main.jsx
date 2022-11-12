import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotesProvider from "./context/NoteContext";
import EditNote from "./components/editNotes/EditNote";
import AddNote from "./components/addnotes/AddNotes";
import ErrorPage from "./components/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: "EditNote/:noteID",
        element: <EditNote />,
      },
      {
        path: "AddNote/:noteColor",
        element: <AddNote />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  </React.StrictMode>
);
