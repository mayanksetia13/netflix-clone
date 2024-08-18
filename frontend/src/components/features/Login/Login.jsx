import Header from "../../common/Header/Header";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div
      className="bg-cover bg-center h-screen bg-black/90"
      style={{
        backgroundImage: `url(${"https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg"})`,
      }}
    >
      <Header />
      <div className="bg-black/70 2xl:w-1/4 xl:w-1/3 md:w-2/5 h-2/3 rounded mx-auto">
        <div className="flex flex-col">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
