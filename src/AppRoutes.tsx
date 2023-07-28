import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./Orders";
import Navbar from "./Navbar";
import Home from "./Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
