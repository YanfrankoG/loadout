import "./App.css";

import { Nav } from "./components/nav/Nav";
import { Dashboard } from "./components/dashboard/Dashboard";

import {
  Route,
  BrowserRouter,
  Routes,
  redirect,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { CodProduct } from "./screens/codScreen/CodProduct";
import { useEffect } from "react";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/cod",
      element: <CodProduct />,
    },
  ]);

  useEffect(() => {
    // console.log(useLocati            on());
  });

  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Test />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cod" element={<CodProduct />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};
