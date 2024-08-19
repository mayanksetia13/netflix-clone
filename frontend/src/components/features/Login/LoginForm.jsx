import Button from "../../common/Button/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFormData } from "../../../store/global/globalSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitSignInForm = (data) => {
    console.log(data);
    dispatch(setFormData(data));
    reset();
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h3 className="text-white font-bold text-3xl w-11/12 px-2 mt-12">
        Sign In
      </h3>
      <form onSubmit={handleSubmit(onSubmitSignInForm)} className="w-11/12">
        <div className="py-4 px-2 ">
          <input
            className="py-2 rounded w-full bg-gray-600/70 px-2 text-white placeholder-white placeholder:ml-2 focus:outline-red-600 focus:border-red-600"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-primary font-medium mt-2">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="py-4 px-2 ">
          <input
            className="py-2 rounded w-full bg-gray-600/70 px-2 text-white placeholder-white placeholder:ml-2 focus:outline-red-600 focus:border-red-600"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password must be atleast 6 characters long",
              },
            })}
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-primary font-medium mt-2">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="mt-3 px-2">
          <Button
            text="Sign in"
            bgColor={"#db0000"}
            color={"white"}
            className={"bg-red-700 text-lg font-medium w-full"}
          />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
