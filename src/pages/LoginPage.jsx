import { useForm } from "react-hook-form";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();

  function onSubmit(data) {
    loginUser(data.username, data.password)
      .then((token) => {
        if (token) {
          localStorage.setItem("token", token);
          navigate("/");
        } else {
          setError("root.data", {
            type: "manual",
            message: "Invalid data",
          });
        }
      })
      .catch((error) => console.error("Login error", error));
  }

  return (
    <main className="p-4 flex flex-col gap-10">
      <h1 className="text-2xl w-full font-bold text-center">Login Page</h1>
      <section className="flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-white/10 p-4 rounded-md flex flex-col gap-4 max-w-md w-full"
        >
          <div className="flex flex-col w-full gap-2">
            <input
              type="text"
              className={clsx(
                "bg-black border border-white/50 p-2 rounded-md",
                { "bg-red-500/10 border-red-500": errors.username }
              )}
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
            />
            {errors.username && (
              <span className="text-xs text-red-500">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <input
              type="password"
              className={clsx(
                "bg-black border border-white/50 p-2 rounded-md",
                { "bg-red-500/10 border-red-500": errors.username }
              )}
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            className="rounded-md bg-white text-black font-bold p-2 "
            type="submit"
          >
            Login
          </button>
          {errors.root?.data && (
            <span className="text-xs text-red-500 w-full text-center uppercase">
              {errors.root.data.message}
            </span>
          )}
        </form>
      </section>
    </main>
  );
}
