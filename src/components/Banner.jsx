export default function Banner() {
  return (
    <section className="relative w-full">
      <img
        className="h-full w-full"
        src="/banner.png"
        alt="sound bar advertisement"
      />
      <article className="absolute left-10 top-3/4 h-full w-full md:top-3/4">
        <button className="bg-green-500 px-2 py-1 text-white transition-all duration-200 hover:bg-green-600 hover:underline">
          Shop Now
        </button>
      </article>
    </section>
  );
}
