import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Account from "./pages/Account";
import Profile from "./components/Profile";
import AddressBook from "./components/AddressBook";
import PaymentOptions from "./components/PaymentOptions";
import Returns from "./components/Returns";
import Cancellations from "./components/Cancellations";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="account" element={<Account />}>
            <Route path="profile" element={<Profile />} />
            <Route path="addressbook" element={<AddressBook />} />
            <Route path="paymentoptions" element={<PaymentOptions />} />
            <Route path="returns" element={<Returns />} />
            <Route path="cancellations" element={<Cancellations />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
