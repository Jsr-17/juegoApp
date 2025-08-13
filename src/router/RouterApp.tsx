import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../views/HomePage/HomePage";
import { RazaPage } from "../views/RazasPage/RazaPage";
import { ClasePage } from "../views/ClasesPage/ClasePage";
import { MagiaPage } from "../views/MagiaPage/MagiaPage";
import { EstadisticasPage } from "../views/EstadisticasPage/EstadisticasPage";
import { HabilidadesPage } from "../views/HabilidadesPage/HabilidadesPage";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="/raza" element={<RazaPage></RazaPage>}></Route>
      <Route path="/clase" element={<ClasePage></ClasePage>}></Route>
      <Route
        path="/ExplicacionSobreMagia"
        element={<MagiaPage></MagiaPage>}
      ></Route>
      <Route path="/estadisticas" element={<EstadisticasPage></EstadisticasPage>}></Route>
      <Route path="/habilidades" element={<HabilidadesPage></HabilidadesPage>}></Route>

      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
