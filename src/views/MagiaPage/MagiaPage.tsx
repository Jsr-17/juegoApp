export const MagiaPage = () => {
  return (
    <section className="container py-5 fs-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-gradient mb-3">La Magia</h1>
            <div
              className="border-bottom border-3 border-primary mx-auto"
              style={{ width: "100px" }}
            ></div>
          </div>

          <article className="mb-5 p-4 bg-light rounded-4 shadow-sm">
            <h2 className="text-center mb-4 fw-bold text-primary">
              ¿Qué es la magia en este mundo?
            </h2>
            <div className="px-lg-4">
              <p className="lead">
                En este mundo, la magia está presente en todos los seres vivos.
                Su funcionamiento se basa en el alma: cuanto más poderosa sea el
                alma de un individuo, mayor será su capacidad para sintetizar el
                maná, ya sea el que emana de su interior o el que extrae del
                entorno.
              </p>
              <p>
                El alma actúa como el núcleo del control mágico, siendo la
                responsable tanto del uso interno del maná —como la generación
                de energía vital, ki o maná propio— como de la recolección de
                maná externo, proveniente de la naturaleza o incluso de otros
                usuarios. Cuanto mayor sea la fuerza del alma, mayor será su
                dominio sobre estas fuentes de poder.
              </p>
            </div>
          </article>

          <article
            className="mb-5 p-4 rounded-4 shadow-sm"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <h3 className="mb-4 text-center fw-bold text-danger">
              ¿De dónde proviene el maná?
            </h3>
            <div className="px-lg-4">
              <p>
                En este mundo existen varios planos de existencia. El primero y
                más bajo es el{" "}
                <strong className="text-dark">Plano Mundano</strong>, el lugar
                donde habitan los seres vivos, se alzan los reinos, florecen las
                familias y se extiende la naturaleza.
              </p>
              <p>
                Por encima de este se encuentra un plano más elevado y divino,
                donde residen aquellos que han trascendido la vida y la muerte.
                Son almas que, ya sea por alcanzar grandes hitos o por superar
                los límites del poder convencional, han evolucionado más allá de
                lo terrenal. Este plano es el hogar tanto de las fuerzas del
                bien —aliadas del Reino de los Dioses— como de los demonios,
                seres que empuñan la magia del caos.
              </p>
              <div className="my-4 p-3 bg-dark text-white rounded-3">
                <p className="mb-0">
                  Por último, existe el plano más alto y esencial: el{" "}
                  <strong className="text-info">Plano del Ethereum</strong>, la
                  manifestación pura de la magia. Cuando un ser muere, su alma
                  retorna al Ethereum, donde su energía es deshilada y
                  purificada, convirtiéndose de nuevo en maná que regresa al
                  mundo terrenal, completando así un ciclo eterno.
                </p>
              </div>
              <p>
                Este proceso es guiado por entidades conocidas como{" "}
                <strong className="text-dark">Avatares</strong>, guardianes del
                equilibrio mágico. Sin embargo, en los últimos siglos, este
                equilibrio se ha visto profundamente alterado.
              </p>
              <div className="alert alert-warning mt-4">
                <p className="mb-0">
                  Hoy en día, existen dos formas de maná: el{" "}
                  <strong>maná puro</strong> y el <strong>maná del caos</strong>
                  . Este último es una energía corrupta que degrada el alma,
                  conduciendo a los usuarios por caminos tentadores que otorgan
                  poder rápidamente, pero a costa de romper la armonía natural.
                </p>
              </div>
            </div>
          </article>

          <article className="mb-5 p-4 bg-dark text-white rounded-4 shadow">
            <h3 className="mb-4 text-center fw-bold text-warning">
              ¿Por qué es tan peligroso el maná del caos?
            </h3>
            <div className="px-lg-4">
              <p>
                Debe existir un equilibrio de poder. Cuando la balanza se
                inclina hacia un solo lado, el mundo comienza a desmoronarse.
              </p>

              <div className="row mt-4">
                <div className="col-md-6 mb-3">
                  <div className="p-3 h-100 bg-danger bg-opacity-25 rounded-3">
                    <h4 className="text-center text-warning">
                      Si el bien desaparece
                    </h4>
                    <p className="mb-0">
                      El mal predomina, trayendo consigo guerras sin sentido,
                      plagas devastadoras y la muerte de miles. El caos consume
                      cada vez más almas, corrompiéndolas y sometiéndolas a su
                      voluntad.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="p-3 h-100 bg-success bg-opacity-25 rounded-3">
                    <h4 className="text-center text-success">
                      Si el mal desaparece
                    </h4>
                    <p className="mb-0">
                      Nadie moriría, causando sobrepoblación, agotamiento de
                      recursos, estancamiento de la ambición. El Ethereum
                      dejaría de evolucionar, pues las almas ya no tendrían
                      motivos para fortalecerse.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-secondary bg-opacity-25 rounded-3">
                <p className="mb-0 lead">
                  Tanto la luz como la oscuridad cumplen un propósito. Solo en
                  la tensión entre ambas fuerzas puede existir un ciclo de vida,
                  muerte y renacimiento que permita el crecimiento del mundo y
                  de las almas que lo habitan.
                </p>
              </div>
            </div>
          </article>

          <article className="mb-5 p-4 bg-light rounded-4 shadow-sm">
            <h3 className="mb-4 text-center fw-bold text-primary">
              ¿Cómo se originó el maná y el maná del caos?
            </h3>
            <div className="px-lg-4">
              <p>
                En el principio no existía nada. Solo los{" "}
                <strong>Avatares</strong>, entidades primordiales creadas por el
                Ethereum, vagaban a través de su dimensión pura, sin tiempo ni
                forma.
              </p>

              <div className="my-4 p-3 bg-primary bg-opacity-10 border-start border-4 border-primary">
                <p className="mb-0">
                  Hasta que un día, una chispa inesperada encendió una explosión
                  dentro del propio Ethereum. De aquel estallido nacieron dos
                  seres conscientes, y con ellos, una nueva dimensión.
                </p>
              </div>

              <p>
                Estos dos seres pronto se enfrentaron. Mientras uno deseaba
                comprender y canalizar el poder del Ethereum, el otro se dejó
                dominar por la envidia y el deseo de poseerlo sin límites. Ambos
                crearon sus propios dominios para experimentar con este poder.
              </p>

              <div className="row mt-4">
                <div className="col-md-6 mb-3">
                  <div className="p-3 h-100 bg-white rounded-3 shadow-sm">
                    <h5 className="text-center text-success">El Primer Ser</h5>
                    <p className="mb-0">
                      Compartió su saber, generando seres a partir de su
                      esencia, infundiéndoles armonía con el maná que fluía del
                      entorno. Estos seres florecieron, sabios y sensibles al
                      equilibrio.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="p-3 h-100 bg-white rounded-3 shadow-sm">
                    <h5 className="text-center text-danger">El Segundo Ser</h5>
                    <p className="mb-0">
                      Consumido por la amargura, comenzó a corromper a las
                      nuevas formas de vida. No creaba para enseñar, sino para
                      someter. Su rabia y envidia se condensaron en un maná
                      oscuro, impuro.
                    </p>
                  </div>
                </div>
              </div>

              <div className="alert alert-danger mt-4">
                <p className="mb-0">
                  Y entonces ocurrió lo impensable:{" "}
                  <strong>algunos Avatares comenzaron a corromperse</strong>. El
                  contacto constante con el maná oscuro debilitó su esencia, y
                  aquellos que alguna vez fueron guías del equilibrio, se
                  convirtieron en siervos del caos.
                </p>
              </div>
            </div>
          </article>

          <article
            className="mb-5 p-4 rounded-4 shadow"
            style={{ backgroundColor: "#e9ecef" }}
          >
            <h3 className="mb-4 text-center fw-bold">
              ¿Cómo se usa el maná en el uso de las habilidades o hechizos?
            </h3>
            <div className="px-lg-4">
              <p>
                Ya hemos hablado del origen del maná y del alma como su
                contenedor esencial. Sin embargo, para transformar esa energía
                en un hechizo o habilidad concreta, es necesario un tercer
                elemento: el <strong>catalizador</strong>.
              </p>

              <div className="my-4">
                <div className="card border-0 shadow-sm mb-3">
                  <div className="card-header bg-primary text-white fw-bold">
                    La Mente como Catalizador
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      Este catalizador no es un objeto externo, sino una
                      facultad interna: la <strong>mente</strong>. La voluntad,
                      la concentración y, sobre todo, el conocimiento, permiten
                      moldear el maná en formas útiles.
                    </p>
                  </div>
                </div>

                <div className="card border-0 shadow-sm mb-3">
                  <div className="card-header bg-info text-white fw-bold">
                    Artefactos Arcanotécnicos
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      Existen sabios que diseñan{" "}
                      <strong>artefactos arcanotécnicos</strong>: armas,
                      máquinas e instrumentos que convierten el maná en fuerza
                      bruta, tecnología avanzada o herramientas de guerra.
                    </p>
                  </div>
                </div>

                <div className="card border-0 shadow-sm mb-3">
                  <div className="card-header bg-success text-white fw-bold">
                    Uso Corporal del Maná
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      También están aquellos que usan el maná de forma
                      instintiva, canalizándolo directamente a través de su
                      cuerpo para reforzar sus músculos, aumentar su velocidad o
                      sanar sus heridas.
                    </p>
                  </div>
                </div>

                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-purple text-white fw-bold">
                    El Poder de la Fe
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      Hay quienes obtienen su poder a través de la{" "}
                      <strong>fe</strong>. Al encomendar su alma a un dios o
                      entidad superior, reciben fragmentos de conocimiento y
                      acceso a formas únicas de maná.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white rounded-3 shadow-sm">
                <p className="mb-0 lead text-center">
                  Existen muchos caminos para alcanzar el poder mágico. ¿Cuál
                  camino seguirás tú?
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const styles = `
  .text-gradient {
    background: linear-gradient(to right, #4e54c8, #8f94fb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .bg-purple {
    background-color: #6f42c1;
  }
  .border-primary {
    border-color: #4e54c8 !important;
  }
`;

const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
