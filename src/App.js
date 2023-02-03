import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./components/1home/HomePage";
import ShopPage from "./components/2shop/ShopPage";
import DetailPage from "./components/3detail/DetailPage";
import PagesPage from "./components/4pages/PagesPage";
import ContactPage from "./components/5contact/ContactPage";
import Checkout from "./components/4pages/Checkout";
import ShoppingCard from "./components/4pages/ShoppingCard";
import Card from "./components/2shop/Card";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="shop"
            element={<ShopPage />}
          />
          <Route
            path="detail"
            element={<DetailPage />}
          >
            <Route
              index
              element={<Card />}
            />
          </Route>

          <Route
            path="pages"
            element={<PagesPage />}
          />
          <Route
            path="shopcard"
            element={<ShoppingCard />}
          />
          <Route
            path="checkout"
            element={<Checkout />}
          />

          <Route
            path="contact"
            element={<ContactPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
