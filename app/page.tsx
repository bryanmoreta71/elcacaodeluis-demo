import Navbar from "./components/Navbar";
import QuoteForm from "./components/QuoteForm";

const stats = [
  { value: "12,000+", label: "Metric tons / year" },
  { value: "22", label: "Countries served" },
  { value: "100%", label: "Farm-to-export traceability" },
  { value: "15 yrs", label: "Export experience" },
];

const products = [
  {
    name: "Cacao Beans",
    desc: "Fermented and sun-dried beans graded to international standards, available in bulk container volumes.",
    specs: ["Moisture: 6-7%", "Fat content: 50-57%", "Grade: I & II"],
  },
  {
    name: "Cacao Powder",
    desc: "Natural and alkalized cacao powder milled to precise particle sizes for industrial food applications.",
    specs: ["Fat content: 10-12% / 20-22%", "pH: 5.3-7.5", "Mesh: 200-325"],
  },
  {
    name: "Cacao Butter",
    desc: "Deodorized and natural cacao butter, press-extracted for confectionery and chocolate manufacturing.",
    specs: ["Free fatty acid: <1.75%", "Melting point: 32-35°C", "Food-grade packaging"],
  },
  {
    name: "Cacao Liquor / Mass",
    desc: "100% pure ground cacao mass, block or chip format, ready for large-scale chocolate production lines.",
    specs: ["Fat content: 54-58%", "Fineness: <30 microns", "Custom block sizing"],
  },
];

const certifications = [
  { name: "Organic Certified", desc: "USDA & EU Organic certification across our full supply chain." },
  { name: "Fair Trade", desc: "Verified fair pricing and labor standards for every partner farm." },
  { name: "Rainforest Alliance", desc: "Sustainable farming practices that protect biodiversity." },
  { name: "HACCP & ISO 22000", desc: "Food safety management systems audited annually." },
];

const process = [
  { step: "01", title: "Sourcing", desc: "Direct partnerships with 3,000+ smallholder farms across cacao-growing regions." },
  { step: "02", title: "Fermentation & Drying", desc: "Controlled fermentation protocols to lock in flavor consistency and quality grade." },
  { step: "03", title: "Quality Testing", desc: "Lab-tested for moisture, fat content, and contaminants before every shipment." },
  { step: "04", title: "Export & Logistics", desc: "Full container loads shipped from port-certified facilities to 22 countries." },
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
              Trusted by global food manufacturers
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight text-[#2B1B12] sm:text-6xl">
              Premium Cacao, Engineered for Industrial Scale
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5B4A3F] sm:text-lg">
              We supply traceable, certified cacao — beans, powder, butter, and liquor — to
              confectionery and food manufacturers who can&apos;t afford inconsistency.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="w-full rounded-md bg-[#5B3A29] px-8 py-3.5 text-sm font-bold text-[#FBF7F1] transition-colors hover:bg-[#2B1B12] sm:w-auto"
              >
                Request a Quote
              </a>
              <a
                href="#products"
                className="w-full rounded-md border border-[#2B1B12]/15 px-8 py-3.5 text-sm font-bold text-[#2B1B12] transition-colors hover:bg-black/5 sm:w-auto"
              >
                View Product Specs
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
              Product range
            </h2>
            <p className="mt-3 text-3xl font-black tracking-tight text-[#2B1B12] sm:text-4xl">
              Built for industrial formulation
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
              From farm to factory
            </h2>
            <p className="mt-3 text-3xl font-black tracking-tight text-[#FBF7F1] sm:text-4xl">
              Full supply chain control
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
              Quality & compliance
            </h2>
            <p className="mt-3 text-3xl font-black tracking-tight text-[#2B1B12] sm:text-4xl">
              Certified for enterprise sourcing
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
                Sustainability
              </h2>
              <p className="mt-3 text-3xl font-black tracking-tight text-[#2B1B12] sm:text-4xl">
                Sourcing that protects farmers and forests
              </p>
              <p className="mt-5 text-sm leading-relaxed text-[#5B4A3F] sm:text-base">
                We work directly with smallholder cooperatives, paying above fair-trade
                minimums and reinvesting in reforestation and soil health programs. For our
                partners, that means a supply chain that holds up to ESG audits and
                long-term sourcing commitments.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "3,000+ partner farms under long-term contracts",
                  "Zero-deforestation sourcing policy since 2019",
                  "Annual third-party sustainability audits",
                  "Community education & reinvestment programs",
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
                  <div className="mt-1 text-xs text-[#8A7764]">Partner farms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#2B1B12]">40%</div>
                  <div className="mt-1 text-xs text-[#8A7764]">Above market pricing paid to farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#2B1B12]">0</div>
                  <div className="mt-1 text-xs text-[#8A7764]">Deforestation incidents since 2019</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#2B1B12]">6</div>
                  <div className="mt-1 text-xs text-[#8A7764]">Growing regions sourced</div>
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
              Production capacity
            </h2>
            <p className="mt-3 text-3xl font-black tracking-tight text-[#2B1B12] sm:text-4xl">
              Built to supply at scale
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5B4A3F] sm:text-base">
              Our processing facilities and logistics network are designed for manufacturers
              who need consistent, large-volume supply — not one-off shipments.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "Full Container Loads", desc: "Standard FCL and LCL shipping from certified port facilities." },
              { title: "Flexible Contracts", desc: "Spot purchases and multi-year supply agreements with price-lock options." },
              { title: "Dedicated Account Team", desc: "A single point of contact for forecasting, QA documentation, and logistics." },
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
                Let&apos;s talk supply
              </h2>
              <p className="mt-3 text-3xl font-black tracking-tight text-[#2B1B12] sm:text-4xl">
                Request a quote
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#5B4A3F] sm:text-base">
                Tell us your volume, specs, and timeline — our export team will prepare a
                formal quotation and sample shipment options within one business day.
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
                    <div className="text-sm font-semibold text-[#2B1B12]">Export office</div>
                    <div className="text-sm text-[#5B4A3F]">Guayaquil, Ecuador — Port-certified facility</div>
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
                    <div className="text-sm font-semibold text-[#2B1B12]">Email</div>
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
                    <div className="text-sm font-semibold text-[#2B1B12]">Response time</div>
                    <div className="text-sm text-[#5B4A3F]">Within 1 business day</div>
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
            © 2026 El Cacao de Luis Export. Demo website for portfolio purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}
