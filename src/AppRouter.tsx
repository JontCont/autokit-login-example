import React from "react";
import { RequireAuth } from "react-auth-kit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Secure from "./views/Secure";
import Login from "./views/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/secure"}
          element={
            <RequireAuth loginPath={"/login"}>
              <Secure />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
