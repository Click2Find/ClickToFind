import Home from "./Home";
import ProductDetail from "./ProductDetail";

export default function App() {
  const path = window.location.pathname;

  if (path.includes("/product")) {
    return <ProductDetail />;
  }

  return <Home />;
}
