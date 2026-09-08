import { useEffect, useState } from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

const CART_KEY = "clicktofind-cart";

type CartItem = {
  name: string;
  company: string;
  price: number;
  image: string;
  quantity?: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_KEY);

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCart(
            parsedCart.map((item) => ({
              ...item,
              quantity: item.quantity || 1,
            }))
          );
        }
      }
    } catch {
      setCart([]);
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
  };

  const increaseQuantity = (index: number) => {
    const newCart = [...cart];

    newCart[index].quantity = (newCart[index].quantity || 1) + 1;

    saveCart(newCart);
  };

  const decreaseQuantity = (index: number) => {
    const newCart = [...cart];
    const quantity = newCart[index].quantity || 1;

    if (quantity <= 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].quantity = quantity - 1;
    }

    saveCart(newCart);
  };

  const removeItem = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    saveCart(newCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#24271f]">
      <header className="border-b border-[#e8e5dc] bg-[#faf9f5]">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-5 lg:px-8">
          <button
            type="button"
            onClick={() => {
              window.location.href = window.location.pathname;
            }}
            className="flex items-center gap-2 text-sm font-semibold text-[#626b4c]"
          >
            <ArrowLeft size={20} />
            Tillbaka
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-16">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#858878]">
            DIN BESTÄLLNING
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Kundvagn
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl border border-[#e4e0d5] bg-white p-10 text-center">
            <ShoppingBag
              size={48}
              className="mx-auto text-[#858878]"
            />

            <h2 className="mt-5 text-2xl font-bold">
              Din kundvagn är tom
            </h2>

            <p className="mt-3 text-[#77796f]">
              Lägg till produkter för att se dem här.
            </p>

            <button
              type="button"
              onClick={() => {
                window.location.href = window.location.pathname;
              }}
              className="mt-7 rounded-xl bg-[#626b4c] px-6 py-3 font-semibold text-white"
            >
              Fortsätt handla
            </button>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {cart.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className="flex gap-4 rounded-3xl border border-[#e4e0d5] bg-white p-4 sm:p-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-2xl object-cover sm:h-32 sm:w-32"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#7b8065]">
                      {item.company}
                    </p>

                    <h2 className="mt-1 text-lg font-bold">
                      {item.name}
                    </h2>

                    <p className="mt-2 text-lg font-bold">
                      {item.price} kr
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-xl border border-[#ddd9cc]">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(index)}
                          className="flex h-9 w-9 items-center justify-center"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-8 text-center text-sm font-semibold">
                          {item.quantity || 1}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(index)}
                          className="flex h-9 w-9 items-center justify-center"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(index)}
                        aria-label="Ta bort"
                        className="flex h-9 w-9 items-center justify-center text-[#8a6d6d]"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-3xl border border-[#e4e0d5] bg-white p-6">
              <h2 className="text-xl font-bold">
                Sammanfattning
              </h2>

              <div className="mt-6 flex justify-between text-[#66685f]">
                <span>Produkter</span>
                <span>{total} kr</span>
              </div>

              <div className="mt-4 flex justify-between text-[#66685f]">
                <span>Leverans</span>
                <span>Beräknas senare</span>
              </div>

              <div className="my-6 border-t border-[#e8e5dc]" />

              <div className="flex justify-between text-xl font-bold">
                <span>Totalt</span>
                <span>{total} kr</span>
              </div>

              <button
                type="button"
                className="mt-7 w-full rounded-xl bg-[#626b4c] px-6 py-4 font-semibold text-white transition hover:bg-[#535c40]"
              >
                Gå till kassan
              </button>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}
