import {
  ArrowLeft,
  Instagram,
  Music2,
  Star,
} from "lucide-react";

const companyProducts = [
  {
    name: "Handgjort doftljus",
    price: 149,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Presentljus",
    price: 179,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1602874801006-e26b9c7c9a2d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#24271f]">
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

      <main>
        <section className="border-b border-[#e8e5dc] bg-[#f1eee5]">
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[#a1a58a] bg-[#f2efe5] text-2xl font-bold text-[#596044]">
                NC
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7b8065]">
                  UF-företag
                </p>

                <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Nordic Candle UF
                </h1>

                <div className="mt-3 flex items-center gap-2 text-[#77796f]">
                  <Star size={18} fill="currentColor" />
                  <span className="font-medium">4.8</span>
                  <span>•</span>
                  <span>12 omdömen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-[#858974]">
                Om företaget
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Handgjort med omtanke
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#66685f]">
                Nordic Candle UF skapar handgjorda doftljus med fokus på
                kvalitet, design och en mysig känsla. Vi vill erbjuda
                produkter som passar både till vardagen och som en fin gåva.
              </p>

              <div className="mt-6 flex gap-3">
                <button
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd9cc] bg-white"
                >
                  <Instagram size={19} />
                </button>

                <button
                  aria-label="TikTok"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd9cc] bg-white"
                >
                  <Music2 size={19} />
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e7e3d8] bg-white p-6">
              <h3 className="font-semibold">Leverans & hämtning</h3>

              <p className="mt-3 text-sm leading-6 text-[#66685f]">
                Leverans inom Sverige.
                <br />
                Upphämtning kan erbjudas enligt överenskommelse.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#e8e5dc] bg-[#f4f2eb]">
          <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
            <div className="mb-7">
              <p className="text-sm font-medium uppercase tracking-wider text-[#858974]">
                Nordic Candle UF
              </p>

              <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                Företagets produkter
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
              {companyProducts.map((product) => (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-2xl border border-[#e7e3d8] bg-white"
                >
                  <div className="aspect-square overflow-hidden bg-[#f2f0e8]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-1 text-sm text-[#77796f]">
                      <Star size={15} fill="currentColor" />
                      <span>{product.rating}</span>
                    </div>

                    <p className="mt-3 text-lg font-bold">
                      {product.price} kr
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
