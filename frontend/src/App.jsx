import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
