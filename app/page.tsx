import Navbar from "./components/Navbar";
import QuoteForm from "./components/QuoteForm";

const stats = [
  { value: "12,000+", label: "Toneladas métricas / año" },
  { value: "22", label: "Países atendidos" },
  { value: "100%", label: "Trazabilidad finca-exportación" },
  { value: "15 años", label: "De experiencia exportando" },
];

const products = [
  {
    name: "Granos de Cacao",
    desc: "Granos fermentados y secados al sol, clasificados según estándares internacionales, disponibles en volúmenes de contenedor completo.",
    specs: ["Humedad: 6-7%", "Contenido de grasa: 50-57%", "Grado: I y II"],
  },
  {
    name: "Polvo de Cacao",
    desc: "Polvo de cacao natural y alcalinizado, molido a tamaños de partícula precisos para aplicaciones alimentarias industriales.",
    specs: ["Contenido de grasa: 10-12% / 20-22%", "pH: 5.3-7.5", "Malla: 200-325"],
  },
  {
    name: "Manteca de Cacao",
    desc: "Manteca de cacao desodorizada y natural, extraída por prensado para la fabricación de confitería y chocolate.",
    specs: ["Ácido graso libre: <1.75%", "Punto de fusión: 32-35°C", "Empaque grado alimenticio"],
  },
  {
    name: "Licor / Pasta de Cacao",
    desc: "Masa de cacao 100% pura y molida, en formato de bloque o chips, lista para líneas de producción de chocolate a gran escala.",
    specs: ["Contenido de grasa: 54-58%", "Finura: <30 micrones", "Tamaño de bloque personalizado"],
  },
];

const certifications = [
  { name: "Certificación Orgánica", desc: "Certificación Orgánica USDA y UE en toda nuestra cadena de suministro." },
  { name: "Comercio Justo", desc: "Precios justos verificados y estándares laborales en cada finca asociada." },
  { name: "Rainforest Alliance", desc: "Prácticas agrícolas sostenibles que protegen la biodiversidad." },
  { name: "HACCP e ISO 22000", desc: "Sistemas de gestión de seguridad alimentaria auditados anualmente." },
];

const process = [
  { step: "01", title: "Abastecimiento", desc: "Alianzas directas con más de 3,000 pequeños productores en regiones cacaoteras." },
  { step: "02", title: "Fermentación y Secado", desc: "Protocolos de fermentación controlada para asegurar consistencia de sabor y grado de calidad." },
  { step: "03", title: "Control de Calidad", desc: "Pruebas de laboratorio de humedad, contenido de grasa y contaminantes antes de cada envío." },
  { step: "04", title: "Exportación y Logística", desc: "Contenedores completos enviados desde instalaciones portuarias certificadas a 22 países." },
];

