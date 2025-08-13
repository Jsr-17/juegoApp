import { useState } from "react";
import statsAsesino from "../../assets/stats/stats_asesino.json";
import statsBardo from "../../assets/stats/stats_bardo.json";
import statsCaballero from "../../assets/stats/stats_caballero.json";
import statsArquero from "../../assets/stats/stats_arquero.json";
import statsMago from "../../assets/stats/stats_mago.json";
import statsArtillero from "../../assets/stats/stats_artillero.json";
import statsLuchador from "../../assets/stats/stats_luchador.json";

const statsMapping: { [key: string]: any } = {
  Asesino: statsAsesino,
  Bardo: statsBardo,
  Caballero: statsCaballero,
  Arquero: statsArquero,
  Mago: statsMago,
  Artillero: statsArtillero,
  Luchador: statsLuchador,
};

export const EstadisticasPage = () => {
  const clases = Object.keys(statsMapping);
  const [claseSeleccionada, setClaseSeleccionada] = useState<string>(clases[0]);

  const subclasesData = statsMapping[claseSeleccionada];
  const subclaseKeys = Object.keys(subclasesData);
  const [subclaseSeleccionada, setSubclaseSeleccionada] = useState<string>(
    subclaseKeys[0]
  );

  const nivelesData = subclasesData[subclaseSeleccionada];
  const [nivelSeleccionado, setNivelSeleccionado] = useState<number>(
    nivelesData[0]?.nivel || 0
  );

  const registroNivel = nivelesData.find(
    (r: any) => r.nivel === nivelSeleccionado
  );

  return (
    <section className="container my-5">
      <h1 className="mb-4 text-center fw-bold text-primary">
        📊 Estadísticas de Clases
      </h1>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <label className="form-label fw-semibold">Clase</label>
          <select
            className="form-select shadow-sm"
            value={claseSeleccionada}
            onChange={(e) => {
              const nuevaClase = e.target.value;
              setClaseSeleccionada(nuevaClase);
              const nuevasSubclases = Object.keys(statsMapping[nuevaClase]);
              setSubclaseSeleccionada(nuevasSubclases[0]);
              const nuevosNiveles =
                statsMapping[nuevaClase][nuevasSubclases[0]];
              setNivelSeleccionado(nuevosNiveles[0]?.nivel || 0);
            }}
          >
            {clases.map((clase) => (
              <option key={clase} value={clase}>
                {clase}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label fw-semibold">Subclase</label>
          <select
            className="form-select shadow-sm"
            value={subclaseSeleccionada}
            onChange={(e) => {
              const nuevaSub = e.target.value;
              setSubclaseSeleccionada(nuevaSub);
              const nuevosNiveles = statsMapping[claseSeleccionada][nuevaSub];
              setNivelSeleccionado(nuevosNiveles[0]?.nivel || 0);
            }}
          >
            {subclaseKeys.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label fw-semibold">Nivel</label>
          <select
            className="form-select shadow-sm"
            value={nivelSeleccionado}
            onChange={(e) => setNivelSeleccionado(Number(e.target.value))}
          >
            {nivelesData.map((nivelObj: any) => (
              <option key={nivelObj.nivel} value={nivelObj.nivel}>
                {nivelObj.nivel}
              </option>
            ))}
          </select>
        </div>
      </div>

      {registroNivel && (
        <div className="card shadow-lg border-0">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">
              {subclaseSeleccionada}{" "}
              <span className="badge bg-light text-dark">
                Nivel {registroNivel.nivel}
              </span>
            </h4>
          </div>
          <div className="card-body">
            <div className="row g-3">
              {Object.entries(registroNivel)
                .filter(([key]) => key !== "nivel" && key.toLowerCase() !== "total")
                .map(([key, value]) => (
                  <div className="col-6 col-md-4" key={key}>
                    <div className="p-3 border rounded text-center shadow-sm h-100">
                      <h6 className="text-muted text-uppercase small mb-1">
                        {key.replace("_", " ")}
                      </h6>
                      <span className="fs-5 fw-bold text-primary">{String(value)}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="card-footer bg-light text-center fw-bold">
            ⭐ Total: {registroNivel.total || registroNivel.Total}
          </div>
        </div>
      )}
    </section>
  );
};
