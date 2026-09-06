import { ArrowLeft, Heart, ShoppingBag, Star } from "lucide-react";

export default function ProductDetail() {
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
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-[#f2f0e8]">
            <img
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80"
              alt="Handgjort doftljus"
              className="h-full min-h-[400px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[#7b8065]">
              Nordic Candle UF
            </p>

            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Handgjort doftljus
            </h1>

            <div className="mt-4 flex items-center gap-2 text-[#77796f]">
              <Star size={18} fill="currentColor" />
              <span>4.8</span>
            </div>

            <p className="mt-6 text-3xl font-bold">
              149 kr
            </p>

            <p className="mt-6 max-w-xl leading-7 text-[#66685f]">
              Ett handgjort doftljus skapat av Nordic Candle UF.
              Perfekt för att skapa en mysig och lugn känsla hemma.
            </p>

            <div className="mt-8 flex gap-3">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#626b4c] px-6 py-4 font-semibold text-white transition hover:bg-[#535c40]">
                <ShoppingBag size={20} />
                Lägg i kundvagn
              </button>

              <button
                aria-label="Lägg till i favoriter"
                className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#ddd9cc] bg-white"
              >
                <Heart size={21} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
