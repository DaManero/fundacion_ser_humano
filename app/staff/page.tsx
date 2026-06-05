type StaffMember = { img: string; name: string; role: string };

const staff: StaffMember[] = [
  {
    img: '/img/staff6.jpg',
    name: 'CARLOS IGLESIA',
    role:
      'Director Institucional. Operador Socio Terapéutico, especialista en adicciones.',
  },
  {
    img: '/img/staff10.jpg',
    name: 'IGNACIO BARBAGALLO',
    role: 'Director Institucional. Operador Socio Terapeutico.',
  },
  {
    img: '/img/staff9.jpg',
    name: 'DRA. VIVIANA SALA',
    role: 'Directora Medica.',
  },
  {
    img: '/img/staff0.jpg',
    name: 'LIC. SUSANA SALATI',
    role: 'Directora terapeutica.',
  },
  {
    img: '/img/staff3.jpg',
    name: 'LIC. CLAUDIA FERNANDEZ',
    role: 'Coordinadora de Grupos de padres y terapia individual.',
  },
  {
    img: '/img/staff2.jpg',
    name: 'LIC. MARTA GONZALEZ ROUCO',
    role: 'Terapia individual.',
  },
  {
    img: '/img/staff4.jpg',
    name: 'LIC. TERESITA FIGUEROA',
    role: 'Terapia individual.',
  },
  {
    img: '/img/staff1.jpg',
    name: 'LIC. FLORENCIA SCIORRA',
    role: 'Terapia individual.',
  },
  {
    img: '/img/staff5.jpg',
    name: 'CLOR. VIVIANA BLANCO',
    role: 'Coordinacion grupal.',
  },
  {
    img: '/img/staff11.jpg',
    name: 'CLOR. MERCEDES LACOSTE',
    role: 'Coordinacion grupal.',
  },
  {
    img: '/img/staff14.jpg',
    name: 'EMILIO CELTICH',
    role: 'Coordinacion grupal.',
  },
];

export default function StaffPage() {
  return (
    <>
      <section id="global-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>YO QUIERO, YO PUEDO, YO SOY CAPAZ.</h1>
                <p>Saca de tu mente el &quot;no puedo&quot;.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Nuestro Staff</h2>
              <p>
                Te presentamos a los profesionales que te ayudarán a asesorarán
                durante el tratamiento
              </p>
            </div>
          </div>
          <div className="row ">
            {staff.map((m) => (
              <div key={m.name} className="col-sm-6 col-md-3">
                <div className="service-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt="IMG" />
                  <h4>{m.name}</h4>
                  <p>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
