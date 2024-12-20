export default function Banner() {
  return (
    <section className="relative w-full">
      <img
        className="h-full w-full"
        src="/banner.png"
        alt="sound bar advertisement"
      />
      <article className="absolute left-40 top-3/4">
        <button className="bg-green-500 px-10 py-5 text-white transition-all duration-200 hover:bg-green-600 hover:underline">
          Shop Now
        </button>
      </article>
    </section>
  );
}
