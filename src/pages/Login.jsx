import React, { useEffect, useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { loginUser, googlePopup } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Login | WarmUP Bangladesh";
  }, []);

  const from = location.state?.from?.pathname || "/"; 

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      toast.error("Please fill all fields.", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }

    try {
      await loginUser(email, password);
      toast.success("Login successful", {
        position: "top-center",
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate(from, { replace: true }); 
      }, 1000);
    } catch (err) {
      toast.error("Login failed. Check your email or password.", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googlePopup();
      toast.success("Logged in with Google!", { position: "top-center" });
      setTimeout(() => navigate(from, { replace: true }), 1500); 
    } catch (err) {
      toast.error(err.message || "Google sign-in failed.", {
        position: "top-center",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen" 
    style={{
        backgroundImage:
          "url('https://i.ibb.co/ZXjbcNm/kids-with-lap-e1694859942474.jpg')",}}>
            
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto h-screen px-4 md:px-0"
        data-aos="fade-down" data-aos-duration="1000">

        {/* Login content */}
        <div className="text-left text-white space-y-4 px-4 md:px-6 relative z-10 mb-8 md:mb-0"
          data-aos="fade-down" data-aos-duration="1000">

          <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-white">
            WarmUP <span className="text-green-500">Bangl</span>
            <span className="text-red-500">adesh</span>
          </h1>

          <p className="text-sm md:text-xl font-bold text-green-400">
            Your Generosity, Their Warmth
          </p>

          <p className="text-xs md:text-base text-white text-justify">
            <span className="text-xl text-red-500 font-bold">"</span>Your
            donation to WarmUp Bangladesh brings warmth to those in need.
            Together, we can ease winter hardships by providing clothes to the
            homeless. Join us in spreading comfort and hope this winter.
            <span className="text-xl text-red-500 font-bold">"</span>
          </p>
        </div>

        {/* Login form */}
        <div className="relative z-10 flex items-center justify-center w-full md:w-auto mb-10 md:mb-0"
          data-aos="fade-down" data-aos-duration="1000">

          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 w-full sm:w-80 md:w-96">

            <h2 className="text-white text-xl md:text-2xl font-semibold text-center mb-4">
              Login</h2>

            <form onSubmit={handleLogin} className="flex flex-col">
              <label htmlFor="email" className="text-white text-sm mb-2">
                Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your email"
                className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full"/>

              <label htmlFor="password" className="text-white text-sm mb-2">
                Password </label>

              <div className="relative">
                <input type={passwordVisible ? "text" : "password"} name="password" id="password" placeholder="Enter your password" className="p-3 mb-1 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full" />
                
                <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-800">
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

              <Link to='/forget' className="text-gray-200 mb-4 hover:text-blue-500 text-sm"
                state={{ email: document.getElementById('email')?.value || '' }} >
                Forget Password?</Link>

              <button type="submit" className="bg-green-600 btn border-none text-white rounded-lg hover:bg-green-500 transition duration-300 w-full">
                Login</button>

              <button type="button" onClick={handleGoogleSignIn} className="bg-blue-600 btn border-none text-white rounded-lg hover:bg-blue-500 transition duration-300 mt-2 flex items-center justify-center gap-2 w-full">

              <FcGoogle className="text-2xl" />
                Login with Google
              </button>

              <p className="text-gray-200 text-center text-sm mt-1">Don’t have an account?{" "}
                <Link to="/register" className="text-blue-300 font-medium hover:text-green-400">
                  Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
