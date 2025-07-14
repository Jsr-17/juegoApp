import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../views/HomePage/HomePage";
import { RazaPage } from "../views/RazasPage/RazaPage";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/raza" element={<RazaPage></RazaPage>}></Route>

      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
