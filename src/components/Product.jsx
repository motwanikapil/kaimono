import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const [isLiked, setIsLiked] = useState(false);
  function handleLike() {
    setIsLiked((prev) => !prev);
  }
  return (
    <li>
      <Link className="flex h-80 w-64 flex-col justify-between rounded-md border-4 border-gray-300 p-3">
        <section className="relative">
          <img
            src="/gaming-controller.jpg"
            alt="gaming controller image"
            className="h-52 rounded-t-lg"
          />
          <article
            className="absolute inset-y-0 right-2 top-2 text-white"
            onClick={handleLike}
          >
            <Heart
              fill={isLiked ? `#fff` : ""}
              className="animate-[pulse_1s_ease-in-out_1] transition"
            />
          </article>
        </section>
        <h3>HAVIT HV-G92 Gamepad</h3>
        <section className="flex gap-3">
          <p>$120</p>
          <p className="text-gray-500 line-through">$160</p>
        </section>
        <section className="flex gap-3">
          <p>* * * * *</p>
          <p>(86)</p>
        </section>
      </Link>
    </li>
  );
}
