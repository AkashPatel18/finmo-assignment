import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Component/NavBar";
import { Home } from "./Screens/Home";
import { Login } from "./Screens/Login";
import { Signup } from "./Screens/Signup";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
