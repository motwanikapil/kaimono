import { Heart, Menu, Search, ShoppingCartIcon, User } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <nav className="mb-10 flex items-center justify-between gap-5 px-10 pt-5">
      <NavLink to="/">
        <img src="/brand.png" className="h-7 object-contain" />
      </NavLink>

      <ul className="hidden flex-col items-center justify-between gap-5 md:flex-row lg:flex">
        <li>
          <NavLink
            className="hover:font-bold hover:underline hover:underline-offset-4"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:font-bold hover:underline hover:underline-offset-4"
            to="about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:font-bold hover:underline hover:underline-offset-4"
            to="contact"
          >
            Contact
          </NavLink>
        </li>

        {!isAuthenticated && (
          <>
            <li>
              <NavLink
                className="hover:font-bold hover:underline hover:underline-offset-4"
                to="login"
              >
                Login
              </NavLink>
            </li>
            <li className="flex">
              <Button to="/signup" className="mt-0">
                Sign up
              </Button>
            </li>
          </>
        )}
      </ul>

      <section className="relative mr-5 hidden flex-1 lg:flex">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="transition-underline w-full border-b-2 py-3 pr-10 ps-3 outline-none duration-300 focus:border-gray-500"
        />
        <article className="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-3">
          <Search color="#aaa" size="20" />
        </article>
      </section>

      <section className="hidden items-center justify-between gap-5 lg:flex">
        <NavLink to="wishlist">
          <Heart className="duration-300 hover:scale-125" />
        </NavLink>
        <NavLink to="cart">
          <ShoppingCartIcon className="duration-300 hover:scale-125" />
        </NavLink>
        {isAuthenticated && (
          <NavLink to="account">
            <User className="duration-300 hover:scale-125" />
          </NavLink>
        )}
      </section>

      <button
        className="md:hidden"
        onClick={() => setIsMenuHidden((prev) => !prev)}
      >
        <Menu />
      </button>
    </nav>
  );
}
