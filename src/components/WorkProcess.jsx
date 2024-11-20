import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkProcess = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto py-8 max-w-screen-xl" data-aos="fade-up">

      <h2 className="text-[#34495E] text-2xl md:text-4xl font-bold mb-4 text-center"
        data-aos="zoom-in"> How It Works </h2>
      <p className="md:text-lg text-center mb-6 mx-1 text-sm" data-aos="fade-up"
        data-aos-delay="200">Join us in spreading warmth to those in need by donating winter clothing.
        Here's how you can get involved! </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up"
        data-aos-delay="400">

        {/* text content */}
        <div className="md:col-span-2 mx-3 md:mx-0" data-aos="fade-up"
          data-aos-delay="600" >

          <ul className="steps steps-vertical">
            <li className="step step-primary">
              Create an account or log in to access the donation campaigns.
            </li>

            <li className="step step-primary">
              Choose the campaign that you want to contribute to
            </li>

            <li className="step step-primary">
              Tell us what clothes you are donating.
            </li>

            <li className="step step-primary">
              Select the nearest location to drop off your donation.
            </li>

            <li className="step step-primary">
              Submit your donation details and bring warmth to those in need.
            </li>

          </ul>
        </div>

        {/* image content */}
        <div className="md:col-span-1 grid grid-cols-2 gap-4 mx-5 md:mx-0"
          data-aos="fade-up" data-aos-delay="600">
          <img src="https://i.ibb.co.com/yW5nL5T/m1.jpg" alt="Image 1"
            className="w-full h-48 object-cover" data-aos="zoom-in" data-aos-delay="700"/>

          <img src="https://i.ibb.co.com/hsZZq7C/m2.jpg" alt="Image 2" className="w-full h-48 object-cover" data-aos="zoom-in"
            data-aos-delay="800"/>
          <img src="https://i.ibb.co.com/FxFfc9b/m3.jpg" alt="Image 3"  className="w-full h-48 object-cover" data-aos="zoom-in"
            data-aos-delay="900"/>
          <img src="https://i.ibb.co.com/thbWxwQ/m4.jpg" alt="Image 4"
            className="w-full h-48 object-cover" data-aos="zoom-in" data-aos-delay="1000" />
        </div>
      </div>

      {/* collection points */}
      <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="500">
        <h3 className="text-2xl md:text-4xl text-[#34495E] font-bold">Collection Points</h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 mx-3" data-aos="zoom-in"> {["Sylhet", "Rangpur", "Mymensingh", "Khulna", "Barisal", "Chattagram", "Dhaka", "Rajshahi"].map((location, index) => (<div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  data-aos="flip-right" data-aos-delay={600 + index * 100}>
                  <img src={
                      index === 0
                        ? "https://i.ibb.co.com/G7gjjXS/syl.png"
                        : index === 1
                        ? "https://i.ibb.co.com/5r74Nrt/rang.png"
                        : index === 2
                        ? "https://i.ibb.co.com/12rWcq8/my.png"
                        : index === 3
                        ? "https://i.ibb.co.com/VNn5rXy/khu.png"
                        : index === 4
                        ? "https://i.ibb.co.com/5Tm4jyw/bar.png"
                        : index === 5
                        ? "https://i.ibb.co.com/D9mzQRQ/chat.png"
                        : index === 6
                        ? "https://i.ibb.co.com/gt6WXrd/dha.png"
                        : "https://i.ibb.co.com/TPZ86Pg/raj.png"
                    }
                    alt={location}
                    className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"/>

                  <div className="absolute inset-0 bg-[#34495E] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <button className="bg-[#E74C3C] md:px-8 text-white btn rounded-none border-none">More</button>
        </div>
      </div>
    )
  )}
</div>

      </div>
    </div>
  );
};

export default WorkProcess;
