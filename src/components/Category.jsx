import {
  Computer,
  ComputerIcon,
  LucideCombine,
  LucideComputer,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Category() {
  return (
    <li className="flex h-36 w-36 flex-col">
      <NavLink className="h-36 w-36 border-2 border-gray-200">
        <section className="flex h-full flex-col items-center justify-center gap-5">
          <article>
            <LucideComputer size={48} />
          </article>
          <h1>Category</h1>
        </section>
      </NavLink>
    </li>
  );
}
