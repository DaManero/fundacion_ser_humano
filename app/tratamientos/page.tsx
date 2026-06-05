export default function TratamientosPage() {
  return (
    <>
      <section id="global-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>LEVÁNTATE, SUSPIRA, SONRÍE</h1>
                <p>y sigue adelante...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intro">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="block">
                <div className="section-title">
                  <h2>Tratamientos</h2>
                </div>
                <p style={{ textAlign: 'justify' }}>
                  Los principales objetivos del tratamiento son: establecer
                  diagnóstico (severidad/complejidad), psicoeducación, adquisición
                  de herramientas concretas y eficaces para neutralizar y
                  desactivar situaciones de riesgo, promover un cambio de vida
                  en términos de valores, promover cambios de conductas,
                  revinculación con su sistema familiar, social y laboral,
                  acompañar a los usuarios y sus familias en las tenciones
                  inherentes a la integración socio-familiar y laboral,
                  mantenimiento de la abstinencia en el consumo por parte del
                  usuario, planificación de metas realizables, incorporación y/o
                  fortalecimiento de los vínculos con grupos positivos,
                  fortalecimiento y/o desarrollo de habilidades sociales,
                  desarrollo de capacidades en entrevistas laborales y diseño de
                  C.V., acompañamiento y sostén en aquellos usuarios que ya
                  estén insertos en el contexto laboral, desarrollo de una
                  adecuada administración del tiempo libre y recreación,
                  psicoeducación en la organización de los recursos materiales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#424242' }} id="intro">
        <div className="container">
          <div className="row">
            <div style={{ textAlign: 'center' }} className="col-sm-12">
              <div className="block">
                <h2 style={{ color: 'white' }}>HOSPITAL DE DIA</h2>
                <br />
              </div>

              <AccordionItem
                id="collapseOne"
                title="1- Etapa diagnóstica"
                bg="#E6E6E6"
              >
                En la primera etapa se evaluará el estado de compromiso del
                consultante con la adicción y sus posibilidades clínicas. El
                tratamiento está diseñado para personas que cuenten con una red
                familiar y/o social que pueda, acompañar el proceso de
                adaptación a este dispositivo y que tome las indicaciones que
                se van emitiendo como aportes al inicio del proceso de mejoría.
                Tiene una duración aproximada 30 días.
                <br />
                <strong>OBJETIVOS</strong>
                <br />
                - Incorporación y aceptación de estructura (normas).
                <br />
                - Evaluación de vínculos (familia, pareja, amigos, hijos).
                <br />
                - Motivación en relación al tratamiento (demanda personal).
                <br />- Toma de conciencia de enfermedad y situación actual.
              </AccordionItem>

              <AccordionItem id="collapsetwo" title="2- Fase A" bg="#E6E6E6">
                Esta fase tiene una duración aproximada 90 días; aunque puede
                prolongarse de acuerdo a las características del consultante.
                El objetivo principal de esta etapa es mantenerse limpio y
                fundamentalmente trabajar Conciencia de Enfermedad.
                <br />
                <strong>OBJETIVOS</strong>
                <br />
                - Lograr un primer acercamiento con el consultante y su familia.
                <br />
                - Conocer su interés y motivación para el cambio.
                <br />
                - Trabajar inicialmente en el orden externo, familiar e
                institucional.
                <br />- Orientar a la familia con las diferentes alternativas de
                tratamiento.
              </AccordionItem>

              <AccordionItem id="collapse3" title="3- Base B" bg="#E6E6E6">
                Cuando el consultante avanza en el tratamiento, mantiene su
                abstinencia y sostiene actividades por fuera de la institución
                (trabajo, estudio, etc.) el formato incluye las técnicas de
                Prevención de Recaídas. Duración aproximada 90 dias.
                <br />
                <strong>OBJETIVOS</strong>
                <br />
                - Reconocimiento de situaciones de riesgo
                <br />
                - Ser un referente sólido, dentro y fuera de la comunidad
                <br />
                - Aceptación de conductas y funcionamiento familiar.
                <br />
                - Modificación de conductas personales.
                <br />- Llevar a cabo los objetivos propuestos en la etapa
                anterior.
              </AccordionItem>

              <AccordionItem id="collapse4" title="4- Reinserción" bg="#E6E6E6">
                El consultante debe lograr una actitud de apertura, receptivo,
                abierto a las críticas, aceptando su situación bio-psico-
                social. Que disfrute de sus logros con responsabilidad.
                Responsabilidad autentica, independiente y autónoma en relación
                a los vínculos afectivos, sociales, laborales. Que construya a
                diario su conciencia de enfermedad, sabiendo direccionar el
                equilibrio emocional, razonar coherentemente y llevar conductas
                saludables para El y los demás. Duración aproximada 90 a 120
                dias.
                <br />
                <strong>OBJETIVO</strong>
                <br />
                - Presentación de proyecto de vida
                <br />
                - Grupo de prevención de recaídas
                <br />
                - Constitución de red social positiva
                <br />- Despegue progresivo de la comunidad
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#585858' }} id="intro">
        <div className="container">
          <div className="row">
            <div style={{ textAlign: 'center' }} className="col-sm-12">
              <div className="block">
                <h2 style={{ color: 'white' }}>AMBULATORIO</h2>
                <br />
              </div>

              <AccordionItem
                id="collapse9"
                title="1- Evaluación"
                bg="#E6E6E6"
              >
                El diagnostico se llevara a cabo durante un periodo breve.
                Condición mantener una actividad de 6 horas aproximadamente
                (laboral, estudio, otros). Asistirá a entrevistas de evaluación
                diagnostica en las siguientes áreas: psiquiátrica, psicológica,
                medica, motivacional, grupal, familiar.
              </AccordionItem>

              <AccordionItem
                id="collapse5"
                title="2- Primer etapa: Recien llegados"
                bg="#E6E6E6"
              >
                <strong>PRIMER ETAPA: RECIEN LLEGADOS (4 meses)</strong>
                <br />
                Se trabajara en la planificación del tratamiento a seguir con
                cada paciente y su familia.
                <br />
                <strong>OBJETIVO</strong>
                <br />
                - Trabajar la conciencia de enfermedad.
                <br />- Lograr la abstinencia de sustancias
              </AccordionItem>

              <AccordionItem
                id="collapse6"
                title="3- Segunda etapa: Crecimiento personal"
                bg="#E6E6E6"
              >
                El consultante participa de los grupos con sus compañeros
                activamente donde se comparten experiencias comunes.
                <br />
                <strong>OBJETIVO</strong>
                <br />
                - Se realizan los PLANES TERAPEUTICOS fuera del horario de los
                grupos. Se trabajan conjuntamente con sus compañeros de grupo y
                su terapeuta individual.
                <br />- Establecer los objetivos a corto plazo.
              </AccordionItem>

              <AccordionItem
                id="collapse7"
                title="4- Tercera etapa: Mantenimiento"
                bg="#E6E6E6"
              >
                El paciente ya mantiene su abstinencia y fundamentalmente
                sostiene actividades fuera de la institución, ya sea trabajo,
                estudio, familia etc.
                <br />
                <strong>OBJETIVO</strong>
                <br />
                - Grupo con sus pares dos veces por semana
                <br />
                - El objetivo principal de esta etapa es sostener lo logrado.
                <br />- Se realiza una terapia vincular y familiar por mes.
              </AccordionItem>

              <AccordionItem
                id="collapse11"
                title="5- Cuarta etapa: Desprendimiento"
                bg="#E6E6E6"
              >
                <strong>
                  Objetivos a alcanzar para llegar al Fin del proceso:
                </strong>
                <br />
                - Que disfrute de sus logros con responsabilidad.
                <br />
                - Autonomía e independencia en la elaboración de un proyecto de
                vida sólido y sustentable.
                <br />
                - Que construya a diario su conciencia de enfermedad, sabiendo
                direccionar el equilibrio emocional, razonar coherentemente y
                llevar conductas saludables para El y los demás.
                <br />- Reconocer los riesgos personales de recaídas.
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AccordionItem({
  id,
  title,
  bg,
  children,
}: {
  id: string;
  title: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div
            className="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="panel panel-default">
              <div
                style={{ backgroundColor: bg }}
                className="panel-heading"
                role="tab"
                id={`heading-${id}`}
              >
                <h4 className="panel-title">
                  <a
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href={`#${id}`}
                    aria-expanded="true"
                    aria-controls={id}
                  >
                    {title}
                  </a>
                </h4>
              </div>
              <div
                id={id}
                className="panel-collapse collapse out"
                role="tabpanel"
                aria-labelledby={`heading-${id}`}
              >
                <div
                  style={{ textAlign: 'justify' }}
                  className="panel-body"
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