export default function Home() {
  return (
    <div className="bg-[#FBF7F1]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(178,128,43,0.12),_transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#B2802B]/30 bg-[#B2802B]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#8A611F]">
              Proveedor de confianza para fabricantes de alimentos a nivel global
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-[#2B1B12] sm:text-6xl">
              Cacao Premium, Diseñado para Escala Industrial
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5B4A3F] sm:text-lg">
              Suministramos cacao trazable y certificado — granos, polvo, manteca y licor —
              a fabricantes de confitería y alimentos que no pueden permitirse inconsistencias.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="w-full rounded-md bg-[#5B3A29] px-8 py-3.5 text-sm font-bold text-[#FBF7F1] transition-colors hover:bg-[#2B1B12] sm:w-auto"
              >
                Solicitar Cotización
              </a>
              <a
                href="#products"
                className="w-full rounded-md border border-[#2B1B12]/15 px-8 py-3.5 text-sm font-bold text-[#2B1B12] transition-colors hover:bg-black/5 sm:w-auto"
              >
                Ver Especificaciones
              </a>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-[#2B1B12] sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-[#8A7764] sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-t border-black/5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#B2802B]">
              Gama de productos
            </h2>
            <p className="mt-3 text-3xl font-black tracking-tight text-[#2B1B12] sm:text-4xl">
              Hecho para formulación industrial
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8"
              >
                <h3 className="text-xl font-bold text-[#2B1B12]">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B4A3F]">{product.desc}</p>
                <ul className="mt-5 space-y-2 border-t border-black/5 pt-4">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm text-[#5B4A3F]">
                      <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#B2802B]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-black/5 bg-[#2B1B12] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#D9B468]">
              De la finca a la fábrica
            </h2>
            <p className="mt-3 text-3xl font-black tracking-tight text-[#FBF7F1] sm:text-4xl">
              Control total de la cadena de suministro
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <div className="text-4xl font-black text-[#5B3A29]">{item.step}</div>
                <h3 className="mt-3 text-lg font-bold text-[#FBF7F1]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C9BAA8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality / Certifications */}
      <section id="quality" className="border-t border-black/5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#B2802B]">
              Calidad y cumplimiento
            </h2>
            <p className="mt-3 text-3xl font-black tracking-tight text-[#2B1B12] sm:text-4xl">
              Certificados para abastecimiento empresarial
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-2xl border border-black/10 bg-white p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#B2802B]/10 text-[#B2802B]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-bold text-[#2B1B12]">{cert.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B4A3F]">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustainability" className="border-t border-black/5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#B2802B]">
                Sostenibilidad
              </h2>
              <p className="mt-3 text-3xl font-black tracking-tight text-[#2B1B12] sm:text-4xl">
                Abastecimiento que protege a productores y bosques
              </p>
              <p className="mt-5 text-sm leading-relaxed text-[#5B4A3F] sm:text-base">
                Trabajamos directamente con cooperativas de pequeños productores, pagando
                por encima de los mínimos de comercio justo y reinvirtiendo en programas de
                reforestación y salud del suelo. Para nuestros socios, eso significa una
                cadena de suministro que resiste auditorías ESG y compromisos de
                abastecimiento a largo plazo.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Más de 3,000 fincas asociadas bajo contratos a largo plazo",
                  "Política de cero deforestación desde 2019",
                  "Auditorías de sostenibilidad anuales por terceros",
                  "Programas de educación y reinversión comunitaria",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#2B1B12]">
                    <svg
                      className="mt-0.5 flex-none text-[#B2802B]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#2B1B12]">3,000+</div>
                  <div className="mt-1 text-xs text-[#8A7764]">Fincas asociadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#2B1B12]">40%</div>
                  <div className="mt-1 text-xs text-[#8A7764]">Pago sobre el precio de mercado a productores</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#2B1B12]">0</div>
                  <div className="mt-1 text-xs text-[#8A7764]">Incidentes de deforestación desde 2019</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#2B1B12]">6</div>
                  <div className="mt-1 text-xs text-[#8A7764]">Regiones de cultivo abastecidas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity */}
      <section id="capacity" className="border-t border-black/5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-wide text-[#B2802B]">
              Capacidad de producción
            </h2>
            <p className="mt-3 text-3xl font-black tracking-tight text-[#2B1B12] sm:text-4xl">
              Diseñados para abastecer a gran escala
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5B4A3F] sm:text-base">
              Nuestras instalaciones de procesamiento y red logística están diseñadas para
              fabricantes que necesitan suministro consistente y de gran volumen — no envíos puntuales.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "Contenedores Completos", desc: "Envíos estándar FCL y LCL desde instalaciones portuarias certificadas." },
              { title: "Contratos Flexibles", desc: "Compras puntuales y acuerdos de suministro multianuales con opción de precio fijo." },
              { title: "Equipo de Cuenta Dedicado", desc: "Un único punto de contacto para pronósticos, documentación de calidad y logística." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-black/10 bg-white p-6">
                <h3 className="text-lg font-bold text-[#2B1B12]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5B4A3F]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / RFQ */}
      <section id="contact" className="border-t border-black/5 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#B2802B]">
                Hablemos de suministro
              </h2>
              <p className="mt-3 text-3xl font-black tracking-tight text-[#2B1B12] sm:text-4xl">
                Solicita una cotización
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#5B4A3F] sm:text-base">
                Cuéntanos tu volumen, especificaciones y plazos — nuestro equipo de
                exportación preparará una cotización formal y opciones de envío de muestra
                dentro de un día hábil.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#FBF7F1] text-[#B2802B]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#2B1B12]">Oficina de exportación</div>
                    <div className="text-sm text-[#5B4A3F]">Guayaquil, Ecuador — Instalación certificada portuaria</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#FBF7F1] text-[#B2802B]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#2B1B12]">Correo electrónico</div>
                    <a href="mailto:export@elcacaodeluis.com" className="text-sm text-[#B2802B] hover:underline">
                      export@elcacaodeluis.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#FBF7F1] text-[#B2802B]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 6v6l4 2" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#2B1B12]">Tiempo de respuesta</div>
                    <div className="text-sm text-[#5B4A3F]">Dentro de 1 día hábil</div>
                  </div>
                </div>
              </div>
            </div>

            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-[#2B1B12] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#5B3A29] text-xs font-black text-[#FBF7F1]">
              CL
            </span>
            <span className="text-sm font-bold text-[#FBF7F1]">
              EL CACAO <span className="text-[#D9B468]">DE LUIS</span>
            </span>
          </div>
          <p className="text-xs text-[#9C8A7C]">
            © 2026 El Cacao de Luis Export. Sitio demo con fines de portafolio.
          </p>
        </div>
      </footer>
    </div>
  );
}
