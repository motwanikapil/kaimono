import EmptyFillButton from "../components/EmptyFillButton";
import Pagination from "../components/Pagination";
import Slice from "../components/Slide";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { couponSchema } from "../utils/schemas";
import { ArrowRight } from "lucide-react";

const products = [
  {
    _id: 1,
    src: "/gaming-controller.jpg",
    name: "LCD Monitor",
    price: 550,
    quantity: 1,
  },
  {
    _id: 2,
    src: "/gaming-controller.jpg",
    name: "Game Pad",
    price: 650,
    quantity: 2,
  },
  {
    _id: 3,
    src: "/gaming-controller.jpg",
    name: "Fries",
    price: 150,
    quantity: 3,
  },
  {
    _id: 4,
    src: "/gaming-controller.jpg",
    name: "Fries",
    price: 150,
    quantity: 3,
  },
  {
    _id: 5,
    src: "/gaming-controller.jpg",
    name: "Fries",
    price: 150,
    quantity: 3,
  },
  {
    _id: 6,
    src: "/gaming-controller.jpg",
    name: "Fries",
    price: 150,
    quantity: 3,
  },
  {
    _id: 7,
    src: "/gaming-controller.jpg",
    name: "Fries",
    price: 150,
    quantity: 3,
  },
  {
    _id: 8,
    src: "/gaming-controller.jpg",
    name: "Fries",
    price: 150,
    quantity: 3,
  },
  {
    _id: 9,
    src: "/gaming-controller.jpg",
    name: "Fries",
    price: 150,
    quantity: 3,
  },
  {
    _id: 10,
    src: "/gaming-controller.jpg",
    name: "Fries",
    price: 150,
    quantity: 3,
  },
];

const subTotal = products.reduce(
  (sum, currentValue) => sum + currentValue.price * currentValue.quantity,
  0,
);

const shipping = 0;

export default function Cart() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(couponSchema),
  });

  return (
    <main className="w-full text-center">
      <Slice>
        <section className="grid gap-y-10">
          <article className="grid grid-cols-4 gap-y-8">
            <article className="text-sm font-semibold md:text-lg">
              Product
            </article>
            <article className="text-sm font-semibold md:text-lg">
              Price
            </article>
            <article className="text-sm font-semibold md:text-lg">
              Quantity
            </article>
            <article className="text-sm font-semibold md:text-lg">
              Subtotal
            </article>
          </article>
          <section className="grid w-full gap-y-10">
            {products.map(({ _id, src, name, price, quantity }) => (
              <article key={_id} className="grid grid-cols-4 items-center">
                <article className="flex flex-col items-center gap-3 ps-5 md:flex-row md:ps-20">
                  <img
                    src={src}
                    alt={name}
                    className="h-10 w-10 md:h-20 md:w-20"
                  />{" "}
                  {name}
                </article>
                <article className="text-sm md:text-lg">{price}</article>
                <article>
                  <input
                    type="number"
                    defaultValue={quantity}
                    className="w-10 border-2 border-black py-1.5 ps-3 text-center md:w-20"
                    min={0}
                  />
                </article>
                <article>{price * quantity}</article>
              </article>
            ))}
          </section>
        </section>
        <Pagination />
      </Slice>
      <section className="mt-10 flex w-full justify-between gap-10 px-3 md:gap-0 md:px-10">
        <EmptyFillButton>Return to Shop</EmptyFillButton>
        <EmptyFillButton>Update Cart</EmptyFillButton>
      </section>
      <section className="mt-10 grid grid-cols-2 place-items-center items-start">
        <section className="flex items-end gap-3">
          <Input
            name="coupon"
            type="text"
            placeholder="Coupon Code"
            register={register}
            errors={errors.coupon}
          />
          <Button>Apply Coupon</Button>
        </section>
        <section className="flex w-full flex-col gap-3 border-2 border-black p-5">
          <h1 className="text-3xl">Cart Total</h1>
          <p className="flex justify-between">
            <span>Subtotal</span>
            <span>${subTotal}</span>
          </p>
          <hr className="border-gray-400" />
          <p className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : shipping}</span>
          </p>
          <hr className="border-gray-400" />
          <p className="flex justify-between">
            <span>Total</span>
            <span>${subTotal + shipping}</span>
          </p>
          <Button to="/cart/checkout">
            <p className="flex items-center justify-center gap-5">
              Checkout <ArrowRight />
            </p>
          </Button>
        </section>
      </section>
    </main>
  );
}
