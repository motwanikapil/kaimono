import React, { useRef } from "react";
import Product from "./Product";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useScrollRef from "../hooks/useScrollRef";
import Category from "./Category";
import Arrow from "./Arrow";

export default function BrowseByCategory() {
  const [categoriesRef, next, previous] = useScrollRef();

  return (
    <main className="mt-10 flex flex-col justify-center">
      <section className="flex justify-between ps-2">
        <h1 className="text-3xl font-bold">Categories</h1>
        <article className="flex items-center gap-2">
          <Arrow onClick={previous}>
            <ArrowLeft />
          </Arrow>
          <Arrow onClick={next}>
            <ArrowRight />
          </Arrow>
        </article>
      </section>
      <ul className="flex gap-5 overflow-auto py-5" ref={categoriesRef}>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </ul>
    </main>
  );
}
