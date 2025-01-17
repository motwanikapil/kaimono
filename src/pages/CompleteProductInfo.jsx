import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { ListRestart, Truck } from "lucide-react";

const images = [
  {
    url: "/gaming-controller.jpg",
  },
  {
    url: "/new-arrival-1.png",
  },
  {
    url: "/new-arrival-2.png",
  },
  {
    url: "/new-arrival-3.png",
  },
  {
    url: "/new-arrival-4.png",
  },
];

const CompleteProductInfo = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <main>
      <section className="grid grid-cols-[10%_50%_40%] gap-3">
        {/* product images section */}
        <section className="flex flex-col gap-2">
          {images.map((image, index) => (
            <img
              src={image.url}
              alt="gaming controller image"
              className="h-32 w-32 rounded-md"
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </section>
        <section>
          <img
            src={images[currentImage].url}
            className="h-full rounded-md"
            alt="gaming controller"
          />
        </section>
        <section className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Product Name</h1>
          {/* star rating */}
          <article className="flex gap-4">
            {/* star rating component */}
            <p className="text-gray-500">(150 reviews)</p>|
            <p className="text-green-500"> In Stock</p>
          </article>
          <article>
            <p>$192.00</p>
          </article>
          <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            odio, reiciendis tempora ullam sed totam? Placeat sit est, maxime
            temporibus, possimus, quos nobis iusto suscipit velit cupiditate
            reprehenderit reiciendis harum?
          </article>
          <hr />
          <article>
            Colors:
            {/* color component */}
          </article>
          <article>Size :{/* size component */}</article>
          <article>
            {/* quantity component */}
            <Button>Buy Now</Button>
            {/* Like component */}
          </article>
          <article>
            <article>
              <Truck />
              <article>
                <h1>Free Delivery</h1>
                <p>Enter your postal code for delivery availability</p>
              </article>
            </article>
            <article>
              <ListRestart />
              <article>
                <h1>Return Delivery</h1>
                <p>Free 7 days delivery returns</p>
              </article>
            </article>
          </article>
        </section>
      </section>
      <section></section>
    </main>
  );
};

export default CompleteProductInfo;
