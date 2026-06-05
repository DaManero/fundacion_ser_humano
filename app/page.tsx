import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section id="slider">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-2">
              <div className="block">
                <h1 className="animated fadeInUp">
                  FUNDACION PROGRAMA <br />
                  SER HUMANO
                </h1>
                <p className="animated fadeInUp">
                  SOLO TU PUEDES HACERLO PERO NO PUEDES HACERLO SOLO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12">
              <div className="block">
                <div className="section-title">
                  <h2>¿Quienes Somos?</h2>
                  <p>
                    Somos un equipo interdisciplinario integrado por
                    profesionales de la salud con experiencia en la
                    rehabilitación de las adicciones. Formado por médicos,
                    licenciadas en psicología, counsolers, operadores
                    socioterapeuticos, acompañates terapéuticos y voluntarios.
                  </p>
                </div>
                <p>
                  <i>
                    En <strong>SER HUMANO</strong> tomamos a cada paciente como
                    único, analizamos cada caso en particular y diseñamos
                    mediante un abordaje interdisciplinario el tratamiento en sí
                    mismo.
                  </i>
                </p>
                <h2>Nuestra Misión </h2>
                <p>
                  Ofrecer a las familias asesoramiento para cuando un ser
                  querido se encuentra en consumo de sustancias.
                </p>
                <p style={{ paddingTop: '1px' }}>
                  Lograr una participación activa de la red de contención
                  familiar en el proceso terapéutico.
                </p>
                <p style={{ paddingTop: '1px' }}>
                  Generar espacios de sociabilización entre pares libre de
                  sustancias.
                </p>
                <p style={{ paddingTop: '1px' }}>
                  Brindar cursos y talleres de prevención en adicciones
                  acompañado del Grupo Baquano a padres, asociaciones, colegios,
                  universidades y agentes de salud.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <div className="block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/wrapper-img.gif" alt="Img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feature">
        <div className="container">
          <div className="row">
            <div
              style={{ backgroundColor: 'white', opacity: 0.8 }}
              className="col-md-6 col-md-offset-6"
            >
              <h2 style={{ color: 'black' }}>INSTITUCIONAL</h2>
              <p style={{ color: 'black' }}>
                Nuestra modalidad de rehabilitación es realizar una evaluación
                objetiva: historia familiar y evolución de la adicción. En esta
                evaluación, la familia deberá cumplir un rol fundamental
                participando honestamente en el proceso de recuperación.
              </p>
              <h2 style={{ color: 'black' }}>OBJETIVO INSTITUCIONAL</h2>
              <p style={{ color: 'black' }}>
                El objetivo del tratamiento es afianzar a la persona, trabajar
                la autoestima y brindar herramientas para iniciar el proceso de
                mejoría de su calidad de vida. Nuestra finalidad es que el dolor
                y la desvalorización sean superados. De esta forma la persona
                puede empezar a pensar en la construcción de un proyecto de vida
                propio que le permita mejorar sus vínculos familiares, sociales,
                laborales y educativos.
              </p>
              <Link href="/objetivos" className="btn btn-view-works">
                <strong>OBJETIVOS PARTICULARES</strong>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="service">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Tratamientos y Espacios</h2>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-6 col-md-3">
              <div className="service-item">
                <i
                  style={{ color: '#DF0101' }}
                  className="fa fa-h-square"
                  aria-hidden="true"
                ></i>
                <h4>Hospital de día</h4>
                <p style={{ textAlign: 'center' }}>
                  Asistencia de lunes a viernes 8 hs diarias. Terapia individual
                  semanal, grupos terapéuticos diarios y seguimiento
                  psiquiátrico dos veces al mes.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="service-item">
                <i
                  style={{ color: '#DF0101' }}
                  className="fa fa-external-link-square"
                  aria-hidden="true"
                ></i>
                <h4>Ambulatorio</h4>
                <p style={{ textAlign: 'center' }}>
                  Asistencia tres o cuatro veces por semana. Tres grupos
                  terapéuticos, terapia individual semanal y seguimiento
                  psiquiátrico dos veces al mes.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="service-item">
                <i
                  style={{ color: '#DF0101' }}
                  className="fa fa-user"
                  aria-hidden="true"
                ></i>
                <h4>Terapia Individual</h4>
                <p style={{ textAlign: 'center' }}>
                  Una o dos veces por semana con una Licenciada en Psicología
                  para brindarle atención particular y un espacio privado.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="service-item">
                <i
                  style={{ color: '#DF0101' }}
                  className="fa fa-users"
                  aria-hidden="true"
                ></i>
                <h4>Terapia Grupal</h4>
                <p style={{ textAlign: 'center' }}>
                  Todos los días, acompañado de un operador quien dirige el
                  grupo, participan los compañeros correspondientes a la fase en
                  la que se encuentra.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="service-item">
                <i
                  style={{ color: '#DF0101' }}
                  className="fa fa-arrows-alt"
                  aria-hidden="true"
                ></i>
                <h4>Reunión Multifamiliar</h4>
                <p style={{ textAlign: 'center' }}>
                  Una vez por semana acompañado de uno de los directores y una
                  licenciada. Además se realizan vinculares entre los miembros
                  de la familia con el pacientes una vez al mes.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="service-item">
                <i
                  style={{ color: '#DF0101' }}
                  className="fa fa-thumbs-up"
                  aria-hidden="true"
                ></i>
                <h4>Grupo Hermanos y Amigos</h4>
                <p style={{ textAlign: 'center' }}>
                  Se realiza cada quince días y acompaña un operador. Son grupos
                  dinámicos donde se trabaja la comunicación y los vínculos con
                  el consultante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2>AYUDANOS A AYUDAR</h2>
                <p>
                  El programa se puede llevar adelante gracias al aporte
                  voluntario de muchas personas. Hacé clic en &quot;QUIERO
                  DONAR&quot; y realizá tu aporte
                </p>
                <Link
                  className="btn btn-default btn-call-to-action"
                  href="/contacto"
                >
                  QUIERO DONAR
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Testimonios</h2>
            </div>
            <div
              className="col-sm-6 col-md-6"
              style={{
                height: 300,
                border: '2px solid #CCCCCC',
                overflow: 'scroll',
              }}
            >
              <div style={{ marginRight: 450 }}>
                <h3 style={{ color: '#DF0101' }}>
                  <strong>Hernán</strong>
                </h3>
              </div>
              <p style={{ textAlign: 'justify', lineHeight: 1.3 }}>
                Mi nombre es Hernan. Empecé un tratamiento porque ya estaba
                rendido, no veía ningún futuro con la sustancia, cada vez fue
                peor, cada vez era más necesaria en mi vida, por lo que un día,
                después de haber hablado con mi hermano donde me dijo que no
                quería un hermano drogadicto, después de haber consumido toda la
                noche, llorando y con muchísima angustia acumulada durante
                tantos años, les conté a mis viejos, ese día sentí algo que
                jamás en la vida había sentido, que es el desahogo, fue un
                llanto interminable, lleno de angustia, dolores, tristezas,
                felicidades, broncas, una mezcla de sentimientos estaban
                saliendo, el Hernan que necesitaba ayuda, el verdadero Hernan,
                el que quería salir adelante, sin ninguna sustancia. Pase por 3
                tratamientos diferentes en los cuales, no encontraba mi lugar,
                diciendo que no eran para mi, seguía recayendo en el consumo,
                usando como excusa que nadie me entendía, la verdad era que
                necesitaba alguien que me tire de las orejas y alguien en quien
                confiar. Pase por esos 3 tratamientos sin poder lograr ningún
                objetivo personal, simplemente seguía consumiendo, hasta que un
                28/01 del 2014 en mi última recaída, dije basta, tenía un amigo
                del barrio, que había empezado el tratamiento en SER HUMANO
                hacia ya 6 meses, y lo veía bastante bien, por lo que acudí a su
                ayuda. El 3 de marzo de 2014, fue mi primer día en el centro SER
                HUMANO, y sin lugar a duda, fue lo que yo necesitaba, muchos
                chicos que pasaron por lo que yo pase, mucha gente feliz de
                verme en ese lugar, y sobre todo mucha hermandad y mucho
                compañerismo. Empecé en hospital de día, entraba a las 9 y me
                iba a las 6 de la tarde, todo el día en recuperación, lo que yo
                quería y necesitaba. Al principio fue difícil, JAMAS estaba
                solo, y era solo cuestión de acostumbrarse, hasta el quiosco
                tenía que ir acompañado y obvio ni plata podía manejar, los
                permisos los tenias que ganar por los objetivos logrados. Los
                grupos eran difíciles al principio sobre todo sacando los
                sentimientos que tape con la sustancia durante muchos años. Pero
                era solo dejarme llevar por los cordinadores. Al mes que empece
                el tratamiento nos fuimos a Miramar, a un viaje, los grupos que
                hicimos fueron, el del lazarillo, guiando a ciegas a un
                compañero, generando confianza, y otro que no me lo voy a
                olvidar en mi vida, fue el del &ldquo;camino a la
                infancia&rdquo;, llevándote a encontrar con un mismo, a los 6 u
                7 años de edad, es al día de hoy que pienso y me emociono, de
                ese encuentro, en el que aun todavía me acuerdo. A medida que
                fue pasando el tratamiento las responsabilidades eran distintas,
                en base a tus necesidades, el staff te daba una responsabilidad,
                yo fui desde jardinero, el que armaba los juegos en la
                recreación, fui cocinero, fui limpieza, hasta la ultima
                responsabilidad que era el de coordinador general, que llevaba
                el programa adelante. Los viernes teníamos 2 horas de
                recreación, mientras que durante toda la semana eran tareas las
                que se designaban, para pasar el día. Fueron pasando los meses y
                me afianzaba mas conmigo mismo, sumaba tiempo limpio, y estaba
                mejor que nunca con mi familia. En tratamiento conocí a la que
                es hoy el amor de mi vida, Ileana, no se que hubiera sido de mi
                sin ella, pero fue muy importante en mi tratamiento ya que la
                mayor parte de los grupos hablaba de la relación y hoy en día
                convivo con ella. La relación con mi familia el antes y el
                ahora, fue increíble, casi que no tenia relación con mis padres
                ni con mi hermano, por lo que esto me ayudo para acercarme a
                ellos y compartir los momentos mas hermosos a su lado, como un
                asado, un paseo, o poder sentarme en una mesa para hablar y
                preguntarles como están. Logre objetivos impensados, irme a
                vivir con mi pareja, vivir momentos con mi viejo, mi vieja, ir a
                comer con mi hermano, estar disponible si mis amigos o
                familiares necesitan una ayuda, logre un trabajo estable, logre
                mantener una casa, logre vivir como me merezcoo, sin deberle
                nada a nadie, sin mendigar, si peligros, solo yo y mi familia,
                mi familia y yo. Nada ni nadie mas, y el objetivo mas
                importante, 3 años limpio.
              </p>
            </div>
            <div
              className="col-sm-6 col-md-6"
              style={{
                height: 300,
                border: '2px solid #CCCCCC',
                overflow: 'scroll',
              }}
            >
              <div style={{ marginRight: 450 }}>
                <h3 style={{ color: '#DF0101' }}>
                  <strong>Damián</strong>
                </h3>
              </div>
              <p style={{ textAlign: 'justify', lineHeight: 1.3 }}>
                Hola! Mi nombre es Damian y soy un adicto en recuperación que
                supe cómo entenderme a mí mismo bajo un tratamiento que me
                enseño como manejarme en la vida y en cada situación, un lugar
                llamado Ser Humano. En tiempos de consumo me sentía un rey y
                que me las sabía todas hasta que empecé a perder amistades,
                familia, bienes materiales, y sobre todo, salud. Hasta que un
                día pedí ayuda a mi familia para poder superar el alto grado de
                adicción que había generado en mí. Empecé el tratamiento donde
                me encontré con compañeros que de a poco fui conociendo y me
                reflejaban mis situaciones. Comencé a escuchar y comprender que
                de esto solo no podía salir, me costó mucho enfocarme en mi
                pero seguía con el objetivo de seguir limpio y se fueron dando
                las cosas como por arte de magia, esto significa que estaba
                viviendo la vida y tenía sentimientos por eso empecé a entender
                muchas cosas. Hoy después de 2 años sigo mi recuperación yendo
                a terapia y pidiendo ayuda en las situaciones que me siento
                raro y seguir con el objetivo de &ldquo;NO DROGARME&rdquo;. Si
                se puede.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
