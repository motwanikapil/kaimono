import { useForm } from "react-hook-form";
import Input from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../utils/schemas";

export default function ChangePassword() {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(profileSchema),
  });

  return (
    <form className="flex flex-col gap-10">
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
    </form>
  );
}
