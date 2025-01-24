import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../providers/AuthContext";
import "./SingUp.css";
import img2 from "../../assets/others/authentication.gif";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic=useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      updateUserProfile({
        displayName: data.name,
        photoURL: data.photo,
        
      });
      const userInfo = {
        name: data.name,
        email: data.email,
      };
      axiosPublic.post('/users',userInfo)
      .then(res=>{
        if(res.data.insertedId)
          console.log('data added');
          navigate("/");
      })
      console.log('something is wrong');
    });
  };

  return (
    <div className="hero signUp-item bg-base-200 min-h-screen">
      <Helmet>
        <title>Bistro | SignUp</title>
      </Helmet>
      <div className="hero-content bg-gray-50 py-10 rounded-3xl shadow-2xl  flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={img2} alt="" />
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
                // required
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                name="photo"
                {...register("photo", { required: true })}
                placeholder="photoUrl"
                className="input input-bordered"
                // required
              />
              {errors.photoUrl && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email")}
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
                {...register("password")}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">SignUp</button>
            </div>
          </form>
          <div className="divider"></div>
          <div className="mx-auto ">
            <SocialLogin></SocialLogin>
          </div>
          <p className="text-center pb-5">
            Already have an account{" "}
            <Link to={"/login"} className="text-red-600 font-bold text-lg">
              Click here !
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
