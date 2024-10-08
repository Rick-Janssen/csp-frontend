import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/RegisterPage/Register";
import Login from "./pages/LoginPage/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import LandingPage from "./components/LandingComponent/LandingPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import MostRatedPage from "./pages/MostRatedPage/MostRatedPage";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/About";
import AdminPage from "./pages/AdminPage/AdminPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUs/>}/> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/most_rated" element={<MostRatedPage />} />

        <Route path="/product/:id" element={<DetailsPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>

      </Routes>
    </>


  )
};
export default App;

