import { useState } from "react";
import statsAsesino from "../../assets/stats/stats_asesino.json";
import statsBardo from "../../assets/stats/stats_bardo.json";
import statsCaballero from "../../assets/stats/stats_caballero.json";
import statsArquero from "../../assets/stats/stats_arquero.json";
import statsMago from "../../assets/stats/stats_mago.json";
import statsArtillero from "../../assets/stats/stats_artillero.json";
import statsLuchador from "../../assets/stats/stats_luchador.json";

// Mapeamos cada clase con su respectivo JSON
const statsMapping: { [key: string]: any } = {
    Asesino:   statsAsesino,
    Bardo:     statsBardo,
    Caballero: statsCaballero,
    Arquero:   statsArquero,
    Mago:      statsMago,
    Artillero: statsArtillero,
    Luchador:  statsLuchador,
};

export const EstadisticasPage = () => {
  // Obtenemos la lista de clases disponibles (por ahora solo "Asesino")
  const clases = Object.keys(statsMapping);
  const [claseSeleccionada, setClaseSeleccionada] = useState<string>(clases[0]);

  // Para la clase seleccionada, los datos están organizados en subclases (llaves)
  const subclasesData = statsMapping[claseSeleccionada];
  const subclaseKeys = Object.keys(subclasesData);
  const [subclaseSeleccionada, setSubclaseSeleccionada] = useState<string>(
    subclaseKeys[0]
  );

  // Los niveles disponibles son los objetos del array correspondiente a la subclase
  const nivelesData = subclasesData[subclaseSeleccionada]; // Array de objetos
  // Por defecto usamos el primer nivel; nota: asumimos que "nivel" es numérico en el JSON
  const [nivelSeleccionado, setNivelSeleccionado] = useState<number>(
    nivelesData[0]?.nivel || 0
  );

  // Buscamos el objeto de estadísticas para el nivel seleccionado
  const registroNivel = nivelesData.find(
    (r: any) => r.nivel === nivelSeleccionado
  );

  return (
    <section className="container my-5">
      <h1 className="mb-4 text-center">
        Estadísticas de Clase, Subclase y Nivel
      </h1>

      <div className="row mb-4">
        {/* Selector de Clase */}
        <div className="col-md-4">
          <label className="form-label">Clase:</label>
          <select
            className="form-select"
            value={claseSeleccionada}
            onChange={(e) => {
              const nuevaClase = e.target.value;
              setClaseSeleccionada(nuevaClase);
              // Al cambiar de clase actualizamos la subclase y el nivel por defecto
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

        {/* Selector de Subclase */}
        <div className="col-md-4">
          <label className="form-label">Subclase:</label>
          <select
            className="form-select"
            value={subclaseSeleccionada}
            onChange={(e) => {
              const nuevaSub = e.target.value;
              setSubclaseSeleccionada(nuevaSub);
              // Actualizamos nivel al cambiar de subclase
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

        {/* Selector de Nivel */}
        <div className="col-md-4">
          <label className="form-label">Nivel:</label>
          <select
            className="form-select"
            value={nivelSeleccionado}
            onChange={(e) =>
              setNivelSeleccionado(Number(e.target.value))
            }
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
        <div className="card shadow">
          <div className="card-body">
            <h4 className="card-title">
              {subclaseSeleccionada} - Nivel {registroNivel.nivel}
            </h4>
            <ul className="list-group list-group-flush mb-3">
              {Object.entries(registroNivel)
                .filter(([key]) => key !== "nivel" && key !== "Total")
                .map(([key, value]) => (
                  <li key={key} className="list-group-item">
                    {key}: {String(value)}
                  </li>
                ))}
              <li className="list-group-item">
                <strong>Total: {registroNivel.Total}</strong>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};
