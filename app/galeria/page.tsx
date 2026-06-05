const images = [
  '/img/img1.jpg',
  '/img/img2.jpg',
  '/img/img3.jpg',
  '/img/img4.jpg',
  '/img/img5.jpg',
  '/img/img6.jpg',
  '/img/img7.jpg',
];

export default function GaleriaPage() {
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

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3
              style={{
                paddingLeft: '15px',
                backgroundColor: '#A4A4A4',
                color: '#fff',
                textAlign: 'left',
              }}
            >
              <strong>Imágenes</strong>
            </h3>
          </div>

          {images.map((src) => (
            <div key={src} className="col-lg-3 col-md-4 col-xs-6 thumb">
              <a className="thumbnail" href="#">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="img-responsive" src={src} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
