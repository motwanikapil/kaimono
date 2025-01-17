import Product from "../components/Product";

export default function Wishlist() {
  return (
    <main className="flex flex-col gap-10 px-10">
      <header className="flex items-center justify-between px-16">
        <h1 className="text-4xl font-bold">Wishlist</h1>
        <button className="rounded-lg border-2 border-black px-6 py-3 transition-all duration-300 hover:bg-black hover:text-white">
          Move All to Bag
        </button>
      </header>
      <section>
        <ul className="grid place-items-center items-center gap-5 overflow-x-auto px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      </section>
      <header className="mt-10 flex items-center justify-between px-16">
        <h1 className="text-4xl font-bold">Just for you</h1>
        <button className="rounded-lg border-2 border-black px-6 py-3 transition-all duration-300 hover:bg-black hover:text-white">
          See All
        </button>
      </header>
      <section>
        <ul className="grid place-items-center items-center gap-5 overflow-x-auto px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      </section>
    </main>
  );
}
