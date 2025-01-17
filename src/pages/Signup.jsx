import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signupSchema } from "../utils/schemas";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Slide from "../components/Slide";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data) => {
      const { email, password, name } = data;
      return axios.post("/user/register", {
        email,
        password,
        name,
      });
    },
    onSuccess: () => {
      toast.success("Signup Successful");
      navigate(-1);
    },
  });

  if (isError) {
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
    resolver: yupResolver(signupSchema),
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
          <h1 className="text-center text-4xl font-bold">Signup</h1>
          <Input
            name="name"
            type="text"
            placeholder="Name"
            register={register}
            errors={errors.name}
            autoComplete="name"
          />
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
          <Button type="submit">Signup</Button>
          <p>
            Already have an account,
            <Link to="/Login" className="ms-2 text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </main>
    </Slide>
  );
}
