import { useEffect, useMemo, useState } from "react";
import skillsAsesino from "../../assets/skills/skills_asesino.json";

// Tipos opcionales para mayor seguridad
type Skill = {
  nombre: string;
  descripcion: string;
  costo?: string;
  tipo: "activa" | "pasiva";
};
type SkillsPack = {
  base: Skill[];
  subclases: Record<string, Skill[]>;
  habilidadesUnicas: Skill[];
};

// ⬅️ IMPORTANTE: el JSON tiene la clave "Asesino" en la raíz
const skillsMapping: Record<string, SkillsPack> = {
  Asesino: (skillsAsesino as any).Asesino as SkillsPack,
  // Cuando tengas más clases, añade aquí:
  // Bardo: skillsBardo.Bardo,
  // ...
};

export const HabilidadesPage = () => {
  const clases = Object.keys(skillsMapping);
  const [claseSeleccionada, setClaseSeleccionada] = useState<string>(clases[0] ?? "");

  // Paquete de habilidades de la clase
  const pack: SkillsPack =
    skillsMapping[claseSeleccionada] ?? { base: [], subclases: {}, habilidadesUnicas: [] };

  // Subclases disponibles para la clase actual
  const subclases = useMemo(() => Object.keys(pack.subclases ?? {}), [pack]);

  const [subclaseSeleccionada, setSubclaseSeleccionada] = useState<string>(subclases[0] ?? "");

  // Si cambia la clase, resetea subclase al primer valor disponible
  useEffect(() => {
    setSubclaseSeleccionada(subclases[0] ?? "");
  }, [claseSeleccionada, subclases]);

  const habilidadesBase = pack.base ?? [];
  const habilidadesSubclase = pack.subclases?.[subclaseSeleccionada] ?? [];
  const habilidadesUnicas = pack.habilidadesUnicas ?? [];

  return (
    <section className="container my-5">
      <h1 className="mb-4 text-center fw-bold text-primary">🗡️ Habilidades</h1>

      {/* Selectores */}
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Clase</label>
          <select
            className="form-select shadow-sm"
            value={claseSeleccionada}
            onChange={(e) => setClaseSeleccionada(e.target.value)}
          >
            {clases.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Subclase</label>
          <select
            className="form-select shadow-sm"
            value={subclaseSeleccionada}
            onChange={(e) => setSubclaseSeleccionada(e.target.value)}
          >
            {subclases.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Habilidades base */}
      <div className="card shadow-lg border-0 mb-4">
        <div className="card-header bg-primary text-white">
          <strong>⚔️ Habilidades Base</strong>
        </div>
        <div className="card-body">
          {habilidadesBase.length === 0 ? (
            <div className="text-muted">No hay habilidades base.</div>
          ) : (
            <div className="row g-3">
              {habilidadesBase.map((hab, i) => (
                <div className="col-md-6" key={`base-${i}`}>
                  <div className="p-3 border rounded shadow-sm h-100">
                    <h6 className="mb-1 text-uppercase">{hab.nombre}</h6>
                    <div className="small mb-1">{hab.descripcion}</div>
                    {hab.tipo !== "pasiva" && (
                      <span className="badge bg-secondary">{hab.costo}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Habilidades de subclase */}
      <div className="card shadow-lg border-0 mb-4">
        <div className="card-header bg-dark text-white">
          <strong>🛡️ Habilidades de {subclaseSeleccionada || "—"}</strong>
        </div>
        <div className="card-body">
          {habilidadesSubclase.length === 0 ? (
            <div className="text-muted">No hay habilidades para esta subclase.</div>
          ) : (
            <div className="row g-3">
              {habilidadesSubclase.map((hab, i) => (
                <div className="col-md-6" key={`sub-${i}`}>
                  <div className="p-3 border rounded shadow-sm h-100">
                    <h6 className="mb-1 text-uppercase">
                      {hab.nombre} {hab.tipo === "pasiva" && (
                        <span className="badge bg-info text-dark ms-2">Pasiva</span>
                      )}
                    </h6>
                    <div className="small mb-1">{hab.descripcion}</div>
                    {hab.tipo !== "pasiva" && (
                      <span className="badge bg-secondary">{hab.costo}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Habilidades únicas */}
      <div className="card shadow-lg border-0">
        <div className="card-header bg-warning">
          <strong>🌟 Habilidades Únicas</strong>
        </div>
        <div className="card-body">
          {habilidadesUnicas.length === 0 ? (
            <div className="text-muted">Sin habilidades únicas.</div>
          ) : (
            <div className="row g-3">
              {habilidadesUnicas.map((hab, i) => (
                <div className="col-md-6" key={`uni-${i}`}>
                  <div className="p-3 border rounded shadow-sm h-100">
                    <h6 className="mb-1 text-uppercase">{hab.nombre}</h6>
                    <div className="small">{hab.descripcion}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
