import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/1home/HomePage";
import ShopPage from "./components/2shop/ShopPage";
import DetailPage from "./components/3detail/DetailPage";
import PagesPage from "./components/4pages/PagesPage";
import ContactPage from "./components/5contact/ContactPage";
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
          />
          <Route
            path="pages"
            element={<PagesPage />}
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
