import { DollarSign, Receipt, ShoppingBag, Store } from "lucide-react";

function Service({ children, Icon, heading, subHeading }) {
  return (
    <article className="flex flex-col items-center gap-3">
      <Icon
        size={40}
        className="h-24 w-24 rounded-full bg-black p-6 text-white"
      />
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <p className="text-gray-500">{subHeading}</p>
    </article>
  );
}

export default function Sales() {
  return (
    <section className="mx-10 my-20 flex justify-between gap-5 py-10 md:gap-0 md:px-20">
      <Service
        Icon={Store}
        heading="10.5k"
        subHeading="Sellers active our site"
      />
      <Service
        Icon={DollarSign}
        heading="33k"
        subHeading="Monthly Product Sale"
      />
      <Service
        Icon={ShoppingBag}
        heading="45.5k"
        subHeading="Customer active in our site"
      />
      <Service
        Icon={Receipt}
        heading="25k"
        subHeading="Annual gross sale in our site"
      />
    </section>
  );
}
