import { Heart, Menu, Search, ShoppingCartIcon, User } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  return (
    <nav className="mb-10 flex flex-col items-center justify-between px-10 pt-5 md:flex-row">
      <section className="flex w-full items-center justify-between">
        <NavLink to="/">
          <img src="/brand.png" className="h-7 object-contain" />
        </NavLink>

        <section className="hidden items-center justify-between gap-5 md:flex">
          <ul className="flex flex-col gap-5 md:flex-row">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="signup">Sign up</NavLink>
            </li>
          </ul>

          <section className="relative mr-5">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-[110%] border-2 py-3 pr-10 ps-3 outline-none focus:border-gray-500"
            />
            <article className="pointer-events-none absolute inset-y-0 right-2 flex items-center pl-3">
              <Search color="#aaa" size="20" />
            </article>
          </section>

          <section className="flex items-center justify-between gap-5">
            <NavLink to="wishlist">
              <Heart className="duration-300 hover:scale-150" />
            </NavLink>
            <NavLink to="cart">
              <ShoppingCartIcon className="duration-300 hover:scale-150" />
            </NavLink>
            <NavLink to="account">
              <User className="duration-300 hover:scale-150" />
            </NavLink>
          </section>

          <button
            className="md:hidden"
            onClick={() => setIsMenuHidden((prev) => !prev)}
          >
            <Menu />
          </button>
        </section>
      </section>
    </nav>
  );
}
