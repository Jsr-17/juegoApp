import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../views/HomePage/HomePage";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>

      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
