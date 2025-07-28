import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <section className="container py-5">
      <h1 className="text-center mb-4">Bienvenido a la web de Enflaryon</h1>

      <h3 className="text-center my-4">¿Como es la vida en este mundo?</h3>

      <div className="d-flex align-items-center justify-content-around">
        <div
          className="p-3 text-center mt-4 border border-3 border-info shadow-lg rounded"
          style={{ width: "85%" }}
        >
          <p className="fs-4">
            Enflaryon es un mundo de fantasía medieval donde la magia y la
            ciencia conviven en frágil armonía en ciertas regiones. Es una
            tierra marcada por la desigualdad, donde la riqueza y la pobreza
            dictan el estatus de los reinos y sus habitantes. La crueldad de los
            seres que viven se manifiesta con fuerza en cada rincón, haciendo de
            Enflaryon un lugar implacable. Sin embargo, aún existen aquellos que
            se oponen a este orden, decididos a romper las cadenas de la
            injusticia y cambiar el destino del mundo.
          </p>
          <p className="fs-4">
            Es un mundo donde los dioses y los dioses del caos están enfrascados
            en una guerra divina, de la cual los mortales ni siquiera tienen
            conocimiento. En este conflicto, el caos y la muerte ejercen cada
            vez más influencia sobre la vida mortal, mientras que la magia y el
            alma de los seres mantienen una conexión especial e íntima.{" "}
          </p>
        </div>
      </div>

      <div className="row mt-5 g-3 justify-content-center">
        <h4 className="text-center my-4">
          ¿Quieres saber más sobre este mundo ?
        </h4>
        <h5 className="text-center my-3">Visita los siguientes enlaces</h5>
        <div className="col-6 col-md-3">
          <Link to="raza" className="btn btn-info w-100">
            Razas
          </Link>
        </div>
        <div className="col-6 col-md-3">
          <Link to="clase" className="btn btn-info w-100">
            Clases
          </Link>
        </div>
        <div className="col-6 col-md-3">
          <Link to="habilidades" className="btn btn-info w-100">
            Habilidades y hechizos
          </Link>
        </div>

        <div className="col-6 col-md-3">
          <Link to="" className="btn btn-info w-100">
            Lugares
          </Link>
        </div>
        <div className="col-6 col-md-3">
          <Link to="ExplicacionSobreMagia" className="btn btn-info w-100">
            Los Secretos de la Magia: Cómo Funciona en Este Mundo
          </Link>
        </div>
        <div className="col-6 col-md-3">
          <Link to="estadisticas" className="btn btn-info w-100">
            Estadisticas de Clases
          </Link>
        </div>
      </div>
    </section>
  );
};
