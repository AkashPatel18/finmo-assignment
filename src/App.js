import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./Component/NavBar";
import { Home } from "./Screens/Home";
import { Login } from "./Screens/Login";
import { Signup } from "./Screens/Signup";
import { Product } from "./Screens/Product";
import { Cart } from "./Screens/Cart";

function App() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.login);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </>
        )}
        <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
