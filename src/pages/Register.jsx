import React, { useEffect, useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { registerUser, googlePopup } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Register | WarmUP Bangladesh";
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    let errorMessage = "";
    let showToast = false;

    if (password.length < 6) {
      errorMessage = "Password must contain at least 6 characters.";
      showToast = true;
      toast.error(errorMessage, {
        position: "top-center",
      });
    }

    if (!/[A-Z]/.test(password)) {
      errorMessage = "Password must contain at least one uppercase letter.";
      showToast = true;
      toast.error(errorMessage, {
        position: "top-center",
      });
    }

    if (!/[a-z]/.test(password)) {
      errorMessage = "Password must contain at least one lowercase letter.";
      showToast = true;
      toast.error(errorMessage, {
        position: "top-center",
      });
    }

    if (showToast) {
      return;
    }

    try {
      await registerUser(email, password, name, photo);

      toast.success("Registration Successful!", { position: "top-center" });
      setTimeout(() => navigate("/"), 1500); 
    } catch (err) {
      setError(err.message);
      if (err.message.includes("already")) {
        toast.error("Already registered. Please log in.", {
          position: "top-center",
        });
      } else {
        toast.error(err.message || "Registration failed.", {
          position: "top-center",
        });
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googlePopup();
      toast.success("Logged in with Google", { position: "top-center" });
      setTimeout(() => navigate("/"), 1500); 
    } catch (err) {
      toast.error(err.message || "Google sign-in failed.", {
        position: "top-center",
      });
    }
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('https://i.ibb.co/tqyftPB/Sweater-03.jpg')",
      }}>

      <ToastContainer />

      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* register content */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto min-h-screen px-4 md:px-0 py-8">

        {/* register content text */}
        <div className="text-left text-white space-y-4 px-4 md:px-6 relative z-10 mb-8 md:mb-0" data-aos="fade-up">

          <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-white">
            WarmUP{" "}
            <span className="text-green-500">Bangl</span>
            <span className="text-red-500">adesh</span>
          </h1>

          <p className="text-sm md:text-xl font-bold text-green-400">
            Your Generosity, Their Warmth</p>

          <p className="text-xs md:text-base text-white text-justify">
            <span className="text-xl text-red-500 font-bold">"</span>Your
            donation to WarmUp Bangladesh brings warmth to those in need.
            Together, we can ease winter hardships by providing clothes to the
            homeless. Join us in spreading comfort and hope this winter.
            <span className="text-xl text-red-500 font-bold">"</span>
          </p>
        </div>

        {/* register form */}
        <div className="relative z-10 flex items-center justify-center w-full md:w-auto mb-10 md:mb-0" data-aos="zoom-in-up" data-aos-delay="200">

          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 w-full sm:w-80 md:w-96">

            <h2 className="text-white text-xl md:text-2xl font-semibold text-center mb-4"> Register</h2>

            <form onSubmit={handleRegister} className="flex flex-col">
              <label htmlFor="name" className="text-white text-sm mb-2">
                Name</label>

              <input type="text" name="name" id="name" placeholder="Enter your name"
                className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full"/>

              <label htmlFor="email" className="text-white text-sm mb-2">
                Email
              </label>
              <input type="email" name="email" id="email" placeholder="Enter your email" className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full"/>

              <label htmlFor="photo" className="text-white text-sm mb-2">
                Photo URL
              </label>
              <input type="text" name="photo" id="photo" placeholder="Enter your photo URL" className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full" />

              <label htmlFor="password" className="text-white text-sm mb-2">
                Password
              </label>
              <div className="relative">
                <input type={passwordVisible ? "text" : "password"}  name="password" id="password" placeholder="Enter your password" className="p-3 mb-1 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full" />

                <span onClick={() => setPasswordVisible(!passwordVisible)} 
                  className="absolute right-3 top-3 cursor-pointer">
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />} 
                </span>

            </div>



              <button type="submit" className="bg-green-600 mt-4 btn border-none text-white rounded-lg hover:bg-green-500 transition duration-300 w-full" >
                Register </button>

              <button type="button" onClick={handleGoogleSignIn}
                className="bg-blue-600 btn border-none text-white rounded-lg hover:bg-blue-500 transition duration-300 mt-2 flex items-center justify-center gap-2 w-full" >
                <FcGoogle className="text-2xl" />
                Login with Google
              </button>

              <p className="text-gray-200 text-center text-sm mt-1">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-300 font-medium hover:text-green-400" >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
