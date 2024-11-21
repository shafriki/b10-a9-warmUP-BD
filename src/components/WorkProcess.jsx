import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiGooglestreetview } from "react-icons/si";
import { FcDonate } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";
import { IoReceiptSharp } from "react-icons/io5";




const WorkProcess = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto py-8 max-w-screen-xl" data-aos="fade-up">

      <h2 className="text-[#34495E] text-3xl md:text-4xl font-bold mb-4 text-center"
        data-aos="zoom-in">Works Process</h2>
      <p className="md:text-base text-center mb-9 mx-1 text-xs" data-aos="fade-up"
        data-aos-delay="200">Join us in spreading warmth to those in need by donating winter clothing.
        Here's how you can get involved! </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5" data-aos="fade-up"
        data-aos-delay="400">

        {/* text content */}
        <div className="md:col-span-2 mx-3 md:mx-0" data-aos="fade-up"
          data-aos-delay="600" >

            {/* option-1 */}
            <div className="flex items-center gap-4 border-2 px-2 py-2 md:w-[40rem] bg-blue-50 border-blue-300 rounded-md shadow-lg" >
              <SiGooglestreetview className="text-5xl rounded-md p-1 border-2 text-teal-500 border-amber-500 shadow-lg"/>
              <div> <p className="text-xs md:text-base">Explore active donation drives and specific clothing needs after logging in.</p></div>
            </div>
            {/* option-2 */}
            <div className="flex items-center gap-4 border-2 px-2 py-2 md:w-[40rem] bg-blue-50 border-blue-300 rounded-md mt-2 shadow-lg">
            <FcDonate className="text-5xl rounded-md p-1 border-2 text-teal-500 border-amber-500 shadow-lg"/>

              <div> <p className="text-xs md:text-base">Complete an easy form to donate winter clothing of various types and quantities.</p></div>
            </div>
            {/* option-3 */}
            <div className="flex items-center gap-4 border-2 px-2 py-2 md:w-[40rem] bg-blue-50 border-blue-300 rounded-md mt-2 shadow-lg">
            <TbTruckDelivery className="text-5xl rounded-md p-1 border-2 text-red-500 border-amber-500 shadow-lg"/>

              <div> <p className="text-xs md:text-base">Local volunteers collect, sort, and deliver donations to people in need.</p></div>
            </div>
            {/* option-4 */}
            <div className="flex items-center gap-4 border-2 px-2 py-2 md:w-[40rem] bg-blue-50 border-blue-300 rounded-md mt-2 shadow-lg">
              <IoReceiptSharp className="text-5xl rounded-md p-1 border-2 text-lime-500 border-amber-500 shadow-lg"/>
              <div> <p className="text-xs md:text-base">Receive updates and confirmation when your donated items are collected and delivered.</p></div>
            </div>
            
          
        </div>

        {/* image content */}
        <div className="md:col-span-1 grid grid-cols-2 gap-1 md:gap-2 mx-3 md:mx-0"
          data-aos="fade-up" data-aos-delay="600">
          <img src="https://i.ibb.co.com/yW5nL5T/m1.jpg" alt="Image 1"
            className="w-full md:h-48 object-cover rounded-md" data-aos="zoom-in" data-aos-delay="700"/>

          <img src="https://i.ibb.co.com/hsZZq7C/m2.jpg" alt="Image 2" className="w-full h-24 md:h-48 object-cover rounded-md" data-aos="zoom-in"
            data-aos-delay="800"/>
          <img src="https://i.ibb.co.com/FxFfc9b/m3.jpg" alt="Image 3"  className="w-full h-24 md:h-48 object-cover rounded-md" data-aos="zoom-in"
            data-aos-delay="900"/>
          <img src="https://i.ibb.co.com/thbWxwQ/m4.jpg" alt="Image 4"
            className="w-full h-24 md:h-48 object-cover rounded-md" data-aos="zoom-in" data-aos-delay="1000" />
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
