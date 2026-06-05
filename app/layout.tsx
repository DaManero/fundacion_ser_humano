import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fundación Programa Ser Humano',
  description:
    'Fundación Programa Ser Humano — equipo interdisciplinario de profesionales de la salud especializado en la rehabilitación de las adicciones.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="no-js">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* CSS originales (Bootstrap 3 + estilos del sitio) */}
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/ionicons.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        {/* JS originales (jQuery + Bootstrap 3 + plugins) */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script src="/js/min/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
