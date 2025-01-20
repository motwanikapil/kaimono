import { ArrowUp } from "lucide-react";
import { useRef } from "react";

export function useScrollToTop() {
  const scrollToTopRef = useRef(null);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return [scrollToTopRef, scrollToTop];
}
