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
import CheckAuth from "./components/common/checkAuth";

function App() {
  const isAuthenticated = true;
  const user = {
    name: "Sayak",
    role: "admin",
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white ">
        <Routes>
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Authlayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Adminlayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="features" element={<Features />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout />
              </CheckAuth>
            }
          >
            <Route index element={<Home />} />
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
