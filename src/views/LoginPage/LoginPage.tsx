import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div
      className=" p-4  d-flex justify-content-center align-items-center"
      style={{ width: "100%", maxWidth: "800px", height: "600px" }}
    >
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              placeholder="Ingresa tu usuario"
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              required
            />
          </div>
          <button type="submit" className="btn btn-info w-100">
            Entrar
          </button>
          <small className="d-block text-center mt-3">
            ¿No tienes cuenta?{" "}
            <Link
              to="/auth/register"
              className="text-info text-decoration-none"
            >
              Crea una
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};
