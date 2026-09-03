import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { Search, ArrowRight, Store, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "1",
    name: "Premium Hoodie",
    company: "Nordic UF",
    price: 399,
    category: "Mode",
    description: "En stilren och bekväm hoodie från Nordic UF.",
  },
  {
    id: "2",
    name: "Handgjorda ljus",
    company: "Luma UF",
    price: 149,
    category: "Inredning",
    description: "Handgjorda ljus med exklusiva dofter.",
  },
  {
    id: "3",
    name: "Logotyp & Design",
    company: "Creative UF",
    price: 499,
    category: "Tjänster",
    description: "Professionell grafisk design för ditt företag.",
  },
  {
    id: "4",
    name: "Personligt armband",
    company: "Bead UF",
    price: 99,
    category: "Accessoarer",
    description: "Personliga handgjorda armband.",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Link to="/" className="logo">
        ClickToFind
      </Link>

      <nav className={menuOpen ? "nav open" : "nav"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Hem
        </Link>

        <Link to="/utforska" onClick={() => setMenuOpen(false)}>
          Utforska
        </Link>

        <Link to="/om" onClick={() => setMenuOpen(false)}>
          Om oss
        </Link>

        <Link
          to="/salj"
          className="seller-button"
          onClick={() => setMenuOpen(false)}
        >
          Bli säljare
        </Link>
      </nav>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>
    </header>
  );
}

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/utforska?search=${encodeURIComponent(search)}`);
    } else {
      navigate("/utforska");
    }
  }

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="badge">🇸🇪 Sveriges UF-marknadsplats</div>

          <h1>
            Upptäck Sveriges
            <span> UF-företag.</span>
          </h1>

          <p>
            Hitta produkter och tjänster från unga entreprenörer.
            Upptäck något nytt och stöd nästa generations företagare.
          </p>

          <form className="search-box" onSubmit={handleSearch}>
            <Search size={22} />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Vad letar du efter?"
            />

            <button type="submit">Sök</button>
          </form>

          <div className="hero-buttons">
            <button onClick={() => navigate("/utforska")} className="primary">
              Utforska företag
              <ArrowRight size={19} />
            </button>

            <button onClick={() => navigate("/salj")} className="secondary">
              <Store size={19} />
              Bli säljare
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="small-title">UTVALT</p>
            <h2>Populärt just nu</h2>
          </div>

          <Link to="/utforska" className="view-all">
            Visa alla <ArrowRight size={17} />
          </Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

function Explore() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.company.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="page">
      <div className="page-header">
        <p className="small-title">MARKNADSPLATS</p>
        <h1>Utforska UF-företag</h1>
        <p>
          Hitta produkter och tjänster från unga entreprenörer över hela
          Sverige.
        </p>
      </div>

      <div className="explore-search">
        <Search size={21} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Sök produkter, företag eller kategorier..."
        />
      </div>

      <div className="categories">
        <button onClick={() => setSearch("")}>Alla</button>
        <button onClick={() => setSearch("Mode")}>Mode</button>
        <button onClick={() => setSearch("Inredning")}>Inredning</button>
        <button onClick={() => setSearch("Tjänster")}>Tjänster</button>
        <button onClick={() => setSearch("Accessoarer")}>Accessoarer</button>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty">
          <h3>Inga resultat hittades</h3>
          <p>Testa att söka efter något annat.</p>
        </div>
      )}
    </section>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <Link to={`/produkt/${product.id}`} className="product-card">
      <div className="product-image">
        <ShoppingBag size={42} />
      </div>

      <div className="product-info">
        <span>{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.company}</p>

        <div className="product-bottom">
          <strong>{product.price} kr</strong>
          <span>Visa →</span>
        </div>
      </div>
    </Link>
  );
}

function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="page empty">
        <h1>Produkten hittades inte</h1>
        <Link to="/utforska" className="primary">
          Tillbaka till utforska
        </Link>
      </section>
    );
  }

  return (
    <section className="page product-page">
      <Link to="/utforska" className="back">
        ← Tillbaka
      </Link>

      <div className="product-detail">
        <div className="large-product-image">
          <ShoppingBag size={80} />
        </div>

        <div>
          <span className="category">{product.category}</span>

          <h1>{product.name}</h1>

          <p className="company-name">{product.company}</p>

          <p className="description">{product.description}</p>

          <h2>{product.price} kr</h2>

          <button
            className="primary buy-button"
            onClick={() => alert("Beställningsfunktionen kommer snart!")}
          >
            Intresserad? Kontakta företaget
          </button>
        </div>
      </div>
    </section>
  );
}

function Sell() {
  return (
    <section className="page">
      <div className="seller-page">
        <div>
          <p className="small-title">FÖR UF-FÖRETAG</p>

          <h1>
            Sälj på
            <span> ClickToFind.</span>
          </h1>

          <p>
            Lägg upp dina produkter eller tjänster helt gratis och nå kunder
            över hela Sverige.
          </p>

          <ul>
            <li>✓ Gratis att skapa företagsprofil</li>
            <li>✓ Lägg upp produkter och tjänster</li>
            <li>✓ Nå fler kunder</li>
            <li>✓ Vi tar endast provision vid försäljning</li>
          </ul>
        </div>

        <div className="seller-box">
          <h2>Kom igång</h2>

          <input placeholder="Företagsnamn" />
          <input placeholder="E-postadress" />
          <input placeholder="Telefonnummer" />

          <button
            className="primary full"
            onClick={() => alert("Tack! Registreringen kommer snart.")}
          >
            Skapa säljarkonto
          </button>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <div className="about">
        <p className="small-title">OM OSS</p>

        <h1>
          En plats för
          <span> Sveriges UF-företag.</span>
        </h1>

        <p>
          ClickToFind är en digital marknadsplats skapad för att göra det
          enklare att upptäcka och handla från Sveriges unga entreprenörer.
        </p>

        <div className="about-grid">
          <div>
            <h2>Vårt mål</h2>
            <p>
              Vi vill ge UF-företag större möjligheter att synas och samtidigt
              göra det enklare för kunder att hitta nya produkter och tjänster.
            </p>
          </div>

          <div>
            <h2>För företagare</h2>
            <p>
              UF-företag ska kunna fokusera på sin verksamhet medan ClickToFind
              hjälper dem att nå nya kunder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-logo">ClickToFind</div>

      <div className="footer-links">
        <Link to="/">Hem</Link>
        <Link to="/utforska">Utforska</Link>
        <Link to="/salj">Bli säljare</Link>
        <Link to="/om">Om oss</Link>
      </div>

      <p>© 2026 ClickToFind. Skapad för Sveriges UF-företag.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/utforska" element={<Explore />} />
          <Route path="/salj" element={<Sell />} />
          <Route path="/om" element={<About />} />
          <Route path="/produkt/:id" element={<ProductPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
