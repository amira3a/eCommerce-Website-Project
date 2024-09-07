import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import ShopCategory from "./components/ShopCategory/ShopCategory";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product"
import homeBanner from "./assets/Images/home-banner.png";
import banner from "./assets/Images/banner.png";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home banner={homeBanner} />} />
            <Route
              path="/shop"
              element={<Shop banner={banner} banText="Shop" />}
            />
            <Route
              path="dining"
              element={
                <ShopCategory
                  banner={banner}
                  category="men's clothing"
                  banText="Men"
                />
              }
            />
            <Route
              path="living"
              element={
                <ShopCategory
                  banner={banner}
                  category="jewelery"
                  banText="jewelery"
                />
              }
            />
            <Route
              path="bedroom"
              element={
                <ShopCategory
                  banner={banner}
                  category="electronics"
                  banText="Electronics"
                />
              }
            />
            <Route
              path="/contact"
              element={<Contact banner={banner} banText="Contact" />}
            />
            <Route
              path="/cart"
              element={<Cart banner={banner} banText="Cart" />}
            />
          </Route>
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
