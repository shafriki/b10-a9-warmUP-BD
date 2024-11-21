import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Form = () => {
  const [formData, setFormData] = useState({
    quantity: '',
    itemType: '',
    pickupLocation: '',
    additionalNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! We will reach your destination soon'); 
    setFormData({
      quantity: '',
      itemType: '',
      pickupLocation: '',
      additionalNotes: ''
    });
  };

  return (
    <div className="relative flex flex-col md:flex-row space-x-0 md:space-x-10 p-10 mt-7 md:mt-[20rem] bg-cover bg-center"
      style={{ backgroundImage: 'url(https://i.ibb.co.com/tqyftPB/Sweater-03.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-70"></div> 
      <div className="relative w-full md:w-1/3 flex flex-col justify-center z-10 mb-8 md:mb-0">
        <h1 className="text-3xl mt-3 mb-7 md:mt-0 md:text-5xl font-bold text-white">
          WarmUP <span className="text-green-500">Bangl</span>
          <span className="text-red-500">adesh</span>
        </h1>

        <p className="text-sm md:text-xl font-bold text-green-400">
          Your Generosity, Their Warmth
        </p>

        <p className="text-xs md:text-base text-white text-justify">
          <span className="text-xl text-red-500 font-bold">"</span>Your donation to WarmUp Bangladesh brings warmth to those in need. Together, we can ease winter hardships by providing clothes to the homeless. Join us in spreading comfort and hope this winter.
          <span className="text-xl text-red-500 font-bold">"</span>
        </p>
      </div>
      <div className="relative w-full md:w-1/2 z-10">
        <form onSubmit={handleSubmit} className="rounded-lg p-4 space-y-4 bg-green-900 bg-opacity-40">

          <div className="flex flex-col">
            <label className="font-semibold text-white mb-2">Quantity of items</label>
            <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} className="bg-black outline-none text-white bg-opacity-30 border-none p-3 rounded-md" placeholder="Enter quantity of item" required/>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-white mb-2">Item Type</label>
            <input type="text" name="itemType" value={formData.itemType}
              onChange={handleChange} className="bg-black outline-none text-white bg-opacity-30 border-none p-3 rounded-md" placeholder="Enter item types" required/>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-white mb-2">Pickup Location</label>
            <input type="text" name="pickupLocation" value={formData.pickupLocation}
              onChange={handleChange} className="bg-black outline-none text-white bg-opacity-30 border-none p-3 rounded-md" placeholder="Enter your current location" required/>
          </div>

          <div className="flex flex-col">

            <label className="font-semibold text-white mb-2">Additional Notes (optional)</label>
            <textarea name="additionalNotes" value={formData.additionalNotes}
              onChange={handleChange} className="bg-black outline-none text-white bg-opacity-30 border-none p-3 rounded-md" placeholder="Any extra information"/>

          </div>
          <div className="flex justify-center md:justify-end">
            <button
              type="submit"
              className="bg-lime-600 text-white py-2 rounded-md hover:bg-lime-700 btn border-none md:px-6 text-xs md:text-base">
              Submit Donation</button>
          </div>
        </form>
      </div>

      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={true} 
        newestOnTop={true}/>
    </div>
  );
};

export default Form;
