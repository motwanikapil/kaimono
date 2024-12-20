import BrowseByCategory from "../components/BrowseByCategory";
import FlashSale from "../components/FlashSale";
import HomepageCarousel from "../components/HomepageCarousel";
import BestSellingProducts from "../components/BestSellingProducts";
import ExploreOurProducts from "../components/ExploreOurProducts";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { ArrowUp } from "lucide-react";
import { useRef } from "react";

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
    <main className="flex flex-col gap-7" ref={scrollToTop}>
      <HomepageCarousel />
      <FlashSale />
      <BrowseByCategory />
      <BestSellingProducts />
      <Banner />
      <ExploreOurProducts />
      <Services />
      <button onClick={scrollTop}>
        <ArrowUp />
      </button>
    </main>
  );
}