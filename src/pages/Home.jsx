import BrowseByCategory from "../components/BrowseByCategory";
import FlashSale from "../components/FlashSale";
import HomepageCarousel from "../components/HomepageCarousel";
import BestSellingProducts from "../components/BestSellingProducts";
import ExploreOurProducts from "../components/ExploreOurProducts";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Slide from "../components/Slide";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [scrollToTopRef, scrollToTop] = useScrollToTop();
  return (
    <main className="flex flex-col gap-10" ref={scrollToTopRef}>
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
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 max-w-fit rounded-full border-2 border-black bg-gray-200 p-2 hover:bg-gray-400"
      >
        <ArrowUp />
      </button>
    </main>
  );
}
