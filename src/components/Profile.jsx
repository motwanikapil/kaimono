import Input from "../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../utils/schemas";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import Slide from "../components/Slide";
import EmptyFillButton from "./EmptyFillButton";

export default function Profile() {
  function onSubmit(data) {
    console.log(data);
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(profileSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <h1 className="text-center text-4xl font-bold">Contact Us</h1>
      <section className="grid grid-cols-2 gap-10">
        <section className="flex flex-col gap-3">
          <label htmlFor="firstName" className="text-md font-semibold">
            First Name
          </label>
          <Input
            name="firstName"
            type="text"
            placeholder="John"
            register={register}
            errors={errors.firstName}
            id="firstName"
          />
        </section>

        <section className="flex flex-col gap-3">
          <label htmlFor="lastName" className="text-md font-semibold">
            Last Name
          </label>
          <Input
            name="lastName"
            type="text"
            placeholder="Doe"
            register={register}
            errors={errors.lastName}
            id="lastName"
          />
        </section>

        <section className="col-span-2 flex flex-col gap-3">
          <label htmlFor="email" className="text-md font-semibold">
            Email Address
          </label>
          <Input
            name="email"
            type="email"
            placeholder="example@example.com"
            register={register}
            errors={errors.email}
            id="email"
          />
        </section>
      </section>

      <section className="col-span-2 flex flex-col gap-3">
        <label htmlFor="address" className="text-md font-semibold">
          Address
        </label>
        <textarea
          name="address"
          id="address"
          placeholder="Address"
          className="resize-none border-b-2 px-2 py-1.5 outline-none transition-all duration-300 focus:border-gray-500"
          rows={6}
          {...register("address")}
        ></textarea>
      </section>

      <section className="col-span-2 flex flex-col gap-10">
        <section className="flex flex-col gap-5">
          <label htmlFor="currentPassword" className="text-md font-semibold">
            Current Password
          </label>
          <Input
            type="password"
            placeholder="Current Password"
            name="password"
            register={register}
            errors={errors.password}
            id="currentPassword"
          />
        </section>

        <section className="flex flex-col gap-5">
          <label htmlFor="newPassword" className="text-md font-semibold">
            New Password
          </label>
          <Input
            type="password"
            placeholder="New Password"
            name="password"
            register={register}
            errors={errors.password}
            id="newPassword"
          />
        </section>

        <section className="flex flex-col gap-5">
          <label htmlFor="confirmPassword" className="text-md font-semibold">
            Confirm Password
          </label>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            register={register}
            errors={errors.confirmPassword}
            id="confirmPassword"
          />
        </section>
      </section>

      <section className="flex items-end justify-end gap-10">
        <EmptyFillButton onClick={reset}>Cancel</EmptyFillButton>
        <Button type="submit">Save Changes</Button>
      </section>
    </form>
  );
}
