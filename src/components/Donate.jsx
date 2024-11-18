import React from "react";

const Donate = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white mx-3 md:mx-5 my-14"
      style={{ backgroundImage: `url('https://i.ibb.co.com/9qPTrDH/a02.jpg')`,
      }}>
      
      <div className="bg-black/70 w-full h-full absolute top-0 left-0">
      </div>

      {/* text content */}
      <div className="relative max-w-7xl mx-auto py-16 px-6 text-left">

            <h6 className="text-green-500 font-bold text-lg">
            Your Generosity, Their Warmth </h6>

            <h1 className="font-bold text-lg  md:text-4xl mt-2 md:mt-4">
            Contribute to WarmUp Bangladesh: The Best Charity to Donate Clothes
            </h1>

            <p className="mt-2 md:mt-6 text-xs md:text-base text-justify leading-relaxed max-w-3xl">
            Your donation to WarmUp Bangladesh Winter Special program is a lifeline for many.
            Together, we can donate clothes to the homeless to create a positive
            impact and help to lessen the suffering that the winter season can
            bring. Join us in extending warmth and support to those who are in
            need.
            </p>

            <button className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold text-xs md:text-lg rounded hover:bg-red-700 transition duration-300">
            DONATE NOW
            </button>

      </div>
    </div>
  );
};

export default Donate;
