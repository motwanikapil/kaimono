import Input from "../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../utils/schemas";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import EmptyFillButton from "./EmptyFillButton";
import Slide from "./Slide";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

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

  const { user } = useSelector((state) => state.user);

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["profileDetails"],
    queryFn: async () => {
      console.log(user.userId);
      return axios.get(`/user/${user.userId}`);
    },
  });

  if (!isLoading) {
    console.log(userData);
  }

  return (
    <Slide>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 px-10 pt-0"
      >
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
          <section className="flex items-end justify-end gap-10">
            <EmptyFillButton onClick={reset}>Cancel</EmptyFillButton>
            <Button type="submit">Save Changes</Button>
          </section>
        </section>
      </form>
    </Slide>
  );
}
