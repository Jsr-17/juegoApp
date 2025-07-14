import placeholderImg from "../../assets/Untitled.png";
import type { Clase } from "../../types/types";


const clases: Clase[] = [
    {
        nombre: "Asesino",
        descripcion:
            "Maestros del sigilo y la ejecución precisa, los Asesinos destacan por eliminar enemigos debilitados con letal eficacia. Especializados en infligir grandes cantidades de daño a objetivos individuales, dominan el arte del veneno y la sorpresa. Su presencia en combate puede inclinar la balanza en un solo golpe certero.",
        armas: ["Espada larga", "Espada corta", "Dagas", "Ballesta", "Cerbatanas"],
        subclases: [
            {
                nombre: "Asesino de las sombras",
                descripcion:
                    "Maestro del sigilo absoluto, este asesino se desliza entre las sombras como un susurro de muerte. Gana poder mientras permanece oculto, atacando en el momento preciso antes de desaparecer sin dejar rastro.",
                afinidad: "Sigilo, arte de las Sombras y el movimiento invisible",
            },
            {
                nombre: "Ilusionista",
                descripcion:
                    "Manipulador de la percepción, el Ilusionista crea espejismos y dobles fantasmales para confundir a sus enemigos. Mientras los rivales atacan a sombras vacías, él lanza golpes letales desde donde menos se lo esperan.",
                afinidad: "Ilusiónes, engaños visuales y confusión táctica",
            },
            {
                nombre: "Exprimidor de la Sangre",
                descripcion:
                    "Sediento de combate cercano, este asesino se alimenta de la sangre derramada. Absorbe vitalidad con cada golpe certero y esquiva con agilidad sobrenatural, prolongando su vida mientras sus enemigos caen exhaustos.",
                afinidad: "Absorción de vida, potenciación mediante sangre derramada",
                },
            {
                nombre: "Asesino de la pestilencia",
                descripcion:
                    "Un alquimista oscuro que domina venenos, toxinas y drogas. Contamina el campo de batalla con brebajes letales, debilitando y manipulando a sus víctimas antes de asestar el golpe final.",
                afinidad: "Venenos, toxinas, manipulación de enemigos mediante sustancias",
                },
        ],
    },
    {
        nombre: "Bardo",
        descripcion:
            "Portadores de melodías arcanas y narradores de hazañas inmortales, los Bardos canalizan la magia a través de sus instrumentos, conectando con el alma del mundo. Su música no solo inspira y fortalece a sus aliados, sino que también puede desatar un caos armónico sobre múltiples enemigos a la vez.\n\nExpertos tanto en el arte del apoyo como en la manipulación mágica del campo de batalla, los Bardos son tan impredecibles como fascinantes.",
        armas: ["Ballesta", "Daga", "Estoque", "Instrumento musical"],
        subclases: [
            {
                nombre: "Director de combate",
                descripcion:
                    "Con una batuta como canal de poder, este Bardo se convierte en el auténtico maestro del campo de batalla. Dirige a sus aliados como si de una orquesta se tratase, potenciando sus ataques, mejorando sus defensas y elevando sus capacidades curativas. Cada gesto de su batuta es una orden que fortalece, guía y transforma.",
                arma: "Batuta",
            },
            {
                nombre: "Armonía Celestial",
                descripcion:
                    "Virtuoso de las cuerdas y sanador del alma, este Bardo compone melodías capaces de restaurar la vida y purificar cuerpos corrompidos. Sus canciones elevan las estadísticas de sus aliados y disipan cualquier estado anormal, envolviéndolos en una sinfonía de protección y esperanza.",
                arma: "Instrumentos de cuerda",
            },
            {
                nombre: "Flautista del Caos",
                descripcion:
                    "Un canalizador del maná a través del sonido puro. Este Bardo invoca hechizos devastadores mediante partituras caóticas que se funden con el entorno mágico. Su flauta travesera es la única herramienta capaz de contener el poder desatado de sus composiciones. Cuando toca, la destrucción baila al ritmo de su música.",
                arma: "Flauta travesera",
            },
        ],
    },
    {
        nombre: "Caballero",
        descripcion:
            "Portadores de honor y fuerza, los Caballeros combinan la potencia bruta con la defensa impenetrable de su armadura. Ya sea empuñando grandes armas o canalizando poder mágico, esta clase destaca por su versatilidad en combate y su resistencia frente a cualquier amenaza. Son la primera línea, el escudo del grupo y, cuando es necesario, el filo que corta la oscuridad.",
        armas: ["Espada", "Lanza", "Escudo", "Gran escudo", "Espada larga"],
        subclases: [
            {
                nombre: "Caballero Santo",
                descripcion:
                    "Guerreros consagrados al bien, los Caballeros Santos canalizan la luz divina a través de sus armas y escudos. Dotados de milagros sagrados y encantamientos purificadores, se convierten en la pesadilla de las fuerzas oscuras. Su presencia impone justicia, y sus golpes iluminan el campo de batalla con el poder celestial.",
                afinidad: "Milagros, encantamientos sagrados, defensa contra el mal",
                },
            {
                nombre: "Caballero Pesado",
                descripcion:
                    "Verdaderas fortalezas andantes, los Caballeros Pesados portan las armaduras más impenetrables del reino. Sus encantamientos aumentan aún más su defensa, permitiéndoles devolver parte del daño recibido... incluso aquel que su imponente armadura ha absorbido por completo. No sufren penalización alguna por el peso, convirtiéndose en auténticas murallas humanas.",
                afinidad: "Defensa suprema, armaduras pesadas, contraataques mágicos",
            },
            {
                nombre: "Caballero del Caos",
                descripcion:
                    "Impulsados por una energía salvaje y arcana, estos caballeros abrazan la destrucción tanto mágica como física. Canalizan hechizos devastadores mientras potencian sus cuerpos para arrasar en el campo de batalla, ya sea contra grandes grupos o enemigos solitarios. Son la encarnación del poder sin control... o con demasiado.",
                afinidad: "Magia ofensiva, daño en área, fuerza potenciada",
            },
        ],
    },
    {
        nombre: "Espadachín",
        descripcion:
            "Artistas del combate cuerpo a cuerpo, los Espadachines elevan el uso del filo a un nivel casi espiritual. Con una precisión milimétrica y movimientos llenos de gracia, dominan el arte de la espada como una danza mortal. Ya sea empuñando una katana, una espada larga o dos hojas cortas, su poder no proviene de la fuerza, sino de la concentración, la técnica y el equilibrio interior.\n\nA diferencia de los guerreros, no confían en la brutalidad ni en armaduras pesadas. Tampoco recurren a la magia tradicional, sino que canalizan su ki: energía vital que embuye su cuerpo con maná y, a través del control de la respiración, les permite desatar habilidades tan rápidas como letales.",
        armas: ["Espada larga", "Katana", "Hojas cortas"],
        subclases: [
            {
                nombre: "7 Caminos",
                descripcion:
                    "Maestros de la disciplina marcial, estos espadachines han perfeccionado siete posturas ancestrales, cada una con un propósito distinto: debilitar al enemigo, potenciar su propio cuerpo o desatar ataques devastadores. Cambian entre estilos con fluidez, adaptándose al ritmo del combate como un río que nunca se detiene.",
                afinidad: "Posturas versátiles, control de estado, aumento de daño mediante técnicas depuradas",
                },
            {
                nombre: "Espada Elemental",
                descripcion:
                    "Estos guerreros fusionan su ki con la esencia de los elementos. Fuego, hielo, rayo o viento recorren sus hojas, permitiéndoles lanzar cortes elementales a distancia y potenciar sus ataques con efectos adicionales. Una danza de acero y naturaleza.",
                afinidad: "Ataques elementales, versatilidad ofensiva, daño a distancia",
                },
            {
                nombre: "Espada Certera",
                descripcion:
                    "Especialistas en la precisión letal, estos espadachines estudian la anatomía de sus enemigos para asestar golpes quirúrgicos. Al impactar en puntos vitales, pueden paralizar, desarmar o incluso incapacitar por completo a sus adversarios, todo con unos pocos movimientos bien calculados.",
                afinidad: "Críticos estratégicos, inutilización de enemigos, precisión quirúrgica"
            },
        ],
    },
    {
        nombre: "Arquero",
        descripcion:
            "Maestros del ataque a distancia, los Arqueros son expertos en desatar lluvias de flechas con una precisión y letalidad impresionantes. Entrenados para acertar en blancos a grandes distancias, utilizan sus recursos con extrema eficiencia, haciendo que cada disparo cuente y que sus enemigos caigan antes de acercarse.",
        armas: ["Espada corta", "Arco"],
        subclases: [
            {
                nombre: "Domador",
                descripcion:
                    "Forjadores de vínculos profundos con las criaturas salvajes del mundo, los Domadores no solo se comunican con los animales, sino que luchan junto a ellos como verdaderos compañeros de batalla. Utilizan las habilidades únicas de sus aliados naturales para controlar el terreno, hostigar enemigos y proteger a sus compañeros.",
                afinidad: "Control de criaturas, apoyo táctico, dominio de la naturaleza",
                },
            {
                nombre: "Flecha Elemental",
                descripcion:
                    "Guardianes de una antigua magia, estos arqueros imbuyen sus flechas con fuerzas elementales como fuego, hielo, viento, rayo o veneno. Cada disparo es una manifestación de poder mágico que altera la batalla, adaptándose a cualquier situación con precisión y devastación.",
                afinidad: "Ataques elementales, versatilidad mágica, control del campo de batalla",
            },
            {
                nombre: "Explorador",
                descripcion:
                    "Maestros del sigilo y la movilidad, los Exploradores son expertos en rastrear a sus presas, tender emboscadas y desplazarse sin ser detectados. Su profundo conocimiento del terreno y su puntería certera los convierten en la vanguardia silenciosa e indispensable de cualquier grupo.",
                afinidad: "Sigilo, rastreo, emboscadas, movilidad estratégica",
            },
        ],
    },
    {
        nombre: "Mago",
        descripcion:
            "Maestros de las artes arcanas, los Magos canalizan la energía del maná que fluye en el entorno para desatar poderosos ataques capaces de arrasar vastas formaciones enemigas. Al principio, sus hechizos requieren complejas fórmulas y concentración para ser invocados, pero con la práctica y la experiencia, su mente domina el arte, permitiéndoles lanzar sus conjuros con rapidez y sin necesidad de incantaciones.",
        armas: ["Báculos mágicos", "Daga", "Espada corta", "Catalizadores"],
        subclases: [
            {
                nombre: "Mago Elemental",
                descripcion:
                    "Especialistas en dominar un tipo específico de magia elemental, estos magos desatan hechizos que arrasan grandes áreas con un poder devastador. Su afinidad con el fuego, hielo, rayo u otros elementos los convierte en artífices de la destrucción elemental.",
                afinidad: "Daño masivo elemental, control de área, especialización elemental",
                },
            {
                nombre: "Hechicero",
                descripcion:
                    "Usuarios versátiles que canalizan su poder a través de grimorios cargados de hechizos devastadores. Pueden lanzar múltiples conjuros por combate según el número de grimorios y su maná disponible. Su eficacia depende de su afinidad mágica, siendo más poderosos si están en sintonía y más débiles si no.",
                afinidad: "Multiplicidad de hechizos, uso de grimorios, daño variable según afinidad",
                },
            {
                nombre: "Curandero",
                descripcion:
                    "Aunque su poder ofensivo es limitado, los Curanderos son vitales en cualquier batalla gracias a sus habilidades de sanación y resurrección. Pueden restaurar la vida y eliminar estados negativos de sus aliados, además de lanzar mejoras básicas que fortalecen al grupo.",
                afinidad: "Sanación, resurrección, soporte básico",
                },
            {
                nombre: "Invocador",
                descripcion:
                    "Dependiendo del tipo de maná que canalizan, los Invocadores pueden llamar a criaturas y entidades que luchan a su lado. Estas invocaciones aportan habilidades únicas y ayudan a cambiar el curso del combate.",
                afinidad: "Invocación de criaturas, control de aliados mágicos, versatilidad táctica",
            },
            {
                nombre: "Druida",
                descripcion:
                    "Con un profundo vínculo con la naturaleza, los Druidas pueden manipular el entorno a su favor y transformarse en animales que han derrotado. Su conexión con el mundo natural los convierte en guardianes y guerreros versátiles.",
                afinidad: "Control natural, transformación animal, adaptación al entorno",
            },
        ],
    },
    {
        nombre: "Artillero mágico",
        descripcion:
            "Fruto de la fusión entre la ciencia y la magia, los Artilleros Mágicos son magos que no dependen de la formulación verbal para canalizar su poder. En su lugar, emplean ingeniosos artilugios y dispositivos mágicos que potencian su capacidad destructiva, desatando ataques precisos y potentes a gran distancia.",
        armas: ["Pistola rúnica"],
        subclases: [
            {
                nombre: "Fusilero mágico",
                descripcion:
                    "Expertos en el manejo de armamento mágico avanzado, estos artilleros emplean rifles, escopetas y otras armas que disparan proyectiles cargados con piedras de maná o energía mágica. En el cañón de sus armas, un catalizador rúnico canaliza el poder para producir efectos devastadores y variados según la configuración.",
                afinidad: "Armas mágicas de largo alcance, proyectiles rúnicos, daño especializado",
                },
            {
                nombre: "Ingeniero mágico",
                descripcion:
                    "Genios de la tecnología arcana, estos artilleros construyen robots, drones y vehículos impulsados por piedras de maná e inscripciones rúnicas. Sus creaciones están programadas con habilidades únicas para apoyar en batalla, ya sea en combate directo o mediante asistencia estratégica.",
                afinidad: "Construcción de autómatas mágicos, soporte tecnológico, innovación táctica",
                },
        ],
    },
    {
        nombre: "Luchador",
        descripcion:
            "Guerreros orgullosos y disciplinados, los Luchadores confían únicamente en la fuerza bruta de sus puños y patadas. Para ellos, la magia es una debilidad que corrompe tanto el cuerpo como la mente, un concepto que rechazan con fervor. Su dominio del combate cuerpo a cuerpo es absoluto, haciendo uso de técnicas físicas depuradas y una resistencia implacable.",
        armas: ["Sin armas"],
        subclases: [
            {
                nombre: "Artista marcial",
                descripcion:
                    "Maestros de técnicas avanzadas, los Artistas Marciales dominan una amplia variedad de golpes, cadenas de ataques y bloqueos. Su entrenamiento les otorga habilidades y mejoras adicionales que elevan su destreza en el combate cuerpo a cuerpo a niveles excepcionales.",
                afinidad: "Técnicas avanzadas, combos, defensa mejorada",
            },
            {
                nombre: "Luchador espiritual",
                descripcion:
                    "Canalizando el poder del ki, estos luchadores lanzan potentes ráfagas energéticas que les permiten atacar a distancia. Además, desarrollan habilidades espirituales que perfeccionan su estilo y aumentan su versatilidad en combate.",
                afinidad: "Combate a distancia con ki, habilidades espirituales, versatilidad",
            },
            {
                nombre: "Luchador callejero",
                descripcion:
                    "Astutos y resilientes, los Luchadores Callejeros hacen lo que sea necesario para salir victoriosos. Se dice que poseen un extraño poder llamado “el guión”, que les permite imponerse en situaciones difíciles, logrando salirse con la suya contra todo pronóstico.",
                afinidad: "Improvisación, resistencia, supervivencia y astucia",
            },
        ],
    },
];


