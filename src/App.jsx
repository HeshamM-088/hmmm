import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
