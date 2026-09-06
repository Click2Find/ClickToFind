import { useEffect, useState } from "react";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import CompanyPage from "./CompanyPage";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (hash === "#product") {
    return <ProductDetail />;
  }

  if (hash === "#company") {
    return <CompanyPage />;
  }

  return <Home />;
}