export const ClasePage = () => {
    return (
        <section className="container my-5">
            <h1 className="text-center mb-4">Listado de Clases y Subclases</h1>

            <div className="accordion" id="clasesAccordion">
                {clases.map((clase, index) => {
                    const collapseId = `collapse-${index}`;
                    const headingId = `heading-${index}`;

                    return (
                        <div className="accordion-item" key={clase.nombre}>
                            <h2 className="accordion-header" id={headingId}>
                                <button
                                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${collapseId}`}
                                    aria-expanded={index === 0 ? "true" : "false"}
                                    aria-controls={collapseId}
                                >
                                    {clase.nombre}
                                </button>
                            </h2>
                            <div
                                id={collapseId}
                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                aria-labelledby={headingId}
                                data-bs-parent="#clasesAccordion"
                            >
                                <div className="accordion-body">
                                    <p style={{ whiteSpace: "pre-line" }} >{clase.descripcion}</p>

                                    <h6>Armas permitidas:</h6>
                                    <ul>
                                        {clase.armas.map((arma, i) => (
                                            <li key={i}>{arma}</li>
                                        ))}
                                    </ul>

                                    <h6 className="mt-4">Subclases:</h6>
                                    <div className="row">
                                        {clase.subclases.map((subclase) => (
                                            <div key={subclase.nombre} className="col-md-6 col-lg-4 mb-4">
                                                <div className="card h-100">
                                                    <img
                                                        src={subclase.imagen || placeholderImg}
                                                        className="card-img-top"
                                                        alt={subclase.nombre}
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="card-title"><strong> {subclase.nombre} </strong></h5>
                                                        <p className="card-text">{subclase.descripcion}</p>
                                                        {subclase.arma && (
                                                            <p className="card-text">
                                                                <strong>Arma exclusiva:</strong> {subclase.arma}
                                                            </p>
                                                        )}
                                                        {subclase.afinidad && (
                                                            <p className="card-text">
                                                                <strong>Afinidades:</strong> {subclase.afinidad}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
