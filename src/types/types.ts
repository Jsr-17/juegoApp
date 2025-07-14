type Subclase = {
  nombre: string;
  descripcion: string;
  imagen?: string;
  arma?: string; 
  afinidad?: string;
};

type Clase = {
  nombre: string;
  descripcion: string;
  armas: string[];
  subclases: Subclase[];
};

export type { Subclase, Clase };