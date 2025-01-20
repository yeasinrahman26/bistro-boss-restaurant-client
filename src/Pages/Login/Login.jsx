import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import AuthContext from "../../providers/AuthContext";


const Login = () => {
  const captchaRef = useRef(null);
  const [disabled,setDisabled]=useState(true)

  const { loginUser } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = () => {
    const captchaValue = captchaRef.current.value;
    if (validateCaptcha(captchaValue)) {
        setDisabled(false)
    } else {
        alert('check captcha')
    
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    loginUser(email,password)
    .then(result =>{
      const user =result.user;
      console.log(user)
      
    })
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
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
                type="text"
                name="captcha"
                ref={captchaRef}
                placeholder="Type the captcha"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleCaptcha}
                className="btn btn-outline btn-xs"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
