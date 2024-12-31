import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../utils/schemas";
import Button from "../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Slide from "../components/Slide";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data) => {
      const { email, password, name } = data;
      return axios.post("/user/login", {
        email,
        password,
        name,
      });
    },
    onSuccess: () => {
      toast.success("Login Successful");
      navigate(-1);
    },
  });

  if (isError) {
    console.log(error);
    toast.error(error.response.data.message);
  }

  function onSubmit(data) {
    mutate(data);
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
