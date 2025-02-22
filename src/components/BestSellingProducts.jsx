import React, { useRef } from "react";
import Product from "./Product";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useScrollRef from "../hooks/useScrollRef";
import Button from "./Button";
import Arrow from "./Arrow";

export default function BestSellingProducts() {
  const [bestSellingProductsRef, next, previous] = useScrollRef();

  return (
    <main className="flex flex-col justify-center">
      <section className="flex justify-between ps-2">
        <h1 className="text-3xl font-bold">Best Selling Products</h1>
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
        className="flex gap-5 overflow-x-auto py-5"
        ref={bestSellingProductsRef}
      >
        <Product />
        <Product />
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
        <Button to="/allproducts">View All Products</Button>
      </section>
    </main>
  );
}
