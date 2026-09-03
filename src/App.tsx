import { useMemo, useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  ChevronRight,
  Star,
  Menu,
  X,
  Store,
} from "lucide-react";
import "./index.css";

type Product = {
  id: number;
  name: string;
  company: string;
  category: string;
  price: number;
  rating: number;
  emoji: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Handgjort armband",
    company: "Nordic Threads UF",
    category: "Mode",
    price: 149,
    rating: 4.9,
    emoji: "📿",
  },
  {
    id: 2,
    name: "Doftljus",
    company: "Luma UF",
    category: "Hem",
    price: 99,
    rating: 4.8,
    emoji: "🕯️",
  },
  {
    id: 3,
    name: "Personlig poster",
    company: "Designa UF",
    category: "Design",
    price: 129,
    rating: 5.0,
    emoji: "🖼️",
  },
  {
    id: 4,
    name: "Chokladbox",
    company: "Sweet UF",
    category: "Mat",
    price: 179,
    rating: 4.7,
    emoji: "🍫",
  },
  {
    id: 5,
    name: "Tygkasse",
    company: "GreenBag UF",
    category: "Mode",
    price: 89,
    rating: 4.8,
    emoji: "👜",
  },
  {
    id: 6,
    name: "Mobilhållare",
    company: "Smart UF",
    category: "Teknik",
    price: 119,
    rating: 4.6,
    emoji: "📱",
  },
];

const categories = [
  "Alla",
  "Mode",
  "Hem",
  "Design",
  "Mat",
  "Teknik",
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alla");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.company.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "Alla" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  function toggleFavorite(id: number) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function addToCart(id: number) {
    setCart((current) => [...current, id]);
  }

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="header-inner">
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="logo">ClickToFind</div>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <button onClick={() => setCategory("Alla")}>Upptäck</button>
            <button onClick={() => setCategory("Mode")}>Mode</button>
            <button onClick={() => setCategory("Hem")}>Hem</button>
            <button onClick={() => setCategory("Design")}>Design</button>
            <button onClick={() => setCategory("Mat")}>Mat</button>
          </nav>

          <div className="header-actions">
            <button className="icon-button" title="Favoriter">
              <Heart size={21} />
              {favorites.length > 0 && (
                <span className="badge">{favorites.length}</span>
              )}
            </button>

            <button className="icon-button" title="Varukorg">
              <ShoppingBag size={21} />
              {cart.length > 0 && (
                <span className="badge">{cart.length}</span>
              )}
            </button>

            <button className="login-button">
              <User size={18} />
              Logga in
            </button>

            <button className="seller-button">
              <Store size={18} />
              Bli säljare
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              🇸🇪 Sveriges UF-marknadsplats
            </div>

            <h1>
              Upptäck nästa
              <span> stora UF-företag.</span>
            </h1>

            <p>
              Handla unika produkter och tjänster från unga entreprenörer
              över hela Sverige.
            </p>

            <div className="search-box">
              <Search size={22} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Vad letar du efter?"
              />
              {search && (
                <button onClick={() => setSearch("")}>
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories-section">
          <div className="section-heading">
            <div>
              <p className="small-title">Utforska</p>
              <h2>Vad letar du efter?</h2>
            </div>
          </div>

          <div className="categories">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "category active" : "category"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="products-section">
          <div className="section-heading">
            <div>
              <p className="small-title">Populärt just nu</p>
              <h2>
                {search
                  ? `Resultat för "${search}"`
                  : "Upptäck nya favoriter"}
              </h2>
            </div>

            <button
              className="view-all"
              onClick={() => {
                setSearch("");
                setCategory("Alla");
              }}
            >
              Visa alla <ChevronRight size={18} />
            </button>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="empty">
              <div>🔎</div>
              <h3>Vi hittade inget</h3>
              <p>Testa att söka efter något annat.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("Alla");
                }}
              >
                Visa alla produkter
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
                    <span>{product.emoji}</span>

                    <button
                      className={
                        favorites.includes(product.id)
                          ? "favorite active"
                          : "favorite"
                      }
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart
                        size={19}
                        fill={
                          favorites.includes(product.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                  </div>

                  <div className="product-info">
                    <p className="company">{product.company}</p>

                    <h3>{product.name}</h3>

                    <div className="rating">
                      <Star size={15} fill="currentColor" />
                      {product.rating}
                    </div>

                    <div className="product-bottom">
                      <strong>{product.price} kr</strong>

                      <button
                        className="add-button"
                        onClick={() => addToCart(product.id)}
                      >
                        <ShoppingBag size={17} />
                        Lägg till
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* SELLER CTA */}
        <section className="seller-cta">
          <div>
            <p className="small-title">Driver du UF?</p>
            <h2>Sälj dina produkter på ClickToFind.</h2>
            <p>
              Skapa din butik och nå kunder över hela Sverige.
            </p>
          </div>

          <button className="cta-button">
            Bli säljare <ChevronRight size={19} />
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">ClickToFind</div>
        <p>Marknadsplatsen för Sveriges UF-företag.</p>
        <span>© 2026 ClickToFind</span>
      </footer>
    </div>
  );
}

export default App;
