import { ArrowLeft, Heart, MapPin, Share2, Star } from "lucide-react";
const products = [
  {
    id: 1,
    name: "Handgjort doftljus",
    price: "149 kr",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Vanilla Dream",
    price: "159 kr",
    image:
      "https://images.unsplash.com/photo-1602874801006-e26e9d4f3a35?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Lavender Calm",
    price: "139 kr",
    image:
      "https://images.unsplash.com/photo-1608181831718-c9c9c1f5e0d3?auto=format&fit=crop&w=800&q=80",
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
      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16">
        {/* Företagsinformation */}
        <section className="rounded-3xl border border-[#e8e5dc] bg-white p-8 lg:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[#eee9dd] text-2xl font-bold text-[#626b4c]">
                NC
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-[#7b8065]">
                  UF-företag
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Nordic Candle UF
                </h1>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#77796f]">
                  <span className="flex items-center gap-1.5">
                    <Star size={16} fill="currentColor" />
                    4.8
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    Stockholm
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-xl border border-[#ddd9cc] bg-white px-5 py-3 text-sm font-semibold transition hover:bg-[#f5f3ed]">
                <Heart size={18} />
                Följ
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-[#626b4c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#535c40]">
                <Share2 size={18} />
                Dela
              </button>
            </div>
          </div>
          <div className="mt-10 max-w-3xl">
            <h2 className="text-xl font-semibold">
              Om Nordic Candle UF
            </h2>
            <p className="mt-3 leading-7 text-[#66685f]">
              Nordic Candle UF skapar handgjorda doftljus med inspiration
              från den nordiska naturen. Vi fokuserar på kvalitet, design
              och produkter som skapar en mysig känsla i hemmet.
            </p>
          </div>
        </section>
        {/* Produkter */}
        <section className="mt-14">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium text-[#7b8065]">
                Nordic Candle UF
              </p>
              <h2 className="mt-1 text-2xl font-semibold">
                Företagets produkter
              </h2>
            </div>
            <span className="text-sm text-[#77796f]">
              {products.length} produkter
            </span>
          </div>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  window.location.hash = "#product";
                }}
                className="group overflow-hidden rounded-2xl border border-[#e8e5dc] bg-white text-left transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-[#f2f0e8]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">
                    {product.name}
                  </h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-bold">
                      {product.price}
                    </span>
                    <span className="text-sm font-medium text-[#626b4c]">
                      Visa produkt →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
