import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link className="navbar-brand" href="/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/logo.png" alt="Logo" />
                  </Link>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/tratamientos">Tratamientos</Link>
                    </li>
                    <li>
                      <Link href="/prevencion">Prevención</Link>
                    </li>
                    <li>
                      <Link href="/staff">Staff</Link>
                    </li>
                    <li>
                      <Link href="/galeria">Galería</Link>
                    </li>
                    <li>
                      <Link href="/contacto">Contacto</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
