import { Route, Routes } from "react-router-dom";
import Authlayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import Adminlayout from "./components/admin/layout";
import Dashboard from "./pages/admin/Dashboard";
import Features from "./pages/admin/Features";
import Orders from "./pages/admin/Orders";
import Products from "./pages/admin/Products";
import ShoppingLayout from "./components/shopping/layout";
import NotFound from "./pages/not-found";
import Account from "./pages/shopping/Account";
import Home from "./pages/shopping/Home";
import Listing from "./pages/shopping/Listing";
import Checkout from "./pages/shopping/Checkout";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white ">
        <Routes>
          <Route path="/auth" element={<Authlayout />}>
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route path="/admin" element={<Adminlayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="features" element={<Features />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="/shop" element={<ShoppingLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="listing" element={<Listing />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
