import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Donate = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative bg-cover bg-center bg-no-repeat text-white mx-3 md:mx-5 my-14"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/9qPTrDH/a02.jpg')`,
      }}
      data-aos="fade-up">

      <div className="bg-black/70 w-full h-full absolute top-0 left-0" data-aos="fade" data-aos-delay="100"></div>

      {/* text content */}
      <div className="relative max-w-7xl mx-auto py-16 px-6 text-left" data-aos="fade-up" data-aos-delay="200"> <h6 className="text-green-500 font-bold text-lg" data-aos="fade-up" data-aos-delay="300" >Your Generosity, Their Warmth</h6>

        <h1 className="font-bold text-lg md:text-4xl mt-2 md:mt-4" data-aos="fade-up" data-aos-delay="400"> Contribute to WarmUp Bangladesh: The Best Charity to Donate Clothes </h1>

        <p className="mt-2 md:mt-6 text-xs md:text-base text-justify leading-relaxed max-w-3xl" data-aos="zoom-in" data-aos-delay="500">
          Your donation to WarmUp Bangladesh Winter Special program is a lifeline for many.
          Together, we can donate clothes to the homeless to create a positive
          impact and help to lessen the suffering that the winter season can
          bring. Join us in extending warmth and support to those who are in
          need.
        </p>

        <Link to='/donation' className="btn  border-none mt-8 px-6 py-3 bg-green-600 text-white font-semibold text-xs md:text-lg rounded hover:bg-red-700 transition duration-300" data-aos="zoom-in" data-aos-delay="600" >DONATE NOW </Link>
      </div>
    </div>
  );
};

export default Donate;
