import React, { useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const More = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto mb-10">

      {/* text header */}
      <div className="flex flex-col items-center mt-10 mb-2">
            <h3 className="text-center text-[#34495E] text-2xl md:text-4xl font-bold mb-4"> More Donation Campaigns </h3>

            <p className="text-center md:w-3/5 text-gray-700 text-xs md:text-base mb-6 mx-3 md:mx-0">At WarmUp Bangladesh, we not only focus on addressing the immediate needs during the winter, but also extend our support through various other social initiatives.
            </p>
      </div>

      {/* card sections */}
      <div className="flex flex-col md:flex-row items-center gap-10 mx-5 md:mx-0">

        {/* card one */}
        <div className="card card-compact bg-blue-50 shadow-xl rounded-none"
          data-aos="fade-up">
          <figure>
            <img src="https://i.ibb.co.com/WDTT4Zd/health.webp"
              alt="Health and Wellbeing" />
          </figure>

          <div className="card-body">
            <h2 className="card-title text-[#228B22] font-bold text-lg md:text-xl">
              Health and Wellbeing
            </h2>
            <p className="text-justify">
              Help people who are suffering from health issues in Bangladesh. Donate medical stuff and all other essentials for their well-being.
            </p>

            <hr className="border-2 border-[#34495E]" />

            <div className="card-actions justify-start">
              <button className="btn bg-transparent text-[#34495E] border-none hover:text-[#E74C3C] hover:bg-transparent">
                Learn More
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>

        {/* card two */}
        <div
          className="card card-compact bg-blue-50 shadow-xl rounded-none"
          data-aos="fade-up">
          <figure>
            <img src="https://i.ibb.co.com/7R4yw46/water.webp"
              alt="Water and Sanitization"/>
          </figure>

          <div className="card-body">
            <h2 className="card-title text-[#228B22] font-bold text-lg md:text-xl">
              Water and Sanitization</h2>
            <p className="text-justify">
              Save people who are riding their life with water and sanitation diseases. Help people by ensuring safe water for humankind.
            </p>

            <hr className="border-2 border-[#34495E]" />

            <div className="card-actions justify-start">
              <button className="btn bg-transparent text-[#34495E] border-none hover:text-[#E74C3C] hover:bg-transparent">
                Learn More
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>

        {/* card three */}
        <div
          className="card card-compact bg-blue-50 shadow-xl rounded-none"
          data-aos="fade-up">
          <figure>
            <img src="https://i.ibb.co.com/M6ZVvx5/disability.webp"
              alt="Disability Support"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#228B22] font-bold text-lg md:text-xl">
              Disability Support
            </h2>
            <p className="text-justify md:mb-5">
              Support physically challenged people who are deprived of leading a normal life. Donate something to save their lives.
            </p>

            <hr className="border-2 border-[#34495E]" />

            <div className="card-actions justify-start">
              <button className="btn bg-transparent text-[#34495E] border-none hover:text-[#E74C3C] hover:bg-transparent">
                Learn More
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
