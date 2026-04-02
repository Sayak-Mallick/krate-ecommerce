import { Route, Routes } from "react-router-dom";
import Authlayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white ">
        <Routes>
          <Route path="/auth" element={<Authlayout />}>
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
