import ImageCarousel from "../Components/ImageCarousel";

import "../style.css";

export const RazaPage = () => {
  const imagesDraconoid = Object.values(
    import.meta.glob("../../assets/razasImage/draconoids/*.png", {
      eager: true,
      import: "default",
    })
  ) as string[];
  const imagesBestias = Object.values(
    import.meta.glob("../../assets/razasImage/bestia/*.png", {
      eager: true,
      import: "default",
    })
  ) as string[];
  const imagesRockalfef = Object.values(
    import.meta.glob("../../assets/razasImage/rockalfef/*.png", {
      eager: true,
      import: "default",
    })
  ) as string[];

  const imagesVamp = Object.values(
    import.meta.glob("../../assets/razasImage/vampyr/*.png", {
      eager: true,
      import: "default",
    })
  ) as string[];
  const imagesHumanos = Object.values(
    import.meta.glob("../../assets/razasImage/bestia/*.png", {
      eager: true,
      import: "default",
    })
  ) as string[];
  const imagesEnanum = Object.values(
    import.meta.glob("../../assets/razasImage/enanum/*.png", {
      eager: true,
      import: "default",
    })
  ) as string[];
  const imagesOrcus = Object.values(
    import.meta.glob("../../assets/razasImage/orcus/*.png", {
      eager: true,
      import: "default",
    })
  ) as string[];
  const imagesZhyrakim = Object.values(
    import.meta.glob("../../assets/razasImage/zhyrakim/*.png", {
      eager: true,
      import: "default",
    })
  ) as string[];
  const imagesVek = Object.values(
    import.meta.glob("../../assets/razasImage/vek'Thar/*.png", {
      eager: true,
      import: "default",
    })
  ) as string[];
  const imagesReinos = Object.values(
    import.meta.glob("../../assets/razasImage/bestia/*.png", {
      eager: true,
      import: "default",
    })
  ) as string[];

  return (
    <section className="d-flex flex-column container-fluid">
      <h1 className="my-3 text-center my-5">
        Listado de las razas y stats base
      </h1>
      <div className="d-flex flex-column">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-12">
              <div className="card-body">
                <h5 className="card-title text-center">Draconoids</h5>
                <div className="card-text fs-5">
                  <p>
                    Cuentan las leyendas que algunos dragones trascendieron el
                    conocimiento al entrar en contacto con la{" "}
                    <strong>diosa del saber</strong>. Como resultado, adoptaron
                    una forma bípeda conocida como <strong>Draconoids</strong>.
                  </p>

                  <p>
                    Poseen <strong>fuerza sobrehumana</strong> y la capacidad de
                    controlar un único elemento desde su nacimiento:{" "}
                    <em>fuego</em>, <em>hielo</em> o <em>tierra</em>. Existen
                    registros de algunos individuos capaces de emplear{" "}
                    <em>magia sagrada</em> o de <em>oscuridad</em>, aunque su
                    compatibilidad general con la magia es limitada.
                  </p>

                  <p>
                    Son una raza <strong>polivalente</strong>, capaz de
                    adaptarse con facilidad a diversos entornos. Se rumorea que
                    mantienen cierta conexión con los demonios.
                  </p>

                  <p>
                    Su sociedad se organiza en una{" "}
                    <strong>jerarquía racial</strong>: los más cercanos a los
                    dragones son aristócratas, mientras que los más próximos a
                    los humanos suelen ser esclavizados (dentro de su propio
                    reino).
                  </p>

                  <p>
                    <strong>Subrazas:</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Draconoid Puro:</strong> Bípedos de más de tres
                      metros de altura, con escamas resistentes y grandes
                      cuernos que reflejan su estatus social. Cuando un noble
                      pierde un combate, debe <em>limar sus cuernos</em> en
                      señal de derrota.
                    </li>
                    <li>
                      <strong>Draconoid Mixto:</strong> Resultado de la
                      hibridación con otras razas. Tienen mayor compatibilidad
                      mágica y, en algunos casos, una fuerza superior a la de
                      los draconoids puros. Son la <em>clase trabajadora</em> de
                      su sociedad.
                    </li>
                    <li>
                      <strong>Draconoid Humanoide:</strong> Han perdido gran
                      parte de su sangre dracónica y son utilizados como
                      esclavos por draconoids aristócratas y humanos
                      esclavistas, debido al valor de su sangre en pociones
                      avanzadas. Aunque no suelen tener magia útil para el
                      combate, hay leyendas de algunos con habilidades
                      excepcionales, aunque la nobleza las desmiente.
                    </li>
                  </ul>
                  <div className="container col-6 my-3">
                    <ImageCarousel
                      images={imagesDraconoid}
                      name="draconoides"
                    ></ImageCarousel>
                  </div>

                  <p>
                    <strong>Sociedad Draconoid:</strong> Su nobleza no se basa
                    en linajes, sino en la fuerza y la estrategia del líder
                    familiar. Al morir el rey, se organizan{" "}
                    <em>combates rituales</em> para determinar al nuevo
                    gobernante. Son una cultura amante del conocimiento, con una
                    economía y sociedad abiertas, pero profundamente respetuosos
                    de sus tradiciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card my-3">
          <div className="row g-0">
            <div className="col-md-12">
              <div className="card-body">
                <h5 className="card-title text-center">Rockalfef</h5>
                <div className="card-text fs-5">
                  <div className="card-text">
                    <p>
                      Parecen <strong>gólems evolucionados</strong>, formados
                      por piedras o materiales que reflejan la{" "}
                      <em>afinidad elemental de su núcleo</em>. Aunque suelen
                      ser <strong>tímidos y solitarios</strong>, poseen una
                      fuerza y resistencia excepcionales.
                    </p>

                    <p>
                      No utilizan magia convencional: en su lugar, controlan
                      directamente el{" "}
                      <strong>elemento al que están ligados</strong>, una forma
                      de manipulación energética que los eruditos no consideran
                      magia propiamente dicha.
                    </p>

                    <p>
                      Su <strong>núcleo elemental</strong> es altamente
                      codiciado, especialmente por su valor en{" "}
                      <em>joyería arcana</em>. Los{" "}
                      <strong>cazadores Vampyr</strong> persiguen activamente a
                      estos seres por la potencia y rareza de dicho núcleo.
                    </p>
                    <div className="container col-6 my-3">
                      <ImageCarousel
                        images={imagesRockalfef}
                        name="Rockalfef"
                      ></ImageCarousel>
                    </div>

                    <p>
                      Carecen de una sociedad como tal. No forman clanes ni
                      ciudades, y rara vez interactúan entre ellos. Su
                      existencia es solitaria, guiada por el ritmo del mundo
                      natural y la pulsación de su elemento interior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card my-3">
          <div className="row g-0">
            <div className="col-md-12">
              <div className="card-body">
                <h5 className="card-title text-center">Vampyr</h5>
                <div className="card-text fs-5">
                  <div className="card-text">
                    <div className="card-text">
                      <p>
                        Considerados la <strong>alta nobleza del mundo</strong>,
                        los Vampyr poseen una influencia política y cultural que
                        se extiende por todos los reinos. Su <em>longevidad</em>{" "}
                        y <strong>conexión con la Roca de la Vida</strong> los
                        vuelve excepcionalmente poderosos, tanto en sabiduría
                        como en magia. Dominan la{" "}
                        <strong>magia de sangre</strong>, la{" "}
                        <strong>magia elemental</strong> y la{" "}
                        <strong>magia de oscuridad</strong>, lo que los
                        convierte en uno de los linajes más temidos y
                        respetados.
                      </p>

                      <p>
                        Su sociedad se basa en una{" "}
                        <strong>estructura elitista</strong>, donde la pureza de
                        sangre define el estatus. Los Vampyr nobles habitan
                        fortalezas aisladas y manejan los hilos del poder desde
                        las sombras, mientras que aquellos con linajes mezclados
                        o convertidos ocupan los rangos más bajos dentro de su
                        jerarquía. Incluso poseen castas de sirvientes
                        vampíricos que, sin ser humanos, viven al servicio de
                        las grandes casas.
                      </p>

                      <p>
                        <strong>Clases de Vampyr:</strong>
                      </p>
                      <ul>
                        <li>
                          <strong>Vampyr Noble:</strong> De sangre pura, son
                          longevos, ricos y, en muchos casos, mantienen{" "}
                          <em>vínculos demoníacos</em>. Se alimentan
                          exclusivamente de sangre y no toleran la luz solar. Su
                          poder mágico es considerable, siendo capaces de
                          invocar artes prohibidas y controlar elementos con
                          facilidad.
                        </li>
                        <li>
                          <strong>Vampyr Menor:</strong> Antiguos humanos
                          convertidos mediante rituales. No requieren sangre ni
                          evitan la luz solar, pero su posición en la sociedad
                          es marginal. Aunque rechazados por los humanos, son
                          tolerados por los nobles, quienes a veces los utilizan
                          como esclavos, guardias o instrumentos de guerra.
                          Tienen una afinidad débil con la magia vampírica.
                        </li>
                      </ul>
                      <div className="container col-6 my-3">
                        <ImageCarousel
                          images={imagesVamp}
                          name="Vampyr"
                        ></ImageCarousel>
                      </div>

                      <p>
                        <strong>Fenómeno especial — Hysteria Kill:</strong>
                      </p>
                      <p>
                        Cuando un Vampyr menor pierde la cordura o se ve
                        arrinconado, puede entrar en un estado conocido como{" "}
                        <em>Hysteria Kill</em>. En este trance, su{" "}
                        <strong>
                          fuerza física supera incluso a la de los nobles
                        </strong>
                        , volviéndose una bestia imparable. Sin embargo, en este
                        estado <em>pierde completamente su razón</em> y el
                        acceso a toda forma de magia, convirtiéndose en un ente
                        puramente instintivo.
                      </p>

                      <p>
                        <strong>Sociedad Vampyr:</strong> La nobleza vampírica
                        no se rige por méritos, sino por la pureza de su linaje
                        y su conexión ancestral con la Roca de la Vida. Las
                        casas más poderosas gobiernan regiones enteras a través
                        de marionetas humanas y alianzas oscuras. Aunque su
                        cultura es sofisticada y amante del conocimiento,
                        también es fría, calculadora y despiadada con aquellos
                        que consideran inferiores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card my-3">
          <div className="row g-0">
            <div className="col-md-12">
              <div className="card-body">
                <h5 className="card-title text-center">Bestias</h5>
                <div className="card-text fs-5">
                  <div className="card-text">
                    <div className="card-text">
                      <p>
                        Las <strong>Bestias</strong> son el resultado de la{" "}
                        <em>evolución mágica</em> de monstruos primitivos,
                        quienes recibieron <strong>raciocinio</strong> gracias a
                        la intervención de la{" "}
                        <strong>Diosa del Conocimiento</strong>. Aunque muchos
                        conservan rasgos instintivos y una marcada obsesión por
                        la guerra, algunas subrazas han desarrollado una gran
                        inteligencia, encargándose de la estrategia y la
                        organización social.
                      </p>

                      <p>
                        Su historia es una mezcla de brutalidad y sabiduría
                        naciente. Son criaturas que transitan el límite entre el
                        salvajismo y la civilización. Aunque su aspecto pueda
                        resultar intimidante o grotesco, su sociedad funciona
                        bajo un modelo meritocrático.
                      </p>

                      <p>
                        <strong>Subrazas de Bestias:</strong>
                      </p>
                      <ul>
                        <li>
                          <strong>Brutos Bélicos:</strong> Individuos
                          corpulentos y de pensamiento simple, especializados en
                          combate físico. Son los{" "}
                          <em>líderes naturales en el campo de batalla</em> y la
                          base numérica de su sociedad. Rara vez poseen
                          aptitudes mágicas, pero su resistencia y fuerza son
                          legendarias.
                        </li>
                        <li>
                          <strong>Sabios Ferales:</strong> De apariencia más
                          delgada o menos imponente, destacan por su{" "}
                          <strong>capacidad mágica y científica</strong>. Actúan
                          como consejeros, estrategas y, a veces, como líderes.
                          Algunos dominan ramas de la alquimia, la arcanología o
                          incluso la ingeniería mágica.
                        </li>
                      </ul>
                      <div className="container col-6 my-3">
                        <ImageCarousel
                          images={imagesBestias}
                          name="Bestias"
                        ></ImageCarousel>
                      </div>

                      <p>
                        <strong>Sociedad de las Bestias:</strong> Viven en un
                        sistema de <strong>autarquía</strong>, donde cada
                        comunidad se gobierna a sí misma. Cuando un líder cae,
                        los miembros más sabios debaten quién debe sucederlo. El
                        nuevo líder debe demostrar méritos tanto{" "}
                        <em>mágicos</em> como <em>científicos</em>, reafirmando
                        la influencia de la Diosa del Conocimiento sobre su
                        cultura. Aunque primitivas en apariencia, muchas
                        comunidades de Bestias han desarrollado tecnologías
                        únicas y formas alternativas de magia basadas en su
                        herencia salvaje.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-3">
          <div className="row g-0">
            <div className="col-md-12">
              <div className="card-body">
                <h5 className="card-title text-center">Humanos</h5>
                <div className="card-text fs-5">
                  <div className="card-text">
                    <div className="card-text">
                      <p>
                        La <strong>raza humana</strong> es la más numerosa del
                        mundo conocido, en gran parte debido a su{" "}
                        <strong>
                          versatilidad y conexión con múltiples deidades
                        </strong>
                        . Esta cercanía con los dioses les ha otorgado
                        bendiciones variadas, pero también les ha ganado el{" "}
                        <em>odio profundo de los demonios</em>, quienes los ven
                        como favoritos injustos del panteón.
                      </p>

                      <p>
                        A lo largo de los siglos, los humanos han desarrollado
                        múltiples <strong>facciones</strong>, cada una con
                        ideales, dones y enfoques distintos frente a la magia,
                        la ciencia o la religión. Esta diversidad es su mayor
                        fortaleza… y su mayor fuente de conflictos internos.
                      </p>

                      <p>
                        <strong>Facciones Principales:</strong>
                      </p>
                      <ul>
                        <li>
                          <strong>Reino Mágico de Eyntraath:</strong> Nación
                          dedicada al estudio arcano. Sus ciudadanos suelen ser{" "}
                          <em>bendecidos por dioses elementales</em> y se
                          especializan en conjurar magia de fuego, hielo, viento
                          o tierra. Poseen la biblioteca mágica más grande del
                          continente y lideran muchas alianzas religiosas.
                        </li>
                        <li>
                          <strong>Imperium Sacro:</strong> Una monarquía
                          militarizada formada por{" "}
                          <strong>caballeros celestiales</strong> que portan
                          bendiciones de dioses guerreros. Su código de honor es
                          inflexible, y sus ejércitos actúan como paladines en
                          guerras santas. Son temidos y venerados por igual.
                        </li>
                        <li>
                          <strong>Tesla Humanum:</strong> Una avanzada sociedad
                          de <em>científicos y tecnomantes</em> que, aunque
                          incapaces de realizar magia directamente, utilizan{" "}
                          <strong>piedras de maná</strong> para crear artefactos
                          arcanotecnológicos. Son pioneros en armamento mágico,
                          transporte aéreo y comunicación a distancia.
                        </li>
                      </ul>
                      <div className="container col-6 my-3">
                        <ImageCarousel
                          images={imagesReinos}
                          name="Reinos"
                        ></ImageCarousel>
                      </div>

                      <p>
                        <strong>Otras Facciones Notables:</strong>
                      </p>
                      <ul>
                        <li>
                          <strong>El Tercer Reino:</strong> Ubicado cerca de la{" "}
                          <em>Mazmorra de Hesiem</em>, este reino se centra en
                          el comercio, la metalurgia y la forja. Sus herreros
                          son considerados los mejores del mundo, capaces de
                          imbuir armas con propiedades elementales permanentes.
                        </li>
                        <li>
                          <strong>La Secta de Nertarya:</strong> Organización
                          secreta que <em>venera a la diosa de la muerte</em>.
                          Practicaban la nigromancia de manera elemental y
                          estaban en alianza directa con los demonios y dioses
                          del caos.Empezaron el movimiento de los apóstoles cual
                          quería sumir la vida en el caos
                        </li>
                      </ul>

                      <div className="container col-6 my-3">
                        <ImageCarousel
                          images={imagesHumanos}
                          name="Humanos"
                        ></ImageCarousel>
                      </div>

                      <p>
                        <strong>Sociedad Humana:</strong> Extremadamente
                        fragmentada, su estructura varía según la facción.
                        Algunos viven bajo teocracias, otros bajo regímenes
                        científicos o aristocracias mágicas. Sin embargo, todos
                        comparten una característica común: una{" "}
                        <strong>ambición desmedida</strong> que los ha llevado
                        tanto a la cima del mundo… como al borde de la
                        extinción.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-3">
          <div className="row g-0">
            <div className="col-12">
              <div className="card-body">
                <h5 className="card-title text-center">Enanum</h5>
                <div className="card-text fs-5">
                  <div className="card-text">
                    <div className="card-text">
                      <p>
                        Los <strong>Enanum</strong> son una raza humanoide de
                        baja estatura pero fuerza colosal —se estima que su
                        poder físico{" "}
                        <strong>
                          supera cincuenta veces al de un humano promedio
                        </strong>
                        . Aunque físicamente parecidos a los humanos, su
                        complexión robusta, longevidad y vinculación con la
                        tierra los distinguen claramente.
                      </p>

                      <p>
                        Reconocidos como los{" "}
                        <strong>mejores herreros del mundo</strong>, los Enanum
                        poseen una maestría innata para la forja, la minería y
                        la canalización de energía elemental. Su conexión mágica
                        natural con la <em>tierra y el fuego</em> les permite
                        manipular metales incandescentes como si fueran barro,
                        creando armas y artefactos únicos.
                      </p>

                      <p>
                        <strong>Subrazas de Enanum:</strong>
                      </p>
                      <ul>
                        <li>
                          <strong>Enanum del Núcleo:</strong> Viven en ciudades
                          subterráneas cercanas al magma. Su piel suele tener
                          tonos rojizos o cobrizos. Son los más hábiles en la{" "}
                          <em>forja rúnica</em>, y pueden imbuir objetos con
                          runas de poder que canalizan fuego o resistencia.
                        </li>
                        <li>
                          <strong>Enanum de la Superficie:</strong> Más
                          sociables y comerciantes, conviven con otras razas. Su
                          conexión mágica con la <em>tierra</em> es más fuerte,
                          lo que les permite manipular rocas, minerales y
                          estructuras a voluntad. Actúan a menudo como
                          constructores de fortalezas o guardianes de ruinas.
                        </li>
                      </ul>
                      <div className="container col-6 my-3">
                        <ImageCarousel
                          images={imagesEnanum}
                          name="Enanum"
                        ></ImageCarousel>
                      </div>

                      <p>
                        <strong>Sociedad Enanum:</strong>
                      </p>
                      <p>
                        Su sociedad se basa en el{" "}
                        <strong>
                          mérito artesanal y la veteranía en batalla
                        </strong>
                        . Cada clan está dirigido por el{" "}
                        <em>Maestro de Forja</em> más antiguo y sabio. Los
                        conflictos políticos se resuelven con desafíos de
                        habilidad en la fragua o torneos rituales de fuerza y
                        estrategia. Aunque orgullosos y algo cerrados, los
                        Enanum respetan profundamente a aquellos que demuestran
                        excelencia técnica o honor en combate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-3">
          <div className="row g-0">
            <div className="col-12">
              <div className="card-body">
                <h5 className="card-title text-center">Zhyrakim </h5>
                <div className="card-text fs-5">
                  <div className="card-text">
                    <div className="card-text">
                      <p>
                        Los <strong>Zhyrakim</strong> son seres anfibios de piel
                        escamosa iridiscente, capaz de <em>cambiar de color</em>{" "}
                        según la luz o la profundidad del agua. Sus grandes ojos
                        reflectantes, adaptados a la oscuridad abisal, y sus
                        extremidades palmeadas les otorgan una movilidad
                        sobresaliente tanto en agua como en tierra. Sus voces,
                        profundas y rítmicas, pueden hipnotizar o confundir,
                        recordando el canto de las olas o el murmullo de una
                        tormenta lejana.
                      </p>

                      <p>
                        Altivos y orgullosos, los Zhyrakim son una raza{" "}
                        <strong>altamente racista y aislacionista</strong>.
                        Consideran su pureza ancestral como un don sagrado, y
                        rechazan toda mezcla con otras razas. Viven en{" "}
                        <strong>ciudades sumergidas</strong> construidas con
                        coral encantado y minerales abisales, protegidas por
                        barreras mágicas y centinelas elementales.
                      </p>
                      <div className="container col-6 my-3">
                        <ImageCarousel
                          images={imagesZhyrakim}
                          name="Zhyrakim"
                        ></ImageCarousel>
                      </div>

                      <p>
                        <strong>Sociedad Zhyrakim:</strong>
                      </p>
                      <p>
                        Su civilización se estructura en{" "}
                        <strong>clanes guerreros</strong>, donde el prestigio se
                        obtiene mediante la maestría mágica y el dominio del
                        combate. Creen en una conexión espiritual con las{" "}
                        <em>
                          fuerzas elementales del agua, el hielo y el viento
                        </em>
                        , y veneran los océanos como manifestaciones vivas de
                        estas energías. Las familias de sangre más pura actúan
                        como gobernantes, oráculos o generales en tiempos de
                        guerra.
                      </p>

                      <p>
                        <strong>Habilidades y estilo de combate:</strong>
                      </p>
                      <ul>
                        <li>
                          <strong>Magia elemental:</strong> Dominan el{" "}
                          <em>agua, el hielo y el viento</em> como extensiones
                          de su voluntad. Pueden invocar marejadas, congelar
                          armas enemigas o invocar ráfagas que desestabilizan
                          escudos y formación enemiga.
                        </li>
                        <li>
                          <strong>Agilidad sobre fuerza:</strong> Aunque
                          físicamente más débiles que los humanos, su{" "}
                          <em>agilidad, velocidad y coordinación</em> les
                          permiten moverse con una gracia letal en combate.
                        </li>
                        <li>
                          <strong>Maestría en armas largas:</strong>{" "}
                          Especialistas en el uso de{" "}
                          <em>tridentes, alabardas y espadas curvas</em>, que
                          combinan con hechizos a media distancia. Sus
                          movimientos fluyen como una danza marina, envolviendo
                          al enemigo en una tormenta de golpes.
                        </li>
                        <li>
                          <strong>Tácticas de guerrilla:</strong> Su
                          conocimiento de corrientes marinas, cuevas sumergidas
                          y clima costero les permite emboscar, aislar y
                          desaparecer antes de ser localizados.
                        </li>
                      </ul>

                      <p>
                        <strong>Relación con otras razas:</strong> Consideran a
                        la mayoría de razas como inferiores o impuras. Aunque
                        rara vez salen de sus dominios, algunos clanes han
                        negociado alianzas temporales si el honor ancestral o la
                        defensa del mar lo exige. Aquellos que deshonran su
                        estirpe pueden ser exiliados, viviendo como errantes
                        conocidos como <em>“Zhyrakim Sin Marea”</em>, tratados
                        como traidores por su pueblo y amenazas por los demás.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://via.placeholder.com/150"
                className="img-fluid rounded-start"
                alt="Imagen 1"
              />
            </div>
            <div className="col-12">
              <div className="card-body">
                <h5 className="card-title text-center">Orcus</h5>
                <div className="card-text fs-5">
                  <div className="card-text">
                    <div className="card-text">
                      <p>
                        Los <strong>Orcus</strong> son una raza creada para la
                        guerra, conocidos por su{" "}
                        <strong>alta capacidad reproductiva</strong>, fuerza
                        bruta y resistencia sobrenatural. Aunque muchas culturas
                        los consideran salvajes, los orcus poseen una cultura
                        rica en tradiciones orales y rituales físicos que
                        sustituyen el estudio o la magia formal.
                      </p>

                      <p>
                        Su uso de energía arcana se canaliza a través de una
                        forma única conocida como <strong>“magia orca”</strong>:
                        una combinación de{" "}
                        <em>gritos, símbolos pintados y gestos físicos</em> que
                        provocan efectos mágicos rudimentarios, basados más en
                        instinto y emoción que en teoría. No utilizan grimorios
                        ni runas; para ellos,{" "}
                        <em>el cuerpo y el alma son el catalizador</em>.
                      </p>

                      <p>
                        <strong>Organización Tribal:</strong>
                      </p>
                      <p>
                        La estructura social de los orcus es sumamente
                        pragmática. <strong>Siguen al más fuerte</strong>, sin
                        importar su edad o género. Durante campañas o
                        expediciones, el liderazgo se impone por dominio físico.
                        En las tribus puras, se dice que “
                        <em>el líder es quien porta el palo más grande</em>”, en
                        referencia al arma ceremonial que simboliza poder
                        absoluto.
                      </p>

                      <p>
                        <strong>Las Mujeres Orcus:</strong>
                      </p>
                      <p>
                        Son <strong>extremadamente escasas</strong>, y por ello,
                        profundamente valoradas. Las hembras embarazadas son
                        protegidas como tesoros vivientes, escoltadas por otras
                        mujeres guerreras. Las orcas más poderosas suelen ocupar
                        posiciones de liderazgo en clanes estables, siendo tanto
                        sabias como combatientes implacables.
                      </p>

                      <p>
                        <strong>Comportamiento Social:</strong>
                      </p>
                      <p>
                        En sus aldeas, los orcus suelen ser{" "}
                        <strong>curiosamente pacíficos y colaborativos</strong>,
                        valorando el esfuerzo físico y el honor personal. Sin
                        embargo, su naturaleza combativa les impulsa
                        constantemente a buscar desafíos, y todo encuentro puede
                        transformarse en una prueba de fuerza.
                      </p>

                      <p>
                        <strong>Subrazas:</strong>
                      </p>
                      <ul>
                        <li>
                          <strong>Orcus de Sangre Roja:</strong> Los más
                          comunes, de piel oscura y musculatura densa. Dominan
                          la magia orca explosiva, canalizada a través de sus
                          gritos de guerra. Son usados como infantería en
                          guerras por otras razas.
                        </li>
                        <li>
                          <strong>Orcus Grises:</strong> Más grandes y lentos,
                          pero con una conexión profunda con la tierra. Algunos
                          creen que pueden comunicarse con los espíritus de sus
                          ancestros mediante danzas tribales. Excelentes
                          constructores de fortalezas rústicas.
                        </li>
                        <li>
                          <strong>Orcus Lunares:</strong> Una subraza rara, de
                          piel blanquecina y ojos azules, nacidos en noches
                          específicas. Son considerados{" "}
                          <em>videntes tribales</em>, y aunque físicamente menos
                          imponentes, poseen dones proféticos que los vuelven
                          guías espirituales.
                        </li>
                      </ul>
                      <div className="container col-6 my-3">
                        <ImageCarousel
                          images={imagesOrcus}
                          name="Orcus"
                        ></ImageCarousel>
                      </div>

                      <p>
                        <strong>Relación con otras razas:</strong> Generalmente
                        aislacionistas, aunque pueden ser contratados como
                        mercenarios. Algunos reinos humanos y draconoides
                        emplean clanes orcus enteros como fuerza de choque, a
                        cambio de territorios para criar a sus jóvenes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card my-3">
          <div className="row g-0">
            <div className="col-12">
              <div className="card-body">
                <h5 className="card-title text-center">Vek’Thar</h5>
                <div className="card-text fs-5">
                  <div className="card-text">
                    <div className="card-text">
                      <p>
                        Los <strong>Vek’Thar</strong> son una raza insectoide
                        bífida de apariencia imponente, con cuerpos segmentados
                        protegidos por un <em>exoesqueleto duro</em> que varía
                        entre tonos de{" "}
                        <strong>
                          negro obsidiana, verde esmeralda y carmesí brillante
                        </strong>
                        . Sus múltiples ojos facetados les otorgan visión
                        panorámica, y sus mandíbulas —capaces de aplastar metal—
                        son tanto armas como herramientas. Algunas variantes
                        poseen <strong>alas membranosas</strong>, lo que les
                        permite realizar vuelos cortos y maniobras aéreas.
                      </p>

                      <p>
                        A diferencia de muchas especies insectoides, los
                        Vek’Thar no dependen completamente de una reina. Existen
                        subrazas <em>independientes</em> que nacen con
                        habilidades excepcionales y abandonan la colmena desde
                        jóvenes para forjar su propio camino. Paradójicamente,
                        la reina es uno de los seres más débiles de la colmena,
                        por lo que{" "}
                        <strong>debe engendrar múltiples camadas</strong> para
                        garantizar la supervivencia de la especie. Sin embargo,
                        la longevidad de los soldados y obreros compensa esta
                        vulnerabilidad.
                      </p>

                      <p>
                        <strong>Sociedad Vek’Thar:</strong>
                      </p>
                      <p>
                        La estructura social es altamente funcional. Existen{" "}
                        <strong>
                          obreros, guardias, sacerdotes y exploradores
                        </strong>
                        . Los <strong>sacerdotes Vek’Thar</strong> son
                        especialmente venerados: expertos alquimistas y
                        sanadores, elaboran{" "}
                        <em>pócimas, catalizadores y bálsamos únicos</em> que
                        muchas otras razas buscan con avidez.
                      </p>
                      <p>
                        A pesar de su apariencia temible, los Vek’Thar son{" "}
                        <strong>notablemente sociables</strong>. Sus colmenas se
                        transforman en{" "}
                        <strong>
                          centros de comercio, cultura y conocimiento
                        </strong>
                        , adaptadas para recibir a mercaderes, estudiosos e
                        incluso embajadas extranjeras. Su habilidad para
                        asimilar culturas los ha convertido en mediadores y
                        comerciantes de gran reputación.
                      </p>
                      <p>
                        <strong>Subrazas de los Vek’Thar:</strong>
                      </p>
                      <ul>
                        <li>
                          <strong>Vek’Thar Melífera:</strong> Inspirados en las
                          abejas, son expertos recolectores de néctar mágico y
                          productores de resinas alquímicas. Poseen una
                          estructura social jerárquica con una reina más
                          poderosa que en otras subrazas. Son protectores
                          feroces de su colmena y dominan la alquimia curativa.
                        </li>
                        <li>
                          <strong>Vek’Thar Formícida:</strong> Basados en las
                          hormigas, su estructura militar es impecable. Viven
                          para la colonia y destacan por su fuerza física y
                          capacidad de trabajo colectivo. Son los arquitectos de
                          las colmenas más complejas y resisten condiciones
                          extremas.
                        </li>
                        <li>
                          <strong>Vek’Thar Escarabeo:</strong> Con un caparazón
                          aún más duro que el del resto, actúan como escudos
                          vivientes. Son lentos pero casi indestructibles. Se
                          especializan en magia de tierra y defensa, siendo
                          ideales para proteger rutas comerciales y templos
                          importantes.
                        </li>
                        <li>
                          <strong>Vek’Thar Mantídea:</strong> Más esbeltos y
                          rápidos, tienen garras alargadas y reflejos
                          fulminantes. Actúan como exploradores y asesinos.
                          Muchos desarrollan una conexión con la magia del
                          viento y son temidos por su estilo de combate preciso
                          y letal.
                        </li>
                        <li>
                          <strong>Vek’Thar Parasitaria:</strong> Esta subraza
                          nace del parasitismo de otras criaturas. Las larvas
                          son depositadas en anfitriones vivos que eventualmente
                          mueren al eclosionar. Los adultos son pocos pero
                          extremadamente inteligentes, con una afinidad especial
                          hacia la magia oscura y la manipulación psíquica. Son
                          temidos incluso dentro de su propia raza.
                        </li>
                      </ul>

                      <div className="container col-6 my-3">
                        <ImageCarousel
                          images={imagesVek}
                          name="Vek’Thar"
                        ></ImageCarousel>
                      </div>

                      <p>
                        <strong>Relación con otras razas:</strong> Aunque
                        algunos los consideran “monstruosos”, los Vek’Thar han
                        demostrado ser{" "}
                        <em>aliados leales y diplomáticos eficientes</em>.
                        Muchos reinos les reconocen como una de las
                        civilizaciones más avanzadas en alquimia, medicina y
                        comercio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
