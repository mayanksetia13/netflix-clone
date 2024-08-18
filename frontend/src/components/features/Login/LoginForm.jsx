import Button from "../../common/Button/Button";

function LoginForm() {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h3 className="text-white font-bold text-3xl w-11/12 px-2 mt-12">
        Sign In
      </h3>
      <form className="w-11/12">
        <div className="py-4 px-2 ">
          <input
            className="py-2 rounded w-full bg-gray-600/70 px-2 text-white placeholder-white placeholder:ml-2"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="py-4 px-2 ">
          <input
            className="py-2 rounded w-full bg-gray-600/70 px-2 text-white placeholder-white placeholder:ml-2"
            type="password"
            placeholder="Password"
          />
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
