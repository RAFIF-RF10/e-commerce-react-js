import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import productDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/cart" Component={CartPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/product/:productId" Component={productDetailPage} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
