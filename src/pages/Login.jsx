import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../utils/schemas";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import Input from "../components/Input";
import Slide from "../components/Slide";

export default function Login() {
  function onSubmit(data) {
    console.log(data);
  }

  const {
    formState: { errors },
    handleSubmit,
    reset,
    register,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  return (
    <Slide>
      <main className="my-10 grid grid-cols-1 place-items-center md:my-0 md:grid-cols-2">
        <img
          src="/login.png"
          alt="Mobile with a cart image"
          className="hidden md:block"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-10"
        >
          <h1 className="text-center text-4xl font-bold">Login</h1>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            register={register}
            errors={errors.email}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            errors={errors.password}
          />
          <Button type="submit">Login</Button>
          <p>
            Don't have an account,
            <NavLink to="/signup" className="ms-2 text-blue-500">
              Signup
            </NavLink>
          </p>
        </form>
      </main>
    </Slide>
  );
}
