import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import useTitle from "../../useTitle";
import { Player } from "@lottiefiles/react-lottie-player";
import AnimationLottie from "../../assets/login.json";
const Login = () => {
  useTitle("Login");
  const { singIn, forgetPassword } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const emailRef = useRef(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess(
          toast.success("Login Successfully", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );

        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/wrong-password") {
          setError(
            toast.error("Your Password doesn't match", {
              position: toast.POSITION.TOP_RIGHT,
            })
          );
        }
      });
  };

  const handleRestPassword = () => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      setError(
        toast.error("Please Provide Your Email Address to Rest Password", {
          position: toast.POSITION.TOP_CENTER,
        })
      );
      return;
    }

    forgetPassword(email)
      .then(() => {
        setSuccess(
          toast.success("Please Check Your Email", {
            position: toast.POSITION.TOP_CENTER,
          })
        );
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="grid md:grid-cols-2 space-y-5 lg:grid-cols-2">
      <div className="w-[70%] mx-auto">
        <Player autoplay loop src={AnimationLottie}></Player>
      </div>
      <div className="max-w-full  mx-auto">
        <div className="border border-gray-400 px-16 py-9 rounded-md">
          <h1 className="text-2xl font-bold">Login</h1>

          <form onSubmit={handleLogin} className="py-5">
            <div className="relative z-0 w-full mb-6 group">
              <input
                ref={emailRef}
                required
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                placeholder=""
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="flex  gap-3 flex-col md:flex-row items-center justify-between  mb-8">
              <label className="flex items-center gap-2" htmlFor="">
                <input type="checkbox" name="checkbox" id="" />
                <span className="font-semibold">Remember Me</span>
              </label>
              <button
                onClick={handleRestPassword}
                type="button"
                className="text-yellow-400 underline"
              >
                Forgot Password
              </button>
            </div>
            <button className="text-black w-full bg-yellow-400 py-3">
              Login
            </button>
          </form>
          <p className="text-center font-semibold ">
            Don’t have an account?
            <Link
              to="/register"
              className="underline text-yellow-400 font-normal"
            >
              Create an account
            </Link>
          </p>
        </div>
        <div className=" mx-10 flex items-center gap-5 my-4">
          <div className="h-0.5 w-full bg-gray-300"></div>
          <p className="text-xl text-gray-600 font-medium">or</p>
          <div className="h-0.5 w-full bg-gray-300"></div>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
