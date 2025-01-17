import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Pagination({ min = 0, max = 5, defaultPage = 1 }) {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  return (
    <main className="sticky-bottom-0 mb-5 mt-20 flex items-center justify-center gap-7">
      <p>
        <ArrowLeft />
      </p>
      {Array.from({ length: max }, (_, index) => index + 1).map((page) => (
        <p
          key={page}
          className={`text-md cursor-pointer ${currentPage === page ? "rounded-full border-2 bg-blue-500 p-2 px-4 text-white" : ""}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </p>
      ))}
      <p>
        <ArrowRight />
      </p>
    </main>
  );
}
