import { ArrowLeft, Instagram, Music2, Star } from "lucide-react";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#24271f]">
      {/* Header */}
      <header className="border-b border-[#e8e5dc] bg-[#faf9f5]">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-5 lg:px-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sm font-semibold text-[#626b4c]"
          >
            <ArrowLeft size={20} />
            Tillbaka
          </button>
        </div>
      </header>

      {/* Company banner */}
      <section className="relative overflow-hidden border-b border-[#e8e5dc] bg-[#dfe2d3]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#dfe2d3] via-[#e8e7dc] to-[#cdd2bf]" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
          <div className="flex flex-col items-start gap-7">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[#ddd9cc]">
              <div className="text-center">
                <div className="text-3xl font-bold tracking-wide text-[#626b4c]">
                  NC
                </div>

                <div className="mt-1 text-[9px] font-semibold tracking-[0.25em] text-[#858878]">
                  UF
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#858878]">
                UF-FÖRETAG
              </p>

              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Nordic Candle UF
              </h1>

              <div className="mt-5 flex items-center gap-2 text-[#77796f]">
                <Star size={19} fill="currentColor" />
                <span className="font-medium">4.8</span>
                <span>•</span>
                <span>12 omdömen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <main className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <section className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#858878]">
            OM FÖRETAGET
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Handgjort med omtanke
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#66685f]">
            Nordic Candle UF skapar handgjorda doftljus med fokus på kvalitet,
            design och en mysig känsla. Vi vill erbjuda produkter som passar
            både till vardagen och som en fin gåva.
          </p>

          <div className="mt-8 flex gap-3">
            <button
              aria-label="Instagram"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ddd9cc] bg-white"
            >
              <Instagram size={23} />
            </button>

            <button
              aria-label="TikTok"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#ddd9cc] bg-white"
            >
              <Music2 size={23} />
            </button>
          </div>
        </section>

        {/* Delivery */}
        <section className="mt-16 rounded-3xl border border-[#e4e0d5] bg-white p-7 sm:p-9">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#858878]">
            LEVERANS
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Leverans inom Sverige
          </h2>

          <p className="mt-3 leading-7 text-[#66685f]">
            Leverans erbjuds inom Sverige. Upphämtning kan erbjudas enligt
            överenskommelse.
          </p>
        </section>

        {/* Products */}
        <section className="mt-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#858878]">
              PRODUKTER
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Från Nordic Candle UF
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="overflow-hidden rounded-3xl border border-[#e4e0d5] bg-white">
              <div className="h-64 overflow-hidden bg-[#f1efe6]">
                <img
                  src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80"
                  alt="Handgjort doftljus"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">
                  Handgjort doftljus
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-[#77796f]">
                  <Star size={16} fill="currentColor" />
                  <span>4.8</span>
                </div>

                <p className="mt-4 text-2xl font-bold">
                  149 kr
                </p>

                <button
                  onClick={() => {
                    window.location.href =
                      window.location.pathname + "#product";
                  }}
                  className="mt-5 w-full rounded-xl bg-[#626b4c] px-5 py-3 font-semibold text-white transition hover:bg-[#535c40]"
                >
                  Visa produkt
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
