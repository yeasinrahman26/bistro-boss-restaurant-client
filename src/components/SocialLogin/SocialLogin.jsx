import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });
      navigate("/");
    });
  };
  return (
    <div className="p-2">
      <div>
        <button onClick={handleGoogleSignIn} className="btn bg-orange-300">
          <FaGoogle></FaGoogle>
          Google Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
