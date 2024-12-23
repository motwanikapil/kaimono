import Input from "../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { billingSchema, contactSchema } from "../utils/schemas";
import Button from "../components/Button";
import { useForm } from "react-hook-form";

export default function BillingDetails() {
  function onSubmit(data) {
    console.log(data);
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(billingSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col justify-center gap-10 px-20"
    >
      <h1 className="text-center text-4xl font-bold">Billing Details</h1>
      <Input
        name="firstName"
        type="text"
        placeholder="First Name"
        register={register}
        errors={errors.firstName}
      />
      <Input
        name="companyName"
        type="text"
        placeholder="Company Name"
        register={register}
        errors={errors.companyName}
      />
      <Input
        name="streetAddress"
        type="text"
        placeholder="Street Address"
        register={register}
        errors={errors.streetAddress}
      />
      <Input
        name="appartment"
        type="text"
        placeholder="Appartment, floor etc. (optional) "
        register={register}
        errors={errors.appartment}
      />
      <Input
        name="city"
        type="text"
        placeholder="Town / City "
        register={register}
        errors={errors.city}
      />
      <Input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        register={register}
        errors={errors.phone}
      />
      <Input
        name="email"
        type="email"
        placeholder="Your Email"
        register={register}
        errors={errors.email}
      />

      <section className="flex gap-5">
        <input
          type="checkbox"
          id="saveThisInfo"
          className="w-8 checked:bg-blue-500"
        />
        <label htmlFor="saveThisInfo">
          Save this information for faster check-out next time
        </label>
      </section>
    </form>
  );
}
