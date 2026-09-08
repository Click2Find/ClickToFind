import { ArrowLeft, CreditCard, Lock } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#24271f]">
      <header className="border-b border-[#e8e5dc] bg-[#faf9f5]">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-5 lg:px-8">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-sm font-semibold text-[#626b4c]"
          >
            <ArrowLeft size={20} />
            Tillbaka
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-10 lg:px-8 lg:py-16">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#858878]">
            CHECKOUT
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Kassa
          </h1>

          <div className="mt-4 flex items-center gap-2 text-sm text-[#77796f]">
            <Lock size={16} />
            <span>Din information hanteras säkert.</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <section className="rounded-3xl border border-[#e4e0d5] bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold">
              Leveransuppgifter
            </h2>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium">
                  Förnamn
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-[#ddd9cc] bg-[#faf9f5] px-4 py-3 outline-none focus:border-[#626b4c]"
                  placeholder="Förnamn"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Efternamn
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-[#ddd9cc] bg-[#faf9f5] px-4 py-3 outline-none focus:border-[#626b4c]"
                  placeholder="Efternamn"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  E-post
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-[#ddd9cc] bg-[#faf9f5] px-4 py-3 outline-none focus:border-[#626b4c]"
                  placeholder="din@email.se"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  className="mt-2 w-full rounded-xl border border-[#ddd9cc] bg-[#faf9f5] px-4 py-3 outline-none focus:border-[#626b4c]"
                  placeholder="070 123 45 67"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium">
                  Adress
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-[#ddd9cc] bg-[#faf9f5] px-4 py-3 outline-none focus:border-[#626b4c]"
                  placeholder="Gatuadress"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Postnummer
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-[#ddd9cc] bg-[#faf9f5] px-4 py-3 outline-none focus:border-[#626b4c]"
                  placeholder="123 45"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Ort
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-[#ddd9cc] bg-[#faf9f5] px-4 py-3 outline-none focus:border-[#626b4c]"
                  placeholder="Stockholm"
                />
              </div>
            </div>

            <div className="mt-10 border-t border-[#e8e5dc] pt-8">
              <h2 className="text-2xl font-bold">
                Betalning
              </h2>

              <button
                type="button"
                className="mt-5 flex w-full items-center gap-4 rounded-2xl border-2 border-[#626b4c] bg-[#f5f4ee] p-5 text-left"
              >
                <CreditCard size={24} />

                <div>
                  <p className="font-semibold">
                    Kortbetalning
                  </p>
                  <p className="mt-1 text-sm text-[#77796f]">
                    Visa, Mastercard och fler kort.
                  </p>
                </div>
              </button>
            </div>
          </section>

          <aside className="h-fit rounded-3xl border border-[#e4e0d5] bg-white p-6">
            <h2 className="text-xl font-bold">
              Din beställning
            </h2>

            <div className="mt-6 flex justify-between text-[#66685f]">
              <span>Produkter</span>
              <span>149 kr</span>
            </div>

            <div className="mt-4 flex justify-between text-[#66685f]">
              <span>Leverans</span>
              <span>Beräknas senare</span>
            </div>

            <div className="my-6 border-t border-[#e8e5dc]" />

            <div className="flex justify-between text-xl font-bold">
              <span>Totalt</span>
              <span>149 kr</span>
            </div>

            <button
              type="button"
              className="mt-7 w-full rounded-xl bg-[#626b4c] px-6 py-4 font-semibold text-white transition hover:bg-[#535c40]"
            >
              Slutför beställning
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}
