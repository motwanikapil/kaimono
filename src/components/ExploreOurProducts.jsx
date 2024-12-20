import React, { useRef } from "react";
import Product from "./Product";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useScrollRef from "../hooks/useScrollRef";
import Button from "./Button";

function Arrow({ children, onClick }) {
  return (
    <button onClick={onClick} className="rounded-full bg-gray-200 p-2">
      {children}
    </button>
  );
}

export default function FlashSale() {
  const [productsSaleRef, next, previous] = useScrollRef();

  return (
    <main className="flex flex-col">
      <section className="flex justify-between ps-2">
        <h1 className="mb-5 text-3xl font-bold">Explore Our Products</h1>
        <article className="flex items-center gap-2">
          <Arrow onClick={previous}>
            <ArrowLeft />
          </Arrow>
          <Arrow onClick={next}>
            <ArrowRight />
          </Arrow>
        </article>
      </section>
      <ul
        className="grid place-items-center items-center gap-5 overflow-x-auto px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        ref={productsSaleRef}
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ul>
      <section className="text-center">
        <Button>View All Products</Button>
      </section>
    </main>
  );
}
