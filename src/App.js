import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Restaurant from "./components/Restaurant";
import Indivisual from "./components/Indivisual";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/indivisual/:id" element={<Indivisual />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
