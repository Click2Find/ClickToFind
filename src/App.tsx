import Home from "./Home";
import ProductDetail from "./ProductDetail";

export default function App() {
  const isProductPage = window.location.hash === "#product";

  if (isProductPage) {
    return <ProductDetail />;
  }

  return <Home />;
}
