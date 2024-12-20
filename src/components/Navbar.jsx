import { Heart, Menu, Search, ShoppingCartIcon } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  return (
    <nav className="mb-10 flex flex-col items-center justify-between gap-10 px-10 pt-5 md:flex-row">
      <section className="flex w-full justify-between">
        <img src="/brand.png" className="h-7 object-contain" />
        <button
          className="md:hidden"
          onClick={() => setIsMenuHidden((prev) => !prev)}
        >
          <Menu />
        </button>
      </section>
      {!isMenuHidden && (
        <section className="flex flex-1 flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
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

          <ul className="flex items-center gap-5">
            <section className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-[110%] py-3 pr-10 ps-3"
              />
              <article className="pointer-events-none absolute inset-y-0 right-2 flex items-center pl-3">
                <Search color="#aaa" size="20" />
              </article>
            </section>

            <NavLink to="wishlist">
              <Heart />
            </NavLink>
            <NavLink to="cart">
              <ShoppingCartIcon />
            </NavLink>
          </ul>
        </section>
      )}
    </nav>
  );
}
