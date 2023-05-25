import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

import { updateProfile } from "firebase/auth";
import { Player } from "@lottiefiles/react-lottie-player";
import AnimationLottie from "../../assets/login.json";
import useTitle from "../../useTitle";
const Register = () => {
  useTitle("Register");
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate("");
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const form = e.target;
    const firstName = form.first_name.value;
    const lastName = form.last_name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo_url.value;
    const name = firstName + " " + lastName;

    if (!/(?=.*[A-Z])/.test(password)) {
      setError(
        toast.error("Please add at least Two Uppercase Letter", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError(
        toast.error("Please Add a Special Character.", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError(
        toast.error("Please add atLeast two number", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      setError(
        toast.error("Please add atLeast three lowercase letters", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (password.length < 6) {
      setError(
        toast.error("Please add At least 6 Characters In your Password", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess(
          toast.success("SuccessFully Create Account", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
        console.log(loggedUser);
        updateUserData(result.user, name, photo);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setSuccess(
          toast.success("User Photo Updated", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="grid md:grid-cols-2 space-y-5 lg:grid-cols-2">
      {/* Lottie Animation */}

      <div className="w-[70%] mx-auto">
        <Player autoplay loop src={AnimationLottie}></Player>
      </div>
      <div className="max-w-full  mx-auto">
        <div className="border border-gray-400 px-12 py-9 rounded-md">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <form onSubmit={handleRegister} className="py-5">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative text-black z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative text-black z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>

            <div className="relative text-black z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative text-black z-0 w-full mb-6 group">
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
            <div className="relative text-black z-0 w-full mb-6 group">
              <input
                type="url"
                name="photo_url"
                id="photo_url"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Photo URL
              </label>
            </div>

            <button
              type="submit"
              className="text-black w-full bg-yellow-400 py-3"
            >
              Create an account
            </button>
          </form>
          <p className="text-center font-semibold ">
            Already have an account?
            <Link to="/login" className="underline text-yellow-400 font-normal">
              Login
            </Link>
          </p>
        </div>
        <div className=" mx-10 flex items-center gap-5 mt-4">
          <div className="h-0.5 w-full bg-gray-300"></div>
          <p className="text-xl text-gray-600 font-medium">or</p>
          <div className="h-0.5 w-full bg-gray-300"></div>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
