import { useEffect, useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  Heart,
  Star,
  ArrowRight,
} from "lucide-react";

const FAVORITE_KEY = "clicktofind-favorite-handgjort-doftljus";

const products = [
  {
    name: "Handgjort doftljus",
    company: "Nordic Candle UF",
    price: 149,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Minimalistisk vas",
    company: "Form UF",
    price: 199,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Canvasväska",
    company: "EcoBag UF",
    price: 179,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Armband",
    company: "Luma UF",
    price: 99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
  },
];

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const isCandle =
    product.name === "Handgjort doftljus" &&
    product.company === "Nordic Candle UF";

  useEffect(() => {
    if (isCandle) {
      setIsFavorite(localStorage.getItem(FAVORITE_KEY) === "true");
    }
  }, [isCandle]);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!isCandle) return;

    const newValue = !isFavorite;

    setIsFavorite(newValue);
    localStorage.setItem(FAVORITE_KEY, String(newValue));
  };

  return (
    <article
      onClick={() => {
        window.location.href = "#product";
      }}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-[#e7e3d8] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden bg-[#f2f0e8]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <button
          type="button"
          aria-label="Lägg till i favoriter"
          onClick={toggleFavorite}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:bg-white"
        >
          <Heart
            size={19}
            strokeWidth={1.8}
            fill={isFavorite ? "#ef4444" : "none"}
            color={isFavorite ? "#ef4444" : "#24271f"}
          />
        </button>
      </div>

      <div className="p-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#7b8065]">
          {product.company}
        </p>

        <h3 className="text-base font-semibold text-[#24271f]">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-sm text-[#77796f]">
          <Star size={15} fill="currentColor" />
          <span>{product.rating}</span>
        </div>

        <div className="mt-3 text-lg font-bold text-[#30352a]">
          {product.price} kr
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#24271f]">
      <header className="sticky top-0 z-50 border-b border-[#e8e5dc] bg-[#faf9f5]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a1a58a] bg-[#f2efe5] text-lg font-bold text-[#596044]">
              C2F
            </div>

            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-tight">
                ClickToFind
              </div>

              <div className="text-[10px] uppercase tracking-[0.2em] text-[#888b78]">
                Swedish UF Marketplace
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#hetast"
              className="text-sm font-medium text-[#55594b] transition hover:text-[#596044]"
            >
              Hetast just nu
            </a>

            <a
              href="#nya"
              className="text-sm font-medium text-[#55594b] transition hover:text-[#596044]"
            >
              Nya produkter
            </a>

            <a
              href="#alla"
              className="text-sm font-medium text-[#55594b] transition hover:text-[#596044]"
            >
              Alla produkter
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Sök"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e0ddd3] bg-white transition hover:border-[#a1a58a]"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>

            <button
              aria-label="Kundvagn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e0ddd3] bg-white transition hover:border-[#a1a58a]"
            >
              <ShoppingBag size={20} strokeWidth={1.8} />
            </button>

            <button
              aria-label="Profil"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e0ddd3] bg-white transition hover:border-[#a1a58a]"
            >
              <User size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-[#e8e5dc] bg-[#f1eee5]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#777d61]">
                Sveriges UF Marketplace
              </p>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#292c24] sm:text-5xl lg:text-7xl">
                Upptäck något
                <br />
                <span className="text-[#687050]">nytt.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#66685f] sm:text-lg">
                Hitta unika produkter och tjänster från unga entreprenörer
                över hela Sverige.
              </p>

              <div className="mt-9 flex max-w-2xl items-center rounded-2xl border border-[#ddd9cc] bg-white p-2 shadow-sm">
                <Search
                  className="ml-3 text-[#7d806f]"
                  size={21}
                  strokeWidth={1.8}
                />

                <input
                  type="text"
                  placeholder="Vad letar du efter?"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#999b92] sm:text-base"
                />

                <button className="rounded-xl bg-[#626b4c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#535c40]">
                  Sök
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="hetast"
          className="mx-auto max-w-7xl px-5 py-14 lg:px-8"
        >
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-[#858974]">
                Utvalt av ClickToFind
              </p>

              <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                Hetast just nu
              </h2>
            </div>

            <button className="hidden items-center gap-2 text-sm font-semibold text-[#626b4c] sm:flex">
              Visa alla
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        <section
          id="nya"
          className="border-y border-[#e8e5dc] bg-[#f4f2eb]"
        >
          <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
            <div className="mb-7">
              <p className="text-sm font-medium uppercase tracking-wider text-[#858974]">
                Senast publicerat
              </p>

              <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                Nya produkter
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
              {products
                .slice()
                .reverse()
                .map((product) => (
                  <ProductCard
                    key={`new-${product.name}`}
                    product={product}
                  />
                ))}
            </div>
          </div>
        </section>

        <section
          id="alla"
          className="mx-auto max-w-7xl px-5 py-14 lg:px-8"
        >
          <div className="mb-7">
            <p className="text-sm font-medium uppercase tracking-wider text-[#858974]">
              Upptäck
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Alla produkter
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {[...products, ...products].map((product, index) => (
              <ProductCard
                key={`${product.name}-${index}`}
                product={product}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e5e2d9] bg-[#eeece4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <div className="font-semibold">ClickToFind</div>

            <p className="mt-1 text-sm text-[#77796f]">
              Sveriges marketplace för UF-företag.
            </p>
          </div>

          <p className="text-xs text-[#8b8d83]">
            © 2026 ClickToFind
          </p>
        </div>
      </footer>
    </div>
  );
}
