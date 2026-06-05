// main.js adaptado al sitio Ser Humano (Next.js):
// el template original llamaba a mixItUp() y a varios owlCarousel() sobre
// IDs (#portfolio-contant-active, #testimonial-slider, #clients-logo, ...)
// que no existen en este sitio. Dejamos solo lo aplicable y envolvemos en
// try/catch para que un plugin faltante no rompa la app.
(function ($) {
  if (typeof $ === "undefined") return;

  $(document).ready(function () {
    try {
      if (typeof $.fn.counterUp === "function") {
        $(".counter").counterUp({ delay: 10, time: 1000 });
      }
    } catch (e) {
      /* noop */
    }
  });
})(typeof window !== "undefined" ? window.jQuery : undefined);
