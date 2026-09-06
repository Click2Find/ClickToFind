import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
