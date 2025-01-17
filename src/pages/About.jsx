import Sales from "../components/Sales";
import Slide from "../components/Slide";
import Team from "../components/Team";
import Services from "../components/Services";

export default function About() {
  return (
    <main>
      <Slide>
        <section className="grid grid-cols-2 gap-10">
          <article>
            <h1 className="text-5xl font-semibold">Our Story</h1>
            <article className="mt-5 flex flex-col gap-5">
              <p className="leading-7">
                Launched in 2015, Kaimono is South Asia's premier online
                shopping marketplace with an active presence in India, Suported
                by wide range of tailored marketing, data and service solutions,
                Kaimono has 10,500 sellers and 300 brands and serves 3 million
                customers across the region
              </p>
              <p className="leading-7">
                Kaimono has more than 1 million products to offer, growing at a
                very fast. Kaimono offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </article>
          </article>
          <img src="/about-image.png" alt="Some girls with shopping bags" />
        </section>
      </Slide>
      <Slide>
        <Sales />
      </Slide>
      <Slide>
        <Team />
      </Slide>
      <Slide>
        <section className="mb-10 mt-20 pr-10">
          <Services />
        </section>
      </Slide>
    </main>
  );
}
