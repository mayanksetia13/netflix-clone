import {
  getToggleAuthForm,
  getErrorMessage,
} from "../../../store/global/globalSelectors";
import { toggleAuthForm } from "../../../store/global/globalSlice";
import Header from "../../common/Header/Header";
import LoginSignUpForm from "./LoginSignUpForm";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

function LoginSignUp() {
  const dispatch = useDispatch();
  const isUserSignedUp = useSelector(getToggleAuthForm);
  const errorMessage = useSelector(getErrorMessage);

  const { reset, clearErrors } = useForm();

  const handleToggleFormAction = () => {
    clearErrors();
    reset();
    dispatch(toggleAuthForm());
  };

  return (
    <div
      className="bg-cover bg-center h-screen bg-black/90"
      style={{
        backgroundImage: `url(${"https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"})`,
      }}
    >
      <Header />
      <div className="bg-black/70 2xl:w-1/4 xl:w-1/3 md:w-2/5 h-3/4 rounded mx-auto">
        <div className="flex flex-col">
          <LoginSignUpForm />

          <small className="mt-5 flex justify-center text-white font-normal">
            {isUserSignedUp ? "Already a User ?" : "Not a User ?"}
            <button
              onClick={handleToggleFormAction}
              className="pl-1 cursor-pointer"
            >
              {isUserSignedUp ? "Go to Login" : "Sign Up"}
            </button>
          </small>

          {errorMessage && (
            <span className="mt-5 flex rounded mx-auto justify-center items-center w-10/12 bg-yellow-800 text-yellow-500">
              {errorMessage}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
