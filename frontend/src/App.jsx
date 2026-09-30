import { Routes, Route, useLocation } from "react-router";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/(protected)/Settings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import UserNavbar from "./components/UserNavbar";
import { useAuth } from "./context/AuthProvider";
import ProtectedRoutes from "./components/ProtectedRoutes";
import GuestRoutes from "./components/GuestRoutes";

function App() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();

  const isAuthPage = ["/login", "/signup", "/forgot-password"].includes(pathname);
  const isPublicPage = pathname === "/" || pathname === "/about";

  const showNavbar = !isAuthPage;
  const showSidebar = isAuthenticated && !isAuthPage && !isPublicPage;
  const showFooter = isPublicPage;

  return (
    <>
      {showNavbar && (
        isAuthenticated && !isPublicPage ? <UserNavbar /> : <Navbar />
      )}
      {showSidebar && <Sidebar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route element={<GuestRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}

export default App
