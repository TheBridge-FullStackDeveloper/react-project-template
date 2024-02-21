import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { postLogin } from "../service/auth";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: loginMutate, isLoading } = useMutation({
    mutationKey: "login",
    mutationFn: postLogin,
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      console.error("Error al loguear el usuario:", error);
    },
  });

  const onSubmit = (data) => {
    loginMutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            autoComplete="username"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            autoComplete="current-password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </label>
        <input type="submit" disabled={isLoading} />
      </form>
    </div>
  );
}
