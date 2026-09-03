import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  company: string;
  category: string;
  price: string;
  emoji: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Handgjorda ljus",
    company: "Nordic Candle UF",
    category: "Inredning",
    price: "149 kr",
    emoji: "🕯️",
  },
  {
    id: 2,
    name: "Personlig poster",
    company: "Design UF",
    category: "Design",
    price: "199 kr",
    emoji: "🎨",
  },
  {
    id: 3,
    name: "Träningsschema",
    company: "Fit UF",
    category: "Tjänster",
    price: "99 kr",
    emoji: "🏋️",
  },
  {
    id: 4,
    name: "Armband",
    company: "Young Style UF",
    category: "Mode",
    price: "79 kr",
    emoji: "📿",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alla");
  const [sellerOpen, setSellerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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

  const scrollToProducts = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">ClickToFind</div>

        <nav>
          <button onClick={scrollToProducts}>Upptäck</button>
          <button onClick={() => setCategory("Tjänster")}>Tjänster</button>
          <button onClick={() => setCategory("Mode")}>Mode</button>
          <button onClick={() => setCategory("Inredning")}>Inredning</button>
        </nav>

        <button className="seller-button" onClick={() => setSellerOpen(true)}>
          Bli säljare
        </button>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="badge">🇸🇪 Sveriges UF-marknadsplats</div>

            <h1>
              Upptäck framtidens
              <span> entreprenörer.</span>
            </h1>

            <p>
              Hitta unika produkter och tjänster från UF-företag över hela
              Sverige.
            </p>

            <div className="search-box">
              <span>⌕</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Vad letar du efter?"
              />
              <button onClick={scrollToProducts}>Sök</button>
            </div>

            <div className="hero-buttons">
              <button className="primary-button" onClick={scrollToProducts}>
                Utforska produkter →
              </button>

              <button
                className="secondary-button"
                onClick={() => setSellerOpen(true)}
              >
                Sälj på ClickToFind
              </button>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories">
          <div className="section-heading">
            <div>
              <span>UPPTÄCK</span>
              <h2>Vad letar du efter?</h2>
            </div>
          </div>

          <div className="category-grid">
            {["Alla", "Mode", "Inredning", "Design", "Tjänster"].map(
              (item) => (
                <button
                  key={item}
                  className={`category-card ${
                    category === item ? "active" : ""
                  }`}
                  onClick={() => {
                    setCategory(item);
                    setTimeout(scrollToProducts, 50);
                  }}
                >
                  <strong>
                    {item === "Alla" && "✨"}
                    {item === "Mode" && "👕"}
                    {item === "Inredning" && "🏠"}
                    {item === "Design" && "🎨"}
                    {item === "Tjänster" && "💼"}
                  </strong>

                  <span>{item}</span>
                  <small>Utforska →</small>
                </button>
              )
            )}
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="products-section" id="products">
          <div className="section-heading product-heading">
            <div>
              <span>MARKNADSPLATS</span>
              <h2>Populärt just nu</h2>
            </div>

            <p>
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "resultat" : "resultat"}
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="no-results">
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
                  <div className="product-image">{product.emoji}</div>

                  <div className="product-info">
                    <span className="product-category">
                      {product.category}
                    </span>

                    <h3>{product.name}</h3>

                    <p className="company">{product.company}</p>

                    <div className="product-bottom">
                      <strong>{product.price}</strong>

                      <button onClick={() => setSelectedProduct(product)}>
                        Visa produkt
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
            <span>DRIVER DU UF-FÖRETAG?</span>
            <h2>Få dina produkter framför fler kunder.</h2>
            <p>
              Lägg upp dina produkter och tjänster gratis. Vi tar endast
              provision när du säljer.
            </p>
          </div>

          <button onClick={() => setSellerOpen(true)}>
            Bli säljare →
          </button>
        </section>
      </main>

      {/* SELLER MODAL */}
      {sellerOpen && (
        <div className="modal-overlay" onClick={() => setSellerOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSellerOpen(false)}
            >
              ×
            </button>

            <span className="modal-label">BLI SÄLJARE</span>
            <h2>Sälj på ClickToFind</h2>

            <p>
              Skapa en butik för ditt UF-företag och nå nya kunder över hela
              Sverige.
            </p>

            <input placeholder="Företagsnamn" />
            <input placeholder="E-postadress" />

            <button
              className="primary-button full-width"
              onClick={() => {
                alert("Tack! Vi återkommer med mer information.");
                setSellerOpen(false);
              }}
            >
              Skicka intresse →
            </button>
          </div>
        </div>
      )}

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="modal product-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <div className="modal-product-image">
              {selectedProduct.emoji}
            </div>

            <span className="modal-label">{selectedProduct.category}</span>

            <h2>{selectedProduct.name}</h2>

            <p className="company">{selectedProduct.company}</p>

            <div className="modal-price">{selectedProduct.price}</div>

            <button
              className="primary-button full-width"
              onClick={() =>
                alert(
                  `Du har valt ${selectedProduct.name}. Köp-funktionen kopplas på när vi lägger till riktiga UF-butiker.`
                )
              }
            >
              Köp / Kontakta säljaren
            </button>
          </div>
        </div>
      )}

      <footer>
        <strong>ClickToFind</strong>
        <p>En marknadsplats för Sveriges UF-företag.</p>
      </footer>
    </div>
  );
}

export default App;
