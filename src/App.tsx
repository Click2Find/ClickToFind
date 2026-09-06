import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductDetail />} />
    </Routes>
  );
}
