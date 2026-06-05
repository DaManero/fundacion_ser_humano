import ContactForm from '@/components/ContactForm';

export default function ContactoPage() {
  return (
    <>
      <section id="global-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h1>TODO ES POSIBLE EN LA MEDIDA.</h1>
                <p>que tu lo creas posible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form">
        <div className="container">
          <ContactForm />

          <div id="contact-box" className="row">
            <div className="col-md-6 col-sm-12">
              <div className="block">
                <h2>Contactate</h2>
                <ul className="address-block">
                  <li>
                    <i className="fa fa-map-marker"></i>Entre Ríos 1173, CABA
                  </li>
                  <li>
                    <i className="fa fa-envelope-square"></i>Código Postal: 1080
                  </li>
                  <li>
                    <i className="fa fa-envelope-o"></i>Email:
                    infowebserhumano@gmail.com
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>Teléfono: 011 2062-8973
                  </li>
                </ul>

                <ul className="social-icons">
                  <li>
                    <a
                      href="https://es-la.facebook.com/fundacionprograma.serhumano"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="block">
                <h2>Mapa</h2>
                <div className="google-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.2778237026773!2d-58.393732085157424!3d-34.62241886599412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb20f8256fed%3A0x19a0036e97528cab!2sAv.+Entre+R%C3%ADos+1173%2C+C1080ABF+CABA!5e0!3m2!1ses!2sar!4v1487798018108"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
