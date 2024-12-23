import BrowseByCategory from "../components/BrowseByCategory";
import FlashSale from "../components/FlashSale";
import HomepageCarousel from "../components/HomepageCarousel";
import BestSellingProducts from "../components/BestSellingProducts";
import ExploreOurProducts from "../components/ExploreOurProducts";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { ArrowUp } from "lucide-react";
import { useRef } from "react";
import Slide from "../components/Slide";

export default function Home() {
  const scrollToTop = useRef(null);
  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <main className="flex flex-col gap-10" ref={scrollToTop}>
      <Slide>
        <HomepageCarousel />
      </Slide>
      <Slide>
        <FlashSale />
      </Slide>
      <Slide>
        <BrowseByCategory />
      </Slide>
      <Slide>
        <BestSellingProducts />
      </Slide>
      <Slide>
        <Banner />
      </Slide>
      <Slide>
        <ExploreOurProducts />
      </Slide>
      <Slide>
        <Services />
      </Slide>
      <button
        onClick={scrollTop}
        className="max-w-fit rounded-full border-2 border-black bg-gray-200 p-2"
      >
        <ArrowUp />
      </button>
    </main>
  );
}
