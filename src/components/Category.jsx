import React from "react";
import { Link } from "react-router-dom";
import IconRenderer from "./IconRenderer";

export default function Category() {
  return (
    <li className="flex h-36 w-36 flex-col">
      <Link className="h-36 w-36 border-2 border-gray-200">
        <section className="flex h-full flex-col items-center justify-center gap-5">
          <article>
            <IconRenderer iconName={"AArrowUp"} size={48} />
          </article>
          <h1>Category</h1>
        </section>
      </Link>
    </li>
  );
}
