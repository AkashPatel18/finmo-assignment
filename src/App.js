import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./Component/NavBar";
import { Home } from "./Screens/Home";
import { Login } from "./Screens/Login";
import { Signup } from "./Screens/Signup";

function App() {
  const user = null;
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {user ? (
          <Route path="/" element={<Home />} />
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
