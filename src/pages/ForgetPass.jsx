import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPass = () => {
  const { state } = useLocation();
  const auth = getAuth();
  
  const [email, setEmail] = useState(state?.email || ''); 
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      toast.error('Please enter a valid email.', { position: 'top-center' });
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent! Please check your inbox.', { position: 'top-center' });
      
      window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

    } catch (error) {
      console.error("error resetting password: ", error.message);
      toast.error('failed to send reset email. Please try again later.', { position: 'top-center' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">

      {/* Banner */}
      <div className="relative bg-cover bg-center h-[16rem] bg-no-repeat text-white"
        style={{ backgroundImage: `url('https://i.ibb.co/9qPTrDH/a02.jpg')` }}
        data-aos="fade-up">

        <div className="bg-black/70 w-full h-full absolute top-0 left-0" data-aos="fade" data-aos-delay="100"></div>

        <div className="relative max-w-7xl mx-auto py-16 px-6 text-left" data-aos="fade-up" data-aos-delay="200">

          <h1 className="text-3xl mt-3 md:mt-0 md:text-5xl font-bold text-white text-center">
            WarmUP <span className="text-green-500">Bangl</span>
            <span className="text-red-500">adesh</span>
          </h1>

        </div>
      </div>

      {/* reset pass form */}
      <div className="absolute top-[14rem] left-[50%] transform -translate-x-1/2 bg-white bg-opacity-50 p-8 rounded-lg shadow-xl w-[90%] sm:w-[40rem] text-center backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4 text-black">Reset Your Password</h2>

        <div className="mb-4 text-left">
          <label htmlFor="email" className="block text-black">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-600 text-white" />
        </div>

        <button className="w-full btn border-none bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300" onClick={handleResetPassword} disabled={loading}>
          {loading ? 'Sending...' : 'Reset Password'}
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ForgetPass;
