import React, { createContext, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import BaseLayout from "./layouts/BaseLayout";
import {
  Outlet,
  RouterProvider,
  createHashRouter,
  useNavigate,
} from "react-router-dom";
import EditorSection from "./pages/sections/EditorSection";
import DrawnSection from "./pages/sections/DrawnSection";
import NavBar from "./components/NavBar";

export const SectionContext = createContext("editor");

export default function App() {
  const navigator = useNavigate();
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPath("editor");
    navigator("editor");
  }, []);

  function onChange(value: string) {
    setCurrentPath(value);
    navigator(value);
  }

  return (
    <BaseLayout>
      <NavBar onChange={onChange} />
      <HomePage>
        <SectionContext.Provider value={currentPath}>
          <Outlet />
        </SectionContext.Provider>
      </HomePage>
    </BaseLayout>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "editor",
        element: <EditorSection />,
      },
      {
        path: "whiteboard",
        element: <DrawnSection />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("app"));
root.render(<RouterProvider router={router} />);
