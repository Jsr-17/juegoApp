import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div
      className="p-4 d-flex justify-content-center align-items-center"
      style={{ width: "100%", maxWidth: "800px", height: "600px" }}
    >
      <div style={{ width: "100%", maxWidth: "800px" }}>
        <h2 className="text-center mb-4">Registro</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Nombre de Usuario</label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              placeholder="Ingresa tu nombre de usuario"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Crea una contraseña"
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Repite tu contraseña"
              required
            />
          </div>
          <button type="submit" className="btn btn-info w-100">
            Registrarse
          </button>
          <small className="d-block text-center mt-3">
            ¿Ya tienes cuenta?{" "}
            <Link to="/auth/login" className="text-info text-decoration-none">
              Inicia sesión
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};
