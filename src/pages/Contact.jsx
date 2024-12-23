import { Mail, PhoneCall } from "lucide-react";
import Input from "../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../utils/schemas";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import Slide from "../components/Slide";

function ContactForm() {
  function onSubmit(data) {
    console.log(data);
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col justify-center gap-10"
    >
      <h1 className="text-center text-4xl font-bold">Contact Us</h1>
      <Input
        name="name"
        type="text"
        placeholder="Your Name"
        register={register}
        errors={errors.name}
      />
      <Input
        name="email"
        type="email"
        placeholder="Your Email"
        register={register}
        errors={errors.email}
      />
      <Input
        name="phone"
        type="tel"
        placeholder="Your Phone"
        register={register}
        errors={errors.phone}
      />
      <textarea
        name="message"
        id="message"
        placeholder="Your Message"
        className="resize-none border-b-2 px-2 py-1.5 outline-none transition-all duration-300 focus:border-gray-500"
        rows={6}
        {...register("message")}
      ></textarea>
      <Button type="submit">Send Message</Button>
    </form>
  );
}

export default function Contact() {
  return (
    <Slide>
      <main className="grid gap-10 md:grid-cols-2 md:gap-0">
        <section className="grid grid-rows-2">
          <article className="flex flex-col gap-5">
            <p className="flex items-center gap-5">
              <PhoneCall className="h-14 w-14 rounded-full border-2 border-gray-400 p-1" />{" "}
              <span className="font-bold"> Call To Us </span>
            </p>
            <p>We are available 24/7.</p>
            <p>Phone: +1 234 567 890</p>
          </article>
          <article className="flex flex-col gap-5">
            <p className="flex items-center gap-5">
              <Mail className="h-14 w-14 rounded-full border-2 border-gray-400 p-1" />{" "}
              <span className="font-bold"> Write To Us </span>
            </p>
            <p>Fill out our form and we will contact you within 24 hours</p>
            <p>Email: customer@kaimono.com</p>
            <p>Email: support@kaimono.com</p>
          </article>
        </section>
        <ContactForm />
      </main>
    </Slide>
  );
}
