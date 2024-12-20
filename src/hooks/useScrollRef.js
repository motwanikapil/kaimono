import { useRef } from "react";

export default function useScrollRef(scrollAmount = 500) {
  const ref = useRef(null);

  function next() {
    if (ref.current.scrollLeft !== ref.current.scrollRight)
      ref.current.scrollLeft += scrollAmount;
  }

  function previous() {
    if (ref.current.scrollLeft !== 0) ref.current.scrollLeft -= scrollAmount;
  }
  return [ref, next, previous];
}
