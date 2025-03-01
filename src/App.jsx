import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Order from "./pages/Order";
import Search from "./pages/Search";
import Product_Details from "./pages/Product_Details";
import Blog_Details from "./pages/Blog_details";
import Privacy_policy from "./pages/Privacy_policy";
import Terms_and_Conditions from "./pages/Terms_and_Conditions";
import Shipping_Policy from "./pages/Shipping_Policy";
import Refund_policy from "./pages/Refund_policy";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Product_Details />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Blog_Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order" element={<Order />} />
          <Route path="/search" element={<Search />} />
          <Route path="/refund-policy" element={< Refund_policy/>} />
          <Route path="/shipping-policy" element={<Shipping_Policy />} />
          <Route path="/terms-and-Conditions" element={<Terms_and_Conditions />} />
          <Route path="/privacy-policy" element={<Privacy_policy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
