import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../views/HomePage/HomePage";
import { RazaPage } from "../views/RazasPage/RazaPage";
<<<<<<< HEAD
=======
import { ClasePage } from "../views/ClasesPage/ClasePage";
>>>>>>> 382268975a0564b085467b14ae2528fe74f668ad

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/raza" element={<RazaPage></RazaPage>}></Route>
      <Route path="/clase" element={<ClasePage></ClasePage>}></Route>

      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
