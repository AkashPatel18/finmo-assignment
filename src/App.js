import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./component/NavBar";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
