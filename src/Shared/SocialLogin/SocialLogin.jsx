import { useContext, useState } from "react";
import googleIcon from "../../assets/google.png";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const { sinInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSingIn = () => {
    sinInWithGoogle()
      .then((result) => {
        console.log(result.user);
        setSuccess(
          toast.success("Google SinIn Success", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mb-5">
      <div className="space-y-3 w-10/12 mx-auto">
        <button
          onClick={handleGoogleSingIn}
          className="flex rounded-full border-2 p-3 items-center w-full"
        >
          <img className="w-8 h-8" src={googleIcon} alt="" />
          <div className="text-center text-lg text-black mx-auto">
            <span>Continue with Google</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
