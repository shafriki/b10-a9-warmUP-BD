import React, { useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        document.title = "Register | WarmUP Bangladesh";
    }, []);

    return (
        <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('https://i.ibb.co.com/tqyftPB/Sweater-03.jpg')" }}>

            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* register content */}
            <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto min-h-screen px-4 md:px-0 py-8">

                {/* register content text */}
                <div className="text-left text-white space-y-4 px-4 md:px-6 relative z-10 mb-8 md:mb-0" data-aos="fade-up">
                    <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-white">
                        WarmUP <span className='text-green-500'>Bangl</span><span className='text-red-500'>adesh</span>
                    </h1>

                    <p className="text-sm md:text-xl font-bold text-green-400">Your Generosity, Their Warmth</p>

                    <p className="text-xs md:text-base text-white text-justify">
                        <span className='text-xl text-red-500 font-bold'>"</span>Your donation to WarmUp Bangladesh brings warmth to those in need. Together, we can ease winter hardships by providing clothes to the homeless. Join us in spreading comfort and hope this winter.<span className='text-xl text-red-500 font-bold'>"</span>
                    </p>

                </div>

                {/* register form */}
                <div className="relative z-10 flex items-center justify-center w-full md:w-auto mb-10 md:mb-0" data-aos="zoom-in-up" data-aos-delay="200">

                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 w-full sm:w-80 md:w-96">

                        <h2 className="text-white text-xl md:text-2xl font-semibold text-center mb-4">Register</h2>
                        <form className="flex flex-col">
                            <label htmlFor="name" className="text-white text-sm mb-2">Name</label>
                            <input type="text" id="name" placeholder="Enter your name"
                                className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full"/>

                            <label htmlFor="email" className="text-white text-sm mb-2">Email</label>
                            <input type="email" id="email" placeholder="Enter your email"
                                className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full"/>

                            <label htmlFor="photo" className="text-white text-sm mb-2">Photo URL</label>
                            <input type="text" id="photo" placeholder="Enter your photo url"
                                className="p-3 mb-4 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full"/>

                            <label htmlFor="password" className="text-white text-sm mb-2">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" className="p-3 mb-1 rounded-lg bg-gray-400 bg-opacity-50 text-black focus:outline-none w-full"/>

                            <Link className='text-gray-200 mb-4 hover:text-blue-500 text-sm'>Forget Password?</Link>

                            <button type="submit" className="bg-green-600 btn border-none text-white rounded-lg hover:bg-green-500 transition duration-300 w-full">Login</button>

                            <button type="submit" className="bg-blue-600 btn border-none text-white rounded-lg hover:bg-blue-500 transition duration-300 mt-2 flex items-center justify-center gap-2 w-full"> <FcGoogle className='text-2xl' />Login With Google </button>

                            <p className='text-gray-200 text-center text-sm mt-1'>Already have an account? <Link to='/login' className='text-blue-300 font-medium hover:text-green-400'>Login</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
