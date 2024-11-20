import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, logOut } = useContext(AuthContext); AuthContext

  return (
    <div className="min-h-screen">

      {/* detail info banner */}
      <div
        className="relative bg-cover bg-center h-[16rem] bg-no-repeat text-white"
        style={{
          backgroundImage: `url('https://i.ibb.co/9qPTrDH/a02.jpg')`,
        }}
        data-aos="fade-up">

        <div className="bg-black/70 w-full h-full absolute top-0 left-0"
          data-aos="fade" data-aos-delay="100"></div>

        <div className="relative max-w-7xl mx-auto py-16 px-6 text-left"
          data-aos="fade-up" data-aos-delay="200">

        <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-white text-center">
            WarmUP <span className="text-green-500">Bangl</span>
            <span className="text-red-500">adesh</span>
        </h1>

          <p className="text-sm md:text-xl mt-3 text-center font-bold text-green-400">
            Welcome {user.displayName || "Anonymous User"}
          </p>

        </div>
      </div>

      {/* details card */}
      <div className="absolute top-[16rem] left-[50%] transform -translate-x-1/2 bg-white bg-opacity-40 p-8 rounded-lg shadow-xl w-[90%] sm:w-[40rem] text-center backdrop-blur-md">

        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4">
          <img src={user.photoURL || "https://i.ibb.co.com/ZYgs954/empty.png"} 
            alt="Profile" className="w-full h-full rounded-full border-4 border-blue-500 object-cover" />

          <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-6 h-6 border-2 border-white"></div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {user.displayName || "User"}
        </h1>
    
        <p className="text-gray-500 text-sm sm:text-base mb-4">{user.email}</p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link to='/update' className="btn  border-none bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200">
            Update Profile
          </Link>
          <button onClick={logOut} className="btn md:px-10 bg-green-500 hover:bg-green-600 border-none text-white">
            Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
