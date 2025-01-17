import { Headphones, Shield, Truck } from "lucide-react";

function Service({ children, Icon, heading, subHeading }) {
  return (
    <article className="flex flex-col items-center gap-3">
      <Icon
        size={52}
        className="h-24 w-24 rounded-full bg-black p-4 text-white"
      />
      <h1 className="uppercase">{heading}</h1>
      <p className="text-gray-500">{subHeading}</p>
    </article>
  );
}

export default function Services() {
  return (
    <section className="mt-10 flex justify-between gap-5 py-10 md:gap-0 md:px-20">
      <Service
        Icon={Truck}
        heading="Free and fast delivery"
        subHeading="Free delivery for all orders over $140"
      />
      <Service
        Icon={Headphones}
        heading="24/7 Customer Service"
        subHeading="Friendly 24/7 customer support"
      />
      <Service
        Icon={Shield}
        heading="Money back guarantee"
        subHeading="We return money within 30 days"
      />
    </section>
  );
}
