import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import AuthContext from "../../providers/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./Login.css";
import img from '../../assets/others/authentication2.png'
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = () => {
    const captchaValue = captchaRef.current.value;
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    } else {
      alert("check captcha");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    loginUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate("/");
    });
  };

  return (
    <div className="hero  login-item bg-base-200 min-h-screen">
      <Helmet>
        <title>Bistro | Login</title>
      </Helmet>
      <div className="hero-content  login-item shadow-2xl mx-8 py-10 rounded-2xl border-black flex-col lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                defaultValue={'14243444'}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleCaptcha}
                type="text"
                name="captcha"
                ref={captchaRef}
                placeholder="Type the captcha"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button 
              disabled={disabled}
               className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div className="divider"></div>
          <div className="mx-auto ">
            <SocialLogin></SocialLogin>
          </div>
          <p className="text-center pb-5">
            Don`t have an account{" "}
            <Link to={"/signUp"} className="text-red-600 font-bold text-lg">
              Click here !
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
